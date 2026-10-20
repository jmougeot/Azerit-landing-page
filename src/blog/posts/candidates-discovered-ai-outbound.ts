import type { Post } from "../posts";

const post: Post = {
  slug: "candidates-discovered-ai-outbound",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "53%", fr: "53 %" },
    caption: { en: "of HR people annoyed by robotic AI outreach", fr: "des RH agacés par l'outreach IA robotique" },
  },
  image: {
    src: "/blog/img/candidates-discovered-ai-outbound.jpg",
    width: 1200,
    height: 675,
    alt: { en: "An inbox flooded with identical candidate emails", fr: "Une boîte mail inondée d'emails de candidats identiques" },
    credit: "Cutshort",
    href: "https://newsletter.cutshort.io/p/brace-yourself-candidates-are-coming",
  },
  sources: [
    {
      url: "https://newsletter.cutshort.io/p/brace-yourself-candidates-are-coming",
      en: "Nikunj's post (Cutshort) on candidates landing in founders' inboxes",
      fr: "Le post de Nikunj (Cutshort) sur les candidats qui débarquent dans l'inbox des fondateurs",
    },
    {
      url: "https://fwdmotion.substack.com/p/the-context-economy",
      en: "Brian Fink's analysis of the recruiter side, The Context Economy",
      fr: "L'analyse de Brian Fink sur le côté recruteurs, « The Context Economy »",
    },
  ],
  en: {
    title: "Candidates discovered AI outbound, and make the same mistakes as recruiters",
    description:
      "Candidates now mass-email founders with AI-personalized messages, and founders stopped reading them. Personalization is not specificity: what still gets a reply.",
    body: `
Candidates now write to founders in bulk, with an AI-"personalized" email. They're discovering what recruiters still haven't understood.

Nikunj, founder of Cutshort, says his inbox is filling up with these emails. Same opening line, same three bullet points, same "would love to connect." He used to read them. He doesn't anymore.

Brian Fink describes the mirror image on the recruiter side: a good engineer gets the same message, written by the same model, from ten agencies in the same week. And in a survey of more than 900 US HR professionals, 53% say they're annoyed by AI outreach that sounds robotic.

Same mistake on both sides: confusing personalization with specificity. Picking up the title, the company and three lines from the profile is a CV summary in paragraph form. It proves nothing.

What still gets a reply, according to Nikunj: a message sent to the 3 to 5 people actually hiring for the role, the week it opens, with a single concrete proof. A repo, a product, a number.

We see the same thing on our side. A generic InMail tops out at a 1 to 3% response rate. An email that cites a real project of the developer's goes above 30%. That's why the messages Azerit drafts always start from a specific project of the candidate, never from their profile.

Volume has become free. Relevance hasn't.

Candidate or recruiter, the only question that matters: what did you actually read about the other person before writing?
`,
  },
  fr: {
    title: "Les candidats ont découvert l'outbound IA, et font les mêmes erreurs que les recruteurs",
    description:
      "Les candidats écrivent en masse aux fondateurs avec des emails « personnalisés » par IA, et les fondateurs ont arrêté de les lire. Personnaliser n'est pas être spécifique : ce qui obtient encore une réponse.",
    body: `
Les candidats écrivent maintenant aux fondateurs en masse, avec un email « personnalisé » par IA. Ils découvrent ce que les recruteurs n'ont toujours pas compris.

Nikunj, fondateur de Cutshort, raconte que son inbox se remplit de ces emails. Même phrase d'ouverture, mêmes trois bullet points, même « would love to connect ». Il les lisait. Il ne les lit plus.

Brian Fink décrit le miroir côté recruteurs : un bon ingénieur reçoit le même message, écrit par le même modèle, depuis dix cabinets dans la même semaine. Et dans un sondage auprès de plus de 900 RH américains, 53 % se disent agacés par l'outreach IA qui sonne robotique.

Même erreur des deux côtés : on confond personnalisation et spécificité. Reprendre le titre, l'entreprise et trois lignes du profil, c'est un résumé de CV en paragraphe. Ça ne prouve rien.

Ce qui obtient encore une réponse, selon Nikunj : un message envoyé aux 3 à 5 personnes qui recrutent vraiment pour ce poste, la semaine où il s'ouvre, avec une seule preuve concrète. Un repo, un produit, un chiffre.

On voit la même chose de notre côté. Un InMail générique plafonne à 1 à 3 % de réponse. Un email qui cite un vrai projet du dev dépasse les 30 %. C'est pour ça que les messages rédigés par Azerit partent toujours d'un projet précis du candidat, jamais de son profil.

Le volume est devenu gratuit. La pertinence, non.

Candidat ou recruteur, la seule question qui compte : qu'avez-vous vraiment lu de l'autre avant d'écrire ?
`,
  },
};

export default post;
