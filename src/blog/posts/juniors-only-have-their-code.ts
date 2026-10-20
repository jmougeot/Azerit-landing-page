import type { Post } from "../posts";

const post: Post = {
  slug: "juniors-only-have-their-code",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "hiring-signals",
  cover: {
    figure: { en: "27 → 9%", fr: "27 → 9 %" },
    caption: { en: "junior share of tech hires at Anthropic", fr: "part des juniors dans les recrutements tech chez Anthropic" },
  },
  image: {
    src: "/blog/img/juniors-only-have-their-code.png",
    width: 1200,
    height: 675,
    alt: { en: "Chart: the decline of entry-level technical hiring at Anthropic", fr: "Graphique : le déclin des embauches techniques juniors chez Anthropic" },
    credit: "© Anthropic, How employment is changing at Anthropic",
    href: "https://mindandmachineweekly.substack.com/p/the-six-to-one-workplace-what-anthropics",
  },
  sources: [
    {
      url: "https://mindandmachineweekly.substack.com/p/the-six-to-one-workplace-what-anthropics",
      en: "Mind & Machine Weekly's breakdown of Anthropic's two reports (Oct 16), with the Brynjolfsson, Chandar and Chen data",
      fr: "Le décryptage des deux rapports d'Anthropic (16 octobre) par Mind & Machine Weekly, avec les données de Brynjolfsson, Chandar et Chen",
    },
    {
      url: "https://sajjaad.substack.com/p/i-asked-a-linkedin-executive-if-the",
      en: "Sajjaad Khader's interview with Aneesh Raman, which features Cursor's new grad posting",
      fr: "L'interview d'Aneesh Raman par Sajjaad Khader, où l'on trouve l'offre new grad de Cursor",
    },
  ],
  en: {
    title: "27% to 9%: juniors only have their code left",
    description:
      "At Anthropic, juniors fell from 27% to 9% of technical hires. When degrees no longer separate anyone, what a junior has built and shipped is the only argument they control.",
    body: `
At Anthropic, the share of juniors in technical hires has fallen from 27% to 9% since early 2025. The junior who makes it won't have a better CV. They'll have a repository.

It's not an isolated case. Using ADP payroll data, Brynjolfsson, Chandar and Chen measure employment of 22 to 25 year olds 19% below trend in jobs exposed to AI. No wave of layoffs, just fewer hires.

Anthropic acknowledges it itself: none of its internal measures address this slowdown.

When the entry point narrows, degrees and internships no longer separate anyone. Everyone has them. The only argument a junior really controls is what they have built and published.

Cursor says it plainly in its new grad posting: show us something you've already built and shipped.

On the employer side, I see two mistakes. Cutting entry-level roles because agents code fast, forgetting that tomorrow's seniors are today's juniors. And sorting the few remaining juniors by school, when some already have a maintained project, issues handled, real users.

Those juniors exist. They're just invisible on a one-page CV.
`,
  },
  fr: {
    title: "27 % → 9 % : les juniors n'ont plus que leur code",
    description:
      "Chez Anthropic, les juniors sont passés de 27 % à 9 % des recrutements techniques. Quand le diplôme ne départage plus personne, ce qu'un junior a construit et publié est son seul argument.",
    body: `
Chez Anthropic, la part des juniors dans les recrutements techniques est passée de 27 % à 9 % depuis début 2025. Le junior qui s'en sortira n'aura pas un meilleur CV. Il aura un dépôt.

Ce n'est pas un cas isolé. Sur les données de paie ADP, Brynjolfsson, Chandar et Chen mesurent un emploi des 22-25 ans 19 % sous la tendance dans les métiers exposés à l'IA. Pas de vague de licenciements, simplement moins d'embauches.

Anthropic le reconnaît elle-même : aucune de ses mesures internes ne traite ce ralentissement.

Quand l'entrée se resserre, le diplôme et le stage ne départagent plus personne. Tout le monde en a. Le seul argument qu'un junior contrôle vraiment, c'est ce qu'il a construit et publié.

Cursor l'écrit noir sur blanc dans son offre new grad : montrez-nous quelque chose que vous avez déjà construit et shippé.

Côté employeurs, je vois deux erreurs. Couper l'entry-level parce que les agents codent vite, en oubliant que les seniors de demain sont les juniors d'aujourd'hui. Et trier les rares juniors restants sur l'école, alors que certains ont déjà un projet maintenu, des issues traitées, de vrais utilisateurs.

Ces juniors-là existent. Ils sont juste invisibles sur un CV d'une page.
`,
  },
};

export default post;
