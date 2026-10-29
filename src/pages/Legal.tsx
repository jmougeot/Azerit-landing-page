import { Link } from "react-router-dom";
import { usePageTitle, PAGES } from "../meta";
import { TopBar, Footer } from "../components/Nav";
import { Email } from "../components/Email";

export function Legal() {
  usePageTitle(PAGES["/legal"].title);

  return (
    <>
      <TopBar />
      <main className="container legal">
        <h1>Legal notice &amp; privacy policy</h1>

        <h2>Legal notice</h2>
        <p>
          This website, azerit.tech, and the Azerit service are published by Lumine Trentelivres,
          individual entrepreneur (entrepreneur individuel, micro-entreprise), 7 allée des
          Dahlias, 92320 Châtillon, France. SIRET: 991 317 892 00016. VAT not applicable, art.
          293 B of the French Tax Code.
        </p>
        <p>
          Azerit is co-founded by Lumine Trentelivres and Jacques Mougeot. Director of
          publication: Lumine Trentelivres.
        </p>
        <p>
          Contact: <Email user="jacques" domain="azerit.tech" />
        </p>
        <p>
          Hosting: GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA
          94107, United States (<a href="https://pages.github.com" target="_blank" rel="noreferrer">pages.github.com</a>)
        </p>

        <h2>Privacy policy</h2>
        <p>Last updated: October 29, 2026.</p>
        <p>
          Two kinds of people give us, or get from us, personal data: the companies that hire
          through Azerit, and the engineers we contact for them. Each has its own section below.
          For both, the data controller is Lumine Trentelivres at the address above, and the
          contact for anything about your data is <Email user="jacques" domain="azerit.tech" />.
        </p>

        <h2>If you're hiring through Azerit</h2>
        <h3>What we collect</h3>
        <p>
          When you send us a role on the <Link to="/try">find my engineer page</Link>, we collect
          the work email address and the role description you submit, along with the date of your
          request. We collect nothing else on the site: no account, no advertising trackers.
        </p>
        <p>
          When we work on a role together, we keep your name, email address, company, the job
          description and what you tell us about the role, and, when you hire, the billing
          details for the invoice. Billing records are kept for 10 years, as French accounting law
          requires.
        </p>

        <h3>Why we collect it</h3>
        <p>
          To call you back about the role, run the search, and introduce you to the engineer we
          found. Legal basis: the steps needed before and during our contract with you. We never
          sell or share your data with third parties for marketing purposes.
        </p>

        <h3>Where it goes</h3>
        <p>
          Form submissions are transmitted to our form processing endpoint and stored there until
          processed. Our hosting provider (GitHub Pages) may keep standard server logs, including
          IP addresses. Fonts are served by Google Fonts, which receives your IP address when the
          page loads.
        </p>

        <h3>How long we keep it</h3>
        <p>
          For as long as we work on roles with you, and 12 months after the last one. If a request
          never turns into a role, we delete it 12 months after you sent it. You can ask us to
          delete it at any time.
        </p>

        <h2>If we contacted you about a role</h2>
        <p>
          This section is the notice the GDPR asks us to give you when we did not collect your
          data from you (article 14). The plain-language version is on the{" "}
          <Link to="/engineers">for engineers page</Link>.
        </p>

        <h3>What we hold and where it comes from</h3>
        <p>
          Your public GitHub profile (name, handle, bio, location, links), the public repositories
          you contributed to, your public commits, pull requests and code reviews on them, and a
          professional email address taken from your public profile or commits, or supplied by a
          professional-contact data provider. We also keep our own reading of that work: which
          projects match the role and why. We never access private repositories or any
          non-public account.
        </p>

        <h3>Why we hold it</h3>
        <p>
          To find, for one open role at a client company, the engineers whose public work shows
          they have built something close to it, and to write to them once about that work. Legal
          basis: our legitimate interest, and our client's, in recruiting for the role, balanced
          against yours by using only public, professional data, by writing once, and by stopping
          as soon as you say so.
        </p>

        <h3>Who sees it</h3>
        <p>
          The two founders of Azerit. The hiring company sees your profile only after you have
          told us you are interested in the role. Our tools run on hosted services (email
          delivery, data storage, AI models that help us search and read code), each bound by
          contract to process the data only for us. Some of these providers are in the United
          States, under the European Commission's standard contractual clauses.
        </p>

        <h3>Automated processing</h3>
        <p>
          AI models help us search GitHub and read code at scale. The decision to contact you,
          and the message you receive, are reviewed by one of us. No decision about you is taken
          by a model alone.
        </p>

        <h3>How long we keep it</h3>
        <p>
          While the role is open, and for 12 months at most after we last contacted you, so that
          we don't write to you twice about the same role. If you tell us you're not interested,
          or ask us to, we delete your profile within 30 days and keep only your email address on
          a do-not-contact list.
        </p>

        <h2>Your rights, hiring or contacted</h2>
        <p>
          Under the GDPR you can access, correct, delete or export the data we hold about you,
          object to our processing it, and withdraw any consent you gave. Email{" "}
          <Email user="jacques" domain="azerit.tech" /> and we will act on it within 30 days. You
          may also lodge a complaint with your local data protection authority (in France, the
          CNIL).
        </p>

        <h3>Cookies</h3>
        <p>
          This site sets no advertising or analytics cookies. The find my engineer page uses your
          browser's local storage only to confirm your submission on your own device.
        </p>
      </main>
      <Footer />
    </>
  );
}
