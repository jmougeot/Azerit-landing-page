import type { Post } from "../posts";

const post: Post = {
  slug: "first-email-engineers-answer",
  date: "2026-10-20",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "1 line", fr: "1 ligne" },
    caption: { en: "the only one you know they will read", fr: "la seule dont on est sûr qu'elle sera lue" },
  },
  sources: [],
  en: {
    title: "How to write a first email an engineer will answer",
    description:
      "Most recruiting messages get archived unread. Five rules for a first email that opens on the engineer's own work and gets a reply.",
    body: `
Good engineers get a lot of recruiting messages, and most of them look the same: an exciting opportunity, a fast-growing startup, a role that will shape the future of something. They get skimmed and archived. The messages that get a reply usually do one thing differently: they show you looked at the person's work.

## 1. Open on something they built

The first line is the only one you can be sure they will read. Use it to name a specific project, pull request or piece of code, and why it caught your attention. "Your lock-free matching engine in rt-order-matching caught my eye" beats any adjective about your company. It proves the message was written for them, and gives them a reason to keep reading.

## 2. Connect it to the problem you're hiring for

Then say, in one sentence, why that work matters to you: "We're building a trading system with similar latency challenges." Engineers care about interesting problems more than about titles. If the link between their project and your role is real, this sentence does the selling.

## 3. Keep it short

Three or four sentences. No company history, no list of benefits, no bullet points of requirements. If they're interested they will ask, and the conversation that follows is where those details belong.

## 4. Ask one easy question

End on a question that takes five seconds to answer: "Interested?" or "Open to a 20-minute call this week?" One ask, low commitment.

## 5. Skip the patterns that get archived

- Subject lines with emojis, or with "exciting opportunity" in them.
- "I came across your profile" with nothing specific after it.
- Follow-ups that resurface the same generic pitch.
- Your funding round in the first line instead of their work.

## Putting it together

> Hi Léa, your lock-free matching engine in rt-order-matching caught my eye. We're building a trading system with similar latency challenges and looking for a Rust engineer. Interested?

That's the whole email. It's short because the research happened before it was written.

That research is the part Azerit does for you: it finds the engineers whose code matches your role and drafts each first email around their own work. [Try it on one of your open roles](/try).
`,
  },
  fr: {
    title: "Écrire un premier email auquel un ingénieur répond",
    description:
      "La plupart des messages de recrutement sont archivés sans être lus. Cinq règles pour un premier email qui part du travail de l'ingénieur et obtient une réponse.",
    body: `
Les bons ingénieurs reçoivent beaucoup de messages de recrutement, et la plupart se ressemblent : une opportunité passionnante, une startup en hypercroissance, un poste qui va façonner l'avenir de quelque chose. Ils sont survolés, puis archivés. Les messages qui obtiennent une réponse font en général une seule chose différemment : ils montrent que vous avez regardé le travail de la personne.

## 1. Ouvrez sur quelque chose qu'elle a construit

La première ligne est la seule dont vous êtes sûr qu'elle sera lue. Servez-vous-en pour nommer un projet, une pull request ou un morceau de code précis, et dire pourquoi il a retenu votre attention. « Ton moteur de matching lock-free dans rt-order-matching m'a tapé dans l'œil » vaut mieux que n'importe quel adjectif sur votre entreprise. Ça prouve que le message a été écrit pour elle, et ça lui donne une raison de continuer à lire.

## 2. Reliez-le au problème pour lequel vous recrutez

Puis dites, en une phrase, pourquoi ce travail compte pour vous : « On construit un système de trading avec des contraintes de latence proches. » Les ingénieurs s'intéressent plus aux problèmes intéressants qu'aux titres. Si le lien entre son projet et votre poste est réel, cette phrase fait la vente.

## 3. Faites court

Trois ou quatre phrases. Pas d'historique de l'entreprise, pas de liste d'avantages, pas de liste à puces de prérequis. Si la personne est intéressée, elle demandera, et c'est dans la conversation qui suit que ces détails ont leur place.

## 4. Posez une seule question, facile

Terminez sur une question à laquelle on répond en cinq secondes : « Ça t'intéresse ? » ou « Partant pour un appel de 20 minutes cette semaine ? » Une seule demande, peu d'engagement.

## 5. Évitez ce qui finit archivé

- Les objets avec des emojis, ou avec « opportunité passionnante ».
- « Je suis tombé sur ton profil » sans rien de précis derrière.
- Les relances qui renvoient le même pitch générique.
- Votre levée de fonds en première ligne au lieu de son travail.

## Tout ensemble

> Salut Léa, ton moteur de matching lock-free dans rt-order-matching m'a tapé dans l'œil. On construit un système de trading avec des contraintes de latence proches et on cherche un ingénieur Rust. Ça t'intéresse ?

C'est tout l'email. Il est court parce que la recherche a eu lieu avant de l'écrire.

Cette recherche, c'est la partie qu'Azerit fait pour vous : il trouve les ingénieurs dont le code correspond à votre poste et rédige chaque premier email autour de leur propre travail. [Essayez-le sur un de vos postes ouverts](/try).
`,
  },
};

export default post;
