import type { Post } from "../posts";

const post: Post = {
  slug: "degree-filters-never-see-their-mistakes",
  date: "2026-10-20",
  author: "Jacques Mougeot",
  category: "hiring-signals",
  cover: {
    figure: { en: "0", fr: "0" },
    caption: { en: "false negatives a degree filter ever sees", fr: "faux négatif vu par un filtre sur diplôme" },
  },
  sources: [
    {
      url: "https://paulobrien.substack.com/p/hr-tech-2026-in-las-vegas-is-where",
      en: "Paul O'Brien's article",
      fr: "L'article de Paul O'Brien",
    },
    {
      url: "https://siepr.stanford.edu/publications/working-paper/canaries-coal-mine-six-facts-about-recent-employment-effects-artificial",
      en: "The Stanford paper on 22 to 25 year olds, Canaries in the Coal Mine?",
      fr: "Le papier de Stanford sur les 22-25 ans, « Canaries in the Coal Mine? »",
    },
  ],
  en: {
    title: "A degree filter never sees its own mistakes",
    description:
      "A hiring filter is only judged on the people it lets through. Why the candidates it rejects never prove it wrong, and how to break the loop.",
    body: `
A degree filter is only judged on the people it lets through.

The ones it rejects never produce the proof that it was wrong.

The idea comes from Paul O'Brien, an economist who studies startups, writing as he headed to HR Tech in Las Vegas. I find it brutal, because it describes a system that cannot learn.

Take a filter like "engineering school + 5 years of experience." You hire people who pass it. Some are very good, some less so. You adjust.

But you will never learn anything about the others. The self-taught engineer who maintains a library used everywhere. The one who spent three years building everything at a startup that died.

The filter looks like it works. It simply can't see its false negatives.

O'Brien sums it up: schools teach for the job description, employers measure the CV, and the economics play out in what happens after the hire, which nobody shares.

The only way to break the loop is to go and look at the work of the people the filter would have eliminated. Not to lower the bar. To change what you measure.
`,
  },
  fr: {
    title: "Un filtre sur diplôme ne voit jamais ses erreurs",
    description:
      "Un filtre de recrutement n'est jugé que sur les gens qu'il laisse passer. Pourquoi ceux qu'il rejette ne prouvent jamais qu'il s'est trompé, et comment casser la boucle.",
    body: `
Un filtre sur diplôme n'est jugé que sur les gens qu'il laisse passer.

Ceux qu'il rejette ne produisent jamais la preuve qu'il s'est trompé.

La phrase est de Paul O'Brien, économiste spécialiste des startups, qui partait cette semaine-là à HR Tech à Las Vegas. Je la trouve terrible, parce qu'elle décrit un système qui ne peut pas apprendre.

Prenez un filtre « école d'ingénieur + 5 ans d'expérience ». Vous recrutez des gens qui passent. Certains sont très bons, certains moins. Vous ajustez.

Mais vous ne saurez jamais rien des autres. Celui qui a appris seul et maintient une librairie utilisée partout. Celle qui a passé trois ans dans une startup morte à tout construire.

Le filtre a l'air de marcher. Il ne voit simplement pas ses faux négatifs.

O'Brien résume : l'école enseigne pour la fiche de poste, l'employeur mesure le CV, et l'économie se joue sur ce qui arrive après l'embauche, que personne ne partage.

Le seul moyen de casser la boucle, c'est d'aller regarder le travail des gens que le filtre aurait éliminés. Pas de baisser le niveau. De changer ce qu'on mesure.
`,
  },
};

export default post;
