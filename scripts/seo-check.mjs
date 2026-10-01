// Post-build SEO checks. Run after `npm run build`: node scripts/seo-check.mjs
// Plain Node, no dependencies. Exits non-zero if any check fails.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
const SITE = "https://www.moorerevenue.com";
const NAME = "MooreRevenue";

const failures = [];
const warnings = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const titles = {};
const h1s = {};

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'");

if (!existsSync(DIST)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

const pages = walk(DIST).map((file) => {
  const rel = relative(DIST, file).split(sep).join("/");
  const path = "/" + rel.replace(/(^|\/)index\.html$/, "").replace(/\.html$/, "");
  const html = readFileSync(file, "utf8");
  return { file, path: path === "/" || path.endsWith("/") ? path : path, html, redirect: /<title>Redirecting to:/.test(html) };
});

const real = pages.filter((p) => !p.redirect && p.path !== "/404");
const pathKey = (p) => (p === "" ? "/" : p);

for (const p of real) {
  const { html } = p;
  const label = p.path;
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? decode(titleMatch[1]).trim() : "";
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1 = h1Match ? decode(h1Match[1].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim() : "";

  // Title
  if (!title) fail(label, "empty <title>");
  else if (title.length > 65) fail(label, `title is ${title.length} chars (max 65): "${title}"`);
  else if (title.length > 60) warn(label, `title is ${title.length} chars (60 or fewer is better): "${title}"`);

  // Title and H1 must be unique across the site
  (titles[title] ??= []).push(label);
  if (h1) (h1s[h1] ??= []).push(label);

  // Meta description present, not too long
  const metaDesc = html.match(/<meta name="description" content="([^"]*)"/);
  const descText = metaDesc ? decode(metaDesc[1]) : "";
  if (!descText) fail(label, "missing meta description");
  else if (descText.length > 160) fail(label, `meta description is ${descText.length} chars (max 160)`);

  // Service and area pages must carry the city everywhere it matters
  const isService = /^\/services\/[^/]+-faridabad$/.test(label);
  const isArea = /^\/areas-we-serve\/[^/]+$/.test(label);
  if (isService) {
    if (!/Faridabad/.test(title)) fail(label, `title lacks "Faridabad": "${title}"`);
    if (!/Faridabad/.test(h1)) fail(label, `H1 lacks "Faridabad": "${h1}"`);
    if (!/Faridabad/.test(descText)) fail(label, "meta description lacks \"Faridabad\"");
    // Faridabad must also appear in the body, not only in the nav and footer
    const afterH1 = html.slice(html.indexOf("</h1>"), html.indexOf("<footer"));
    const bodyText = afterH1.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
    const bodyMentions = (bodyText.match(/Faridabad/g) || []).length;
    if (bodyMentions < 3) fail(label, `"Faridabad" appears only ${bodyMentions}x in the body (need 3 or more)`);
    // Service schema and cost section
    const hasService = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].some((m) => { try { return JSON.parse(m[1])["@type"] === "Service"; } catch { return false; } });
    if (!hasService) fail(label, "no Service JSON-LD");
    if (!/<h2[^>]*>[^<]*(cost|charge)[^<]*<\/h2>/i.test(html.replace(/\s+/g, " "))) fail(label, "no cost or pricing section (H2)");
    if (!/href="\/#audit-section"/.test(html)) fail(label, "no link to the audit form");
  }
  if (isArea && !/Faridabad/.test(title)) fail(label, `title lacks "Faridabad": "${title}"`);

  // Brand name: no spaced spelling outside alternateName
  const withoutAlt = html.replace(/"alternateName":\s*\[[^\]]*\]/g, "");
  const spaced = withoutAlt.match(/Moore Revenue/g);
  if (spaced) fail(label, `"Moore Revenue" (with space) appears ${spaced.length}x outside alternateName`);

  // Phone formats
  const stripped = html
    .replace(/tel:\+918287367640/g, "")
    .replace(/wa\.me\/918287367640/g, "")
    .replace(/\+91 8287367640/g, "");
  const offenders = new Set([
    ...(stripped.match(/\+?91[\s-]*8287367640/g) || []),
    ...(stripped.match(/8287367640/g) || []),
    ...(stripped.match(/\+91[\s-]?\d{5}[\s-]?\d{5}/g) || []),
  ]);
  for (const o of offenders) fail(label, `unexpected phone string "${o}"`);

  // Canonical
  const canon = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
  const expected = SITE + (label === "/" ? "/" : label);
  if (canon.length === 0) fail(label, "missing canonical");
  else if (canon.length > 1) fail(label, `duplicate canonical (${canon.length})`);
  else if (canon[0] !== expected) fail(label, `canonical is ${canon[0]}, expected ${expected}`);

  // JSON-LD
  let localBusinessCount = 0;
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let json;
    try {
      json = JSON.parse(m[1]);
    } catch (e) {
      fail(label, `JSON-LD does not parse: ${e.message}`);
      continue;
    }
    const types = [].concat(json["@type"] ?? []);
    if (types.includes("LocalBusiness")) {
      localBusinessCount++;
      if (json.name !== NAME) fail(label, `LocalBusiness name is "${json.name}", expected "${NAME}"`);
      if (label === "/") {
        const offers = json.hasOfferCatalog?.itemListElement ?? [];
        if (offers.length < 5) fail(label, `homepage LocalBusiness has ${offers.length} offers, need at least 5`);
      }
    }
  }
  if (localBusinessCount !== 1) fail(label, `${localBusinessCount} LocalBusiness JSON-LD blocks (expected exactly 1)`);

  // Homepage description
  if (label === "/") {
    const d = html.match(/<meta name="description" content="([^"]*)"/);
    const desc = d ? decode(d[1]) : "";
    if (!desc) fail(label, "missing meta description");
    else {
      if (desc.length > 160) fail(label, `meta description is ${desc.length} chars (max 160)`);
      if (!/Faridabad/.test(desc)) fail(label, 'meta description lacks "Faridabad"');
    }
  }
}

// Duplicate titles and H1s
for (const [t, where] of Object.entries(titles)) if (where.length > 1) fail(where.join(", "), `duplicate title "${t}"`);
for (const [h, where] of Object.entries(h1s)) if (where.length > 1) fail(where.join(", "), `duplicate H1 "${h}"`);

// Sitemap vs dist
const sitemapPath = "public/sitemap.xml";
const sitemap = readFileSync(sitemapPath, "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const locPaths = new Set();
for (const loc of locs) {
  if (!loc.startsWith(SITE)) {
    fail("sitemap", `URL not on ${SITE}: ${loc}`);
    continue;
  }
  const path = loc.slice(SITE.length) || "/";
  locPaths.add(path);
  const file = path === "/" ? join(DIST, "index.html") : join(DIST, path, "index.html");
  if (!existsSync(file)) fail("sitemap", `no matching file in dist/ for ${loc}`);
}
for (const p of real) {
  if (!locPaths.has(p.path)) fail("sitemap", `built page missing from sitemap: ${p.path}`);
}

// Contact page
if (!existsSync(join(DIST, "contact", "index.html"))) fail("/contact", "missing from dist/");

if (warnings.length) {
  console.warn(`Warnings (${warnings.length}, not failing):`);
  for (const w of warnings) console.warn("  - " + w);
  console.warn("");
}

if (failures.length) {
  console.error(`SEO check FAILED (${failures.length} problem${failures.length === 1 ? "" : "s"}):\n`);
  for (const f of failures) console.error("  - " + f);
  process.exit(1);
}
console.log(`SEO check passed: ${real.length} pages, ${locs.length} sitemap URLs, 0 problems.`);
