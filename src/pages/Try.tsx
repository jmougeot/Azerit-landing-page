import { useState } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { saveLead } from "../leads";
import { PAGES, usePageTitle } from "../meta";

export function Try() {
  usePageTitle(PAGES["/try"].title);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    await saveLead({ email, role, event: "try_requested" });
    await new Promise((r) => setTimeout(r, 700));
    setDone(true);
    setSubmitting(false);
  };

  return (
    <>
      <TopBar />
      <main className="try-wrap">
        {done ? (
          <div className="confirm">
            <div className="check">✓ request received</div>
            <h1>We're on your role.</h1>
            <p>
              One of us writes back to{" "}
              <strong style={{ color: "var(--text)" }}>{email}</strong> within one business day
              to go through the role with you. Then we search, read, reach out, and come back
              with the engineer who fits.
            </p>
            <p style={{ fontSize: 13.5 }}>
              Nothing to pay to start. The fee comes with the hire.
            </p>
            <Link to="/" className="btn-ghost" style={{ display: "inline-block", marginTop: 20 }}>
              back
            </Link>
          </div>
        ) : (
          <div className="try-card">
            <h1>Find my engineer</h1>
            <p className="sub">
              Tell us who you're hiring. We search GitHub for the engineers who have already
              built it, read their code, reach out, and come back with the one who fits.
            </p>
            <p className="try-benefit">No fee until you hire. We reply within one business day.</p>
            <form onSubmit={submit}>
              <div className="field">
                <label htmlFor="email">work email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="role">the role you're hiring for</label>
                <input
                  id="role"
                  type="text"
                  required
                  placeholder="senior backend eng, real-time systems"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn-try"
                style={{ width: "100%" }}
                disabled={submitting}
              >
                {submitting ? "sending your request…" : "Find my engineer"}
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
