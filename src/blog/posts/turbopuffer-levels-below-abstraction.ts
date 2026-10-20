import type { Post } from "../posts";

const post: Post = {
  slug: "turbopuffer-levels-below-abstraction",
  date: "2026-10-20",
  author: "Jacques Mougeot",
  category: "interviews",
  cover: {
    figure: { en: "2-4", fr: "2 à 4" },
    caption: { en: "levels below the abstraction", fr: "niveaux sous l'abstraction" },
  },
  sources: [
    {
      url: "https://x.com/Sirupsen/status/1814383612566831512",
      en: "Simon Eskildsen's post on X",
      fr: "Le tweet de Simon Eskildsen",
    },
    {
      url: "https://x.com/vlad_mihalcea/status/2112098960584114261",
      en: "Vlad Mihalcea's post on Opus 5.5",
      fr: "Le tweet de Vlad Mihalcea sur Opus 5.5",
    },
  ],
  en: {
    title: "Turbopuffer's interview question: 2 to 4 levels below the abstraction",
    description:
      "Agents now write the first level of code. What to test in an engineering interview instead: how far down someone goes when it breaks.",
    body: `
- Can use an ORM.
- Can write good SQL.
- Understands how indexes work.
- Can tell you roughly how the data is laid out on disk.

That's Simon Eskildsen's grid, at Turbopuffer. The first thing he looks for in an interview, in his words: "whether someone has a history of understanding 2-4 levels below the abstractions they're working with."

He wrote it in 2024. I think it matters even more in 2026.

Because today, the first level is written by the agent. The ORM, the query, the component: Claude or Codex produce them very well.

Vlad Mihalcea said it this week: most of the time, Opus 5.5 proposes the solution he would have written. And now and then, design choices that would break in production.

Only someone who understands what lies underneath catches those mistakes.

For hiring, it changes the question. Not "can they use the tool?" Everyone can. Rather: "how far down do they go when it breaks?"

And that rarely shows on a CV. It shows in what the person built when they had to go down a level.
`,
  },
  fr: {
    title: "La question d'entretien de Turbopuffer : 2 à 4 niveaux sous l'abstraction",
    description:
      "Les agents écrivent désormais le premier niveau du code. Ce qu'il faut tester en entretien à la place : jusqu'où un ingénieur descend quand ça casse.",
    body: `
- Sait utiliser un ORM.
- Sait écrire du bon SQL.
- Comprend comment marchent les index.
- Sait dire, en gros, comment les données sont rangées sur le disque.

C'est la grille de Simon Eskildsen, de Turbopuffer. La première chose qu'il cherche en entretien : une personne qui a déjà compris 2 à 4 niveaux sous l'abstraction qu'elle utilise.

Il l'a écrit en 2024. Je trouve que ça vaut encore plus en 2026.

Parce que le premier niveau, aujourd'hui, c'est l'agent qui l'écrit. L'ORM, la requête, le composant : Claude ou Codex les produisent très bien.

Vlad Mihalcea le disait cette semaine : la plupart du temps, Opus 5.5 propose la solution qu'il aurait écrite. Et de temps en temps, des choix de conception qui casseraient en production.

Ces erreurs-là, seul quelqu'un qui comprend ce qu'il y a en dessous les voit.

Pour recruter, ça change la question. Pas « sait-il utiliser l'outil ? ». Tout le monde sait. Plutôt : « jusqu'où descend-il quand ça casse ? »

Et ça se voit rarement dans un CV. Ça se voit dans ce que la personne a construit quand elle a dû descendre d'un étage.
`,
  },
};

export default post;
