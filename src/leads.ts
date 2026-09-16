export type Lead = {
  id: string;
  email: string;
  // the second form field: the role the visitor is hiring for
  role: string;
  event: "try_requested";
  createdAt: string;
};

// Sign-ups captured while Azerit still sold lead generation stored that field
// as `website` (a product URL) under two event names — keep reading them so
// /admin doesn't blank out rows collected before the pivot to sourcing.
type StoredLead = Omit<Lead, "role" | "event"> & { role?: string; website?: string };

const STORAGE_KEY = "azerit_leads";

// Optional remote endpoint (Formspree, Google Sheet, Supabase…) to receive
// leads in production. Without it, leads only live in the visitor's own
// localStorage — visible on /admin from that same browser only.
const REMOTE_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

export function getLeads(): Lead[] {
  try {
    const stored: StoredLead[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return stored.map((l): Lead => ({
      id: l.id,
      email: l.email,
      createdAt: l.createdAt,
      role: l.role ?? l.website ?? "",
      event: "try_requested",
    }));
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
  const header = "date,email,role,event";
  const rows = leads.map((l) =>
    [l.createdAt, l.email, l.role, l.event]
      .map((v) => `"${String(v).replaceAll('"', '""')}"`)
      .join(","),
  );
  return [header, ...rows].join("\n");
}
