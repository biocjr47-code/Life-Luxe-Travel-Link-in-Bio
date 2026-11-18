# Life Luxe Travel — Link in Bio

Terry Powell's link-in-bio page: the single page her Instagram,
Facebook, TikTok and HiHello card point at.

Five blocks and nothing else — **book a call, call, email, the
accreditations, the socials** — on one card, under her portrait.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build it

```bash
npm run build    # type-checks, then writes dist/
npm run preview  # serve dist/ locally
```

`dist/` is a plain static folder. It will run from a domain root, a
GitHub Pages project subfolder, or any directory a host drops it in,
because Vite is configured with `base: "./"` and every image goes
through `asset()` in `src/site.ts`. **There is no server and no
build-time secret.**

## Where to change things

| What | Where |
|---|---|
| Phone, email, tagline, role | `src/site.ts` → `SITE` |
| The booking link | `src/site.ts` → `LEADCONNECTOR` |
| Social profiles | `src/site.ts` → `SOCIAL` |
| Accreditation badges | `src/site.ts` → `CERTIFICATIONS` |
| Colours and type | `src/styles.css` → `@theme` |
| The three cards, the portrait | `src/LinkInBio.tsx` |

`src/site.ts` is the only place the page reads her details from.
Change them there, not in the markup.

## Design rules this page follows

These are carried over from lifeluxetravel.com, not invented here.
Breaking one makes the page stop looking like the brand.

- **Square.** Every card and button has no border-radius. The icon
  badges and chevrons are round because those are icons — the same
  exception the main site's chat launcher makes.
- **Playfair Display over Lato.** Playfair carries the voice, Lato
  does the work.
- **No emoji.** The page this replaced opened with four emoji bullet
  lines. That is the convention on link-in-bio pages and it is
  exactly what stopped it looking like Life Luxe.
- **No chrome.** No header, no nav, no footer. This opens inside the
  Instagram and Facebook in-app browsers, from a profile, by someone
  who already knows whose profile it is.
- **4.5:1 minimum on every piece of text.** The type over the
  photographs sits on two scrims for this reason. If you change a
  photograph, check the label is still readable against it — a
  bright image at the chevron end is the usual failure.
- **Only `--brand-lift` (`#f08fb4`) is legible on a dark ground.**
  Full-strength `--brand` cannot reach 4.5:1 on plum, however it
  looks on screen.

## Photographs

| File | Shown on | Source |
|---|---|---|
| `terry-headshot.jpg` | The portrait | Terry's own |
| `llt-logo.png` | The medallion | Life Luxe Travel |
| `greece-caldera.jpg` | Book a call | Terry's own, Santorini |
| `dest-rio.jpg` | Call | [Pexels](https://www.pexels.com/photo/aerial-view-of-rio-de-janeiro-7079778/) |
| `dest-austin.jpg` | Email | [Pexels](https://www.pexels.com/photo/skyscrapers-over-river-in-austin-in-texas-25003745/) |
| `badge-*.jpg` | Accreditations | Life Luxe Travel |

The two Pexels files are free for commercial use and need no
credit. They illustrate a **destination on Terry's calendar** and
are never captioned as a Life Luxe journey. The badges and the
portrait are hers.

> **A warning carried over from the main repo:** several photographs
> there are named for a place and have Terry standing in the middle
> of them — `sa-table-mountain-view.jpg`, `sa-waterfront.jpg`,
> `hero-cape-town.jpg`, `bali-rice-terrace.jpg`,
> `greece-erechtheion.jpg`. If you swap a card background, open the
> photograph. Do not trust the filename.

## Known limit

`terry-headshot.jpg` is 600×600 — the largest portrait of Terry
available. It runs at its natural 1:1 rather than being cropped into
a taller frame, which is what keeps the face a sensible size, but
full-bleed it still lands near 1.5× and is slightly soft on a 3×
phone screen.

**Dropping a higher-resolution headshot in at the same path fixes
this with no code change,** and is the single biggest improvement
available to this page.

## Relationship to the main site

This is a standalone copy, deliberately. It shares the design tokens
and Terry's details with the main Life Luxe Travel site but no
markup, so this page can be deployed and changed on its own.

**That cuts both ways:** if her phone number, booking link or a
social profile changes, it has to be changed in both places.
