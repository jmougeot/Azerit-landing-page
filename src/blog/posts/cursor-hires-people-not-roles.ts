import type { Post } from "../posts";

const post: Post = {
  slug: "cursor-hires-people-not-roles",
  date: "2026-10-20",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "#hiring-ideas", fr: "#hiring-ideas" },
    caption: { en: "names first, job descriptions later", fr: "des noms d'abord, la fiche de poste après" },
  },
  sources: [
    {
      url: "https://colossus.com/article/inside-cursor/",
      en: "Colossus's profile of Cursor, Inside Cursor",
      fr: "Le portrait de Cursor par Colossus, « Inside Cursor »",
    },
  ],
  en: {
    title: "Cursor doesn't hire for roles. It hires people.",
    description:
      "At Cursor, looking for a job is not a requirement for getting an offer. What their hiring says about finding engineers who are never on the market.",
    body: `
At Cursor, looking for a job is not a requirement for getting an offer.

It's spelled out in the company profile Colossus published. The secret of their hiring: the basic unit is not a job description. It's a person.

In most companies, you spot a gap, open a role, search LinkedIn for titles, and put names in a spreadsheet for a recruiter.

At Cursor, names circulate constantly in an internal channel, #hiring-ideas. Everyone sources, everyone closes. And the acceptance rate at Cursor, Colossus writes, "makes elite colleges look like summer camp."

The example that struck me: an engineer in Germany sends them a cold email. The founders fly out to meet him. He says no. A year later, they fly out again. This time he comes back with them to San Francisco.

"No" is often the start of the conversation.

The lesson I take from it: the best people are almost never looking. They're not in your applicants, nor behind "open to work" filters. You have to know who they are before you have a role to offer them.

And to know who they are, you have to look at what they do.
`,
  },
  fr: {
    title: "Cursor ne recrute pas pour un poste, il recrute une personne",
    description:
      "Chez Cursor, chercher un emploi n'est pas une condition pour recevoir une offre. Ce que leur recrutement dit de la façon de trouver des ingénieurs qui ne sont jamais sur le marché.",
    body: `
Chez Cursor, « chercher un emploi » n'est pas une condition pour recevoir une offre.

C'est écrit noir sur blanc dans le portrait de l'entreprise publié par Colossus. Le secret de leur recrutement : l'unité de base n'est pas une fiche de poste. C'est une personne.

Dans la plupart des boîtes, on constate un trou, on ouvre un poste, on cherche des titres sur LinkedIn, on met des noms dans un tableur pour un recruteur.

Chez Cursor, des noms circulent en continu dans un canal interne, #hiring-ideas. Tout le monde source, tout le monde « close ». Et le taux d'acceptation, écrit Colossus, fait passer les grandes universités pour des colonies de vacances.

L'exemple qui m'a marqué : un ingénieur en Allemagne leur envoie un email spontané. Les fondateurs prennent l'avion pour le rencontrer. Il refuse. Un an plus tard, ils reprennent l'avion. Cette fois, il revient avec eux à San Francisco.

« Non » est souvent le début de la conversation.

La leçon que j'en tire : les meilleurs ne sont presque jamais en recherche. Ils ne sont pas dans les candidatures, ni dans les filtres « open to work ». Il faut savoir qui ils sont avant d'avoir un poste à leur proposer.

Et pour savoir qui ils sont, il faut regarder ce qu'ils font.
`,
  },
};

export default post;
