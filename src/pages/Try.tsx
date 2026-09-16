import { useState } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { saveLead, getLeads } from "../leads";

export function Try() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [position, setPosition] = useState(0);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    await saveLead({ email, role, event: "try_requested" });
    await new Promise((r) => setTimeout(r, 700));
    setPosition(42 + (getLeads().length % 30));
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
            <h1>You're in the queue.</h1>
            <p>
              We're onboarding teams one by one so every search gets set up properly. You'll get an
              email at <strong style={{ color: "var(--text)" }}>{email}</strong> when your dashboard
              is ready.
            </p>
            <div className="pos">position #{position} in line</div>
            <p style={{ fontSize: 13.5 }}>
              Early users get their first candidate batch free. We'll run your role as the test.
            </p>
            <Link to="/" className="btn-ghost" style={{ display: "inline-block", marginTop: 20 }}>
              ← back
            </Link>
          </div>
        ) : (
          <div className="try-card">
            <h1>Try Azerit on your role</h1>
            <p className="sub">
              Drop your email and the role you're hiring for: we'll set up your scan and open your
              dashboard.
            </p>
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
                {submitting ? "setting up your scan…" : "Open my dashboard →"}
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
