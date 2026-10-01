# Owner decisions

## Answered on 1 October 2026

- **Hours:** Monday to Saturday, 9 am to 8 pm. Already set in `BUSINESS.hours`. The Google profile must be changed to match (see GBP_ACTIONS.md, P2).
- **Address:** service area only. `BUSINESS.address.public` stays `false`. The profile keeps the address hidden.
- **Pricing:** no prices for now. Each service page has a "how much does it cost" section that lists cost factors and offers a free quote, with no figures. To add prices later, edit the `CostFactors` blocks on the five service pages.

## Still open

These cannot be settled from code. Each is wired to a single setting in `src/lib/business.ts`, so your answer is a one-line change.

## 1. Working hours (W5, P2)

**Question:** What are the real working hours?

- The Google Business Profile says **Open 24 hours**.
- The site schema says **Monday to Saturday, 09:00 to 20:00**.

Whichever is true must be set in both places.

**Steps**
1. Edit `BUSINESS.hours` in `src/lib/business.ts` (schema and the contact page both read it).
2. Edit the hours in the Google Business Profile to match.

Current value kept in code: Monday to Saturday, 09:00 to 20:00.

## 2. Public address or service-area business (W6, P8)

**Question:** Do customers visit your office?

- **No (service-area business, matches the profile today).** Leave `BUSINESS.address.public = false`. This is the default now.
  - Schema omits `streetAddress` and `postalCode`, and keeps `addressLocality: Faridabad`, `addressRegion: Haryana`, `addressCountry: IN` and `areaServed`.
  - The contact page shows the service area only.
- **Yes (public address).** Set `BUSINESS.address.public = true`, fill the real `streetAddress` and `postalCode` in `src/lib/business.ts`, and add the same address to the Google Business Profile.

Note: the previous schema published "Mathura Road, 121003" with a pin about 750 m from the profile pin. The pin in code is now the profile pin (28.4022656, 77.3190742). If you publish an address, confirm the pin matches it.

## 3. `areaServed` judgement call

I removed `Worldwide / Global Remote` from schema `areaServed`. It is not a real place, and it blurs the local signal. The remote-work line stays in visible text only (footer, contact page). Add it back to `BUSINESS.serviceAreas` if you disagree.

## 4. Other choices I made without asking

- **Services index title shortened.** The brief asked for "AI Automation, Website and SEO Services in Faridabad | MooreRevenue" (67 characters), which breaks the 65-character cap in the same brief. I used "AI, Website and SEO Services in Faridabad | MooreRevenue" (56). Tell me if you want the longer one.
- **Long titles on pages I was told not to change.** These are over 65 characters and were left alone as instructed: all five area pages and the areas hub, the comparison page, the portfolio, the privacy policy. `scripts/seo-check.mjs` reports them as warnings, not failures. Worth shortening later.
- **"Moore Revenue" (with space).** The source had no visible spaced spelling; only the schema `alternateName`. It is now declared once, as an alternate name, and nowhere else.
- **Brand name in body copy.** I sourced the name from `BUSINESS` in the layout, footer, navbar and schema. Prose mentions of "MooreRevenue" inside page copy are still literal text; they were already spelled consistently.
- **Phone.** Every visible phone and schema `telephone` is `+91 8287367640`. `tel:` and `wa.me` links keep their machine format. The founder's separate `telephone` in schema was removed because it duplicated the business phone in a different format.
- **Sitemap.** Added `/contact`, `/privacy-policy` and `/terms-of-service` (the last two were built but missing). All `lastmod` dates set to 2026-10-01 because the footer and navbar changed on every page.
- **Homepage canonical** now has a trailing slash (`https://www.moorerevenue.com/`) to match the sitemap entry exactly.
- **Blog posts.** Both posts were already linked from the blog hub. I added them to the footer link list so they are reachable from every page, including the homepage.
