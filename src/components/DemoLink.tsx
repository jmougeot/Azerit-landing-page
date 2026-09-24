import type { ReactNode } from "react";
import { BOOKING_URL } from "../links";
import { Email } from "./Email";

// "Book a demo" link: opens the booking page when one is configured,
// otherwise falls back to a pre-filled demo request email.
export function DemoLink({ className, children }: { className?: string; children: ReactNode }) {
  if (BOOKING_URL) {
    return (
      <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Email user="lumine.builds" domain="gmail.com" subject="Azerit demo" className={className}>
      {children}
    </Email>
  );
}
