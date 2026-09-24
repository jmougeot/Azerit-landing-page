import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { LogoMark } from "../components/Logo";
import { HeroGlobe } from "../components/HeroGlobe";
import { DotGridBand } from "../components/DotGridBand";
import { Email } from "../components/Email";
import { DemoLink } from "../components/DemoLink";
import { RepoFeed, type Repo } from "../components/RepoFeed";
import { FlowStep } from "../components/FlowStep";
import { CtaCommits } from "../components/CtaCommits";

// The Remotion player + demo scenes are the heaviest dependency and sit below
// the fold. lazy() defers the download until the component renders, so we also
// gate rendering on scroll visibility — otherwise the chunk loads immediately.
const DemoPlayer = lazy(() =>
  import("../components/DemoPlayer").then((m) => ({ default: m.DemoPlayer }))
);
import luminePhoto from "../assets/lumine.webp";
import jacquesPhoto from "../assets/jacques.webp";

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
        <DotGridBand>
          <header className="container hero">
            <div className="hero-copy">
              <h1>
                Hire the engineers who actually <em>ship</em>
              </h1>
              <p className="sub">
                Azerit finds the developers who have already built what you need, straight
                from their GitHub. You get a ranked shortlist, verified emails and a first
                message written around each candidate's own code.
              </p>
              <div className="hero-cta">
                <Link to="/try" className="btn-try">
                  Find my candidates →
                </Link>
                <DemoLink className="demo-link">book a demo ↗</DemoLink>
              </div>
            </div>
            <div className="hero-visual">
              <HeroGlobe />
            </div>
          </header>

          {/* demo video — Linear-style: the app window sits tight under the
              hero copy, on the same dot-grid backdrop, lifted by a soft teal
              glow instead of floating on an empty white band */}
          <div className="video-wrap" id="demo" ref={videoWrapRef}>
            <div className="video-stage">
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

      {/* feature: code as the résumé */}
      <section className="band">
        <div className="container feature">
        <div className="f-copy">
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

      {/* feature: the deliverable — a scored candidate, not a pile of CVs */}
      <section className="band">
        <div className="container feature rev">
        <div className="f-copy">
          <h2>Your ranked shortlist</h2>
          <p>
            See the projects and contributions behind each score.
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

      {/* value proposition: why teams switch from CVs and InMails */}
      <section className="band">
        <div className="container value">
          <h2>Why teams hire with Azerit</h2>
          <div className="value-grid">
            <div className="value-item">
              <h3>Reach engineers others miss</h3>
              <p>
                The best developers rarely polish a LinkedIn profile. Their proof is on
                GitHub, and that is where Azerit looks.
              </p>
            </div>
            <div className="value-item">
              <h3>Skills you can verify</h3>
              <p>
                Every match comes with the repositories and pull requests behind it. No
                keyword-stuffed CVs, no guessing.
              </p>
            </div>
            <div className="value-item">
              <h3>Messages that get replies</h3>
              <p>
                Outreach opens on a project the candidate actually built. It reads like a
                peer, not a recruiter blast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="band">
        <div className="container how-title">
          <h2>How it works</h2>
        </div>
      </section>
      <section className="band">
        <div className="container how">
          {/* the pipeline as a data-flow diagram: the role drops in top-left,
              runs through the four processing stages, a candidate reply falls
              out bottom-right */}
          <div className="flow">
            <div className="flow-input">
              <span className="tag">input</span>
              <p>Describe your role in one sentence.</p>
            </div>
            <div className="f-drop f-drop-in" aria-hidden="true" />

            <FlowStep n={1} title="Scan GitHub">
              Find developers working in your stack.
            </FlowStep>
            <div className="f-link f-l1" aria-hidden="true" />
            <FlowStep n={2} title="Read the code">
              Analyze commits, pull requests and reviews.
            </FlowStep>
            <div className="f-link f-l2" aria-hidden="true" />
            <FlowStep n={3} title="Enrich profiles">
              Add names, locations and verified emails.
            </FlowStep>
            <div className="f-link f-l3" aria-hidden="true" />
            <FlowStep n={4} title="Rank matches">
              Score fit against your role requirements.
            </FlowStep>

            {/* all four stages converge into the outreach */}
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
              <h3>A ready-to-send email</h3>
              <p>Opens on a specific project or contribution.</p>
            </div>
          </div>
        </div>
      </section>


      {/* linkedin vs azerit — generic outreach versus a project connected
          to the candidate's work */}
      <section className="band">
        <div className="container how-title">
          <h2>A relevant project. A personalized message.</h2>
        </div>
      </section>
      <section className="band">
        <div className="container vs">
          <div className="vs-cell vs-linkedin">
            <div className="vs-head">
              <span className="li-mark">in</span>
              linkedin: léa's inbox
              <span className="vs-stat">5 InMails · 0 replies</span>
            </div>
            {/* her phone, cropped at the cell floor like vamo's panels */}
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
            <div className="vs-foot">response rate: 1–3%</div>
          </div>
          <div className="vs-cell vs-azerit">
            <div className="vs-head">
              <LogoMark size={14} />
              azerit: léa's inbox
              <span className="vs-stat">1 email · 1 reply</span>
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
            <div className="vs-foot">response rate: 30%+</div>
          </div>
        </div>
      </section>

      {/* book a demo — vamo-style: a live run on a real search, zero friction */}
      <section className="band">
        <div className="container demo-band">
          <h2>See Azerit work on your open role</h2>
          <p>A 30-minute live session with the founders.</p>
          <DemoLink className="btn-try">book a demo →</DemoLink>
        </div>
      </section>

      {/* team */}
      <section className="band">
        <div className="container team">
        <h2>The team</h2>
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

      {/* final CTA */}
      <section className="band">
        <div className="container cta-final">
          <div className="cta-row">
            <span aria-hidden />
            <Link to="/try" className="cta-link">
              Turn GitHub into your recruiting engine ↗
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
