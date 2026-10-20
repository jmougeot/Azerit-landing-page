import type { Post } from "../posts";

const post: Post = {
  slug: "token-kpi-manager-is-right",
  date: "2026-10-19",
  author: "Jacques Mougeot",
  category: "ai-teams",
  cover: {
    figure: { en: "$10k", fr: "10 k$" },
    caption: { en: "of models per person, per month", fr: "de modèles par personne et par mois" },
  },
  image: {
    src: "/blog/img/token-kpi-manager-is-right.jpg",
    width: 1200,
    height: 675,
    alt: { en: "Alex Mashrabov on 20VC", fr: "Alex Mashrabov sur 20VC" },
    credit: "© 20VC with Harry Stebbings, YouTube",
    href: "https://www.youtube.com/watch?v=jszn8rFtxm4",
  },
  sources: [
    {
      url: "https://x.com/GergelyOrosz/status/2111924637126820076",
      en: "Gergely Orosz's post on X",
      fr: "Le tweet de Gergely Orosz",
    },
    {
      url: "https://www.youtube.com/watch?v=jszn8rFtxm4",
      en: "Alex Mashrabov's 20VC interview, source of the Higgsfield figures",
      fr: "L'interview 20VC d'Alex Mashrabov, source des chiffres Higgsfield",
    },
    {
      url: "https://www.the-ai-corner.com/p/higgsfield-1b-arr-alex-mashrabov",
      en: "The interview broken down by The AI Corner",
      fr: "L'interview décryptée par The AI Corner",
    },
    {
      url: "https://indranilghoshal.substack.com/p/the-hiring-manager-round-has-changed",
      en: "Indranil Ghoshal on how interviews have changed",
      fr: "Le constat d'Indranil Ghoshal sur les entretiens",
    },
  ],
  en: {
    title: "A token-usage KPI, and your manager is right",
    description:
      "A manager set a KPI on tokens consumed. Absurd as a target, telling as a signal: AI fluency is now tested in interviews, even where the product has nothing to do with AI.",
    body: `
A manager in South Korea set his team a KPI on tokens consumed.

A middleware engineer who barely uses AI wrote to Gergely Orosz to complain about a manager "blinded by hype." Orosz's answer: your manager is trying to help you.

I laughed, then I looked at the numbers next to it.

At Higgsfield, which went from $1M to $1B in annualized revenue in 18 months, each person spends on average more than $10,000 a month on models. Nearly 400 people, more than $4M a month. One employee burned more than $30,000 in a week to fix an asset-organization problem on his own. The founder calls that a good week, and expects $50,000 to $100,000 a month for his best engineers within a year.

A token KPI is absurd as a target. But as a signal, it says something: how far a person has built agents into the way they work.

That's why it spills over into hiring. Indranil Ghoshal, nine years in product, notes that "AI fluency" is now tested in interviews, even at companies whose product has nothing to do with AI. Rarely announced, it slips into the normal questions.

His advice to candidates seems right to me, on both sides of the table: prepare an honest AI story. Where it saved you time, and where you pushed back on it.
`,
  },
  fr: {
    title: "Un KPI de tokens consommés, et votre manager a raison",
    description:
      "Un manager fixe un KPI de tokens consommés. Absurde comme objectif, parlant comme signal : la fluidité IA se teste désormais en entretien, même là où le produit n'a rien à voir avec l'IA.",
    body: `
Un manager en Corée du Sud a fixé à son équipe un KPI de tokens consommés.

Un ingénieur middleware, qui utilise très peu l'IA, a écrit à Gergely Orosz pour se plaindre d'un manager « aveuglé par le hype ». Réponse d'Orosz : votre manager essaie de vous aider.

J'ai ri, puis j'ai regardé les chiffres d'à côté.

Chez Higgsfield, passée de 1 M$ à 1 Md$ de revenu annualisé en 18 mois, chaque personne dépense en moyenne plus de 10 000 $ par mois en modèles. Près de 400 personnes, plus de 4 M$ par mois. Un employé a brûlé plus de 30 000 $ en une semaine pour régler seul un problème d'organisation d'assets. Le fondateur appelle ça une semaine positive, et prévoit 50 000 à 100 000 $ par mois pour ses meilleurs ingénieurs d'ici un an.

Un KPI de tokens est absurde comme objectif. Mais comme signal, il dit quelque chose : à quel point une personne a mis les agents dans sa façon de travailler.

C'est pour ça que ça déborde sur le recrutement. Indranil Ghoshal, neuf ans en produit, note que la « fluidité IA » est désormais testée en entretien, même dans les boîtes dont le produit n'a rien à voir avec l'IA. Rarement annoncée, elle s'invite dans les questions normales.

Sa consigne aux candidats me paraît la bonne, des deux côtés de la table : préparez une histoire honnête d'IA. Où elle vous a fait gagner du temps, et où vous l'avez contredite.
`,
  },
};

export default post;
