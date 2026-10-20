import type { Post } from "../posts";

const post: Post = {
  slug: "search-is-free-context-is-not",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "500", fr: "500" },
    caption: { en: "plausible engineers before your coffee cools", fr: "ingénieurs plausibles avant que le café refroidisse" },
  },
  sources: [
    {
      url: "https://fwdmotion.substack.com/p/the-context-economy",
      en: "Brian Fink, The Context Economy, source of the LinkedIn and Gartner figures",
      fr: "« The Context Economy », de Brian Fink, d'où viennent les chiffres LinkedIn et Gartner",
    },
  ],
  en: {
    title: "Finding candidates is free. Context isn't, but it isn't only human.",
    description:
      "An agent finds 500 plausible engineers before your coffee cools. The bottleneck was never finding, it's knowing, and part of that knowing is written in public code.",
    body: `
An agent pulls 500 plausible engineers for you before your coffee cools. That's the problem, not the solution.

Brian Fink, twenty years of recruiting between Apple, AWS and executive search, sums it up in one sentence: the bottleneck in hiring was never finding. It's knowing.

His numbers: in mid-2025, LinkedIn was processing about 11,000 applications a minute, up 45% in a year. One HR consultant received more than 1,200 applications for a single remote role. And Gartner projects that by 2028, up to one candidate in four could be fake.

When everyone can see everyone, seeing is no longer a skill. The value moves to judgment: which of these 500 names matters, and why.

On that, I'm with him. On what follows, halfway.

He puts all of the context on the human side: what the manager doesn't say in the intake, what the candidate only admits on the third call. That's true for motivation. It isn't written anywhere.

But "has this person already solved our problem?" is written down. In their repositories, their PRs, their reviews. A model can read it, and fairly well.

Our rule at Azerit: the code narrows the field, it doesn't decide. Skill is proven in public work. Hireability (reachable, open, in range) is proven in a conversation.

Two bottlenecks, two tools.
`,
  },
  fr: {
    title: "La recherche de candidats est gratuite, le contexte ne l'est pas, mais il n'est pas que humain",
    description:
      "Un agent sort 500 ingénieurs plausibles avant que votre café refroidisse. Le goulot n'a jamais été de trouver mais de savoir, et une partie de ce savoir est écrite dans le code public.",
    body: `
Un agent vous sort 500 ingénieurs plausibles avant que votre café refroidisse. C'est le problème, pas la solution.

Brian Fink, vingt ans de recrutement entre Apple, AWS et la chasse de têtes, le résume en une phrase : le goulot du recrutement n'a jamais été de trouver. C'est de savoir.

Ses chiffres : mi-2025, LinkedIn traitait environ 11 000 candidatures par minute, en hausse de 45 % sur un an. Une consultante RH a reçu plus de 1 200 candidatures pour un seul poste en remote. Et Gartner projette qu'en 2028, jusqu'à un candidat sur quatre pourrait être faux.

Quand tout le monde voit tout le monde, voir n'est plus une compétence. La valeur se déplace vers le jugement : lequel de ces 500 noms compte, et pourquoi.

Là-dessus, je le suis. Sur la suite, à moitié.

Il range tout le contexte du côté de l'humain : ce que le manager ne dit pas en intake, ce que le candidat n'avoue qu'au troisième appel. C'est vrai pour la motivation. Elle ne s'écrit nulle part.

Mais « est-ce que cette personne a déjà résolu notre problème ? », ça s'écrit. Dans ses dépôts, ses PR, ses reviews. Un modèle peut le lire, et plutôt bien.

Notre règle chez Azerit : le code dégrossit, il ne décide pas. La compétence se prouve dans le travail public. La recrutabilité (joignable, ouvert, dans la zone) se prouve dans une conversation.

Deux goulots, deux outils.
`,
  },
};

export default post;
