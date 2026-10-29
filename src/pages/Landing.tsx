import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { HeroPicker } from "../components/HeroPicker";
import { DotGridBand } from "../components/DotGridBand";
import { DemoLink } from "../components/DemoLink";
import { AutomationScene } from "../components/AutomationScene";
import { CtaCommits } from "../components/CtaCommits";
import { Seam } from "../components/Seam";
import { Founders } from "../components/Founders";

// One imaginary search traced through the page: a senior real-time-systems
// role. The first card is Léa as we read her, CV and code; the second ties
// each line of the role to the code of hers that proves it.
// The fit sheet under "the one who fits": the role's requirements on the
// left, what proves each one in Léa's code on the right. One line is only
// partly covered, so the sheet reads as a judgement, not a sales pitch.
const FIT = [
  { req: "Real-time systems in Rust or Go", proof: "hot_path.rs", note: "rt-order-matching, lock-free hot path, 2025" },
  { req: "Lock-free data structures", proof: "lea-fabre/lockfree-ring", note: "341 stars, benchmarked against crossbeam" },
  { req: "Backpressure under load", proof: "PR #612 · ws-gateway", note: "bounded channels, not in the matcher yet", part: true },
  { req: "Reviews other people's code", proof: "212 pull requests reviewed", note: "this year, across 6 repositories" },
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

// The four steps of a search, the same four stations the machine draws: a
// short name (the station's), an explicit title, one line on what it means
// for the hire. Azerit does the whole run, the client meets the result. On desktop they sit around the machine, each tied to its
// station by a leader line the engine draws.
const STEPS = [
  { short: "find", title: "Find them on GitHub", text: "The developers who already build what you're hiring for." },
  { short: "read code", title: "Read their code", text: "Commits, pull requests and reviews, not a CV." },
  { short: "match", title: "Keep the one who fits", text: "Not a list: one engineer whose work matches, each skill backed by a project." },
  { short: "reach out", title: "Reach out about their work", text: "We write to them about what they built. The kind of message engineers answer." },
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
  return (
    <>
      <TopBar />

      <main>
      {/* hero + demo video */}
      <div className="hero-zone">
        {/* the white city behind the hero (public/hero/city.jpg, 2:1): the
            picture is white on its left, so the copy sits on plain white; the
            city and the plaza sit on the right under the arm, and a mask fades
            the bottom into the page before the demo window */}
        <img
          className="hero-bg"
          src="/hero/city.jpg"
          srcSet="/hero/city-small.jpg 900w, /hero/city.jpg 1774w"
          sizes="100vw"
          width={1774}
          height={887}
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
                We search GitHub for the engineers who have already built what you're hiring for,
                read their code and reach out. You meet the one who fits.
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

        </DotGridBand>
      </div>

      {/* the rule grid starts here: from the first panel down the rails run
          unbroken to the footer */}
      <Seam />

      {/* feature: the CV, then the code behind it */}
      <section className="band">
        <div className="container feature">
        <div className="f-copy">
          <span className="tag eyebrow">reading</span>
          <h2>Read the work</h2>
          <p>
            We read the CV like everyone else. Then we find their code and read it:{" "}
            <b>commits, pull requests and reviews</b>.
          </p>
        </div>
        <div className="f-visual">
          <div className="cand-card" aria-hidden="true">
            <div className="cand-top">
              <span className="cand-ava">LF</span>
              <div className="cand-id">
                <div className="cand-name">
                  Léa Fabre
                  <span className="cand-badge">match 94</span>
                </div>
                <div className="cand-handle">@lea-fabre · Staff engineer, Orbital Pay</div>
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
              last commit yesterday <span className="ok">✓ 4 repos read</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Seam />

      {/* feature: the deliverable — one engineer, each line of the role proven */}
      <section className="band">
        <div className="container feature rev">
        <div className="f-copy">
          <span className="tag eyebrow">the match</span>
          <h2>The one who fits your role</h2>
          <p>
            Not a shortlist: one engineer, already interested, with the proof behind the match.
            You take the call.
          </p>
        </div>
        <div className="f-visual">
          {/* the fit sheet: each line of the role tied to the file, repo or
              review record that proves it, the way the machine's leader lines
              tie a step to its station */}
          <div className="fit-card" aria-hidden="true">
            <div className="fit-head">
              <span>your role</span>
              <span>her code</span>
            </div>
            {FIT.map((row) => (
              <div className={`fit-row${row.part ? " part" : ""}`} key={row.req}>
                <span className="fit-req">{row.req}</span>
                <span className="fit-link" />
                <span className="fit-proof">
                  <b>{row.proof}</b>
                  <small>{row.note}</small>
                </span>
              </div>
            ))}
            <div className="fit-foot">every line backed by code she wrote</div>
          </div>
        </div>
        </div>
      </section>

      {/* how it works: a hire, from the code up */}
      <section className="band band-head">
        <div className="container how-title">
          <span className="tag eyebrow">method</span>
          <h2>How it works</h2>
          <p className="how-lede">
            You're hiring an engineer. We search GitHub for the people who have already built
            what you need, read their code, reach out about it, and send you the one who fits
            and wants to talk.
          </p>
        </div>
      </section>
      <section className="band how-band">
        <div className="container how">
            {/* the hall the machine stands in: a lazy image behind the panel,
                inside the rails so it reads as the panel's floor and wall, not
                as smudges on the dot grid around it */}
          <div className="how-bg-wrap" aria-hidden>
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
          </div>
          {/* the search as a machine, downhill: rough blocks come out of GitHub
              repositories, four stations find, read, match and contact them,
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

      {/* book a demo — vamo-style: a live run on a real search, zero friction */}
      <section className="band">
        <div className="container demo-band">
          <span className="tag eyebrow">live demo</span>
          <h2>See who we'd find for your open role</h2>
          <p>30 minutes with the founders, on your real job description.</p>
          <DemoLink className="btn-try">book a demo</DemoLink>
        </div>
      </section>

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
              Hire your next engineer from GitHub
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
