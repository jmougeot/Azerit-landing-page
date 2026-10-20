import type { ComponentType } from "react";
import { Body as ReadTheCode } from "./read-the-code-not-the-cv";
import { Body as FirstEmail } from "./first-email-engineers-answer";

// Every blog post, newest first. To publish one: write its body in a new file
// next to this one, add an entry here, and add its URL to public/sitemap.xml.
// The build prerenders /blog/<slug> from this list (see entry-prerender.tsx).
export type Post = {
  slug: string;
  title: string;
  // shown under the title in the index and used as the meta description
  description: string;
  date: string; // YYYY-MM-DD
  author: string;
  minutes: number;
  Body: ComponentType;
};

export const POSTS: Post[] = [
  {
    slug: "first-email-engineers-answer",
    title: "How to write a first email an engineer will answer",
    description:
      "Most recruiting messages get archived unread. Five rules for a first email that opens on the engineer's own work and gets a reply.",
    date: "2026-10-20",
    author: "Jacques Mougeot",
    minutes: 3,
    Body: FirstEmail,
  },
  {
    slug: "read-the-code-not-the-cv",
    title: "Read the code, not the CV",
    description:
      "A CV lists claims; a repository shows the work. What public code tells you about an engineer, what it doesn't, and how we match on it.",
    date: "2026-10-20",
    author: "Jacques Mougeot",
    minutes: 3,
    Body: ReadTheCode,
  },
];

export function formatDate(date: string) {
  // fixed locale and UTC so the prerendered markup matches every browser
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
