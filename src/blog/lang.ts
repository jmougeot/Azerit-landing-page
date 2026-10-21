import { useEffect, useState } from "react";

// The blog is bilingual: each post exists in English and French, and readers
// get the one matching their browser until they pick the other with the
// switch (remembered per browser). The rest of the site stays English, and so
// does the prerendered HTML: main.tsx renders these routes fresh in the
// browser, so the French version replaces it without a hydration mismatch.
export type Lang = "en" | "fr";

const KEY = "azerit-blog-lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // storage blocked: fall back to the browser language
  }
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  // the first of the two we publish wins, so "de, fr" reads French and "en, fr" English
  const first = langs.find((l) => /^(en|fr)\b/i.test(l ?? ""));
  return first?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // not remembered, still switched for this page
    }
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
