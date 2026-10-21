// External links used across the site. Edit them here, nowhere else.

// Stripe payment link: Azerit subscription, 300 € per month.
export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/dRm9AUgfP9wqe6a73seIw02";

// Booking page for demos (Calendly, Cal.com, Google Calendar appointment
// schedule...). While empty, "book a demo" falls back to an email.
export const BOOKING_URL = "https://calendly.com/lumine-builds/azerit";

export const PRICE_EUR_MONTHLY = 300;

// The founders' LinkedIn profiles: on their cards, and in the structured data
// that tells search engines who runs Azerit and who writes the blog.
export const FOUNDERS = [
  { name: "Lumine Trentelivres", linkedin: "https://www.linkedin.com/in/lumine-trentelivres/" },
  { name: "Jacques Mougeot", linkedin: "https://www.linkedin.com/in/jacquesmougeot/" },
] as const;

// Azerit's own LinkedIn page, which search engines tie to the site through
// the structured data
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/azerit-ai/";
