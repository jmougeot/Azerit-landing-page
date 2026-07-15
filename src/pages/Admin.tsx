import { useState } from "react";
import { TopBar, Footer } from "../components/Nav";
import { getLeads, leadsToCsv, type Lead } from "../leads";

export function Admin() {
  const [leads] = useState<Lead[]>(() => getLeads().reverse());

  const exportCsv = () => {
    const blob = new Blob([leadsToCsv(leads)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `azerit-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <TopBar />
      <main className="page-wide admin" style={{ minHeight: "60vh" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1>Interested leads</h1>
            <p className="meta">
              Visitors who clicked "Open my dashboard" · {leads.length} total.{" "}
              <span className="mono" style={{ fontSize: 12.5 }}>
                (stored in this browser; set VITE_LEAD_ENDPOINT to receive them in prod)
              </span>
            </p>
          </div>
          <button className="btn-ghost" onClick={exportCsv} disabled={leads.length === 0}>
            export csv
          </button>
        </div>

        {leads.length === 0 ? (
          <p className="empty">No leads yet. Try it yourself: go to the homepage and click "Try it".</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>date</th>
                <th>email</th>
                <th>website / product</th>
                <th>intent</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id}>
                  <td className="mono" style={{ fontSize: 13, color: "var(--text-dim)" }}>
                    {new Date(l.createdAt).toLocaleString("en-GB")}
                  </td>
                  <td>{l.email}</td>
                  <td>{l.website}</td>
                  <td>
                    <span className="badge">wants the dashboard</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <Footer />
    </>
  );
}
