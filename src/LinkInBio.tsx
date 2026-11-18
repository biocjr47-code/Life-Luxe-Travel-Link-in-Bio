import { CalendarDays, ChevronRight, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOCIAL_ICONS } from "./BrandIcons";
import { asset, CERTIFICATIONS, LEADCONNECTOR, SITE, SOCIAL } from "./site";

/**
 * TERRY POWELL'S LINK IN BIO.
 *
 * The page her Instagram, Facebook, TikTok and HiHello card point
 * at. Five blocks and nothing else: book a call, call, email, the
 * accreditations, the socials.
 *
 * ONE CARD. The column is cream on an ivory page with its own
 * shadow, so the portrait and the actions read as a single object
 * rather than a photograph pasted onto a blank sheet. Under the
 * portrait two washes carry the top half into the bottom — a sand
 * ramp picking up the warmth of the photograph, and the header's
 * own 135 degree pinstripe masked out as it falls.
 *
 * ALL THREE ACTIONS ARE THE SAME COMPONENT, full width. Call and
 * Email were a half-width pair for a while, which made them read as
 * lesser controls under the booking card. At full width each has
 * room for its second line, so Call and Email show the real number
 * and address instead of just naming themselves.
 *
 * SQUARE, with round icon affordances. Every button and card on
 * lifeluxetravel.com is square; the badges and chevrons are round
 * because those are icons, which is the same exception the site's
 * chat launcher makes. No emoji — the page this replaced opened
 * with four emoji bullet lines, which is the convention on these
 * pages and exactly what stopped it matching the brand.
 *
 * ELEVATED VIEWS, AND NOBODY IN THEM: Santorini, Rio, Austin. A
 * face behind a button competes with the portrait above it, and the
 * portrait is the only place on this page a real person belongs.
 *
 * NO CHROME. No header, no nav, no footer. This opens almost
 * entirely inside the Instagram and Facebook in-app browsers, from
 * a profile, by someone who already knows whose profile it was.
 *
 * KNOWN LIMIT — HERO RESOLUTION. terry-headshot.jpg is 600x600, the
 * largest portrait of Terry available. It runs at its natural 1:1
 * rather than being cropped into a taller frame, which is what
 * keeps the face a sensible size, but full-bleed it still lands
 * near 1.5x and is a touch soft on a 3x screen. Drop a
 * higher-resolution headshot in at the same path and this resolves
 * itself with no code change.
 */

/** One action card. */
function Action({
  href,
  image,
  focus,
  icon: Icon,
  label,
  sub,
}: {
  href: string;
  image: string;
  /** The card is a short band cut from a tall photograph. */
  focus: string;
  icon: LucideIcon;
  label: string;
  sub: string;
}) {
  const external = /^https?:/.test(href);

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative block overflow-hidden border border-rule no-underline transition-[border-color,box-shadow] duration-400 ease-luxe hover:border-brand hover:shadow-lift focus-visible:border-brand"
    >
      {/* Ground only — the label is the accessible name, so the
          photograph takes empty alt text. */}
      <img
        src={asset(image)}
        alt=""
        decoding="async"
        style={{ objectPosition: focus }}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.06]"
      />
      {/* Two scrims. The flat wash holds the bright photographs;
          the ramp keeps both lines of the label on near-solid plum
          while the photograph still reads at the chevron end. */}
      <span aria-hidden="true" className="absolute inset-0 bg-plum/30" />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-plum via-plum/88 to-plum/25"
      />

      <span className="relative flex items-center gap-4 px-5 py-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/45 transition-colors duration-400 ease-luxe group-hover:border-brand-lift">
          <Icon
            className="size-[19px] text-white transition-colors duration-400 group-hover:text-brand-lift"
            aria-hidden="true"
          />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display text-[1.1875rem] leading-[1.2] text-white">
            {label}
          </span>
          <span className="mt-0.5 block font-display text-[1rem] leading-[1.3] text-brand-lift italic">
            {sub}
          </span>
        </span>

        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/45 transition-[border-color,transform] duration-400 ease-luxe group-hover:translate-x-0.5 group-hover:border-brand-lift">
          <ChevronRight className="size-4 text-white" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}

export function LinkInBio() {
  return (
    <main className="min-h-screen bg-ivory sm:py-10">
      <div className="mx-auto w-full max-w-[30rem] bg-cream shadow-raise">
        {/* ── Portrait ──────────────────────────────────────────
            THE PORTRAIT RUNS AT ITS NATURAL 1:1, in flow, rather
            than being cropped to fill a taller frame. It is already
            a tight headshot; a 4:5 window made object-cover scale
            it a further 25% to cover the height, and the face
            filled the card.

            Measured on plum (#2b161b): white is 15.6:1, white/80 is
            about 11:1 and brand-lift is 8.7:1 — the only pink that
            clears 4.5:1 on a dark ground. */}
        <header className="relative overflow-hidden bg-plum">
          <img
            src={asset("images/terry-headshot.jpg")}
            alt={`${SITE.founder}, founder of ${SITE.name}`}
            width={600}
            height={600}
            className="block h-auto w-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-plum from-30% via-plum/72 to-plum/5"
          />

          {/* The full-colour medallion, not a white knockout: it is
              a closed mark with a cream face, so it carries its own
              ground and does not need the photograph to be light
              behind it. The shadow lifts the maroon ring off dark
              hair. Top-left because a portrait has exactly one
              reliably empty corner — centred, it sat on her
              forehead. */}
          <img
            src={asset("images/llt-logo.png")}
            alt={SITE.name}
            width={76}
            height={76}
            className="absolute top-5 left-5 size-[4.75rem] drop-shadow-[0_3px_10px_rgb(12_11_10/0.45)] sm:left-7"
          />

          {/* Overlaps the last quarter of the portrait and runs on
              into plum, so the block has room without sitting
              across her mouth. */}
          <div className="relative -mt-[6.5rem] px-6 pb-7 sm:px-8">
            <h1 className="font-display text-[2.625rem] leading-[0.94] tracking-[-0.025em] text-white">
              Terry
              <br />
              Powell
            </h1>
            <p className="mt-3.5 font-sans text-[0.625rem] font-bold tracking-[0.2em] text-brand-lift uppercase">
              {SITE.role}
            </p>
            <p className="mt-2.5 max-w-[22ch] font-display text-[1rem] leading-[1.45] text-white/80 italic">
              {SITE.tagline}
            </p>
          </div>
        </header>

        {/* ── The card's lower half ───────────────────────────── */}
        <div className="relative px-5 pt-8 pb-16 sm:px-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-b from-sand via-ivory/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[22rem] opacity-[0.045]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--color-plum) 0 1px, transparent 1px 11px)",
              maskImage: "linear-gradient(to bottom, #000, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, #000, transparent)",
            }}
          />

          <div className="relative">
            {/* Santorini: the caldera from the Greece journey, and
                the trip currently open for 2027. */}
            <Reveal>
              <Action
                href={LEADCONNECTOR.bookingWidget}
                image="images/greece-caldera.jpg"
                focus="center 55%"
                icon={CalendarDays}
                label="Book a call with me"
                sub="Let's plan yours"
              />
            </Reveal>

            {/* Rio from above and Austin at golden hour, to match
                the caldera above: three elevated views, one set.
                Both are destinations on Terry's own calendar and
                neither is captioned as a journey. */}
            <Reveal className="mt-3" delay={60}>
              <Action
                href={SITE.phoneHref}
                image="images/dest-rio.jpg"
                focus="center 52%"
                icon={Phone}
                label="Call"
                sub={SITE.phone}
              />
            </Reveal>
            <Reveal className="mt-3" delay={120}>
              <Action
                href={`mailto:${SITE.email}`}
                image="images/dest-austin.jpg"
                focus="center 38%"
                icon={Mail}
                label="Email"
                sub={SITE.email}
              />
            </Reveal>

            {/* ── Proof ────────────────────────────────────────
                Small and quiet. These are the reason to trust a
                stranger with a deposit; blowing them up would make
                the page look like it is pleading. */}
            <Reveal className="mt-10 border-t border-rule pt-8">
              <h2 className="text-center font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-muted uppercase">
                Certified &amp; accredited
              </h2>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.name}>
                    <img
                      src={asset(c.src)}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-8 w-auto object-contain opacity-80 mix-blend-multiply"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ── Socials ─────────────────────────────────────── */}
            <Reveal className="mt-10 text-center">
              <ul className="flex items-center justify-center gap-3">
                {SOCIAL.map((s) => {
                  const Icon =
                    SOCIAL_ICONS[s.name as keyof typeof SOCIAL_ICONS];
                  return (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${SITE.name} on ${s.name}`}
                        className="inline-flex size-11 items-center justify-center border border-ink/20 text-warm transition-colors duration-300 hover:border-brand hover:text-brand"
                      >
                        {Icon ? <Icon className="size-[18px]" /> : s.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={SITE.url}
                className="mt-7 inline-flex min-h-11 items-center justify-center px-4 font-sans text-[0.8125rem] font-bold tracking-[0.04em] text-ink no-underline transition-colors duration-300 hover:text-brand"
              >
                lifeluxetravel.com
              </a>

              <p className="mt-1 font-sans text-[0.75rem] leading-[1.6] text-muted">
                {SITE.legalName} · {SITE.phone}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
