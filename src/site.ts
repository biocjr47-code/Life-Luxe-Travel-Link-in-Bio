/**
 * Site-wide truth for the link in bio.
 *
 * Everything here is taken from the live lifeluxetravel.com and
 * kept in step with the main site's src/data/site.ts. Nothing is
 * invented. If a number or a claim changes, change it HERE and
 * there — this file is the only place this page reads it from.
 */

export const SITE = {
  name: "Life Luxe Travel",
  legalName: "Life Luxe Travel, LLC",
  tagline: "Effortless Group Trips. Extraordinary Experiences.",
  url: "https://lifeluxetravel.com",
  phone: "(470) 993-0955",
  phoneHref: "tel:+14709930955",
  email: "info@lifeluxetravel.com",
  founder: "Terry Powell",
  role: "Founder & Travel Advisor",
} as const;

/**
 * LeadConnector hosted endpoints.
 *
 * PUBLIC by design — the same URL the live site exposes in its own
 * markup. No API token is involved, which is why this file is safe
 * to commit. The booking widget posts straight into the CRM with no
 * server of our own in the path.
 */
export const LEADCONNECTOR = {
  bookingWidget:
    "https://link.lifeluxetravel.com/widget/bookings/book-with-terry-powell",
} as const;

/**
 * Terry's real profiles, taken from the social row the live
 * lifeluxetravel.com renders in its own footer — not guessed from
 * the brand name. Every href below returns 200.
 *
 * Three of these were wrong or missing on the main site before this
 * was checked: YouTube's `@lifeluxetravel` 404s (the channel is
 * UCe0gXkrrc6aYrlNqfSpD_Hw, handle `@lifeluxetravel1448`); the
 * Facebook page is `thelifeluxetravel`, and plain
 * `facebook.com/lifeluxetravel` also returns 200, which is exactly
 * why it went unnoticed; TikTok was missing entirely.
 */
export const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/lifeluxetravel1/",
  },
  { name: "Facebook", href: "https://www.facebook.com/thelifeluxetravel" },
  { name: "TikTok", href: "https://www.tiktok.com/@terrytravelstheworld" },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCe0gXkrrc6aYrlNqfSpD_Hw",
  },
  { name: "Pinterest", href: "https://www.pinterest.com/lifeluxetravel" },
] as const;

/**
 * Real industry accreditations. The badge artwork is Terry's own,
 * from the live site's media library.
 */
export const CERTIFICATIONS = [
  {
    src: "images/badge-clia.jpg",
    alt: "Cruise Lines International Association member, 2026",
    name: "CLIA Member 2026",
  },
  {
    src: "images/badge-asta.jpg",
    alt: "American Society of Travel Advisors member",
    name: "ASTA Member",
  },
  {
    src: "images/badge-virgin-voyages.jpg",
    alt: "Virgin Voyages Certified First Mate",
    name: "Virgin Voyages Certified First Mate",
  },
  {
    src: "images/badge-natgeo-lindblad.jpg",
    alt: "National Geographic and Lindblad Expeditions certified advisor",
    name: "Nat Geo / Lindblad Expeditions",
  },
  {
    src: "images/badge-los-cabos.jpg",
    alt: "Los Cabos Specialist certification",
    name: "Los Cabos Specialist",
  },
] as const;

/**
 * Resolve a file in /public against the deploy's base path.
 *
 * Vite is configured with `base: "./"` so one build works at a
 * domain root, in a GitHub Pages project subfolder, and in whatever
 * directory a host drops it in. A bare "/images/..." would break in
 * two of those three, so every image on this page goes through
 * here.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
