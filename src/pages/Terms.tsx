import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { Email } from "../components/Email";
import { PRICE_EUR_MONTHLY } from "../links";

export function Terms() {
  useEffect(() => {
    document.title = "Terms of sale · Azerit";
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, []);

  return (
    <>
      <TopBar />
      <main className="container legal">
        <h1>Terms of sale</h1>
        <p>Last updated: September 24, 2026.</p>

        <h2>1. Scope</h2>
        <p>
          These terms govern every subscription to Azerit, the candidate sourcing service
          published at azerit.tech by Lumine Trentelivres, individual entrepreneur
          (micro-entreprise), 7 allée des Dahlias, 92320 Châtillon, France, SIRET 991 317 892
          00016 (hereafter "Azerit", "we"; see the <Link to="/legal">legal notice</Link>).
          Subscribing means you accept them in full. They prevail over any other terms, including
          your own purchasing terms, unless we agree otherwise in writing.
        </p>
        <p>
          Azerit is sold to professionals only: companies, recruiting agencies and independent
          recruiters subscribing for their business. By subscribing, you confirm that you are
          acting for professional purposes.
        </p>

        <h2>2. The service</h2>
        <p>
          Azerit finds software engineers for your open roles based on what they have actually
          built. For each role, we search public GitHub activity for engineers whose code matches
          the job, rank them, and deliver a shortlist including, for each candidate:
        </p>
        <ul>
          <li>the projects and contributions that justify the match;</li>
          <li>a verified professional email address, when one can be found;</li>
          <li>a personalized first email, written around the candidate's own work.</li>
        </ul>
        <p>
          Your subscription includes up to 10 open roles per month, with a minimum of 20
          candidates delivered for each role.
        </p>
        <p>
          To launch a search, you send us the job description for the role. Shortlists are
          delivered in your Azerit dashboard, where you can review candidates and their messages.
        </p>
        <p>
          We do our best to deliver relevant, accurate results, but we cannot guarantee that every
          email address is still valid, or that candidates will reply or accept an offer. Azerit
          is a sourcing tool: hiring decisions remain yours.
        </p>

        <h2>3. Price and payment</h2>
        <p>
          The subscription costs {PRICE_EUR_MONTHLY} € per month. VAT is not applicable (art.
          293 B of the French Tax Code), so this is the full amount you pay. It is billed monthly
          in advance, from the day you subscribe, by card through our payment provider Stripe. We
          never see or store your card details. An invoice is available for every payment.
        </p>
        <p>
          If a payment fails, Stripe will retry it. If it is still unpaid after these attempts,
          we may suspend access to the service until the balance is settled. Late payments by
          professional customers bear interest at three times the French legal interest rate,
          plus a fixed €40 recovery fee (French Commercial Code, art. L. 441-10).
        </p>
        <p>
          We may change our prices. Any change applies from your next billing period after at
          least 30 days' notice by email; you may cancel before it takes effect.
        </p>

        <h2>4. Term and cancellation</h2>
        <p>
          The subscription has no minimum commitment. It renews automatically every month until
          you cancel. You can cancel at any time by emailing{" "}
          <Email user="lumine.builds" domain="gmail.com" subject="Azerit cancellation" />; the
          cancellation takes effect at the end of the current billing period, and you keep access
          until then. Periods already started are not refunded, except where the law requires it.
        </p>
        <p>
          As the service is sold to professionals, the 14-day right of withdrawal that applies to
          consumers does not apply.
        </p>
        <p>
          We may terminate a subscription in case of serious breach of these terms, including
          misuse of candidate data as described in section 5, after an email notice that has gone
          unanswered for 8 days, or immediately where the breach is unlawful.
        </p>

        <h2>5. Your use of candidate data</h2>
        <p>
          The candidate profiles and contact details we provide come from public sources. You may
          use them only to contact candidates about genuine job opportunities. You must not resell
          them, build a mailing list with them, or use them for any other marketing purpose.
        </p>
        <p>
          When you contact a candidate, you act as an independent data controller under the GDPR:
          you are responsible for having a legal basis, informing the candidate of where you got
          their details, honouring their requests to be forgotten or not contacted again, and
          keeping their data no longer than necessary.
        </p>

        <h2>6. Liability</h2>
        <p>
          We are bound by a best-efforts obligation. Our liability is limited to direct,
          foreseeable damage proven by you, and capped at the amounts you paid us over the
          12 months preceding the event that caused it. We are not liable for indirect losses
          such as lost revenue, a missed hire, or damage to reputation, nor for interruptions
          caused by third-party services (GitHub, Stripe, hosting providers) or by events beyond
          our reasonable control.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          Azerit, its software, brand and website remain our property. Your subscription gives you
          a personal, non-transferable right to use the service and the results delivered to you
          for your own recruiting needs, for as long as it is active. Messages we write for you
          are yours to use and edit.
        </p>

        <h2>8. Personal data</h2>
        <p>
          The data we process about you as a customer (contact details, billing information) is
          handled as described in our <Link to="/legal">privacy policy</Link>.
        </p>

        <h2>9. Changes to these terms</h2>
        <p>
          We may update these terms. We will email you any change at least 30 days before it
          applies to your subscription; if you disagree, you may cancel before that date.
        </p>

        <h2>10. Governing law and disputes</h2>
        <p>
          These terms are governed by French law. Before any legal action, we will try to settle
          any dispute amicably: write to us and we will reply within 30 days. Failing an amicable
          settlement, disputes between professionals fall under the exclusive jurisdiction of the
          courts of Paris, France.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about your subscription or these terms:{" "}
          <Email user="lumine.builds" domain="gmail.com" />.
        </p>
      </main>
      <Footer />
    </>
  );
}
