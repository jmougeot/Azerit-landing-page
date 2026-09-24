import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { ContribBg } from "../components/ContribBg";
import { LogoMark } from "../components/Logo";
import { DemoLink } from "../components/DemoLink";
import { STRIPE_CHECKOUT_URL, PRICE_EUR_MONTHLY } from "../links";

export function Pricing() {
  useEffect(() => {
    document.title = "Pricing · Azerit";
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, []);

  return (
    <>
      <TopBar />
      <div className="hero-zone">
        <ContribBg />
        <main className="pricing-wrap">
          <h1 className="pricing-title">
            <span className="pricing-title-text">
              <span className="pricing-logo">
                <LogoMark size={40} />
              </span>
              Pricing
            </span>
          </h1>

          <div className="price-grid price-grid-single">
            <div className="price-card price-card-pro">
              <h2>Azerit</h2>
              <p className="price-sub">
                Source engineers from what they've built, and reach them with a message
                they'll actually answer.
              </p>

              <div className="price-amount">
                <span className="amount">{PRICE_EUR_MONTHLY} €</span>
                <span className="per">/ month</span>
              </div>
              <p className="price-billed">Billed monthly · cancel anytime · VAT not applicable</p>

              <ul className="price-features">
                <li>Up to 10 open roles per month, with at least 20 candidates each</li>
                <li>Candidates matched across 145M+ GitHub developers on the code they write</li>
                <li>Ranked shortlists, with the projects and contributions behind each score</li>
                <li>Verified professional emails</li>
                <li>A personalized first email for every candidate, opening on their own work</li>
                <li>Direct support from the founders</li>
              </ul>

              <div className="price-cta">
                <a
                  href={STRIPE_CHECKOUT_URL}
                  className="btn-try"
                  style={{ display: "block", textAlign: "center" }}
                >
                  Subscribe →
                </a>
                <p className="price-nocard">
                  Secure payment by Stripe · or <DemoLink className="demo-link">book a demo</DemoLink>
                </p>
                <p className="price-nocard">
                  By subscribing, you accept our <Link to="/terms">terms of sale</Link>.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
