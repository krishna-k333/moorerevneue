# MASTER PROMPT: MooreRevenue local SEO fixes

Paste everything below the line into Claude Code, run from this folder (`moorerevenue`, an Astro 7 + React + Tailwind 4 site).
The prompt is split into Phase 0 to Phase 7. Each phase can also be pasted alone. Do not deploy from this prompt.

---

## ROLE

You are a senior technical SEO engineer working inside the MooreRevenue repo. Your job is to remove every issue found in the 1 October 2026 local SEO audit by editing the code, then prove each fix with a build and a check script. You do not deploy, commit or push. You do not touch the Google Business Profile (you cannot); you write an owner checklist for it instead.

## GROUND RULES

1. Evidence only. Every change must trace to an audit finding listed below. Do not invent facts: no new reviews, no new addresses, no phone numbers, no awards, no client names, no statistics. If a value is needed and not given here, put it in `OWNER_DECISIONS.md` and leave the current value in place.
2. Do not change the visual design, layout, colours, fonts or component structure. Text, metadata, schema, links and one new page only.
3. No keyword stuffing. Titles read as natural English, 60 characters or fewer where possible, never more than 65.
4. Work only in `src/`, `public/`, and the new markdown files named below. Leave `dist/`, `.vercel/`, `node_modules/` and the other `.md`/`.txt` reference files alone.
5. Run the dev server only as `astro dev --background` (see CLAUDE.md). Verify with `npm run build`, never with a deploy.
6. Do not run `git commit`, `git push`, `vercel` or any deploy command. Leave changes in the working tree and finish with `git diff --stat`.
7. Before editing any file, read it. After each phase, run `npm run build` and fix errors before moving on.
8. When something is ambiguous, pick the safest option, record it in `OWNER_DECISIONS.md`, and continue. Do not stop to ask.

## AUDIT FACTS (the source of truth)

Business: MooreRevenue, Faridabad, Haryana, India. Site: https://www.moorerevenue.com (canonical is www; the non-www redirects with 308).
Google Business Profile (place ID `ChIJXWB8eXdhdEkRpxvky730FEE`, `/g/11zxq8vvvp`): name "MooreRevenue", claimed, primary category "Software company", one additional category "Service establishment", no phone, no address shown, no photos shown, hours "Open 24 hours", rating 5.0 from 1 review (21 September 2026, no owner reply), pin 28.4022656, 77.3190742, website https://moorerevenue.com/, description present (484 characters).
Site facts: phone shown as `+91 8287367640`, `+91-8287367640` and `+918287367640`; schema name "MooreRevenue - AI Automation & Voice Agent Agency" with alternateName "MooreRevenue" and "Moore Revenue Faridabad"; header and FAQ footer text also say "Moore Revenue"; schema address "Mathura Road, Faridabad, Haryana 121003" with geo 28.4089, 77.3178 (about 750 m from the profile pin); schema hours Monday to Saturday 09:00 to 20:00; `/contact` returns 404; zero ranked keywords in India per DataWise; 194 referring domains, mostly low-quality TLDs, spam score 47.

## THE ISSUES THIS PROMPT MUST REMOVE

Code issues (you fix these):

| ID | Issue | Evidence |
|----|-------|----------|
| W1 | The five service pages have no city in title or H1 | e.g. "AI Voice Agent Services \| MooreRevenue" |
| W2 | Homepage title and H1 disagree on the service, and neither matches the profile category | title "AI Automation and Web Development in Faridabad", H1 "AI Automation Agency in Faridabad" |
| W3 | Business name appears three ways | schema name, "Moore Revenue" with a space, "MooreRevenue" |
| W4 | Phone appears in three formats | `+91 8287367640`, `+91-8287367640`, `+918287367640` |
| W5 | Hours conflict between schema and profile | schema Mon to Sat 09:00 to 20:00, profile "Open 24 hours" |
| W6 | Address, geo and profile disagree | schema has a street name and a pin 750 m from the profile pin; profile shows no address; page text shows no postcode |
| W7 | No contact page | `/contact` is 404 |
| W8 | Local SEO and AEO service is missing from the schema offer catalog | homepage schema lists four offers, the site has five service pages |
| W9 | Two blog posts are not linked from the homepage | `/blog/what-is-n8n`, `/blog/what-is-tts-used-for` (blog hub linking not checked) |
| W10 | Business facts are duplicated across ~20 files | phone found in Layout, Footer, Hero, Navbar, AuditForm and every page |

Profile and off-site issues (you cannot fix these in code; you write ready-to-paste material and a checklist):

| ID | Issue |
|----|-------|
| P1 | No phone number on the profile |
| P2 | Hours "Open 24 hours" is probably wrong |
| P3 | One review, no owner reply |
| P4 | One generic additional category; four of five services have no category |
| P5 | No photos shown |
| P6 | Description leaves out Local SEO and any suburb |
| P7 | Listing did not appear in a logged-out Maps search for its own name (cause unknown) |
| P8 | Address hidden on profile while schema publishes a street name |
| P9 | Zero ranked keywords and zero crawled pages per DataWise |
| P10 | 194 low-quality referring domains, spam score 47 |

## PHASE 0: READ AND BASELINE

1. Read `CLAUDE.md`, `AGENTS.md`, `astro.config.mjs`, `src/layouts/Layout.astro`, `src/components/Footer.astro`, `src/components/Navbar.tsx`, `src/components/Hero.astro`, `public/robots.txt`, `public/sitemap.xml`.
2. Run `npm run build`. Save a baseline: for every HTML file in `dist/`, record title, H1, canonical, phone strings found, and JSON-LD types. Write it to `.seo-baseline.json` (gitignored is fine; add to `.gitignore` if not already ignored).
3. Report the baseline in two lines. Do not edit anything yet.

## PHASE 1: SINGLE SOURCE OF TRUTH FOR BUSINESS FACTS (W10, W3, W4)

Create `src/lib/business.ts` exporting one `BUSINESS` object:

- `name`: exactly `MooreRevenue` (one word, capital M and R).
- `legalDescriptor`: `AI Automation & Voice Agent Agency` (used only where a descriptor is needed, never as the name).
- `phoneDisplay`: `+91 8287367640`. This is the only visible and schema format.
- `phoneTel`: `+918287367640` (for `tel:` hrefs only).
- `whatsappUrl`: `https://wa.me/918287367640` (keep the existing destination).
- `url`: `https://www.moorerevenue.com`.
- `mapsUrl`: the existing `https://share.google/9eP7csF1sUEW5wZyT`.
- `placeId`: `ChIJXWB8eXdhdEkRpxvky730FEE`.
- `geo`: `{ latitude: 28.4022656, longitude: 77.3190742 }` (the profile pin, because the profile is the record Google already verified).
- `address`, `hours`, `serviceAreas`: see Phase 4. Until the owner decides, keep the values currently in `Layout.astro`, and add a `// OWNER DECISION: see OWNER_DECISIONS.md` comment.
- `services`: the five services with name, path and the city-qualified title (see Phase 2).

Then replace every hard-coded name and phone in `src/` with imports from this file: `Layout.astro`, `Footer.astro`, `Hero.astro`, `Navbar.tsx`, `AuditForm.tsx`, every file under `src/pages/`. Rules:

- Visible brand text "Moore Revenue" (with a space) becomes "MooreRevenue" everywhere, including FAQ text and footer.
- In schema, `name` becomes `MooreRevenue`. `alternateName` becomes `["Moore Revenue"]` only (the spaced spelling is what customers type; it is declared once, as an alternate, and never shown as the business name).
- Every visible phone and every schema `telephone` uses `phoneDisplay`. `tel:` and `wa.me` hrefs keep their machine format. Search `src/` for `8287367640` afterwards: no literal may remain outside `business.ts`.
- Leave blog post body copy alone unless it states the name or phone, in which case fix only that string.

## PHASE 2: TITLES AND H1s (W1, W2)

Set exactly these title tags (check length after build):

| Page | Title |
|------|-------|
| `/services/ai-voice-agent-faridabad` | AI Voice Agent Services in Faridabad \| MooreRevenue |
| `/services/ai-automation-agency-faridabad` | AI Workflow Automation in Faridabad \| MooreRevenue |
| `/services/whatsapp-automation-faridabad` | WhatsApp Business Automation in Faridabad \| MooreRevenue |
| `/services/website-development-faridabad` | Website Design and Development in Faridabad \| MooreRevenue |
| `/services/local-seo-aeo-faridabad` | Local SEO and AI Search Visibility in Faridabad \| MooreRevenue |
| `/services` | AI Automation, Website and SEO Services in Faridabad \| MooreRevenue |

For each of the five service pages, add "in Faridabad" to the H1 while keeping its wording (for example "AI voice agents for inbound calls in Hindi and English" becomes "AI voice agents in Faridabad for inbound calls in Hindi and English"). Read each H1 and make the smallest edit that reads naturally.

Homepage: the title and H1 must say the same service. Use title `AI Automation Agency in Faridabad | MooreRevenue` and keep the H1 `AI Automation Agency in Faridabad`. Move "voice agents, WhatsApp automation and websites" into the meta description, which must stay under 160 characters and keep "Faridabad".

Keep `og:title` and `twitter:title` equal to the title (already handled by `Layout.astro`). Do not change area, comparison, blog, portfolio, privacy or terms titles.

## PHASE 3: SCHEMA (W3, W5, W6, W8)

In `Layout.astro`, build the LocalBusiness JSON-LD from `BUSINESS`:

- `@type`: keep `["LocalBusiness", "ProfessionalService"]`; keep `@id`.
- `name`, `alternateName`, `telephone`, `url`, `geo` from `BUSINESS`.
- Add the fifth offer: `Local SEO and AI Search Visibility` (use the first sentence of the existing Local SEO service page description). Also keep the four existing offers.
- Add `identifier` / `sameAs`: keep existing `sameAs`, `hasMap` unchanged.
- Remove the `founder.telephone` duplicate only if it differs in format; otherwise leave it, now sourced from `BUSINESS`.
- Opening hours and address: render from `BUSINESS.hours` and `BUSINESS.address` (Phase 4).
- Validate that all JSON-LD blocks parse (`JSON.parse`) in the build check, and that exactly one LocalBusiness block appears per page.

## PHASE 4: OWNER-DECISION FIELDS (W5, W6)

These need a human answer. Do not guess. Implement them so a one-line change finishes the job.

1. Hours. Keep the schema hours as they are, in `BUSINESS.hours`. In `OWNER_DECISIONS.md`, ask: "What are the real working hours? The profile says Open 24 hours, the site says Mon to Sat 09:00 to 20:00. Whichever is true must be set in both places." Add the exact steps: edit `BUSINESS.hours`, then edit hours in the profile.
2. Address. In `OWNER_DECISIONS.md`, ask whether customers visit the office. Describe both outcomes:
   - Service-area business (matches the profile today): set `BUSINESS.address.public = false`. The schema then omits `streetAddress` and `postalCode`, keeps `addressLocality: Faridabad`, `addressRegion: Haryana`, `addressCountry: IN`, keeps `areaServed`, and the contact page shows the service area only.
   - Public address: set `public = true`, fill the full street address and postcode, and add the same address to the profile.
   Implement the switch with the default `public = false`, because the profile already hides the address and the schema should not publish what the profile does not.
3. `areaServed`: keep the list, but remove the entry `Worldwide / Global Remote` from schema `areaServed` and keep the remote line in visible text only. Flag it in `OWNER_DECISIONS.md` as a judgement call.

## PHASE 5: CONTACT PAGE AND INTERNAL LINKS (W7, W9)

1. Create `src/pages/contact.astro` using the existing `Layout`. Content, using only facts from `BUSINESS`: H1 `Contact MooreRevenue in Faridabad`; title `Contact MooreRevenue | AI Automation Agency in Faridabad`; business name; phone (`phoneDisplay`, with a `tel:` link); WhatsApp link; hours from `BUSINESS.hours`; service area list from `BUSINESS.serviceAreas`; address only if `BUSINESS.address.public`; the existing `AuditForm` component for enquiries; a link to the Maps listing (`mapsUrl`). Add `ContactPage` JSON-LD through the layout's existing schema slot. Match the existing page styling by reusing components and classes, not by adding new styles.
2. Add "Contact" to `Navbar.tsx` and the `Footer.astro` link list.
3. Add `/contact` to `public/sitemap.xml` with today's date, priority 0.8.
4. Blog: read `src/pages/blog/index.astro`. Confirm both posts are linked from it. Link the blog hub from the homepage footer if it is not already (it is in the nav; keep that). Add a "Latest guides" row of the two post links to the homepage only if an existing section can hold it without a layout change; otherwise add the two links to the footer under "Resources".
5. Update `lastmod` in `public/sitemap.xml` for every URL you changed.
6. Confirm `public/robots.txt` still allows everything and lists `Sitemap: https://www.moorerevenue.com/sitemap.xml` (add the line if missing).
7. Confirm every page has `<link rel="canonical">` pointing to its own `https://www.moorerevenue.com/...` URL (no trailing mismatch with the sitemap).

## PHASE 6: PROFILE AND OFF-SITE MATERIAL (P1 to P10)

Write `GBP_ACTIONS.md`. It is a checklist for the owner, with ready-to-paste text. Do not claim anything was done.

1. Phone (P1): paste `+91 8287367640` into Edit profile, Contact.
2. Hours (P2): paste the answer from `OWNER_DECISIONS.md`; remove "Open 24 hours" unless true.
3. Reviews (P3): a short WhatsApp message the owner can send to past clients asking for a Google review, with the profile review link placeholder `[PASTE REVIEW LINK FROM "Ask for reviews"]`. A reply to the existing review from Saroj Aggarwal (21 September 2026) of two sentences that thanks them, mentions the website project in Faridabad, and invites them back. Do not invent project details beyond what the review says ("website delivered in 7 days").
4. Categories (P4): keep "Software company" as primary. Replace "Service establishment" with specific additional categories from Google's list that fit what is sold; suggest "Web designer" and "Marketing agency" and say to pick only those the dashboard offers and the business really is.
5. Services (P4): list the five services with a one-line description each, copied from the matching service pages.
6. Photos (P5): list 8 photo types to upload (for example: office or workspace, a team photo, screenshots of delivered sites, a voice agent demo screen). State they must be real photos of the business.
7. Description (P6): use this text, then count the characters with a script and confirm it is at most 750:

   > MooreRevenue is an AI automation agency in Faridabad, Haryana. We build AI voice agents that answer calls in Hindi and English, WhatsApp automation, workflow and CRM automation, and fast business websites, plus local SEO and AI search visibility for Google Maps and answer engines. We work with clinics, manufacturers and service businesses across Faridabad, including Mathura Road, DLF Industrial Area, Ballabgarh, Greater Faridabad and Sector 15 and 16, and remotely across Delhi NCR. Most projects go live within two weeks. Message us on WhatsApp to book a free AI audit.

   If any claim in it is not supported by the site, remove it.
8. Visibility (P7): steps to check from the owner account whether the listing appears when searching "MooreRevenue Faridabad" on Maps, how to check for a suspension or "verification needed" notice, and what to try: set a service area, add a phone, add photos, post one Update.
9. Address (P8): the answer to the Phase 4 address decision, applied to the profile.
10. Indexing (P9): steps for Google Search Console: add the domain property, submit `https://www.moorerevenue.com/sitemap.xml`, request indexing for the homepage, five service pages and `/contact`, and read the Pages report for "not indexed" reasons. Note that DataWise showed zero ranked keywords, so the first goal is to confirm indexation.
11. Backlinks (P10): steps to export the 194 referring domains from Search Console Links (or the backlink tool), mark those on `.website`, `.space`, `.shop`, `.store`, `.site`, `.online` that look auto-generated, and submit them in a disavow file only after a manual review. State the risk: disavowing good links can hurt.

## PHASE 7: VERIFY EVERYTHING

Write `scripts/seo-check.mjs` (new file, plain Node, no dependencies). It reads every `dist/**/*.html` and fails (non-zero exit) on any of these:

- a page whose `<title>` is over 65 characters or empty;
- a service page (`/services/*-faridabad`) whose title or H1 lacks "Faridabad";
- the string `Moore Revenue` (with a space) appearing outside the `alternateName` array;
- any phone string other than `+91 8287367640`, `tel:+918287367640` and `wa.me/918287367640` (list each offender);
- a missing, duplicated or wrong `<link rel="canonical">`;
- JSON-LD that fails `JSON.parse`, more than one LocalBusiness block, a LocalBusiness `name` other than `MooreRevenue`, or an `offers` list with fewer than five items on the homepage;
- any URL in `public/sitemap.xml` with no matching file in `dist/`, or any built page missing from the sitemap (excluding `404`);
- `/contact` missing from `dist/`.

Then:

1. Run `npm run build && node scripts/seo-check.mjs`. Fix until it passes. Show the full output once it passes.
2. Print a before/after table from `.seo-baseline.json`: for each page, old title, new title, old H1, new H1.
3. Run `astro dev --background`, open `/`, `/contact`, one service page and one area page at 400 px width, confirm no layout change and no console errors, then `astro dev stop`.
4. Run `git diff --stat` and `git status --short`. List every new file.

## DELIVERABLES

- Edited site files under `src/` and `public/`.
- `src/lib/business.ts`, `src/pages/contact.astro`, `scripts/seo-check.mjs`.
- `OWNER_DECISIONS.md` (hours, address, areaServed, anything ambiguous).
- `GBP_ACTIONS.md` (profile and off-site checklist with ready text).
- A final report in chat with: the issue IDs fixed in code (W1 to W10), the issue IDs that need the owner (P1 to P10), anything you could not finish and why, and the exact command to deploy later. Do not run that command.

## DEFINITION OF DONE

All of W1 to W10 are fixed in the working tree, `scripts/seo-check.mjs` passes, the build passes, no design change is visible, nothing is committed, and nothing is deployed.

---

## RE-AUDIT AFTER DEPLOY (run later, not now)

After the owner deploys, answer the owner decisions, and updates the profile: re-run the audit with the DataWise tools for `moorerevenue.com` and place ID `ChIJXWB8eXdhdEkRpxvky730FEE`. Success targets: phone and hours match between profile and site, additional categories at least 3, reviews at least 5 with owner replies, service page titles carry the city, and the ranked keywords count above zero.
