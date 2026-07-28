import { useEffect, useState } from "react";

// Live count of GitHub user accounts via the public search API
// (`total_count` for `type:user`). Unauthenticated search allows 10 req/min
// per IP, so the value is cached in localStorage for an hour.
const CACHE_KEY = "azerit-gh-user-count";
const CACHE_TTL_MS = 60 * 60 * 1000;
// floor if the API is unreachable (real count measured July 2026)
const FALLBACK = 151_000_000;
// GitHub gains ~30M accounts/yr ≈ 1/s; tick so the number feels tracked
const TICK_MS = 1900;

function cachedCount(): number | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { v, t } = JSON.parse(raw);
    return typeof v === "number" && Date.now() - t < CACHE_TTL_MS ? v : null;
  } catch {
    return null;
  }
}

async function fetchCount(): Promise<number> {
  const res = await fetch("https://api.github.com/search/users?q=type:user&per_page=1", {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const data = await res.json();
  if (typeof data.total_count !== "number") throw new Error("missing total_count");
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ v: data.total_count, t: Date.now() }));
  } catch {
    // storage full/blocked — live value still works, just uncached
  }
  return data.total_count;
}

function GithubMark() {
  return (
    <svg aria-hidden height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

export function GithubUserCount() {
  const [count, setCount] = useState<number | null>(null);
  const settled = count !== null;

  // resolve the target (cache -> API -> fallback), then count up to it
  useEffect(() => {
    let raf = 0;
    let cancelled = false;

    const countUp = (target: number) => {
      const from = Math.floor(target * 0.995);
      const start = performance.now();
      const duration = 1400;
      const step = (now: number) => {
        if (cancelled) return;
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(from + (target - from) * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const cached = cachedCount();
    if (cached !== null) {
      countUp(cached);
    } else {
      fetchCount()
        .then((n) => !cancelled && countUp(n))
        .catch(() => !cancelled && countUp(FALLBACK));
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  // once a value is showing, drift upward at roughly GitHub's signup rate
  useEffect(() => {
    if (!settled) return;
    const id = setInterval(() => setCount((c) => (c === null ? c : c + 1)), TICK_MS);
    return () => clearInterval(id);
  }, [settled]);

  return (
    <a
      className="gh-users"
      href="https://github.com"
      target="_blank"
      rel="noreferrer"
      title="GitHub user accounts, live from the GitHub API"
    >
      <GithubMark />
      <span className="gh-users-num">{count === null ? "…" : count.toLocaleString("en-US")}</span>
      <span className="gh-users-label">devs on GitHub</span>
      <span className="gh-users-dot" aria-hidden />
    </a>
  );
}
