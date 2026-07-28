import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { ContribBg } from "../components/ContribBg";
import { LogoMark } from "../components/Logo";

type Billing = "monthly" | "annual";

const PLANS = {
  starter: { annual: 19, monthly: 25 },
  pro: { annual: 39, monthly: 49 },
};

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");

  useEffect(() => {
    document.title = "Pricing · Azerit";
    return () => {
      document.title = "Azerit · Find Leads on GitHub with AI-Powered Outreach";
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

          <div className="price-toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={billing === "annual" ? "active" : ""}
              onClick={() => setBilling("annual")}
            >
              Annual
              <span className="badge-discount">-20%</span>
            </button>
          </div>

          <div className="price-grid">
            <div className="price-card">
              <h2>Starter</h2>
              <p className="price-sub">Everything you need to start prospecting.</p>

              <div className="price-amount">
                <span className="amount">${PLANS.starter[billing]}</span>
                <span className="per">/ month</span>
              </div>
              <p className="price-billed">
                {billing === "annual" ? "Billed annually" : "Billed monthly"}
              </p>

              <ul className="price-features">
                <li>Full GitHub search across 70M+ profiles</li>
                <li>Send personalised 50 messages</li>
              </ul>

              <div className="price-cta">
                <Link to="/try" className="btn-try" style={{ display: "block", textAlign: "center" }}>
                  Try Azerit →
                </Link>
                <p className="price-nocard">No credit card required</p>
              </div>
            </div>

            <div className="price-card price-card-pro">
              <h2>Pro</h2>
              <p className="price-sub">For teams that want to outgrow the competition.</p>

              <div className="price-amount">
                <span className="amount">${PLANS.pro[billing]}</span>
                <span className="per">/ month</span>
              </div>
              <p className="price-billed">
                {billing === "annual" ? "Billed annually" : "Billed monthly"}
              </p>

              <ul className="price-features">
                <li>Full GitHub search across 70M+ profiles</li>
                <li>Send personalised 200 messages</li>
                <li>Track 4 competitors</li>
              </ul>

              <div className="price-cta">
                <Link to="/try" className="btn-try" style={{ display: "block", textAlign: "center" }}>
                  Try Azerit →
                </Link>
                <p className="price-nocard">No credit card required</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
