import { useEffect, useRef, useState } from "react";

// An outreach email body, split into plain + highlighted segments so the
// typewriter can reveal it one character at a time across the whole run while
// each segment still renders with its own styling.
export type EmailSegment = { text: string; hl?: boolean };

export function TypedEmail({
  to,
  subject,
  segments,
}: {
  to: string;
  subject: string;
  segments: EmailSegment[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const total = segments.reduce((n, s) => n + s.text.length, 0);

  // Reveal the body character by character, but only once it scrolls into view
  // so the visitor actually watches it being written. Honors reduced-motion by
  // showing the finished email immediately.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      setCount((c) => {
        if (c >= total) return c;
        timer = setTimeout(type, 22);
        return c + 1;
      });
    };
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          timer = setTimeout(type, 450);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [total]);

  const done = count >= total;
  let remaining = count;

  return (
    <div className="email-card" ref={ref}>
      <div className="head">
        to: <b>{to}</b>
        <br />
        subject: <b>{subject}</b>
      </div>
      <div className="body">
        {segments.map((seg, i) => {
          const shown = Math.max(0, Math.min(seg.text.length, remaining));
          remaining -= seg.text.length;
          if (shown === 0) return null;
          const slice = seg.text.slice(0, shown);
          return seg.hl ? (
            <span className="hl" key={i}>
              {slice}
            </span>
          ) : (
            <span key={i}>{slice}</span>
          );
        })}
        {!done && <span className="caret" aria-hidden="true" />}
      </div>
    </div>
  );
}
