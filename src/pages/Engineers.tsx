import { Link } from "react-router-dom";
import { usePageTitle, PAGES } from "../meta";
import { TopBar, Footer } from "../components/Nav";
import { Email } from "../components/Email";

// For the developers we write to. They get one email about their own code,
// look us up, and land here: who we are, what we read, what happens if they
// answer, and how to never hear from us again. It is also the notice the GDPR
// asks for when data was not collected from the person (art. 14).
export function Engineers() {
  usePageTitle(PAGES["/engineers"].title);

  return (
    <>
      <TopBar />
      <main className="container legal engineers">
        <h1>Got a message from us?</h1>
        <p>
          Then a company is hiring for a role, and your public work on GitHub looks like what
          they need. This page says who we are, what we looked at, and what happens next. The
          short version: one email about your code, you decide, and a "no" ends it.
        </p>

        <h2>Who we are</h2>
        <p>
          Azerit is two engineers in Paris, Lumine Trentelivres and Jacques Mougeot. We recruit
          software engineers for companies that are hiring. Companies pay us when they hire; you
          never pay anything. More on the <Link to="/about">about page</Link>.
        </p>

        <h2>Why we wrote to you</h2>
        <p>
          We don't send a job to a list. For each role we search GitHub for the developers who
          have already built something close to it, and we read that work: repositories, commits,
          pull requests, reviews. If we wrote to you, it is because of something specific you
          built, and the message says what. There is no second email if you don't answer the
          first.
        </p>

        <h2>What we looked at</h2>
        <ul>
          <li>Your public GitHub profile and the public repositories you contributed to.</li>
          <li>Your public commits, pull requests and code reviews on those repositories.</li>
          <li>
            A professional email address, from your public profile, your commits, or a
            professional-contact provider.
          </li>
        </ul>
        <p>
          Nothing private: no private repositories, no DMs, no scraping of personal accounts.
          We don't ask GitHub for anything beyond what anyone can see.
        </p>

        <h2>What happens if you answer</h2>
        <p>
          We tell you who the company is, the role, the stack, the salary range and where they
          are, and you say whether you want to talk. If you do, we introduce you and stay on
          the line through the process. We present you to the company only after you've told us
          you're interested: before that, nobody but the two of us has seen your name next to
          the role.
        </p>

        <h2>Not interested, or not looking?</h2>
        <p>
          Reply "no" to the email, or write to <Email user="jacques" domain="azerit.tech" />.
          We delete what we hold about you within 30 days and don't contact you again. Silence
          works too: an unanswered email is not followed up.
        </p>

        <h2>Your data</h2>
        <p>
          We keep the profile we built about you while the role is open and for 12 months at
          most, so that we don't write to you twice about the same role. You can ask at any time
          what we hold, have it corrected, or have it deleted. The legal basis for reading public
          code and writing to you once is our legitimate interest in recruiting for the role; you
          can object at any time and we'll stop. The full{" "}
          <Link to="/legal">privacy policy</Link> has the details, including how to complain to
          the CNIL.
        </p>
        <p>
          A note on AI: we use models to search and to read code at scale. The decision to write
          to you, and the message itself, is checked by one of us. No one is ranked, rejected or
          introduced by a model alone.
        </p>
      </main>
      <Footer plain />
    </>
  );
}
