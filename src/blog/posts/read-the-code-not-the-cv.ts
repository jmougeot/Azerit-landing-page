import type { Post } from "../posts";

const post: Post = {
  slug: "read-the-code-not-the-cv",
  date: "2026-10-20",
  author: "Jacques Mougeot",
  category: "hiring-signals",
  cover: {
    figure: { en: "git log", fr: "git log" },
    caption: { en: "says more than a CV", fr: "en dit plus qu'un CV" },
  },
  sources: [],
  en: {
    title: "Read the code, not the CV",
    description:
      "A CV lists claims; a repository shows the work. What public code tells you about an engineer, what it doesn't, and how we match on it.",
    body: `
A CV is a list of claims: titles, years, a stack written as keywords. For engineers, most of the evidence of what they can actually do sits somewhere else, in the code they have published.

## What a CV can't tell you

"Senior backend engineer, 6 years, Go, Kubernetes" fits thousands of profiles. It tells you where someone sat, not what they built. Two engineers with that exact line can have spent those years on very different things: one on a billing service, the other on a distributed queue that has to hold under load. If your role needs the second, the keyword match is noise.

## What the code tells you

A public repository is a different kind of document. It shows:

- **What they build when nobody asks:** the topics of their projects, the problems they keep coming back to.
- **How they build it:** languages, dependencies, how the code is structured and tested.
- **How they work with others:** pull requests, code reviews, issues answered on projects they don't own.
- **Whether it's current:** a commit last week says more than a skill listed in 2019.

None of this is self-reported. That's the point.

## Matching on the work

When you open a role, you usually know the kind of system the person will build. So instead of searching for a title, we start from the role and look for developers who have already built something close: matching repository topics, languages and dependencies, and contributions that show depth rather than a weekend fork.

Every candidate in an Azerit shortlist comes with the projects and contributions behind their score, so you can check the reasoning yourself in a minute instead of taking a number on trust.

## What it doesn't do

Not every great engineer codes in public. Many spend their best years on private codebases, and plenty have neither the time nor the wish for side projects. A quiet GitHub profile is not a negative signal, and we don't treat it as one.

Public code is a way to find people you would otherwise miss, and to start the conversation on something real. It doesn't replace your interviews.

## Why it changes the first message

The biggest win isn't the search. Once you know what someone built, you finally have something worth saying to them. More on that in [how to write a first email an engineer will answer](/blog/first-email-engineers-answer).
`,
  },
  fr: {
    title: "Lisez le code, pas le CV",
    description:
      "Un CV liste des affirmations, un dépôt montre le travail. Ce que le code public dit d'un ingénieur, ce qu'il ne dit pas, et comment on s'en sert pour matcher.",
    body: `
Un CV est une liste d'affirmations : des titres, des années, une stack écrite en mots-clés. Pour un ingénieur, l'essentiel de la preuve de ce qu'il sait faire est ailleurs : dans le code qu'il a publié.

## Ce qu'un CV ne dit pas

« Ingénieur backend senior, 6 ans, Go, Kubernetes » correspond à des milliers de profils. Ça dit où la personne était assise, pas ce qu'elle a construit. Deux ingénieurs avec exactement cette ligne peuvent avoir passé ces années sur des choses très différentes : l'un sur un service de facturation, l'autre sur une file distribuée qui doit tenir la charge. Si votre poste demande le second, la correspondance de mots-clés n'est que du bruit.

## Ce que dit le code

Un dépôt public est un document d'une autre nature. Il montre :

- **Ce que la personne construit quand personne ne le lui demande :** les sujets de ses projets, les problèmes sur lesquels elle revient.
- **Comment elle le construit :** langages, dépendances, structure du code, tests.
- **Comment elle travaille avec les autres :** pull requests, code reviews, issues traitées sur des projets qui ne sont pas les siens.
- **Si c'est récent :** un commit la semaine dernière en dit plus qu'une compétence listée en 2019.

Rien de tout ça n'est déclaratif. C'est tout l'intérêt.

## Matcher sur le travail

Quand vous ouvrez un poste, vous savez en général quel genre de système la personne va construire. Alors au lieu de chercher un titre, on part du poste et on cherche les développeurs qui ont déjà construit quelque chose de proche : sujets de dépôts, langages et dépendances qui correspondent, et des contributions qui montrent de la profondeur plutôt qu'un fork du week-end.

Chaque candidat d'une shortlist Azerit arrive avec les projets et les contributions derrière son score : vous vérifiez le raisonnement vous-même en une minute, au lieu de croire un chiffre sur parole.

## Ce que ça ne fait pas

Tous les très bons ingénieurs ne codent pas en public. Beaucoup passent leurs meilleures années sur des codebases privées, et beaucoup n'ont ni le temps ni l'envie de faire des side projects. Un profil GitHub calme n'est pas un signal négatif, et on ne le traite pas comme tel.

Le code public sert à trouver des gens qu'on aurait ratés, et à ouvrir la conversation sur quelque chose de réel. Il ne remplace pas vos entretiens.

## Pourquoi ça change le premier message

Le plus grand gain n'est pas la recherche. Une fois qu'on sait ce que quelqu'un a construit, on a enfin quelque chose à lui dire. La suite dans [comment écrire un premier email auquel un ingénieur répond](/blog/first-email-engineers-answer).
`,
  },
};

export default post;
