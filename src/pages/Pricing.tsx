import { usePageTitle, PAGES } from "../meta";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { ContribBg } from "../components/ContribBg";
import { LogoMark } from "../components/Logo";
import { DemoLink } from "../components/DemoLink";

// Azerit is a recruiting service: the fee comes with the hire, not before.
// The amount depends on the role and is set on the first call, so this page
// says how we charge, not how much. (The page stays at /pricing for the
// links already out there; it is no longer in the nav.)
export function Pricing() {
  usePageTitle(PAGES["/pricing"].title);

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
              <h2>Per hire</h2>
              <p className="price-sub">
                We find the engineer, read the code, make the introduction. You pay when
                you hire, nothing before.
              </p>

              <div className="price-amount">
                <span className="amount amount-text">No hire, no fee</span>
              </div>
              <div className="price-included">
                <p><strong>One fee</strong> per engineer hired, set on our first call from the role</p>
                <p><strong>Nothing</strong> to start a search, no retainer, no subscription</p>
              </div>
              <p className="price-billed">Invoiced when the engineer signs · VAT not applicable</p>

              <ul className="price-features">
                <li>A search across the GitHub developers who have already built what you need</li>
                <li>Their code read: commits, pull requests and reviews, not a CV</li>
                <li>The one who fits, with the projects behind each skill in the role</li>
                <li>Already contacted about their work, already interested when you meet</li>
                <li>The founders on the call, from the job description to the signature</li>
              </ul>

              <div className="price-cta">
                <Link to="/try" className="btn-try" style={{ display: "block", textAlign: "center" }}>
                  Find my engineer
                </Link>
                <p className="price-nocard">
                  Or <DemoLink className="demo-link">book 30 minutes</DemoLink> and we'll quote
                  the fee on your role.
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
