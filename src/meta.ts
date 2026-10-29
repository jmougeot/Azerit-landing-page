import { useEffect } from "react";

// Every page's title and meta description, in one place: the build bakes them
// into each prerendered HTML file (scripts/prerender.mjs) and the pages set
// the same title in the browser. Search engines render the JavaScript, so a
// different title here would replace the prerendered one in their results.

export const SITE_URL = "https://www.azerit.tech";

export const HOME_TITLE = "Azerit · Recruit Engineers from GitHub with AI";

export const PAGES = {
  "/try": {
    title: "Try Azerit on Your Role · Recruit Engineers from GitHub",
    desc: "Tell us the role you're hiring for. We search GitHub for the engineer who has already built it, read their code, reach out, and send you the one who fits. No fee until you hire.",
  },
  "/legal": {
    title: "Legal Notice & Privacy Policy · Azerit",
    desc: "Legal notice and privacy policy for Azerit: who publishes the service, what data we collect, why we collect it, how long we keep it and your rights.",
  },
  "/terms": {
    title: "Terms of Sale · Azerit",
    desc: "Terms of sale for Azerit: what the service includes, price and payment, term and cancellation, liability and use of candidate data.",
  },
  "/pricing": {
    title: "Pricing · Azerit · A Fee per Hire, Nothing Before",
    desc: "Azerit charges one fee per engineer hired, set on the first call from the role. No retainer, no subscription, nothing to start a search: no hire, no fee.",
  },
  "/engineers": {
    title: "Got a Message from Azerit? · For Engineers",
    desc: "Why Azerit wrote to you about your code, what we looked at on GitHub, what happens if you answer, and how to never hear from us again.",
  },
  "/about": {
    title: "About · Azerit",
    desc: "Better engineers, faster, proven by their code. Azerit is two engineers from Centrale who read GitHub instead of CVs: the search is automated, the judgement is theirs.",
  },
} as const;

export const BLOG_META = {
  en: {
    title: "Blog · Hiring Engineers from Their Code · Azerit",
    desc: "Notes on hiring engineers from their code: sourcing on GitHub, writing outreach engineers answer, and what public code says about a developer.",
  },
  fr: {
    title: "Blog · Recruter des ingénieurs sur leur code · Azerit",
    desc: "Recruter des ingénieurs sur leur code : sourcer sur GitHub, écrire des messages auxquels les développeurs répondent, et ce que le code public dit d'eux.",
  },
} as const;

export const postTitle = (title: string) => `${title} · Azerit`;

// the tab title while the page is open, back to the home one when it leaves
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = HOME_TITLE;
    };
  }, [title]);
}
