# Google Business Profile and off-site checklist

Nothing here has been done. These are steps for the owner, with text ready to paste. Place ID: `ChIJXWB8eXdhdEkRpxvky730FEE`.

Do the two decisions in `OWNER_DECISIONS.md` first (hours and address). Several items below depend on them.

## P1. Phone number
- [ ] Edit profile > Contact > Phone. Paste: `+91 8287367640`

## P2. Hours
- [ ] Edit profile > Hours. Paste the hours you decided in `OWNER_DECISIONS.md`.
- [ ] Remove "Open 24 hours" unless the business is genuinely reachable 24 hours.

## P3. Reviews
- [ ] **Reply to the existing review** from Saroj Aggarwal (21 September 2026). Check it against the actual review text before posting:

  > Thank you, Saroj, for trusting us with your website project in Faridabad. We are glad it was delivered in 7 days, and you are always welcome back when you want to build on it.

- [ ] **Ask past clients for reviews.** Send this on WhatsApp to clients you have actually worked with:

  > Hi [Name], thank you for working with MooreRevenue. If you are happy with the result, would you leave a short Google review? It takes a minute and helps other Faridabad businesses find us. [PASTE REVIEW LINK FROM "Ask for reviews"]

  Do not offer anything in exchange for a review, and do not ask people who were not clients.

## P4. Categories
- [ ] Keep **Software company** as primary.
- [ ] Replace **Service establishment** with specific additional categories. Suggested: **Web designer** and **Marketing agency**. Pick only the ones the dashboard offers and that the business really is. Search the dashboard list for other close matches before settling.

**Services to add (copy from the matching service pages)**

| Service | Description |
|---|---|
| AI Voice Agents | AI voice agents for inbound calls, common inquiries, lead details, and appointment requests. |
| AI Workflow Automation | Automate repeatable business tasks, route inquiries, and connect your existing tools. |
| WhatsApp Business Automation | Automate WhatsApp inquiry responses, product information sharing, follow-ups, and conversation routing. |
| Website Design and Development | Plan and build a business website with clear pages, responsive layouts, useful content, and practical contact paths. |
| Local SEO and AI Search Visibility | Improve local search visibility with Google Business Profile, website content, business listing, and structured information support. |

## P5. Photos
Upload real photos of the business only. Suggested set of eight:
- [ ] Your workspace or office (if you want to show one)
- [ ] A photo of you or the team
- [ ] Screenshot of a delivered website, desktop view
- [ ] Screenshot of a delivered website, mobile view
- [ ] A voice agent demo screen
- [ ] A WhatsApp automation flow or conversation example
- [ ] A client project or meeting (with permission)
- [ ] Logo and a cover image

## P6. Description (574 characters, limit 750)
Paste into Edit profile > Business description:

> MooreRevenue is an AI automation agency in Faridabad, Haryana. We build AI voice agents that answer calls in Hindi and English, WhatsApp automation, workflow and CRM automation, and fast business websites, plus local SEO and AI search visibility for Google Maps and answer engines. We work with clinics, manufacturers and service businesses across Faridabad, including Mathura Road, DLF Industrial Area, Ballabgarh, Greater Faridabad and Sector 15 and 16, and remotely across Delhi NCR. Most projects go live within two weeks. Message us on WhatsApp to book a free AI audit.

I checked each claim against the site: Hindi and English voice agents, WhatsApp and workflow automation, websites, local SEO and the five areas all appear on current pages, and the site quotes "7 to 14 days" for go-live. "Clinics" comes from the Sector 15 and 16 page. If you cannot stand behind any claim, delete that sentence.

## P7. Listing did not appear in a logged-out Maps search
Cause unknown. Work through these in order:
- [ ] Sign in to the owner account and open the profile. Look for a banner such as "Verification needed", "Suspended" or "Not published".
- [ ] Open business.google.com and check the Status. Complete any pending verification.
- [ ] Logged out, search "MooreRevenue Faridabad" on Google Maps. Note whether it appears.
- [ ] If the address is hidden, set a **service area** (Faridabad plus the suburbs you serve).
- [ ] Add the phone, then photos (P1, P5).
- [ ] Publish one Update post (for example, a short note on a recent project).
- [ ] Re-check after a few days. If still missing, contact Business Profile support from the dashboard.

## P8. Address
- [ ] Apply the answer to the address question in `OWNER_DECISIONS.md`.
  - Service-area business: keep the address hidden and set the service area.
  - Public address: add the full street address and postcode to the profile, and make the pin match it.

## P9. Indexing (zero ranked keywords)
Zero ranked keywords means the first goal is confirming Google has indexed the site.
- [ ] Add `moorerevenue.com` as a **Domain property** in Google Search Console and verify it.
- [ ] Sitemaps > submit `https://www.moorerevenue.com/sitemap.xml`.
- [ ] URL Inspection > Request indexing for: the homepage, the five service pages, and `/contact`.
- [ ] After a few days, open Pages and read the "Not indexed" reasons. Fix any that appear.

The five service pages:
`/services/ai-voice-agent-faridabad`, `/services/ai-automation-agency-faridabad`, `/services/whatsapp-automation-faridabad`, `/services/website-development-faridabad`, `/services/local-seo-aeo-faridabad`.

## P10. Backlinks (194 referring domains, spam score 47)
- [ ] Export referring domains from Search Console > Links, or from your backlink tool.
- [ ] Mark domains on `.website`, `.space`, `.shop`, `.store`, `.site`, `.online` that look auto-generated.
- [ ] Review each one by hand. Only then consider a disavow file.
- [ ] Risk: disavowing good links can hurt rankings. Google says most sites never need a disavow. Skip it unless you see clearly manipulative links or a manual action notice.

## Also
- [ ] The profile website field still says `https://moorerevenue.com/`. Change it to `https://www.moorerevenue.com/` so it matches the site's canonical.
