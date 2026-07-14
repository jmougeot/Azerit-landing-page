export type Lead = {
  id: string;
  email: string;
  company: string;
  niche: string;
  plan: string;
  event: "checkout_submitted" | "waitlist_joined";
  createdAt: string;
};

const STORAGE_KEY = "azerit_leads";

// Optionnel : endpoint distant (Formspree, Google Sheet, Supabase…) pour
// recevoir les leads en prod. Sans ça, les leads restent dans le
// localStorage du navigateur du visiteur — visible sur /admin uniquement
// depuis ce même navigateur.
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
      // le lead reste au moins en localStorage
    }
  }
  return full;
}

export function leadsToCsv(leads: Lead[]): string {
  const header = "date,email,entreprise,niche,plan,event";
  const rows = leads.map((l) =>
    [l.createdAt, l.email, l.company, l.niche, l.plan, l.event]
      .map((v) => `"${String(v).replaceAll('"', '""')}"`)
      .join(","),
  );
  return [header, ...rows].join("\n");
}
