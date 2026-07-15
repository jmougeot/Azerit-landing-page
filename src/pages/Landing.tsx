import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";

// The Remotion player + demo scenes are the heaviest dependency and sit below
// the fold. lazy() defers the download until the component renders, so we also
// gate rendering on scroll visibility — otherwise the chunk loads immediately.
const DemoPlayer = lazy(() =>
  import("../components/DemoPlayer").then((m) => ({ default: m.DemoPlayer }))
);
import luminePhoto from "../assets/lumine.webp";
import jacquesPhoto from "../assets/jacques.webp";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Go: "#00ADD8",
  Shell: "#89e051",
};

function RepoIcon() {
  return (
    <svg className="repo-ic" aria-hidden height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden height="14" viewBox="0 0 16 16" width="14" fill="currentColor">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

const GH_MARK =
  "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z";

// deterministic pseudo-random so the pattern is identical on every render
function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function GithubBg() {
  const cols = 7;
  const rows = 9;
  const logos: { top: number; left: number; size: number; rotate: number; opacity: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      logos.push({
        left: ((c + 0.5 + (r % 2 ? 0.45 : 0)) / cols) * 100 + (seeded(i * 4 + 1) - 0.5) * 7,
        top: ((r + 0.5) / rows) * 100 + (seeded(i * 4 + 2) - 0.5) * 5,
        size: 26 + seeded(i * 4 + 3) * 74,
        rotate: (seeded(i * 4 + 4) - 0.5) * 56,
        opacity: 0.028 + seeded(i * 4 + 5) * 0.022,
      });
    }
  }
  return (
    <div className="gh-bg" aria-hidden>
      {logos.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          fill="currentColor"
          style={{
            top: `${l.top}%`,
            left: `${l.left}%`,
            width: l.size,
            height: l.size,
            opacity: l.opacity,
            transform: `translate(-50%, -50%) rotate(${l.rotate}deg)`,
          }}
        >
          <path d={GH_MARK} />
        </svg>
      ))}
    </div>
  );
}

type Repo = {
  name: string;
  desc: string;
  lang: string;
  stars: string;
  updated: string;
  hit: boolean;
};

const REPOS: Repo[] = [
  {
    name: "lea-dubois/pg-vector-search",
    desc: "Semantic search over Postgres + pgvector",
    lang: "TypeScript",
    stars: "214",
    updated: "Updated yesterday",
    hit: true,
  },
  {
    name: "jdoe/dotfiles",
    desc: "My personal dotfiles",
    lang: "Shell",
    stars: "3",
    updated: "Updated on Nov 12, 2023",
    hit: false,
  },
  {
    name: "sami-dev/rag-chatbot-prod",
    desc: "Production RAG chatbot with reranking",
    lang: "Python",
    stars: "1.2k",
    updated: "Updated 3 hours ago",
    hit: true,
  },
  {
    name: "nina-t/vector-db-bench",
    desc: "Benchmarks: Pinecone vs Qdrant vs pgvector",
    lang: "Go",
    stars: "487",
    updated: "Updated 2 days ago",
    hit: true,
  },
];

function GhRepoCard({ repo }: { repo: Repo }) {
  return (
    <div className={`gh-card${repo.hit ? " hit" : ""}`}>
      <div className="gh-repo-line">
        <RepoIcon />
        <span className="rname">{repo.name}</span>
        <span className="gh-visibility">Public</span>
        <span className={`gh-intent${repo.hit ? "" : " off"}`}>{repo.hit ? "✓ intent" : "skipped"}</span>
      </div>
      <div className="gh-desc">{repo.desc}</div>
      <div className="gh-meta">
        <span className="lang">
          <span className="langdot" style={{ background: LANG_COLORS[repo.lang] }} />
          {repo.lang}
        </span>
        <span className="lang">
          <StarIcon /> {repo.stars}
        </span>
        <span>{repo.updated}</span>
      </div>
    </div>
  );
}

export function Landing() {
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  // Mount (and therefore download) the demo player only as it nears the
  // viewport. rootMargin gives the chunk a head start so it's ready to play.
  useEffect(() => {
    const el = videoWrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPlayer(true);
          obs.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <TopBar />

      <main>
      {/* hero + demo video, over a bed of GitHub logos */}
      <div className="hero-zone">
        <GithubBg />

        {/* hero */}
        <header className="container hero">
          <div className="hero-copy">
            <h1>
              Find leads on <em>GitHub</em> with&nbsp;AI
            </h1>
            <p className="sub">
              Azerit scans GitHub for devs already building in your niche, then reaches out with
              messages that prove we read their code.
            </p>
          </div>
          <Link to="/try" className="btn-try">
            Try it →
          </Link>
        </header>

        {/* demo video */}
        <div className="container video-wrap" id="demo" ref={videoWrapRef}>
          {showPlayer ? (
            <Suspense fallback={<div className="app-frame" style={{ aspectRatio: "16 / 9" }} />}>
              <DemoPlayer />
            </Suspense>
          ) : (
            <div className="app-frame" style={{ aspectRatio: "16 / 9" }} />
          )}
        </div>
      </div>

      {/* how it works */}
      <section className="container how">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <span className="tag">step 1</span>
            <h3>We find the intent</h3>
            <p>Issues, migrations, new dependencies: buying signals hiding in code.</p>
            <div className="art">
              <span className="g">✓</span> 12,406 repos scanned
              <br />
              <span className="g">✓</span> 84 signals found
            </div>
          </div>
          <div className="step">
            <span className="tag">step 2</span>
            <h3>We rank by intent</h3>
            <p>Every lead scored. You start with the hottest.</p>
            <div className="art">
              <span className="g">#1</span> Léa Dubois · <span className="b">92</span>
              <br />
              <span className="g">#2</span> Sami Benali · <span className="b">87</span>
            </div>
          </div>
          <div className="step">
            <span className="tag">step 3</span>
            <h3>We personalize &amp; send</h3>
            <p>Every email cites their code. Replies in your inbox.</p>
            <div className="art">
              <span className="g">✓</span> 84 emails sent
              <br />
              <span className="b">→</span> 21 replies
            </div>
          </div>
        </div>
      </section>

      {/* feature: warm intent */}
      <section className="container feature">
        <div className="f-copy">
          <div className="eyebrow">// warm intent, not cold lists</div>
          <h2>Their code is the buying signal</h2>
          <p>
            We only target devs with an <b>active repo in your exact domain</b>. The need is already
            in their commits.
          </p>
        </div>
        <div className="f-visual repo-mock">
          {REPOS.map((r) => (
            <GhRepoCard key={r.name} repo={r} />
          ))}
        </div>
      </section>

      {/* feature: personalization */}
      <section className="container feature rev">
        <div className="f-copy">
          <div className="eyebrow">// hyper-personalization</div>
          <h2>
            Go beyond <code>{"{{first_name}}"}</code>
          </h2>
          <p>
            Every message opens on their real project: the repo, the file, the exact problem.
            <b> Impossible to mistake for spam.</b>
          </p>
        </div>
        <div className="f-visual">
          <div className="gh-card" style={{ marginBottom: 12 }}>
            <div className="gh-commit">
              <span className="hash">a3f9c2e</span>
              <span className="msg">feat: add custom reranker for hybrid queries</span>
              <span className="check">✓</span>
              <span className="when">2 hours ago</span>
            </div>
          </div>
          <div className="email-card">
            <div className="head">
              to: <b>lea.dubois@…</b>
              <br />
              subject: <b>your reranker in pg-vector-search</b>
            </div>
            <div className="body">
              Hi Léa,{"\n\n"}
              Just saw <span className="hl">pg-vector-search</span>. The way you combine pgvector
              with <span className="hl">your own reranker</span> is really clean, and the chunking
              in <span className="hl">ingest.ts</span>? Smart.{"\n\n"}
              We built a tool that fixes the exact issue in your README: hybrid query latency at
              scale.{"\n\n"}
              Up for trying it on your repo?
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="team">
        <h2>The team</h2>
        <p className="team-sub">Two Centrale engineers putting tech to work for sales teams.</p>
        <div className="team-grid">
          <div className="member">
            <img src={luminePhoto} alt="Lumine Trentelivres" />
            <div className="name">Lumine Trentelivres</div>
            <div className="bio">Co-founder. Centrale Supélec engineer, ex-sales.</div>
            <div className="links">
              <a href="https://www.linkedin.com/in/lumine-trentelivres/" target="_blank" rel="noreferrer">
                linkedin
              </a>{" "}
              · <a href="mailto:lumine.builds@gmail.com">email</a>
            </div>
          </div>
          <div className="member">
            <img src={jacquesPhoto} alt="Jacques Mougeot" />
            <div className="name">Jacques Mougeot</div>
            <div className="bio">Co-founder. Centrale engineer, computer science research</div>
            <div className="links">
              <a href="https://www.linkedin.com/in/jacquesmougeot/" target="_blank" rel="noreferrer">
                linkedin
              </a>{" "}
              · <a href="mailto:jacques.mougeot@centrale-med.fr">email</a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
