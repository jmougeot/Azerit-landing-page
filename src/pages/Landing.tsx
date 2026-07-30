import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { HeroGlobe } from "../components/HeroGlobe";
import { DotGridBand } from "../components/DotGridBand";
import { GithubUserCount } from "../components/GithubUserCount";
import { Email } from "../components/Email";

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
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
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
  {
    name: "marc-o/embeddings-cache",
    desc: "Redis-backed cache for OpenAI embeddings",
    lang: "TypeScript",
    stars: "156",
    updated: "Updated 5 hours ago",
    hit: true,
  },
  {
    name: "tomas-v/awesome-wallpapers",
    desc: "Curated 4K wallpapers for devs",
    lang: "JavaScript",
    stars: "58",
    updated: "Updated on Mar 2, 2024",
    hit: false,
  },
  {
    name: "aiko-labs/chunk-viz",
    desc: "Visualize document chunking strategies",
    lang: "Python",
    stars: "892",
    updated: "Updated yesterday",
    hit: true,
  },
  {
    name: "elsa-k/hybrid-search-api",
    desc: "BM25 + dense retrieval behind one endpoint",
    lang: "Rust",
    stars: "341",
    updated: "Updated 6 days ago",
    hit: true,
  },
  {
    name: "bob-m/todo-app-final-v2",
    desc: "todo app (react)",
    lang: "JavaScript",
    stars: "1",
    updated: "Updated on Jul 19, 2023",
    hit: false,
  },
  {
    name: "devpriya/llm-eval-harness",
    desc: "Eval suite for retrieval pipelines",
    lang: "Python",
    stars: "2.3k",
    updated: "Updated 40 minutes ago",
    hit: true,
  },
];

function RepoRow({ repo }: { repo: Repo }) {
  return (
    <div className={`repo-row${repo.hit ? " hit" : ""}`}>
      <div className="gh-repo-line">
        <RepoIcon />
        <span className="rname">{repo.name}</span>
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

function RepoFeed() {
  // two identical copies back to back: the keyframe slides the track up by
  // exactly half its height, so the loop point is invisible
  const loop = [...REPOS, ...REPOS];
  return (
    <div className="repo-feed" aria-hidden="true">
      <div className="repo-feed-head">
        <span className="feed-dot" />
        scanning github…
        <span className="count">84 signals found</span>
      </div>
      <div className="repo-feed-window">
        <div className="repo-feed-track">
          {loop.map((r, i) => (
            <RepoRow key={`${r.name}-${i}`} repo={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

// The outreach email body, split into plain + highlighted segments so the
// typewriter can reveal it one character at a time across the whole run while
// each segment still renders with its own styling.
const EMAIL_SEGMENTS: { text: string; hl?: boolean }[] = [
  { text: "Hi Léa,\n\n" },
  { text: "Just saw " },
  { text: "pg-vector-search", hl: true },
  { text: ". The way you combine pgvector with " },
  { text: "your own reranker", hl: true },
  { text: " is really clean, and the chunking in " },
  { text: "ingest.ts", hl: true },
  { text: "? Smart.\n\n" },
  {
    text: "We built a tool that fixes the exact issue in your README: hybrid query latency at scale.\n\n",
  },
  { text: "Up for trying it on your repo?" },
];

const EMAIL_TOTAL = EMAIL_SEGMENTS.reduce((n, s) => n + s.text.length, 0);

function TypedEmail() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  // Reveal the body character by character, but only once it scrolls into view
  // so the visitor actually watches it being written. Honors reduced-motion by
  // showing the finished email immediately.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(EMAIL_TOTAL);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      setCount((c) => {
        if (c >= EMAIL_TOTAL) return c;
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
  }, []);

  const done = count >= EMAIL_TOTAL;
  let remaining = count;

  return (
    <div className="email-card" ref={ref}>
      <div className="head">
        to: <b>lea.dubois@…</b>
        <br />
        subject: <b>your reranker in pg-vector-search</b>
      </div>
      <div className="body">
        {EMAIL_SEGMENTS.map((seg, i) => {
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

function FlowStep({
  n,
  title,
  data,
  children,
}: {
  n: number;
  title: string;
  data: string;
  children: ReactNode;
}) {
  return (
    <div className={`fstep fs-${n}`}>
      <span className="tag">step {n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
      <div className="fs-data">{data}</div>
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
      {/* hero + demo video */}
      <div className="hero-zone">

        {/* hero */}
        <DotGridBand>
          <header className="container hero">
            <div className="hero-copy">
              <h1>
                Find leads on <em>GitHub</em> with&nbsp;AI
              </h1>
              <p className="sub">
                Azerit scans GitHub for devs already building in your niche, then reaches out with
                messages that prove we read their code.
              </p>
              <div className="hero-cta">
                <GithubUserCount />
                <Link to="/try" className="btn-try">
                  Try Azerit →
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <HeroGlobe />
            </div>
          </header>
        </DotGridBand>

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
      <section className="band">
        <div className="container how-title">
          <h2>Your pipeline, on autopilot</h2>
        </div>
      </section>
      <section className="band">
        <div className="container how">
          {/* the pipeline as a data-flow diagram: your offer drops in top-left,
              runs through the four processing stages, a reply falls out bottom-right */}
          <div className="flow">
            <div className="flow-input">
              <span className="tag">input</span>
              <p>Your product, described in one sentence.</p>
            </div>
            <div className="f-drop f-drop-in" aria-hidden="true" />

            <FlowStep n={1} title="We scan GitHub" data="scan: 12,406 repos">
              Your niche, mapped: every matching repo, pulled by topics, dependencies and
              keywords.
            </FlowStep>
            <div className="f-link f-l1" aria-hidden="true" />
            <FlowStep n={2} title="We find the signals" data="signals: 84 · issues">
              Open issues, README pains, fresh commits — buying intent, written in public.
            </FlowStep>
            <div className="f-link f-l2" aria-hidden="true" />
            <FlowStep n={3} title="We enrich the profiles" data="email: lea.dubois@…">
              A handle becomes a person: name, role, company, verified email.
            </FlowStep>
            <div className="f-link f-l3" aria-hidden="true" />
            <FlowStep n={4} title="We rank the leads" data="top lead: score 94">
              Re-scored on hard evidence, sorted hottest to coldest. You start at the top.
            </FlowStep>

            {/* all four stages converge into the last one: writing the message.
                The email itself is typed out live further down the page, so this
                node shows the ingredients, not the prose. */}
            <div className="f-fan" aria-hidden="true">
              <i className="fv fv-1" />
              <i className="fv fv-2" />
              <i className="fv fv-3" />
              <i className="fv fv-4" />
              <svg className="fc fc-l" viewBox="0 0 12 12">
                <path d="M0.75 0 A11.25 11.25 0 0 0 12 11.25" />
              </svg>
              <svg className="fc fc-r" viewBox="0 0 12 12">
                <path d="M11.25 0 A11.25 11.25 0 0 1 0 11.25" />
              </svg>
              <i className="fb fb-l" />
              <i className="fb fb-r" />
            </div>
            <div className="f-drop f-cd" aria-hidden="true" />
            <div className="flow-merge">
              <span className="tag">output</span>
              <h3>The email writes itself</h3>
              <div className="merge-chips">
                <span className="chip">pg-vector-search</span>
                <span className="chip">"hybrid latency…"</span>
                <span className="chip">Léa · CTO</span>
                <span className="chip">#1 · score 94</span>
              </div>
              <p>
                Subject, hook, ask, every line generated from her data, for her alone. Watch
                it being written below ↓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* feature: warm intent */}
      <section className="band">
        <div className="container feature">
        <div className="f-copy">
          <div className="eyebrow">// warm intent, not cold lists</div>
          <h2>Their code is the buying signal</h2>
          <p>
            We only target devs with an <b>active repo in your exact domain</b>. The need is already
            in their commits.
          </p>
        </div>
        <div className="f-visual flush">
          <RepoFeed />
        </div>
        </div>
      </section>

      {/* feature: personalization */}
      <section className="band">
        <div className="container feature rev">
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
        <div className="f-visual flush">
          <TypedEmail />
        </div>
        </div>
      </section>

      {/* team */}
      <section className="band">
        <div className="container team">
        <h2>The team</h2>
        <p className="team-sub">Two Centrale engineers putting tech to work for sales teams.</p>
        <div className="team-grid">
          <div className="member">
            <img src={luminePhoto} alt="Lumine Trentelivres" width="84" height="84" loading="lazy" />
            <div className="name">Lumine Trentelivres</div>
            <div className="bio">Co-founder. Centrale Supélec engineer, ex-sales.</div>
            <div className="links">
              <a href="https://www.linkedin.com/in/lumine-trentelivres/" target="_blank" rel="noreferrer">
                linkedin
              </a>{" "}
              · <Email user="lumine.builds" domain="gmail.com">email</Email>
            </div>
          </div>
          <div className="member">
            <img src={jacquesPhoto} alt="Jacques Mougeot" width="84" height="84" loading="lazy" />
            <div className="name">Jacques Mougeot</div>
            <div className="bio">Co-founder. Centrale engineer, computer science research</div>
            <div className="links">
              <a href="https://www.linkedin.com/in/jacquesmougeot/" target="_blank" rel="noreferrer">
                linkedin
              </a>{" "}
              · <Email user="jacques.mougeot" domain="centrale-med.fr">email</Email>
            </div>
          </div>
        </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
