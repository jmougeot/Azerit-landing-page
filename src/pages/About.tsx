import { useEffect } from "react";
import { TopBar, Footer } from "../components/Nav";
import { Seam } from "../components/Seam";
import { Founders } from "../components/Founders";
import { DemoLink } from "../components/DemoLink";
import { Email } from "../components/Email";

const PRINCIPLES = [
  {
    title: "Code over claims",
    text: "We rank candidates on the work they have published, not on the keywords they picked for their profile. Every score shows the projects behind it.",
  },
  {
    title: "One good message beats fifty",
    text: "Engineers ignore generic outreach. We help you send fewer messages, each one about something the candidate actually built.",
  },
  {
    title: "Founders on support",
    text: "You work directly with the two people building Azerit, from your first open role onward.",
  },
];

export function About() {
  useEffect(() => {
    document.title = "About · Azerit";
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, []);

  return (
    <>
      <TopBar />
      <main>
        <Seam />

        <section className="band">
          <div className="container page-head">
            <span className="tag eyebrow">about</span>
            <h1>
              Engineers should be hired on what they've <em>built</em>
            </h1>
            <p>
              Azerit reads GitHub to find the developers who have already built what you're hiring
              for, then helps you reach them with a message about their own work.
            </p>
          </div>
        </section>

        <Seam hatch />

        <section className="band">
          <div className="container about-story">
            <div className="about-story-title">
              <span className="tag eyebrow">why azerit</span>
              <h2>The proof is already on GitHub</h2>
            </div>
            <div className="about-story-text">
              <p>
                Hiring engineers usually starts from the wrong documents. CVs and LinkedIn profiles
                list titles and keywords, so every search returns the same crowded pool, and
                everyone in it receives the same generic messages.
              </p>
              <p>
                Meanwhile, millions of developers publish their work in the open: the systems they
                build, the pull requests they review, the problems they keep coming back to. That
                is better evidence than any CV, and almost nobody recruits from it.
              </p>
              <p>
                We started Azerit to change that. You describe the role; we find the engineers
                whose code matches it, show you why each one fits, and write a first email that
                opens on their work. The best candidates aren't the ones with the right keywords.
                They're the ones who have already built it.
              </p>
            </div>
          </div>
        </section>

        <Seam />

        <section className="band band-head">
          <div className="container how-title">
            <span className="tag eyebrow">principles</span>
            <h2>What we believe</h2>
          </div>
        </section>
        <section className="band">
          <div className="container principles">
            {PRINCIPLES.map((p, i) => (
              <div className="principle" key={p.title}>
                <span className="tag">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Seam hatch />

        <section className="band">
          <div className="container team">
            <span className="tag eyebrow">team</span>
            <h2>Meet the founders</h2>
            <Founders />
          </div>
        </section>

        <Seam />

        <section className="band">
          <div className="container demo-band">
            <span className="tag eyebrow">contact</span>
            <h2>Talk to the founders</h2>
            <p>Questions, partnerships, or an open role you'd like us to try.</p>
            <div className="page-ctas">
              <DemoLink className="btn-try">book a demo</DemoLink>
              <Email user="jacques" domain="azerit.tech" className="demo-link">
                or email us
              </Email>
            </div>
          </div>
        </section>

        <Seam />
      </main>
      <Footer />
    </>
  );
}
