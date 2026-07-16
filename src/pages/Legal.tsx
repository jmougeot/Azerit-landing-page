import { useEffect } from "react";
import { TopBar, Footer } from "../components/Nav";

export function Legal() {
  useEffect(() => {
    document.title = "Legal notice & privacy policy · Azerit";
    return () => {
      document.title = "Azerit · Find Leads on GitHub with AI-Powered Outreach";
    };
  }, []);

  return (
    <>
      <TopBar />
      <main className="container legal">
        <h1>Legal notice &amp; privacy policy</h1>

        <h2>Legal notice</h2>
        <p>
          This website, azerit.tech, is published by the co-founders of Azerit: Lumine
          Trentelivres and Jacques Mougeot. Director of publication: Jacques Mougeot.
        </p>
        <p>
          Contact: <a href="mailto:jacques.mougeot@centrale-med.fr">jacques.mougeot@centrale-med.fr</a>
        </p>
        <p>
          Hosting: GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA
          94107, United States — <a href="https://pages.github.com" target="_blank" rel="noreferrer">pages.github.com</a>
        </p>

        <h2>Privacy policy</h2>
        <p>Last updated: July 16, 2026.</p>

        <h3>What we collect</h3>
        <p>
          When you request access on the <a href="/try">try page</a>, we collect the email address
          and the website or product description you submit, along with the date of your request.
          We collect nothing else: no account, no advertising trackers.
        </p>

        <h3>Why we collect it</h3>
        <p>
          Solely to set up your scan and contact you when your dashboard is ready. Legal basis:
          your consent, given when you submit the form. We never sell or share your data with
          third parties for marketing purposes.
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
          Until we have onboarded you, or for a maximum of 12 months after your request if we
          have not — whichever comes first. You can ask us to delete it at any time.
        </p>

        <h3>Your rights</h3>
        <p>
          Under the GDPR you can access, correct, delete, or export the data we hold about you,
          and withdraw your consent at any time. Email{" "}
          <a href="mailto:jacques.mougeot@centrale-med.fr">jacques.mougeot@centrale-med.fr</a> and
          we will act on it within 30 days. You may also lodge a complaint with your local data
          protection authority (in France, the CNIL).
        </p>

        <h3>Cookies</h3>
        <p>
          This site sets no advertising or analytics cookies. The try page uses your browser's
          local storage only to confirm your submission on your own device.
        </p>
      </main>
      <Footer />
    </>
  );
}
