import type { Post } from "../posts";

const post: Post = {
  slug: "ai-widens-the-engineer-gap",
  date: "2026-10-19",
  author: "Jacques Mougeot",
  category: "ai-teams",
  cover: {
    figure: { en: "×10", fr: "×10" },
    caption: { en: "gap between good and great engineers", fr: "d'écart entre bons et très bons ingénieurs" },
  },
  image: {
    src: "/blog/img/ai-widens-the-engineer-gap.jpg",
    width: 1200,
    height: 675,
    alt: { en: "Jad Naous on the a16z podcast", fr: "Jad Naous dans le podcast d'a16z" },
    credit: "© a16z, YouTube",
    href: "https://www.youtube.com/watch?v=blkIGLlZePg",
  },
  sources: [
    {
      url: "https://www.youtube.com/watch?v=blkIGLlZePg",
      en: "The a16z podcast episode with Jad Naous and Martin Casado",
      fr: "L'épisode du podcast a16z avec Jad Naous et Martin Casado",
    },
    {
      url: "https://x.com/a16z/status/2111887628798960024",
      en: "Aaron Levie's clip, posted by a16z",
      fr: "Le clip d'Aaron Levie, publié par a16z",
    },
  ],
  en: {
    title: "AI doesn't level engineers. It widens the gap tenfold.",
    description:
      "Jad Naous and Aaron Levie see the same thing: AI's biggest gains go to people who already hold the complexity. What that changes in how you hire engineers.",
    body: `
The gap between decent engineers and great ones has grown tenfold.

That's what Jad Naous, founder of Grepr, says on the a16z podcast. His team builds distributed systems. Since agents arrived, some learned to use them and others didn't, and with every new hire the gap widened.

His reason fits in one sentence: your brain has to hold the complexity, because the AI doesn't. The better you are at breaking a problem down, the more pieces of it you can hand off.

Aaron Levie, CEO of Box, says the same thing differently: the biggest gains from AI go to people who already have expertise, because they know what's true, what won't work, and what to keep from the model's output. Experts become more powerful.

We were sold the opposite: AI bringing everyone up to the same level.

If the gap is what's widening, hiring changes in nature. The question is no longer "can this person code?" Everyone produces code. The question is: what complexity has this person already held, on their own?

You can't read that in a job title. You read it in the systems they've built, the problems they've broken down, the decisions they made when the model was wrong.
`,
  },
  fr: {
    title: "L'IA ne nivelle pas les ingénieurs, elle multiplie l'écart par 10",
    description:
      "Jad Naous et Aaron Levie font le même constat : les plus gros gains de l'IA vont à ceux qui savent déjà tenir la complexité. Ce que ça change pour recruter des ingénieurs.",
    body: `
« L'écart entre les ingénieurs corrects et les très bons a été multiplié par 10. »

C'est Jad Naous, fondateur de Grepr, qui le dit dans le podcast d'a16z. Son équipe construit des systèmes distribués. Depuis l'arrivée des agents, certains ont appris à s'en servir, d'autres non, et à chaque nouveau recrutement l'écart s'est creusé.

Sa raison tient en une phrase : votre cerveau doit tenir la complexité, parce que l'IA ne le fait pas. Plus vous savez découper un problème, plus vous pouvez en déléguer de morceaux.

Aaron Levie, le CEO de Box, dit la même chose autrement : les plus gros gains de l'IA vont à ceux qui ont déjà une expertise, parce qu'ils savent ce qui est vrai, ce qui ne marchera pas, et ce qu'il faut garder de la sortie du modèle. « Les experts deviennent plus puissants. »

On nous avait vendu l'inverse : l'IA qui met tout le monde au niveau.

Si c'est l'écart qui se creuse, le recrutement change de nature. La question n'est plus « cette personne sait-elle coder ? ». Tout le monde produit du code. La question est : quelle complexité cette personne a-t-elle déjà tenue, seule ?

Ça ne se lit pas dans un titre de poste. Ça se lit dans les systèmes qu'elle a construits, les problèmes qu'elle a découpés, les décisions qu'elle a prises quand le modèle se trompait.
`,
  },
};

export default post;
