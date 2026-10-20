import type { Post } from "../posts";

const post: Post = {
  slug: "your-vc-is-not-your-recruiter",
  date: "2026-10-18",
  author: "Jacques Mougeot",
  category: "sourcing",
  cover: {
    figure: { en: "30", fr: "30" },
    caption: { en: "portfolio companies per talent person at a16z", fr: "boîtes en portefeuille par personne de l'équipe talent d'a16z" },
  },
  image: {
    src: "/blog/img/your-vc-is-not-your-recruiter.jpg",
    width: 1200,
    height: 843,
    alt: { en: "A telephone operator at a switchboard", fr: "Une standardiste devant un standard téléphonique" },
    credit: "FWD Motion (Brian Fink), via Unsplash",
    href: "https://fwdmotion.substack.com/p/the-switchboard-problem",
  },
  sources: [
    {
      url: "https://fwdmotion.substack.com/p/the-switchboard-problem",
      en: "Brian Fink's analysis, The Switchboard Problem",
      fr: "L'analyse de Brian Fink, « The Switchboard Problem »",
    },
  ],
  en: {
    title: "a16z lays off its talent team: your VC is not your recruiter",
    description:
      "34 people for more than 1,000 portfolio companies. Why founders should build their own hiring machine early and keep investors for the few intros that matter.",
    body: `
a16z just laid off most of its talent team. 34 people for more than 1,000 portfolio companies.

The news broke in Axios last week. Those who remain are being moved into the investment teams (growth, crypto), which will each build their own talent pool.

Brian Fink, twenty years of recruiting at Twitter, AWS and Apple, did the math: about 30 companies per person. At that ratio, you're no longer recruiting. You forward profiles, organize dinners, make intros. He calls it a switchboard.

It's not an isolated case. Sequoia had already cut its portfolio talent team by about a third in 2023.

What I take from it, as a founder: your fund is not your recruiting function. It never really was.

The founders who hire well had understood that. They built their own machine early, and kept their investors for the two or three intros that really change the game.
`,
  },
  fr: {
    title: "a16z licencie son équipe talent : votre VC n'est pas votre recruteur",
    description:
      "34 personnes pour plus de 1 000 boîtes en portefeuille. Pourquoi les fondateurs doivent monter leur propre machine de recrutement tôt, et garder leurs investisseurs pour les quelques intros qui comptent.",
    body: `
a16z vient de licencier la majorité de son équipe talent. 34 personnes pour plus de 1 000 boîtes en portefeuille.

L'info est sortie dans Axios la semaine dernière. Les rescapés sont redistribués dans les équipes d'investissement (growth, crypto), qui monteront chacune leur propre vivier.

Brian Fink, vingt ans de recrutement chez Twitter, AWS et Apple, a fait le calcul : environ 30 boîtes par personne. À ce ratio, on ne recrute plus. On transfère des profils, on organise des dîners, on fait des intros. Il appelle ça un standard téléphonique.

Ce n'est pas un cas isolé. Sequoia avait déjà réduit d'environ un tiers son équipe talent portefeuille en 2023.

Ce que j'en retiens, côté fondateur : votre fonds n'est pas votre fonction recrutement. Il ne l'a jamais vraiment été.

Les fondateurs qui recrutent bien l'avaient compris. Ils ont monté leur propre machine tôt, et gardé leurs investisseurs pour les deux ou trois intros qui changent vraiment la donne.
`,
  },
};

export default post;
