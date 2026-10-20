import type { Post } from "../posts";

const post: Post = {
  slug: "reviewing-is-the-skill-to-hire-for",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "interviews",
  cover: {
    figure: { en: "80%", fr: "80 %" },
    caption: { en: "of agent time spent waiting for a human", fr: "du temps des agents passé à attendre un humain" },
  },
  sources: [
    {
      url: "https://mindandmachineweekly.substack.com/p/the-six-to-one-workplace-what-anthropics",
      en: "Anthropic's two internal reports, summarized (with their limits) by Mind & Machine Weekly",
      fr: "Les deux rapports internes d'Anthropic, très bien résumés (avec leurs limites) par Mind & Machine Weekly",
    },
  ],
  en: {
    title: "The skill to hire for in 2027: reviewing",
    description:
      "At Anthropic, agent sessions spend 80% of their time waiting on a human. The bottleneck is no longer writing code but reviewing it, and almost no interview tests that.",
    body: `
At Anthropic, agent sessions spend 80% of their time waiting for a human. The bottleneck is no longer writing the code. It's reviewing it.

The report Anthropic published on its own teams is pretty clear. Agents there log six times more working hours than employees. "Meta-work" (writing instructions, having one agent check another, monitoring all of it) went from 10% to 22% of sessions. And reading everything their agents produce would take more than half the week.

In their interview rubrics, judgment and autonomy weigh more. Narrow expertise, less.

The rare skill is therefore review. Reading fast, reading right, spotting what's off in a perfectly plausible diff, and knowing how to say no.

Almost no interview process tests it. We still have someone write an algorithm on a whiteboard who will spend their days reviewing an agent's.

And almost no sourcing looks at it. We count commits, we list stacks. Yet on GitHub, a developer's public reviews often say more than their commits: what they notice, what they let through, how they argue a rejection in someone else's repository.

When I need to size up an engineer, that's where I look first.

If your technical interview doesn't include a single code review, you're assessing a job that is disappearing.
`,
  },
  fr: {
    title: "La compétence à recruter en 2027 : savoir relire",
    description:
      "Chez Anthropic, les sessions d'agents passent 80 % de leur temps à attendre un humain. Le goulot n'est plus d'écrire le code mais de le relire, et presque aucun entretien ne le teste.",
    body: `
Chez Anthropic, les sessions d'agents passent 80 % de leur temps à attendre un humain. Le goulot n'est plus d'écrire le code. C'est de le relire.

Le rapport publié par Anthropic sur ses propres équipes est assez net. Les agents y cumulent six fois plus d'heures de travail que les salariés. Le « méta-travail » (écrire des instructions, faire vérifier un agent par un autre, surveiller tout ça) est passé de 10 % à 22 % des sessions. Et lire tout ce que produisent leurs agents prendrait plus de la moitié de la semaine.

Dans leurs grilles d'entretien, le jugement et l'autonomie pèsent plus. L'expertise étroite, moins.

La compétence rare devient donc la review. Lire vite, lire juste, repérer ce qui cloche dans un diff parfaitement plausible, et savoir dire non.

Presque aucun process d'entretien ne la teste. On fait encore écrire un algo au tableau à quelqu'un qui passera ses journées à relire celui d'un agent.

Et presque aucun sourcing ne la regarde. On compte les commits, on liste les stacks. Pourtant, sur GitHub, les reviews publiques d'un dev en disent souvent plus que ses commits : ce qu'il remarque, ce qu'il laisse passer, comment il argumente un refus dans le dépôt de quelqu'un d'autre.

Quand je dois jauger un ingénieur, c'est là que je regarde en premier.

Si votre entretien technique ne contient pas une seule review de code, vous évaluez un métier qui est en train de disparaître.
`,
  },
};

export default post;
