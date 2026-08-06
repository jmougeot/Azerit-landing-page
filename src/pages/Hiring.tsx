import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { LogoMark } from "../components/Logo";
import { HeroGlobe } from "../components/HeroGlobe";
import { DotGridBand } from "../components/DotGridBand";
import { GithubUserCount } from "../components/GithubUserCount";
import { Email } from "../components/Email";
import { RepoFeed, type Repo } from "../components/RepoFeed";
import { FlowStep } from "../components/FlowStep";
import { CtaCommits } from "../components/CtaCommits";
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
    text: "InMail · 100% Remote Senior Software Engineer Opportunity — Build the Future of AI",
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
    text: "Hi Léa! Resurfacing this role — we're scaling and need the best engineering minds shaping the…",
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

export function Hiring() {
  return (
    <>
      <TopBar />

      <main>
      {/* hero */}
      <div className="hero-zone">
        <DotGridBand>
          <header className="container hero">
            <div className="hero-copy">
              <h1>
                Hire the engineers who actually <em>ship</em>
              </h1>
              <p className="sub">
                Azerit matches your role with the GitHub devs who've already built exactly what
                you're hiring for — and writes the outreach they answer.
              </p>
              <div className="hero-cta">
                <GithubUserCount />
                <Link to="/try?for=hiring" className="btn-try">
                  Find my candidates →
                </Link>
                <Email user="lumine.builds" domain="gmail.com" subject="Azerit demo" className="demo-link">
                  book a demo ↗
                </Email>
              </div>
            </div>
            <div className="hero-visual">
              <HeroGlobe />
            </div>
          </header>
        </DotGridBand>
      </div>

      {/* the database: GitHub itself */}
      <section className="band">
        <div className="container how-title">
          <h2>The largest talent pool on earth</h2>
        </div>
      </section>
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

      {/* how it works */}
      <section className="band">
        <div className="container how-title">
          <h2>Your sourcing, on autopilot</h2>
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
              <p>The role you're hiring for, in one sentence.</p>
            </div>
            <div className="f-drop f-drop-in" aria-hidden="true" />

            <FlowStep n={1} title="We scan GitHub" data="scan: 2.1M profiles">
              Every dev shipping in your stack, pulled by repos, topics and dependencies.
            </FlowStep>
            <div className="f-link f-l1" aria-hidden="true" />
            <FlowStep n={2} title="We read the code" data="signals: commits · PRs">
              Commits, pull requests, reviews, stars — proof of skill, written in public.
            </FlowStep>
            <div className="f-link f-l2" aria-hidden="true" />
            <FlowStep n={3} title="We enrich the profiles" data="email: lea.fabre@…">
              A handle becomes a candidate: name, experience, location, verified email.
            </FlowStep>
            <div className="f-link f-l3" aria-hidden="true" />
            <FlowStep n={4} title="We rank the matches" data="top match: score 94">
              Scored on hard evidence against your role, sorted strongest to weakest.
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
              <h3>The outreach writes itself</h3>
              <div className="merge-chips">
                <span className="chip">rt-order-matching</span>
                <span className="chip">"3,669 contributions"</span>
                <span className="chip">Léa · Staff SWE</span>
                <span className="chip">#1 · score 94</span>
              </div>
              <p>Subject, hook, pitch — every line generated from her real work. She answers below ↓</p>
            </div>
          </div>
        </div>
      </section>

      {/* feature: code as the résumé */}
      <section className="band">
        <div className="container feature">
        <div className="f-copy">
          <div className="eyebrow">// the code is the résumé</div>
          <h2>Read the work, not the CV</h2>
          <p>
            No keyword-stuffed PDFs. <b>Public code proves the skill</b> — we skip the devs
            whose code doesn't.
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
          <div className="eyebrow">// scored on hard evidence</div>
          <h2>Who's actually cracked?</h2>
          <p>
            Every dev is scored on shipped work. You get <b>a ranked shortlist with verified
            emails</b> — not a pile of maybes.
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

      {/* linkedin vs azerit — the same candidate, two channels. Léa ignores
          the recruiter blasts on the left; she answers the email that read
          her code on the right. */}
      <section className="band">
        <div className="container how-title">
          <h2>Cracked engineers are not responding to you on LinkedIn</h2>
          <p className="how-sub">
            LinkedIn outreach only gets a <b>1–3% response rate</b>. Azerit personalizes
            outreach based on their GitHub activity to get <b>30%+</b>.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="container vs">
          <div className="vs-cell vs-linkedin">
            <div className="vs-head">
              <span className="li-mark">in</span>
              linkedin — léa's inbox
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
              azerit — léa's inbox
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
                      Ha — journal.rs took a while to get right, you're the first person to
                      actually read it. We hit exactly the backpressure issue you mention.
                      What are you building? I'm free Thursday.
                    </p>
                    <div className="vs-quote">
                      &gt; Just went through rt-order-matching. The way you handle partial
                      fills under contention is really clean, and the replay log in
                      journal.rs? Smart.
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
          <h2>Book a demo</h2>
          <p>30 minutes with the founders — we run Azerit live on a role you're actually hiring for.</p>
          <Email user="lumine.builds" domain="gmail.com" subject="Azerit demo" className="btn-try">
            book a demo →
          </Email>
        </div>
      </section>

      {/* team */}
      <section className="band">
        <div className="container team">
        <h2>The team</h2>
        <p className="team-sub">Two Centrale engineers putting tech to work for hiring teams.</p>
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
            <Link to="/try?for=hiring" className="cta-link">
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
