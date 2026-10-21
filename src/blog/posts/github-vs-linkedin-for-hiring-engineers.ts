import type { Post } from "../posts";

const post: Post = {
  slug: "github-vs-linkedin-for-hiring-engineers",
  date: "2026-10-21",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "code vs CV", fr: "code vs CV" },
    caption: { en: "where to find the engineers you need", fr: "où trouver les ingénieurs qu'il vous faut" },
  },
  sources: [],
  en: {
    title: "GitHub or LinkedIn: where to find the engineers you want to hire",
    description:
      "LinkedIn shows what engineers say about their career, GitHub shows what they built. Who you find on each, what each signal is worth, and how to use both on one role.",
    body: `
When a team opens an engineering role, the search almost always starts on LinkedIn. It's where the profiles are, where the recruiter tools are, and where everyone else is searching too. GitHub is the other place engineers spend time, and it holds a very different kind of information. Neither is better in general. They answer different questions, and knowing which one you are asking saves days.

## Two different documents

A LinkedIn profile is a **career summary written by its owner**. Titles, companies, dates, a list of skills, sometimes a paragraph about what they're proud of. It's maintained mostly when people are looking for a job, and it's optimized to be found: the skills section is written for keyword searches.

A GitHub profile is a **record of work**. Repositories, commits, pull requests, code reviews, issues. Nobody writes it as a pitch; it accumulates as people build things in public. It's often incomplete, because most professional code is private, but what's there is the work itself.

So the first question is simple: do you need to know where someone has been, or what they can build?

## Who you find where

**LinkedIn has almost everyone.** Nearly every engineer with a few years of experience has a profile, including those who never write public code. For roles where public code is rare, such as engineering management, most embedded and enterprise work, or anything under strict confidentiality, it's often the only practical source.

**GitHub has a smaller, very different population.** Open source maintainers and contributors, engineers who build tools on the side, people in fields where the main libraries are open (infrastructure, developer tools, machine learning, web frameworks, data engineering). Many of them barely maintain a LinkedIn profile, and some don't have one at all. They are invisible to a keyword search on LinkedIn, which also means they receive fewer generic recruiter messages.

## What each signal is worth

On LinkedIn, the strongest signals are the **companies and the trajectory**: where someone worked, how long, how fast they took on responsibility. The weakest is the skills list: anyone can add "Kubernetes", and many do.

On GitHub, the strongest signals are **contributions to projects someone doesn't own**: a merged pull request means another maintainer read the code and accepted it. Code reviews, careful issues and tests come next. The weakest are the vanity numbers: stars, followers, and the density of the contribution graph, all of which can be inflated.

In short: LinkedIn tells you about context, GitHub about competence. A strong hire usually needs both, which is why the best searches use the two together.

## Reaching out

Engineers with a good profile get recruiter messages every week, and most of them are interchangeable: a title, a company, a salary range, "let's chat". On LinkedIn, your message lands in the same inbox as all the others.

What makes an engineer answer is a message that shows you looked at their work. GitHub gives you exactly that: a project, a pull request, a design choice to mention in the first line. We go into detail in [the first email engineers answer](/blog/first-email-engineers-answer).

One caution: GitHub is not a contact directory. Use the email the person published on their profile or site, or a professional address, write to people one at a time, and read [GitHub's Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies), which forbid using information from the site for spam.

## The cost

LinkedIn's recruiting tools are paid seats, and the price grows with the number of recruiters and the features you need. Searching GitHub is free, but the time isn't: reading profiles and code by hand takes 15 to 30 minutes per good candidate. We describe the full method in [how to source software engineers on GitHub](/blog/how-to-source-engineers-on-github).

## When to use which

Start on **LinkedIn** when:

- the role is about managing people or a function more than writing code;
- the work is mostly private by nature (banking cores, defense, most enterprise software);
- you need a specific employer background, such as someone who has scaled a team in a regulated company.

Start on **GitHub** when:

- the stack relies on open source libraries, and contributors to those libraries would be ideal hires;
- the role is hands-on and you care more about what someone can build than where they did it;
- you keep hearing the same twenty names on LinkedIn and need people nobody else is messaging.

## Using both on one role

The combination we recommend:

1. **Find on GitHub.** Start from the projects close to what the person will build, and list the people who did real work on them.
2. **Check on LinkedIn.** For each name, look at the career context: current company, seniority, location, whether a move makes sense now.
3. **Write about the work.** Open the message with what you saw on GitHub, not with the job description.

This finds people a LinkedIn search misses, and it gives you a better reason to write to them than anyone else has.

It's also exactly the work Azerit does for you: it reads GitHub for the engineers who have already built what you're hiring for, shows the projects behind each score, finds a professional email and drafts a first message about their own code. [Try it on one of your roles](/try).
`,
  },
  fr: {
    title: "GitHub ou LinkedIn : où trouver les ingénieurs que vous voulez recruter",
    description:
      "LinkedIn montre ce que les ingénieurs disent de leur carrière, GitHub ce qu'ils ont construit. Qui on trouve où, ce que vaut chaque signal, et comment combiner les deux sur un poste.",
    body: `
Quand une équipe ouvre un poste d'ingénieur, la recherche commence presque toujours sur LinkedIn. C'est là que sont les profils, les outils de recrutement, et tous les autres recruteurs. GitHub est l'autre endroit où les ingénieurs passent du temps, et on y trouve une information d'une tout autre nature. Aucun des deux n'est meilleur en général. Ils répondent à des questions différentes, et savoir laquelle on pose fait gagner des jours.

## Deux documents différents

Un profil LinkedIn est un **résumé de carrière écrit par son auteur**. Des titres, des entreprises, des dates, une liste de compétences, parfois un paragraphe sur ce dont la personne est fière. On le met à jour surtout quand on cherche un poste, et il est optimisé pour être trouvé : la section compétences est écrite pour les recherches par mots-clés.

Un profil GitHub est un **historique de travail**. Des dépôts, des commits, des pull requests, des code reviews, des issues. Personne ne l'écrit comme un argumentaire ; il s'accumule à mesure qu'on construit en public. Il est souvent incomplet, parce que l'essentiel du code professionnel est privé, mais ce qui s'y trouve est le travail lui-même.

La première question est donc simple : avez-vous besoin de savoir où quelqu'un est passé, ou ce qu'il sait construire ?

## Qui on trouve où

**Sur LinkedIn, il y a presque tout le monde.** Quasiment tout ingénieur avec quelques années d'expérience a un profil, y compris ceux qui n'écrivent jamais de code public. Pour les postes où le code public est rare, comme le management d'équipes techniques, la plupart des métiers de l'embarqué et du logiciel d'entreprise, ou tout ce qui est soumis à la confidentialité, c'est souvent la seule source réaliste.

**Sur GitHub, la population est plus petite et très différente.** Des mainteneurs et contributeurs open source, des ingénieurs qui construisent des outils à côté, des gens issus de domaines où les bibliothèques de référence sont ouvertes (infrastructure, outils pour développeurs, machine learning, frameworks web, data engineering). Beaucoup entretiennent à peine leur profil LinkedIn, et certains n'en ont pas. Ils sont invisibles pour une recherche par mots-clés sur LinkedIn, ce qui veut aussi dire qu'ils reçoivent moins de messages de recruteurs génériques.

## Ce que vaut chaque signal

Sur LinkedIn, les signaux les plus forts sont **les entreprises et la trajectoire** : où la personne a travaillé, combien de temps, à quelle vitesse elle a pris des responsabilités. Le plus faible est la liste de compétences : n'importe qui peut ajouter « Kubernetes », et beaucoup le font.

Sur GitHub, les signaux les plus forts sont **les contributions aux projets des autres** : une pull request fusionnée veut dire qu'un autre mainteneur a lu le code et l'a accepté. Viennent ensuite les code reviews, les issues bien écrites et les tests. Les plus faibles sont les chiffres de vanité : étoiles, followers, densité du graphe de contributions, qui peuvent tous être gonflés.

En résumé : LinkedIn renseigne sur le contexte, GitHub sur la compétence. Un bon recrutement a en général besoin des deux, et c'est pour ça que les meilleures recherches combinent les deux.

## La prise de contact

Les ingénieurs avec un bon profil reçoivent des messages de recruteurs chaque semaine, et la plupart sont interchangeables : un titre, une entreprise, une fourchette de salaire, « on en parle ? ». Sur LinkedIn, votre message arrive dans la même boîte que tous les autres.

Ce qui fait répondre un ingénieur, c'est un message qui montre qu'on a regardé son travail. GitHub vous donne exactement ça : un projet, une pull request, un choix de conception à citer dès la première ligne. On détaille tout ça dans [le premier email auquel les ingénieurs répondent](/blog/first-email-engineers-answer).

Une précaution : GitHub n'est pas un annuaire. Utilisez l'email que la personne a publié sur son profil ou son site, ou une adresse professionnelle, écrivez aux gens un par un, et lisez les [règles d'utilisation acceptable de GitHub](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies), qui interdisent d'utiliser les informations du site pour du spam.

## Le coût

Les outils de recrutement de LinkedIn sont des licences payantes, dont le prix grimpe avec le nombre de recruteurs et les fonctionnalités. Chercher sur GitHub est gratuit, mais pas le temps : lire des profils et du code à la main prend 15 à 30 minutes par bon candidat. On décrit toute la méthode dans [comment sourcer des développeurs sur GitHub](/blog/how-to-source-engineers-on-github).

## Quand utiliser lequel

Commencez par **LinkedIn** quand :

- le poste consiste plus à manager des personnes ou une fonction qu'à écrire du code ;
- le travail est privé par nature (cœurs bancaires, défense, la plupart des logiciels d'entreprise) ;
- vous cherchez un parcours précis, par exemple quelqu'un qui a fait grandir une équipe dans une entreprise réglementée.

Commencez par **GitHub** quand :

- la stack repose sur des bibliothèques open source, et que leurs contributeurs seraient des recrues idéales ;
- le poste est opérationnel et que ce que la personne sait construire compte plus que l'endroit où elle l'a fait ;
- vous voyez passer les vingt mêmes noms sur LinkedIn et qu'il vous faut des gens à qui personne n'écrit.

## Combiner les deux sur un poste

La combinaison qu'on recommande :

1. **Trouver sur GitHub.** Partez des projets proches de ce que la personne va construire, et listez ceux qui y ont fait un vrai travail.
2. **Vérifier sur LinkedIn.** Pour chaque nom, regardez le contexte de carrière : entreprise actuelle, séniorité, localisation, et si un changement a du sens maintenant.
3. **Écrire sur le travail.** Ouvrez le message sur ce que vous avez vu sur GitHub, pas sur la fiche de poste.

Vous trouvez ainsi des gens qu'une recherche LinkedIn rate, avec une meilleure raison de leur écrire que n'importe qui d'autre.

C'est aussi exactement le travail qu'Azerit fait pour vous : il lit GitHub pour trouver les ingénieurs qui ont déjà construit ce que vous recrutez, montre les projets derrière chaque score, trouve un email professionnel et rédige un premier message sur leur propre code. [Essayez-le sur un de vos postes](/try).
`,
  },
};

export default post;
