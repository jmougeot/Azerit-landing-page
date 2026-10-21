import type { Post } from "../posts";

const post: Post = {
  slug: "how-to-source-engineers-on-github",
  date: "2026-10-21",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "7 steps", fr: "7 étapes" },
    caption: { en: "to source engineers on GitHub", fr: "pour sourcer des ingénieurs sur GitHub" },
  },
  sources: [
    {
      url: "https://docs.github.com/en/search-github/searching-on-github/searching-users",
      en: "GitHub Docs: searching for users",
      fr: "Documentation GitHub : rechercher des utilisateurs",
    },
    {
      url: "https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories",
      en: "GitHub Docs: searching for repositories",
      fr: "Documentation GitHub : rechercher des dépôts",
    },
    {
      url: "https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests",
      en: "GitHub Docs: searching issues and pull requests",
      fr: "Documentation GitHub : rechercher des issues et des pull requests",
    },
    {
      url: "https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies",
      en: "GitHub Acceptable Use Policies",
      fr: "Les règles d'utilisation acceptable de GitHub",
    },
  ],
  en: {
    title: "How to source software engineers on GitHub: a practical guide",
    description:
      "A step-by-step method to find engineers on GitHub: turn the role into code signals, search projects before people, read a profile in five minutes, and reach out the right way.",
    body: `
GitHub has more than 100 million developer accounts, and a good share of the engineers you want to hire have left public traces of their work there. Unlike a CV, that work isn't self-reported: it's the code, the reviews and the discussions themselves. We explained why that matters in [read the code, not the CV](/blog/read-the-code-not-the-cv). This guide is the how: the method we used by hand before we automated it, step by step.

## 1. Describe what the person will build, not the title

"Senior backend engineer" is a title. GitHub doesn't index titles, it indexes code. So before searching, translate the role into what the person will actually build, and from there into signals you can find in a repository:

- **The language and the ecosystem:** Go, Rust, TypeScript, Python, and the main frameworks around them.
- **The libraries:** the dependencies your codebase relies on. Someone who has contributed to one of them knows it from the inside.
- **The problem:** a payments ledger, a real-time order book, a data pipeline, a design system. Problems show up in repository names, topics and READMEs.

Take "backend engineer for our payments API". In signals, that becomes: Go or Java, PostgreSQL, idempotency, double-entry ledgers, webhooks, maybe a payment provider's SDK. That list is your search, not the job title.

## 2. Search projects before people

The most common mistake is to start with GitHub's user search. It mostly matches names, logins and locations, which tells you very little. Start with the work instead.

**Repository search** finds the projects close to your problem. Combine qualifiers:

- **topic:ledger language:go** for projects tagged with the topic, in the right language;
- **pushed:>2026-01-01** to keep only projects that are still alive;
- **stars:10..500** to skip the giant projects where thousands contribute, and the empty ones.

Then, on each relevant project, look at the people:

- **Insights, then Contributors:** who has written the code, and how much of it.
- **Pull requests:** in the repository's search bar, **is:pr is:merged** lists merged contributions. A merged pull request on a project someone doesn't own is one of the strongest signals there is: another maintainer read the code and accepted it.
- **Issues:** the people who report precise bugs, with a reproduction, usually understand the internals.

**The libraries you use are a goldmine.** Open the repositories of the dependencies your team relies on and look at their contributors. These people already know part of your stack better than most candidates you will ever interview.

**Dependents** work the other way round. On a library's page, Insights then Dependency graph then Dependents lists the public projects that use it. It's a quick way to find teams and individuals building with the same tools as you.

## 3. Then narrow down with user search

Once you know what you're looking for, user search becomes useful to filter by place:

- **type:user location:Paris language:go** returns accounts that list Paris and whose repositories are mostly in Go;
- **followers:>20** or **repos:>10** remove most empty accounts.

Two limits to keep in mind. The location field is free text: "Paris", "Paris, France", "France" and "Île-de-France" are all different strings, so try several. And language is computed from the person's own repositories, not from what they contribute to elsewhere: a core contributor to a big Rust project may have no Rust repository of their own.

## 4. Read a profile in five minutes

Here is the order we read a profile in, to decide quickly whether someone is worth a closer look:

1. **Pinned repositories:** what the person chose to show. Open one, read the README, then a couple of files.
2. **Contributions to other people's projects:** search **is:pr author:their-login -user:their-login is:merged**. It lists the pull requests they got merged on repositories they don't own. This is where real collaboration shows.
3. **Code reviews:** **reviewed-by:their-login** shows the pull requests they reviewed. Reviewing well is a senior skill, and it's rarely visible anywhere else.
4. **The code itself:** tests, structure, commit messages that explain why and not only what. You don't need to be an engineer to notice whether a project has tests and a clear README.
5. **Recency:** the last few months of activity. A skill used last week says more than one listed in 2019.

Ignore forks with no commits of their own: they are bookmarks, not work.

## 5. Know what the profile doesn't tell you

Public code is evidence, not a full picture. Three traps:

- **An empty profile proves nothing.** Many excellent engineers spend their best years on private codebases, and many have no time or wish for side projects. Some show their private activity as anonymous squares on the contribution graph; most don't.
- **Green squares can be gamed.** A dense contribution graph can be made of tiny automated commits. Read what is behind it.
- **Stars measure popularity, not skill.** A well-marketed weekend project can have more stars than a rigorous library everyone depends on.

Use GitHub to find people you would otherwise miss and to start the conversation on something real. Keep your interviews for the rest.

## 6. Reach out the right way

GitHub is not a messaging platform, and engineers notice when they are treated as a list. A few rules:

- **Use the contact the person chose to publish:** the email on their profile, their personal website, or a professional address. Don't dig emails out of commits.
- **Read GitHub's rules.** Its [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) forbid using information from the site for spam, including unsolicited emails. One personal message about someone's work is a different thing from a campaign, and it should stay that way.
- **In Europe, the GDPR applies.** Contacting someone for a job is usually done under legitimate interest: say where you found them, keep only what you need, and stop at the first "no".
- **Open on their work.** The project you found them through is the best first line you will ever have. We wrote a whole piece on it: [the first email engineers answer](/blog/first-email-engineers-answer).

## 7. Keep track, and know what it costs

Done properly, this takes time. Expect 15 to 30 minutes per good candidate between the project search, reading the profile and writing a message that isn't generic. For one role, that's a day or two to get a shortlist of twenty.

Keep a simple sheet per role: login, the project that brought you to them, what you noticed, the date of your message, the answer. After two or three roles, you'll know which searches work for your stack.

That day or two is exactly what Azerit automates. You describe the role in one sentence; it searches the projects and the contributions, ranks the engineers who have already built something close, shows the work behind each score, finds a professional email and drafts a first message about their own code. If you'd rather see it than do it by hand, [try it on one of your roles](/try).

## Cheat sheet

- Projects on your problem: **topic:<topic> language:<language> pushed:>2026-01-01**
- Merged work in a repository: **is:pr is:merged** in that repository
- A person's merged work on other projects: **is:pr author:<login> -user:<login> is:merged**
- What a person reviews: **reviewed-by:<login>**
- People in a city: **type:user location:<city> language:<language>**
- Teams using a library: Insights, then Dependency graph, then Dependents
`,
  },
  fr: {
    title: "Comment sourcer des développeurs sur GitHub : le guide pratique",
    description:
      "Une méthode pas à pas pour trouver des ingénieurs sur GitHub : traduire le poste en signaux, chercher les projets avant les personnes, lire un profil en cinq minutes, et les contacter correctement.",
    body: `
GitHub compte plus de 100 millions de comptes de développeurs, et une bonne partie des ingénieurs que vous voulez recruter y ont laissé des traces publiques de leur travail. Contrairement à un CV, ce travail n'est pas déclaratif : ce sont le code, les reviews et les discussions eux-mêmes. On a expliqué pourquoi ça compte dans [lisez le code, pas le CV](/blog/read-the-code-not-the-cv). Ce guide, c'est le comment : la méthode qu'on appliquait à la main avant de l'automatiser, étape par étape.

## 1. Décrire ce que la personne va construire, pas son titre

« Ingénieur backend senior » est un titre. GitHub n'indexe pas des titres, il indexe du code. Avant de chercher, traduisez donc le poste en ce que la personne va réellement construire, puis en signaux qu'on peut trouver dans un dépôt :

- **Le langage et l'écosystème :** Go, Rust, TypeScript, Python, et les principaux frameworks autour.
- **Les bibliothèques :** les dépendances sur lesquelles repose votre code. Quelqu'un qui a contribué à l'une d'elles la connaît de l'intérieur.
- **Le problème :** un registre de paiements, un carnet d'ordres temps réel, un pipeline de données, un design system. Les problèmes se lisent dans les noms de dépôts, les topics et les README.

Prenons « ingénieur backend pour notre API de paiement ». En signaux, ça donne : Go ou Java, PostgreSQL, idempotence, comptabilité en partie double, webhooks, peut-être le SDK d'un prestataire de paiement. C'est cette liste qui fait votre recherche, pas l'intitulé du poste.

## 2. Chercher les projets avant les personnes

L'erreur la plus courante est de commencer par la recherche d'utilisateurs de GitHub. Elle porte surtout sur les noms, les identifiants et les villes, ce qui dit très peu de choses. Commencez plutôt par le travail.

**La recherche de dépôts** trouve les projets proches de votre problème. Combinez les filtres :

- **topic:ledger language:go** pour les projets tagués avec ce sujet, dans le bon langage ;
- **pushed:>2026-01-01** pour ne garder que les projets encore vivants ;
- **stars:10..500** pour écarter les projets géants où des milliers de personnes contribuent, et les projets vides.

Puis, sur chaque projet pertinent, regardez les personnes :

- **Insights, puis Contributors :** qui a écrit le code, et quelle part.
- **Les pull requests :** dans la barre de recherche du dépôt, **is:pr is:merged** liste les contributions fusionnées. Une pull request fusionnée sur un projet qui n'est pas le sien est l'un des signaux les plus forts qui soient : un autre mainteneur a lu le code et l'a accepté.
- **Les issues :** ceux qui signalent des bugs précis, avec une reproduction, comprennent en général le fonctionnement interne.

**Les bibliothèques que vous utilisez sont une mine d'or.** Ouvrez les dépôts des dépendances de votre équipe et regardez leurs contributeurs. Ces personnes connaissent déjà une partie de votre stack mieux que la plupart des candidats que vous rencontrerez.

**Les Dependents** fonctionnent dans l'autre sens. Sur la page d'une bibliothèque, Insights, puis Dependency graph, puis Dependents liste les projets publics qui l'utilisent. C'est un moyen rapide de trouver des équipes et des personnes qui construisent avec les mêmes outils que vous.

## 3. Affiner ensuite avec la recherche d'utilisateurs

Une fois que vous savez ce que vous cherchez, la recherche d'utilisateurs devient utile pour filtrer par lieu :

- **type:user location:Paris language:go** renvoie les comptes qui indiquent Paris et dont les dépôts sont surtout en Go ;
- **followers:>20** ou **repos:>10** retirent la plupart des comptes vides.

Deux limites à garder en tête. Le champ de localisation est du texte libre : « Paris », « Paris, France », « France » et « Île-de-France » sont des chaînes différentes, essayez-en plusieurs. Et le langage est calculé sur les dépôts de la personne, pas sur ce à quoi elle contribue ailleurs : un contributeur majeur d'un gros projet Rust peut n'avoir aucun dépôt Rust à lui.

## 4. Lire un profil en cinq minutes

Voici l'ordre dans lequel on lit un profil, pour décider vite si quelqu'un mérite qu'on s'y attarde :

1. **Les dépôts épinglés :** ce que la personne a choisi de montrer. Ouvrez-en un, lisez le README, puis deux ou trois fichiers.
2. **Les contributions aux projets des autres :** cherchez **is:pr author:son-identifiant -user:son-identifiant is:merged**. Vous obtenez les pull requests fusionnées sur des dépôts qui ne sont pas les siens. C'est là que se voit la vraie collaboration.
3. **Les code reviews :** **reviewed-by:son-identifiant** montre les pull requests qu'elle a relues. Bien relire est une compétence de senior, et elle n'est presque jamais visible ailleurs.
4. **Le code lui-même :** des tests, une structure, des messages de commit qui expliquent pourquoi et pas seulement quoi. Pas besoin d'être ingénieur pour voir si un projet a des tests et un README clair.
5. **La fraîcheur :** l'activité des derniers mois. Une compétence utilisée la semaine dernière en dit plus qu'une compétence listée en 2019.

Ignorez les forks sans aucun commit de la personne : ce sont des favoris, pas du travail.

## 5. Savoir ce que le profil ne dit pas

Le code public est une preuve, pas un portrait complet. Trois pièges :

- **Un profil vide ne prouve rien.** Beaucoup d'excellents ingénieurs passent leurs meilleures années sur des codebases privées, et beaucoup n'ont ni le temps ni l'envie de faire des side projects. Certains affichent leur activité privée en cases anonymes sur le graphe de contributions, la plupart non.
- **Les cases vertes se fabriquent.** Un graphe de contributions très dense peut n'être fait que de micro-commits automatiques. Regardez ce qu'il y a derrière.
- **Les étoiles mesurent la popularité, pas le niveau.** Un projet du week-end bien marketé peut avoir plus d'étoiles qu'une bibliothèque rigoureuse dont tout le monde dépend.

Servez-vous de GitHub pour trouver des gens que vous auriez ratés et pour ouvrir la conversation sur quelque chose de réel. Gardez vos entretiens pour le reste.

## 6. Contacter correctement

GitHub n'est pas une messagerie, et les ingénieurs sentent tout de suite quand on les traite comme une liste. Quelques règles :

- **Utilisez le contact que la personne a choisi de publier :** l'email de son profil, son site personnel, ou une adresse professionnelle. N'allez pas extraire des emails des commits.
- **Lisez les règles de GitHub.** Ses [règles d'utilisation acceptable](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) interdisent d'utiliser les informations du site pour du spam, y compris des emails non sollicités. Un message personnel sur le travail de quelqu'un n'a rien à voir avec une campagne, et doit le rester.
- **En Europe, le RGPD s'applique.** Contacter quelqu'un pour un poste se fait en général sur la base de l'intérêt légitime : dites où vous l'avez trouvé, ne gardez que le nécessaire, et arrêtez au premier « non ».
- **Ouvrez sur son travail.** Le projet par lequel vous l'avez trouvé est la meilleure première phrase que vous aurez jamais. On y a consacré un article : [le premier email auquel les ingénieurs répondent](/blog/first-email-engineers-answer).

## 7. Suivre, et savoir ce que ça coûte

Bien fait, c'est long. Comptez 15 à 30 minutes par bon candidat entre la recherche de projets, la lecture du profil et un message qui ne soit pas générique. Pour un poste, ça fait un à deux jours pour une shortlist de vingt personnes.

Tenez un tableau simple par poste : identifiant, le projet qui vous a menés à la personne, ce que vous avez remarqué, la date du message, la réponse. Après deux ou trois postes, vous saurez quelles recherches marchent pour votre stack.

Ce jour ou deux, c'est exactement ce qu'Azerit automatise. Vous décrivez le poste en une phrase ; il cherche dans les projets et les contributions, classe les ingénieurs qui ont déjà construit quelque chose de proche, montre le travail derrière chaque score, trouve un email professionnel et rédige un premier message sur leur propre code. Si vous préférez le voir que le faire à la main, [essayez-le sur un de vos postes](/try).

## L'antisèche

- Les projets sur votre problème : **topic:<sujet> language:<langage> pushed:>2026-01-01**
- Le travail fusionné dans un dépôt : **is:pr is:merged** dans ce dépôt
- Le travail fusionné d'une personne sur d'autres projets : **is:pr author:<identifiant> -user:<identifiant> is:merged**
- Ce qu'une personne relit : **reviewed-by:<identifiant>**
- Les développeurs d'une ville : **type:user location:<ville> language:<langage>**
- Les équipes qui utilisent une bibliothèque : Insights, puis Dependency graph, puis Dependents
`,
  },
};

export default post;
