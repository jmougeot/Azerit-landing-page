import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";

export function NotFound() {
  useEffect(() => {
    document.title = "Page not found · Azerit";
    return () => {
      document.title = "Azerit · Find Leads on GitHub with AI-Powered Outreach";
    };
  }, []);

  return (
    <>
      <TopBar />
      <main className="try-wrap">
        <div className="confirm">
          <div className="check" style={{ color: "var(--text-dim)" }}>
            404 · page not found
          </div>
          <h1>This page doesn't exist.</h1>
          <p>
            The link may be outdated, or the address mistyped. Here's where you probably want to
            go:
          </p>
          <p style={{ marginTop: 20 }}>
            <Link to="/" className="btn-ghost" style={{ display: "inline-block", marginRight: 12 }}>
              ← back home
            </Link>
            <Link to="/try" className="btn-try" style={{ display: "inline-block" }}>
              Try Azerit →
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
