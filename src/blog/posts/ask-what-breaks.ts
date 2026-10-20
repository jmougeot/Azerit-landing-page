import type { Post } from "../posts";

const post: Post = {
  slug: "ask-what-breaks",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "interviews",
  cover: {
    figure: { en: "30 s", fr: "30 s" },
    caption: { en: "for Claude to answer your interview question", fr: "pour que Claude réponde à votre question d'entretien" },
  },
  sources: [
    {
      url: "https://garrettawolfe.substack.com/p/hiring-a-gtme-after-interviewing",
      en: "Garrett Wolfe's full method, with his questions and red flags",
      fr: "La méthode complète de Garrett Wolfe, avec ses questions et ses signaux d'alerte",
    },
  ],
  en: {
    title: "Your interview question just died: ask what breaks",
    description:
      "A candidate can have Claude answer a how-to question in 30 seconds. Ask what broke instead: only someone who has spent real hours in the tool can answer.",
    body: `
"Build me an email waterfall." The candidate has Claude do it in 30 seconds. Your interview question just died.

Garrett Wolfe ran more than 30 interviews to hire GTM engineers at OneGTM. His finding: procedural questions no longer test anything.

He no longer asks how to do something. He asks what breaks. Where does Clay give out? What errors have you run into in Claude Code?

Only someone who has spent real hours in the tool can answer. The others recite.

He also has this line, which I find very accurate: some of the worst candidates he saw had the most certifications.

Then comes a paid trial, on real tasks, with one candidate at a time.

It applies well beyond GTM engineers. For an engineer, the right question is no longer "implement a cache." It's "tell me about the last time a cache failed on you in production."

And often, the answer is already written down somewhere: in an issue, a PR, a public post-mortem.
`,
  },
  fr: {
    title: "Votre question d'entretien vient de mourir : demandez ce qui casse",
    description:
      "Un candidat fait répondre Claude à une question de procédure en 30 secondes. Demandez plutôt ce qui a cassé : seul quelqu'un qui a passé de vraies heures dans l'outil sait répondre.",
    body: `
« Construis-moi un waterfall d'emails. » Le candidat le fait faire à Claude en 30 secondes. Votre question d'entretien vient de mourir.

Garrett Wolfe a mené plus de 30 entretiens pour recruter des GTM engineers chez OneGTM. Son constat : les questions de procédure ne testent plus rien.

Il ne demande plus comment faire. Il demande ce qui casse. « Où est-ce que Clay lâche ? » « Quelles erreurs as-tu rencontrées dans Claude Code ? »

Seul quelqu'un qui a passé de vraies heures dans l'outil sait répondre. Les autres récitent.

Il a aussi cette phrase, que je trouve très juste : certains des pires candidats qu'il a vus avaient le plus de certifications.

Ensuite, un essai payé, sur de vraies tâches, avec un seul candidat à la fois.

Ça vaut bien au-delà des GTM engineers. Pour un ingénieur, la bonne question n'est plus « implémente un cache ». C'est « raconte-moi la dernière fois qu'un cache t'a lâché en prod ».

Et souvent, la réponse est déjà écrite quelque part : dans une issue, une PR, un post-mortem public.
`,
  },
};

export default post;
