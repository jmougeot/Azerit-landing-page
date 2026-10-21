import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// The blog is bilingual: each post exists in English, under /blog/, and in
// French, under /fr/blog/. Each version has its own URL so search engines
// index both (they read one language per URL, and never the switch). The rest
// of the site stays English.
export type Lang = "en" | "fr";

const KEY = "azerit-blog-lang";

export function langOf(pathname: string): Lang {
  return pathname.startsWith("/fr/") ? "fr" : "en";
}

// "/blog/", "/blog/<slug>", "/blog/?category=<id>" in the given language
export function blogPath(lang: Lang, rest = "") {
  return `${lang === "fr" ? "/fr" : ""}/blog/${rest}`;
}

// the same page in the other language
export function switchPath(pathname: string, to: Lang) {
  const bare = pathname.replace(/^\/fr(?=\/)/, "");
  return to === "fr" ? `/fr${bare}` : bare;
}

function savedLang(): Lang | null {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // storage blocked: no remembered choice
  }
  return null;
}

function browserPrefersFr() {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  // the first of the two we publish wins, so "de, fr" reads French and "en, fr" English
  const first = langs.find((l) => /^(en|fr)\b/i.test(l ?? ""));
  return !!first?.toLowerCase().startsWith("fr");
}

export function useLang() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const lang = langOf(pathname);

  // Readers land on the version they picked last time, and French browsers
  // on the French one. Only a remembered choice ever leaves a French URL:
  // crawlers have none and browse in English, so they must stay on whichever
  // URL they asked for, or the French pages would never be indexed.
  useEffect(() => {
    const preferred = savedLang() ?? (lang === "en" && browserPrefersFr() ? "fr" : null);
    if (preferred && preferred !== lang) {
      navigate(switchPath(pathname, preferred) + search, { replace: true });
    }
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);

  const setLang = (next: Lang) => {
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // not remembered, still switched for this page
    }
    navigate(switchPath(pathname, next) + search);
  };

  return [lang, setLang] as const;
}

export const UI = {
  en: {
    masthead: "azerit",
    edition: "Edition of",
    frontPage: "Front page",
    categories: "Rubriques",
    latest: "Latest",
    mostRead: "Must read",
    readNext: "Read next",
    minRead: "min read",
    by: "By",
    sources: "Sources",
    empty: "No posts in this rubrique yet.",
    boxTitle: "Find the engineers who have already built it",
    boxText:
      "Azerit reads GitHub for the developers who have shipped what you're hiring for: a ranked shortlist, verified emails, and a first message written about their own work.",
    ctaTry: "Find my candidates",
    ctaDemo: "book a demo",
    switchLabel: "Language",
  },
  fr: {
    masthead: "azerit",
    edition: "Édition du",
    frontPage: "À la une",
    categories: "Rubriques",
    latest: "En continu",
    mostRead: "À lire",
    readNext: "À lire aussi",
    minRead: "min de lecture",
    by: "Par",
    sources: "Sources",
    empty: "Pas encore d'article dans cette rubrique.",
    boxTitle: "Trouvez les ingénieurs qui l'ont déjà construit",
    boxText:
      "Azerit lit GitHub pour trouver les développeurs qui ont déjà livré ce que vous recrutez : une shortlist classée, des emails vérifiés, et un premier message écrit sur leur propre travail.",
    ctaTry: "Trouver mes candidats",
    ctaDemo: "réserver une démo",
    switchLabel: "Langue",
  },
} as const;
