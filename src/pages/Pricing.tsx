import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { GithubBg } from "../components/GithubBg";

export function Pricing() {
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
        <GithubBg rows={7} />
        <main className="pricing-wrap">
          <div className="price-card">
            <h1>One simple plan</h1>
            <p className="price-sub">Everything included. Cancel anytime.</p>

            <div className="price-amount">
              <span className="amount">$20</span>
              <span className="per">/ month</span>
            </div>

            <ul className="price-features">
              <li>Daily scans of GitHub for buying intent in your niche</li>
              <li>AI-drafted outreach, ready to send</li>
              <li>Your dashboard, updated continuously</li>
              <li>No per-lead or per-seat charges</li>
            </ul>

            <Link to="/try" className="btn-try" style={{ display: "block", textAlign: "center" }}>
              Start now →
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
