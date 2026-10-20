import type { Post } from "../posts";

const post: Post = {
  slug: "six-engineers-76-days",
  date: "2026-10-19",
  author: "Jacques Mougeot",
  category: "ai-teams",
  cover: {
    figure: { en: "30 → 6", fr: "30 → 6" },
    caption: { en: "engineers, in 76 days", fr: "ingénieurs, en 76 jours" },
  },
  image: {
    src: "/blog/img/six-engineers-76-days.png",
    width: 1200,
    height: 630,
    alt: { en: "Six engineers completed a 30-person project in 76 days", fr: "Six ingénieurs ont mené un projet de 30 personnes en 76 jours" },
    credit: "Kiro (AWS)",
    href: "https://kiro.dev/case-studies/bedrock/",
    focus: "left center",
  },
  sources: [
    {
      url: "https://kiro.dev/case-studies/bedrock/",
      en: "The case study published by AWS (Kiro)",
      fr: "L'étude de cas publiée par AWS (Kiro)",
    },
    {
      url: "https://throughawiderlens.substack.com/p/when-40-people-become-6-ai-is-rewriting",
      en: "The essay that draws the organizational question from it",
      fr: "L'essai qui en tire la question d'organisation",
    },
  ],
  en: {
    title: "Six engineers, 76 days: hiring has become an infrastructure decision",
    description:
      "AWS rebuilt a critical part of Bedrock with six engineers instead of thirty. When a team is six people, one wrong hire is a sixth of its capacity.",
    body: `
Thirty engineers for 12 to 18 months. Or six engineers for 76 days.

That's the choice an AWS team made to rebuild a critical part of Bedrock's inference engine, the one that routes billions of requests to the models.

The conventional estimate said 30 engineers, 12 to 18 months. Six experienced engineers did it in 76 days with coding agents, and AWS talks about individual productivity multiplied by 20, achieved by changing how they work, not just the tools.

What interests me isn't the productivity figure. It's what disappears along with the 24 roles.

Thirty people means several teams, managers, meetings, coordination. Six people is a group assembled around a problem, who solve it and move on to the next. Amazon has been working on this since 2024: Andy Jassy asked to raise the ratio of individual contributors per manager by at least 15%.

For hiring, it changes the equation.

In a team of thirty, an average hire gets diluted. In a team of six, it's a sixth of the capacity. Getting one person wrong is no longer an HR cost. It's an infrastructure risk.

And AWS's six weren't six promising juniors. They were six experienced engineers, chosen for it.
`,
  },
  fr: {
    title: "Six ingénieurs, 76 jours : recruter est devenu une décision d'infrastructure",
    description:
      "AWS a reconstruit une partie critique de Bedrock avec six ingénieurs au lieu de trente. Dans une équipe de six, une erreur de recrutement, c'est un sixième de la capacité.",
    body: `
Trente ingénieurs pendant 12 à 18 mois. Ou six ingénieurs pendant 76 jours.

C'est le choix qu'a fait une équipe d'AWS pour reconstruire une partie critique du moteur d'inférence de Bedrock, celui qui route des milliards de requêtes vers les modèles.

L'estimation classique disait 30 ingénieurs, 12 à 18 mois. Six ingénieurs expérimentés l'ont fait en 76 jours avec des agents de code, et AWS parle d'une productivité individuelle multipliée par 20, obtenue en changeant la façon de travailler, pas seulement les outils.

Ce qui m'intéresse n'est pas le chiffre de productivité. C'est ce qui disparaît avec les 24 postes.

Trente personnes, c'est plusieurs équipes, des managers, des réunions, de la coordination. Six personnes, c'est un groupe assemblé autour d'un problème, qui le règle et passe au suivant. Amazon y travaille depuis 2024 : Andy Jassy a demandé d'augmenter d'au moins 15 % le ratio de contributeurs individuels par manager.

Côté recrutement, ça change l'équation.

Dans une équipe de trente, un recrutement moyen se dilue. Dans une équipe de six, il représente un sixième de la capacité. Se tromper sur une personne n'est plus un coût RH. C'est un risque d'infrastructure.

Et les six d'AWS n'étaient pas six juniors prometteurs. C'étaient six ingénieurs expérimentés, choisis pour ça.
`,
  },
};

export default post;
