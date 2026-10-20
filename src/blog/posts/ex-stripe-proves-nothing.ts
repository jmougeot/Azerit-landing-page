import type { Post } from "../posts";

const post: Post = {
  slug: "ex-stripe-proves-nothing",
  date: "2026-10-19",
  author: "Jacques Mougeot",
  category: "hiring-signals",
  cover: {
    figure: { en: "#112", fr: "n° 112" },
    caption: { en: "an employee number, not a proof", fr: "un matricule, pas une preuve" },
  },
  sources: [
    {
      url: "https://nextplayso.substack.com/p/how-to-assess-talent-density-at-a",
      en: "next play's essay on talent density, with its interview questions",
      fr: "L'essai de next play sur la densité de talent, avec ses questions d'entretien",
    },
  ],
  en: {
    title: "\"Ex-Stripe\" on your careers page proves nothing",
    description:
      "A logo on a CV says someone passed a hiring bar, not that they made a company win. Three questions to judge what people actually built.",
    body: `
"Our team is ex-Stripe, ex-Palantir, ex-Ramp, and early at Rippling."

That line is on a lot of startup careers pages. It proves nothing.

The reminder comes from next play, a newsletter that helps people choose their next job. Their example: in the 90s, two companies wanted to make online payments work. One was founded by the man who had built VeriFone, with two of the engineers who had built the Internet, including the inventor of the RFCs. The other, by young people with no track record.

The first, CyberCash, went bankrupt. The second was called PayPal.

"Employee #112 at Stripe" says one thing: the person cleared Stripe's hiring bar. Not that they made Stripe win.

Their method for judging a company's talent density comes down to three questions. What real results did these people produce before? Which are they producing now? Does their experience fit the current problem? And one interview question I find formidable: what have you built for the company in the last 30 days, and what effect did it have?

It's written for candidates evaluating a startup. It applies exactly as much the other way around.

When you hire, the logo on the CV is the most expensive and least informative proxy there is. What the person actually built, on the other hand, is often public: their repositories, their PRs, their projects.

That's Azerit's bet: read the work, not the CV. The logo comes after, if it comes at all.
`,
  },
  fr: {
    title: "« Ex-Stripe » sur votre page carrière ne prouve rien",
    description:
      "Un logo sur un CV dit que la personne a passé une barre d'embauche, pas qu'elle a fait gagner l'entreprise. Trois questions pour juger ce qu'elle a vraiment construit.",
    body: `
« Nos équipes sont ex-Stripe, ex-Palantir, ex-Ramp, et early chez Rippling. »

Cette ligne est sur beaucoup de pages carrière de startups. Elle ne prouve rien.

Le rappel vient de next play, une newsletter qui aide les gens à choisir leur prochain poste. Leur exemple : dans les années 90, deux boîtes voulaient faire marcher le paiement en ligne. L'une était fondée par l'homme qui avait construit VeriFone, avec deux des ingénieurs qui avaient bâti Internet, dont l'inventeur des RFC. L'autre, par des jeunes sans palmarès.

La première, CyberCash, a fait faillite. La seconde s'appelait PayPal.

« Employé n° 112 chez Stripe » dit une chose : la personne a passé la barre d'embauche de Stripe. Pas qu'elle a fait gagner Stripe.

Leur méthode pour juger la densité de talent d'une boîte tient en trois questions. Quels résultats réels ces gens ont-ils produits avant ? Lesquels produisent-ils maintenant ? Leur expérience colle-t-elle au problème actuel ? Et une question d'entretien que je trouve redoutable : qu'avez-vous construit pour la boîte ces 30 derniers jours, et quel effet ça a eu ?

C'est écrit pour les candidats qui évaluent une startup. Ça vaut exactement autant dans l'autre sens.

Quand on recrute, le logo sur le CV est le proxy le plus cher et le moins informatif qui existe. Ce que la personne a réellement construit, lui, est souvent public : ses dépôts, ses PR, ses projets.

C'est le pari d'Azerit : lire le travail, pas le CV. Le logo vient après, s'il vient.
`,
  },
};

export default post;
