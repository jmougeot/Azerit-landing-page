import type { Post } from "../posts";

const post: Post = {
  slug: "more-prs-no-more-features",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "hiring-signals",
  cover: {
    figure: { en: "+23%", fr: "+23 %" },
    caption: { en: "pull requests, about zero more features", fr: "de PR, à peu près zéro feature de plus" },
  },
  sources: [
    {
      url: "https://thelastsoftwareengineer.substack.com/p/the-future-of-ai-software-is-already",
      en: "Michael Hilton's article, with the link to the Harvard study",
      fr: "L'article de Michael Hilton, avec le lien vers l'étude de Harvard",
    },
  ],
  en: {
    title: "+23% PRs, zero more features: the green graph no longer means anything",
    description:
      "A Harvard study of 300 million work events: coding agents raise activity, not shipped features. Why volume is no longer a hiring signal.",
    body: `
+23% pull requests. +30% lines of code. And almost no more features in production.

That's the result of a Harvard study of about 300 million work events: 700,000 employees, 700 companies.

Coding agents do push activity up: +20% commits, +23% PRs. But the effect on features actually shipped is small, and not statistically significant.

Michael Hilton explains it with an idea from Fred Brooks that dates back to 1986. AI crushes accidental complexity, the work of translating an idea into code. It doesn't touch essential complexity: deciding what to build, and making the pieces hold together.

For anyone hiring engineers, the consequence is direct: volume no longer says anything. A nicely green contribution graph, a commit counter that keeps climbing, is now partly an agent's work.

What remains a signal is what the code does. And the decisions behind it.

That's why at Azerit, we have the code itself read, file by file, before scoring anyone.
`,
  },
  fr: {
    title: "+23 % de PR, zéro feature de plus : le graphe vert ne veut plus rien dire",
    description:
      "Une étude de Harvard sur 300 millions d'événements de travail : les agents de code font monter l'activité, pas les features livrées. Pourquoi le volume n'est plus un signal pour recruter.",
    body: `
+23 % de pull requests. +30 % de lignes de code. Et presque aucune feature de plus en production.

C'est le résultat d'une étude de Harvard sur environ 300 millions d'événements de travail : 700 000 salariés, 700 entreprises.

Les agents de code font bien monter l'activité : +20 % de commits, +23 % de PR. Mais l'effet sur les features réellement déployées est faible, et pas statistiquement significatif.

Michael Hilton l'explique avec une idée de Fred Brooks qui date de 1986. L'IA écrase la complexité accidentelle, celle de traduire une idée en code. Elle ne touche pas à la complexité essentielle : décider quoi construire, et faire tenir les morceaux ensemble.

Pour ceux qui recrutent des ingénieurs, la conséquence est directe : le volume ne dit plus rien. Un graphe de contributions bien vert, un compteur de commits qui grimpe, c'est désormais en partie le travail d'un agent.

Ce qui reste un signal, c'est ce que le code fait. Et les décisions qu'il y a derrière.

C'est pour ça que chez Azerit, on fait lire le code lui-même, fichier par fichier, avant de noter qui que ce soit.
`,
  },
};

export default post;
