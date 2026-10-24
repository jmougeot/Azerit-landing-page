import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { LogoMark } from "../components/Logo";
import { HeroPicker } from "../components/HeroPicker";
import { DotGridBand } from "../components/DotGridBand";
import { DemoLink } from "../components/DemoLink";
import { RepoFeed, type Repo } from "../components/RepoFeed";
import { AutomationScene } from "../components/AutomationScene";
import { CtaCommits } from "../components/CtaCommits";
import { Seam } from "../components/Seam";
import { Founders } from "../components/Founders";

// The Remotion player + demo scenes are the heaviest dependency and sit below
// the fold. lazy() defers the download until the component renders, so we also
// gate rendering on scroll visibility — otherwise the chunk loads immediately.
const DemoPlayer = lazy(() =>
  import("../components/DemoPlayer").then((m) => ({ default: m.DemoPlayer }))
);

// One imaginary search traced through the page: a senior real-time-systems
// role. The feed shows the repos that prove the skill, the email opens on the
// best candidate's actual work.
const REPOS: Repo[] = [
  {
    name: "lea-fabre/rt-order-matching",
    desc: "Real-time order matching engine, lock-free hot path",
    lang: "Rust",
    stars: "1.4k",
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
    name: "sami-dev/distributed-kv",
    desc: "Raft-backed distributed key-value store",
    lang: "Go",
    stars: "892",
    updated: "Updated 3 hours ago",
    hit: true,
  },
  {
    name: "nina-t/ws-gateway",
    desc: "WebSocket gateway holding 50k conns per node",
    lang: "Go",
    stars: "487",
    updated: "Updated 2 days ago",
    hit: true,
  },
  {
    name: "marc-o/lockfree-queue",
    desc: "Lock-free MPMC queue + latency benchmarks",
    lang: "Rust",
    stars: "341",
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
    name: "aiko-labs/latency-lab",
    desc: "Tail-latency profiling toolkit for services",
    lang: "Python",
    stars: "622",
    updated: "Updated yesterday",
    hit: true,
  },
  {
    name: "elsa-k/replay-log",
    desc: "Deterministic event replay for trading systems",
    lang: "Rust",
    stars: "214",
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
    name: "devpriya/chaos-harness",
    desc: "Chaos-testing harness for k8s clusters",
    lang: "Go",
    stars: "1.1k",
    updated: "Updated 40 minutes ago",
    hit: true,
  },
];

// Mini contribution heatmap for the candidate card — same seeded-random
// recipe as the CTA banner, but static so the card stays calm.
const GRAPH_GREENS = ["#9be9a8", "#40c463", "#30a14e", "#216e39"];

function graphSeeded(n: number) {
  const x = Math.sin(n * 91.7 + 45.3) * 24634.6345;
  return x - Math.floor(x);
}

function CandGraph() {
  const cols = 30;
  const rows = 7;
  const cells: (string | null)[] = [];
  for (let i = 0; i < cols * rows; i++) {
    // ~58% filled: a heavy year, the kind of graph the badge is about
    const on = graphSeeded(i) > 0.42;
    cells.push(on ? GRAPH_GREENS[Math.floor(graphSeeded(i + 0.5) * GRAPH_GREENS.length)] : null);
  }
  return (
    <div className="cand-graph" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {cells.map((c, i) => (
        <i key={i} style={c ? { background: c } : undefined} />
      ))}
    </div>
  );
}

// Léa's LinkedIn inbox: the recruiter blasts she never answered. Each row is a
// months-old InMail — the counterpoint to the Azerit thread beside it.
const INMAILS = [
  {
    initials: "MR",
    name: "Marc R. · TalentForge",
    date: "Jun 5",
    text: "InMail · 100% Remote Senior Software Engineer Opportunity: Build the Future of AI",
  },
  {
    initials: "ES",
    name: "Emma S. · NextWave",
    date: "Jun 1",
    text: "InMail · ⭐ Exciting Developer Opportunities ⭐ Join a Fast-Growing Series C AI Startup",
  },
  {
    initials: "HL",
    name: "Hugo L. · Aurora Labs",
    date: "May 8",
    text: "Hi Léa! Resurfacing this role, we're scaling and need the best engineering minds shaping the…",
  },
  {
    initials: "CW",
    name: "Caroline W. · SignalWorks",
    date: "Apr 11",
    text: "Hey Léa, circling back on this founding and influential engineering opportunity. Still open…",
  },
  {
    initials: "DS",
    name: "Danielle S. · Stealth AI",
    date: "Apr 2",
    text: "Hi Léa, looping back to see if you're open to a founding SWE role at a well-funded AI…",
  },
];

// The four steps of a search, the same four stations the machine draws: a
// short name (the station's), an explicit title, one line on what it means
// for the hire. On desktop they sit around the machine, each tied to its
// station by a leader line the engine draws.
const STEPS = [
  { short: "find", title: "Find them on GitHub", text: "The developers who already build what you're hiring for." },
  { short: "read code", title: "Read their code", text: "Commits, pull requests and reviews, not a CV." },
  { short: "match", title: "Keep the one who fits", text: "Not a list: one engineer whose work matches, each skill backed by a project." },
  { short: "message", title: "Write the first message", text: "About their own work, ready to send. The kind engineers answer." },
];

// Local brand assets. Aurel source: https://www.agilitesolutions.com/projects/a-multi-purpose-space-for-aurel-bgc/
// Iterate, RAGLogic and Auditoo marks come from https://iterate.inc/, https://www.raglogic.com/ and https://www.auditoo.eco/.
const CLIENTS = [
  { name: "Aurel BGC", logo: "/clients/aurel-bgc.png", id: "aurel", width: 140, height: 50, wordmark: true },
  { name: "Iterate.inc", logo: "/clients/iterate.png", id: "iterate", width: 48, height: 21, wordmark: false },
  { name: "RAGLogic", logo: "/clients/raglogic.svg", id: "raglogic", width: 32, height: 32, wordmark: false },
  { name: "Auditoo", logo: "/clients/auditoo.svg", id: "auditoo", width: 103, height: 23, wordmark: true },
];

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
        {/* the white city behind the hero (public/hero/city.jpg): its skyline
            sits at the top behind the title and the arm, its empty plaza runs
            under the copy and fades into the page before the demo window */}
        <img
          className="hero-bg"
          src="/hero/city.jpg"
          srcSet="/hero/city-small.jpg 760w, /hero/city.jpg 1254w"
          sizes="100vw"
          width={1254}
          height={1254}
          alt=""
          fetchPriority="high"
          decoding="async"
          aria-hidden
        />
        <DotGridBand>
          <header className="container hero">
            <div className="hero-copy">
              <h1>
                Hire the engineers who actually <em>ship</em>
              </h1>
              <p className="sub">
                Find the engineers who have already built what you need on GitHub.
                We send you the one who fits, with a first message grounded in their code.
              </p>
              <div className="hero-cta">
                <Link to="/try" className="btn-try">
                  Find my engineer
                </Link>
                <DemoLink className="demo-link">book a demo</DemoLink>
              </div>
              <div className="hero-trust">
                <p>Trusted by teams at</p>
                <ul>
                  {CLIENTS.map((client) => (
                    <li key={client.name} className={`client-${client.id}`}>
                      <img src={client.logo} alt={client.wordmark ? client.name : ""} width={client.width} height={client.height} />
                      {!client.wordmark && <span>{client.name}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hero-visual">
              {/* the result: a robot arm picks the one card that fits, its
                  code gathers around it (components/picker) */}
              <HeroPicker />
            </div>
          </header>

          {/* demo video — the real app in a browser window, tight under the
              hero copy, lifted off the dot grid by its shadow */}
          <div className="video-wrap" id="demo" ref={videoWrapRef}>
            <div className="video-window">
              <div className="video-chrome" aria-hidden="true">
                <span className="video-chrome-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="video-chrome-url">
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M4 7V5a4 4 0 1 1 8 0v2h.5A1.5 1.5 0 0 1 14 8.5v5A1.5 1.5 0 0 1 12.5 15h-9A1.5 1.5 0 0 1 2 13.5v-5A1.5 1.5 0 0 1 3.5 7H4Zm1.5 0h5V5a2.5 2.5 0 0 0-5 0v2Z" />
                  </svg>
                  app.azerit.tech
                </span>
              </div>
              {showPlayer ? (
                <Suspense fallback={<div className="app-frame demo-placeholder" />}>
                  <DemoPlayer />
                </Suspense>
              ) : (
                <div className="app-frame demo-placeholder" />
              )}
            </div>
          </div>
        </DotGridBand>
      </div>

      {/* the rule grid starts here: a hatched chapter break closes the hero,
          and from this line down the rails run unbroken to the footer */}
      <Seam hatch open />

      {/* the database: GitHub itself */}
      <section className="band">
        <div className="container stats">
          <div className="stat">
            <div className="stat-num">145M+</div>
            <div className="stat-label">developers on GitHub</div>
          </div>
          <div className="stat">
            <div className="stat-num">400M+</div>
            <div className="stat-label">public repositories read</div>
          </div>
          <div className="stat">
            <div className="stat-num">200K+</div>
            <div className="stat-label">commits &amp; repos analyzed daily</div>
          </div>
        </div>
      </section>

      <Seam />

      {/* feature: code as the résumé */}
      <section className="band">
        <div className="container feature">
        <div className="f-copy">
          <span className="tag eyebrow">matching</span>
          <h2>Read the work, not the CV</h2>
          <p>
            Match on <b>repository topics, languages and dependencies</b>.
          </p>
        </div>
        <div className="f-visual flush">
          <RepoFeed repos={REPOS} count="27 devs matched" hitLabel="✓ match" />
        </div>
        </div>
      </section>

      <Seam />

      {/* feature: the deliverable — one proven engineer, not a pile of CVs */}
      <section className="band">
        <div className="container feature rev">
        <div className="f-copy">
          <span className="tag eyebrow">the match</span>
          <h2>The one who fits your role</h2>
          <p>
            See the projects and contributions behind the match.
          </p>
        </div>
        <div className="f-visual">
          <div className="cand-card" aria-hidden="true">
            <div className="cand-top">
              <span className="vs-ava ok cand-ava">LF</span>
              <div className="cand-id">
                <div className="cand-name">
                  Léa Fabre
                  <span className="cand-badge">match 94</span>
                </div>
                <div className="cand-handle">@lea-fabre · Lyon, France</div>
              </div>
            </div>
            <CandGraph />
            <div className="cand-stats">
              <div>
                <b>3,669</b>
                contributions
              </div>
              <div>
                <b>1.4k</b>
                stars earned
              </div>
              <div>
                <b>212</b>
                PRs reviewed
              </div>
            </div>
            <div className="cand-repo">
              <span className="cand-repo-name">rt-order-matching</span>
              <span className="cand-sim">similar to your role</span>
              <span className="cand-repo-desc">
                Real-time order matching engine, lock-free hot path
              </span>
            </div>
            <div className="cand-langs">
              <div className="cand-langbar">
                <i style={{ width: "52%", background: "#dea584" }} />
                <i style={{ width: "26%", background: "#00ADD8" }} />
                <i style={{ width: "14%", background: "#3178c6" }} />
                <i style={{ width: "8%", background: "var(--border)" }} />
              </div>
              <div className="cand-langlist">
                <span>
                  <i className="langdot" style={{ background: "#dea584" }} /> Rust
                </span>
                <span>
                  <i className="langdot" style={{ background: "#00ADD8" }} /> Go
                </span>
                <span>
                  <i className="langdot" style={{ background: "#3178c6" }} /> TypeScript
                </span>
              </div>
            </div>
            <div className="cand-foot">
              lea.fabre@… <span className="ok">✓ verified</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Seam hatch />

      {/* how it works: a hire, from the code up */}
      <section className="band band-head">
        <div className="container how-title">
          <span className="tag eyebrow">method</span>
          <h2>How it works</h2>
          <p className="how-lede">
            You're hiring an engineer. We search GitHub for the people who have already built
            what you need, read their code, and send you the one who fits, with a first message
            about their work ready to send.
          </p>
        </div>
      </section>
      <section className="band how-band">
        {/* the hall the machine stands in: a lazy image behind the band, so
            it only downloads as the section nears the viewport */}
        <img
          className="how-bg"
          src="/how/hall.jpg"
          srcSet="/how/hall-small.jpg 1010w, /how/hall.jpg 1627w"
          sizes="100vw"
          width={1627}
          height={967}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden
        />
        <div className="container how">
          {/* the search as a machine, downhill: rough blocks come out of GitHub
              repositories, four stations find, read, match and message them,
              the one that fits is shown on the pedestal at the end
              (components/automation) */}
          <div className="how-machine">
            <AutomationScene />
            <ol className="steps">
              {STEPS.map((step, i) => (
                <li className="step" data-step={i + 1} key={step.title}>
                  <span className="tag">
                    step {i + 1} · {step.short}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Seam hatch />

      {/* linkedin vs azerit — generic outreach versus a project connected
          to the candidate's work */}
      <section className="band band-head">
        <div className="container how-title">
          <span className="tag eyebrow">outreach</span>
          <h2>A relevant project. A personalized message.</h2>
        </div>
      </section>
      <section className="band">
        <div className="container vs">
          <div className="vs-cell vs-linkedin">
            {/* the facts sit beside her phone, which is cropped at the cell
                floor like vamo's panels */}
            <div className="vs-info">
              <div className="vs-title">
                <span className="li-mark">in</span>
                linkedin: léa's inbox
              </div>
              <div className="vs-stat">5 InMails · 0 replies</div>
              <div className="vs-foot">response rate: 1–3%</div>
            </div>
            <div className="vs-stage" aria-hidden="true">
              <div className="phone">
                <div className="phone-screen">
                  <span className="phone-island" />
                  <div className="li-search">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
                    </svg>
                    Search messages
                  </div>
                  <div className="vs-inbox">
                    {INMAILS.map((m) => (
                      <div className="vs-row" key={m.name}>
                        <span className="vs-ava">{m.initials}</span>
                        <div className="vs-row-main">
                          <div className="vs-row-top">
                            <span className="n">{m.name}</span>
                            <span className="d">{m.date}</span>
                          </div>
                          <div className="vs-prev">{m.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vs-cell vs-azerit">
            <div className="vs-info">
              <div className="vs-title">
                <LogoMark size={14} />
                azerit: léa's inbox
              </div>
              <div className="vs-stat">1 email · 1 reply</div>
              <div className="vs-foot">response rate: 30%+</div>
            </div>
            <div className="vs-stage" aria-hidden="true">
              <div className="phone">
                <div className="phone-screen">
                  <span className="phone-island" />
                  <div className="vs-mail">
                    <div className="subj">
                      re: <b>your matching engine in rt-order-matching</b>
                    </div>
                    <div className="vs-from">
                      <span className="vs-ava ok">LF</span>
                      <div>
                        <div className="n">Léa Fabre</div>
                        <div className="t">2h after our email</div>
                      </div>
                      <span className="vs-replied">replied ✓</span>
                    </div>
                    <p className="msg">
                      Low-latency systems are exactly what I want to keep working on.
                      What throughput are you targeting? Happy to talk Thursday.
                    </p>
                    <div className="vs-quote">
                      &gt; Your lock-free matching engine caught my eye. We're building a
                      trading system with similar latency challenges and looking for a
                      Rust engineer. Interested?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Seam hatch />

      {/* book a demo — vamo-style: a live run on a real search, zero friction */}
      <section className="band">
        <div className="container demo-band">
          <span className="tag eyebrow">live demo</span>
          <h2>See Azerit work on your open role</h2>
          <p>A 30-minute live session with the founders.</p>
          <DemoLink className="btn-try">book a demo</DemoLink>
        </div>
      </section>

      <Seam hatch />

      {/* team — framed like every other panel so the rails stay unbroken */}
      <section className="band">
        <div className="container team">
        <span className="tag eyebrow">team</span>
        <h2>Meet the founders</h2>
        <Founders />
        </div>
      </section>

      <Seam />

      {/* final CTA */}
      <section className="band band-bleed">
        <div className="container cta-final">
          <div className="cta-row">
            <span aria-hidden />
            <Link to="/try" className="cta-link">
              Turn GitHub into your recruiting engine
            </Link>
            <span aria-hidden />
          </div>
          <CtaCommits />
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
