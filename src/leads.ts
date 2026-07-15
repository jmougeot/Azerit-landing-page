export type Lead = {
  id: string;
  email: string;
  website: string;
  event: "try_requested";
  createdAt: string;
};

const STORAGE_KEY = "azerit_leads";

// Optional remote endpoint (Formspree, Google Sheet, Supabase…) to receive
// leads in production. Without it, leads only live in the visitor's own
// localStorage — visible on /admin from that same browser only.
const REMOTE_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

export function getLeads(): Lead[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export async function saveLead(lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> {
  const full: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const all = [...getLeads(), full];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

  if (REMOTE_ENDPOINT) {
    try {
      await fetch(REMOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(full),
      });
    } catch {
      // lead is still saved in localStorage at least
    }
  }
  return full;
}

export function leadsToCsv(leads: Lead[]): string {
  const header = "date,email,website,event";
  const rows = leads.map((l) =>
    [l.createdAt, l.email, l.website, l.event]
      .map((v) => `"${String(v).replaceAll('"', '""')}"`)
      .join(","),
  );
  return [header, ...rows].join("\n");
}
