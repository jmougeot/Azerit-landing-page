import type { Post } from "../posts";

const post: Post = {
  slug: "degrees-prove-nothing-work-does",
  date: "2026-10-20",
  author: "Jacques Mougeot",
  category: "hiring-signals",
  cover: {
    figure: { en: "68%", fr: "68 %" },
    caption: { en: "of students admit cheating with AI", fr: "des étudiants avouent tricher avec l'IA" },
  },
  sources: [
    {
      url: "https://openquestionsblog.substack.com/p/ai-is-killing-higher-ed-heres-how",
      en: "Victor Kumar, AI Is Killing Higher Ed. Here's How to Save It. (Open Questions)",
      fr: "Victor Kumar, AI Is Killing Higher Ed. Here's How to Save It. (Open Questions) : le sondage et sa conclusion",
    },
    {
      url: "https://www.science.org/doi/10.1126/science.aec5115",
      en: "The Science study he cites (9%)",
      fr: "L'étude de Science qu'il cite (9 %)",
    },
  ],
  en: {
    title: "Degrees no longer prove much. The work still does.",
    description:
      "A professor finds 68% of his students cheat with AI and warns that employers will trust degrees less. What to read instead when hiring engineers.",
    body: `
68% of his students admit to cheating with AI.

Victor Kumar, a university professor, put the question to his intro course in an anonymous survey: "In my intro course, 68% of students admitted to using LLMs in violation of course policies." In other courses than his own, he presumes, with some irony.

The largest published study on the subject, in Science, found 9%. But it used data from spring 2024, when generated text was still easy to spot.

What interests me is his conclusion. If universities do nothing, he says, employers will have no choice but to give less weight to degrees and transcripts.

The signal is drowning in noise.

For hiring engineers, the question becomes very concrete: if a grade no longer says what someone can do, what does?

My answer: what they have built, and what can be checked. A project that runs. Code reviewed by others. Choices they can defend when you ask about them.

It doesn't replace an education. But it can't be faked with a prompt.
`,
  },
  fr: {
    title: "Le diplôme ne prouve plus rien, le travail si",
    description:
      "Un professeur découvre que 68 % de ses étudiants trichent avec l'IA et prévient : les employeurs vont moins croire les diplômes. Ce qu'il faut lire à la place pour recruter des ingénieurs.",
    body: `
68 % de ses étudiants reconnaissent tricher avec l'IA.

C'est Victor Kumar, professeur d'université, qui a posé la question à son cours d'introduction. Sondage anonyme. 68 % admettent utiliser des LLM en violation des règles des cours. Dans les autres cours que le sien, suppose-t-il avec ironie.

La plus grande étude publiée sur le sujet, dans Science, donnait 9 %. Mais avec des données du printemps 2024, quand les textes générés étaient encore faciles à repérer.

Ce qui m'intéresse, c'est sa conclusion. Si les universités ne font rien, dit-il, les employeurs n'auront pas d'autre choix que d'accorder moins de poids aux diplômes et aux relevés de notes.

Le signal se noie dans le bruit.

Pour le recrutement d'ingénieurs, la question devient très concrète : si une note ne dit plus ce que la personne sait faire, qu'est-ce qui le dit ?

Ma réponse : ce qu'elle a construit, et qu'on peut vérifier. Un projet qui tourne. Du code relu par d'autres. Des choix qu'elle sait défendre quand on lui pose la question.

Ça ne remplace pas une formation. Mais ça ne se triche pas en un prompt.
`,
  },
};

export default post;
