import type { Lang } from "./lang";
import readTheCode from "./posts/read-the-code-not-the-cv";
import firstEmail from "./posts/first-email-engineers-answer";
import degreesProveNothing from "./posts/degrees-prove-nothing-work-does";
import cursorHiresPeople from "./posts/cursor-hires-people-not-roles";
import turbopufferLevels from "./posts/turbopuffer-levels-below-abstraction";
import degreeFilters from "./posts/degree-filters-never-see-their-mistakes";
import sixEngineers from "./posts/six-engineers-76-days";
import aiWidensGap from "./posts/ai-widens-the-engineer-gap";
import tokenKpi from "./posts/token-kpi-manager-is-right";
import exStripe from "./posts/ex-stripe-proves-nothing";
import vcNotRecruiter from "./posts/your-vc-is-not-your-recruiter";
import morePrs from "./posts/more-prs-no-more-features";
import askWhatBreaks from "./posts/ask-what-breaks";
import juniorsCode from "./posts/juniors-only-have-their-code";
import candidatesOutbound from "./posts/candidates-discovered-ai-outbound";
import reviewing from "./posts/reviewing-is-the-skill-to-hire-for";
import searchIsFree from "./posts/search-is-free-context-is-not";

// To publish a post: write it in a new file under posts/ (copy one next to it),
// import it below, and add its URL to public/sitemap.xml. The build
// prerenders /blog/<slug> from this list.

export const CATEGORIES = [
  { id: "hiring-signals", en: "Hiring signals", fr: "Signaux de recrutement" },
  { id: "interviews", en: "Interviews", fr: "Entretiens" },
  { id: "ai-teams", en: "AI & engineering teams", fr: "IA et équipes tech" },
  { id: "sourcing", en: "Sourcing & outreach", fr: "Sourcing et approche" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Version = {
  title: string;
  // shown in the index and used as the meta description: one sentence
  description: string;
  body: string; // see Prose.tsx for the markup
};

export type Post = {
  slug: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: CategoryId;
  // a picture from the original source, shown with its credit; posts
  // without one fall back to the drawn cover below
  image?: {
    src: string; // under public/blog/img/
    width: number;
    height: number;
    alt: { en: string; fr: string };
    credit: string;
    href: string; // the source page the picture comes from
  };
  // drawn by PostCover when there is no image: the key figure and what it counts
  cover: {
    figure: { en: string; fr: string };
    caption: { en: string; fr: string };
  };
  sources: { url: string; en: string; fr: string }[];
  en: Version;
  fr: Version;
};

// newest first; posts of the same day keep the order below
export const POSTS: Post[] = [
  degreesProveNothing,
  cursorHiresPeople,
  turbopufferLevels,
  degreeFilters,
  readTheCode,
  firstEmail,
  sixEngineers,
  aiWidensGap,
  tokenKpi,
  exStripe,
  vcNotRecruiter,
  morePrs,
  askWhatBreaks,
  juniorsCode,
  candidatesOutbound,
  reviewing,
  searchIsFree,
].sort((a, b) => b.date.localeCompare(a.date));

export function categoryLabel(id: CategoryId, lang: Lang) {
  return CATEGORIES.find((c) => c.id === id)![lang];
}

// "October 20, 2026" / "20 octobre 2026": the masthead's edition line
export function formatLongDate(date: string, lang: Lang) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatDate(date: string, lang: Lang) {
  // fixed locale and UTC so the date never shifts with the reader's time zone
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
