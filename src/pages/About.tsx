import { usePageTitle, PAGES } from "../meta";
import { TopBar, Footer } from "../components/Nav";
import { Founders } from "../components/Founders";
import { DemoLink } from "../components/DemoLink";
import { Email } from "../components/Email";
import { LatticeScene } from "../components/LatticeScene";

// The pitch beside the cube that keeps assembling itself, then the three
// beats (proof, the team, the method), the two founders, and a way to reach
// them.
export function About() {
  usePageTitle(PAGES["/about"].title);

  return (
    <>
      <TopBar />
      <main className="page about">
        <section className="about-hero">
          <div className="about-hero-copy">
            <span className="tag eyebrow">about</span>
            <h1>
              Better engineers, faster.
              <br />
              Proven by their <em>code</em>.
            </h1>
            <p className="lede">
              Azerit recruits the engineers who have already built what you're hiring for. We find
              them on GitHub, read their code and open the conversation on their work. We automate
              the search, and we do the judgement.
            </p>
          </div>
          <div className="about-hero-visual">
            <LatticeScene />
          </div>
        </section>

        <section className="about-beats">
          <div className="beat">
            <span className="tag eyebrow">proof</span>
            <h2>Skills you can check</h2>
            <p>
              CVs and keyword searches return the same crowded pool every time, and nothing in
              them is verified. We start from the work instead: we read GitHub for the people
              who have already shipped something like your role, rank them on what they actually
              built, and show you the projects behind the one we send you.
            </p>
          </div>
          <div className="beat">
            <span className="tag eyebrow">team</span>
            <h2>Built by engineers, not recruiters</h2>
            <p>
              We're two engineers from Centrale. We've shipped code, reviewed pull requests and
              run technical interviews. We know what a strong engineer looks like in a
              repository, and what a weak one looks like on a polished profile. That judgement
              is what we put in the product.
            </p>
          </div>
          <div className="beat">
            <span className="tag eyebrow">method</span>
            <h2>We automate the search. The judgement is ours.</h2>
            <p>
              Everything repetitive at Azerit is automated, with AI on the heavy lifting:
              finding the repositories, reading them at scale, enrichment, the first draft of a
              message. What isn't automated is the part you pay for: deciding that this engineer
              fits your role, writing to them about their own work, and being on the call with
              you from the job description to the signature. Two people deliver what used to take
              a team, and the difference goes to you: the right engineer in days, not weeks,
              already interested when you meet them.
            </p>
          </div>
        </section>

        <section className="about-foot">
          <div className="about-team">
            <span className="tag eyebrow">founders</span>
            <Founders />
          </div>
          <div className="about-contact">
            <span className="tag eyebrow">contact</span>
            <p>An open role you'd like us to try, a question, a partnership.</p>
            <div className="page-cta-row">
              <DemoLink className="btn-try">book a demo</DemoLink>
              <Email user="jacques" domain="azerit.tech" className="demo-link">
                or email us
              </Email>
            </div>
          </div>
        </section>
      </main>
      <Footer plain />
    </>
  );
}
