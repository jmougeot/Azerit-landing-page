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
    eyebrow: "blog",
    headTitle: "Notes on hiring engineers",
    headSub:
      "What we learn reading code and writing to the people behind it: sourcing, interviews, and what AI changes in engineering teams.",
    all: "All",
    minRead: "min read",
    allPosts: "all posts",
    by: "by",
    sources: "Sources",
    empty: "No posts in this category yet.",
    ctaTitle: "Find engineers who have already built it",
    ctaSub: "A ranked shortlist from GitHub, with a first email written for each candidate.",
    ctaTry: "Find my candidates",
    ctaDemo: "book a demo",
    switchLabel: "Language",
  },
  fr: {
    eyebrow: "blog",
    headTitle: "Notes sur le recrutement d'ingénieurs",
    headSub:
      "Ce qu'on apprend en lisant du code et en écrivant aux gens derrière : sourcing, entretiens, et ce que l'IA change dans les équipes tech.",
    all: "Tout",
    minRead: "min de lecture",
    allPosts: "tous les articles",
    by: "par",
    sources: "Sources",
    empty: "Pas encore d'article dans cette catégorie.",
    ctaTitle: "Trouvez les ingénieurs qui l'ont déjà construit",
    ctaSub: "Une shortlist classée depuis GitHub, avec un premier email rédigé pour chaque candidat.",
    ctaTry: "Trouver mes candidats",
    ctaDemo: "réserver une démo",
    switchLabel: "Langue",
  },
} as const;
