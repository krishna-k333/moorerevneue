/**
 * Single source of truth for MooreRevenue business facts.
 * Import from here instead of hard-coding the name, phone, hours or address.
 */

const SITE_URL = "https://www.moorerevenue.com";
const PHONE_TEL = "+918287367640";

export const BUSINESS = {
  /** The only business name. One word, capital M and R. */
  name: "MooreRevenue",
  /** Descriptor for places that need one. Never used as the name. */
  legalDescriptor: "AI Automation & Voice Agent Agency",
  /** Declared once in schema as alternateName. Never shown as the business name. */
  alternateNames: ["Moore Revenue"],

  /** Only visible and schema phone format. */
  phoneDisplay: "+91 8287367640",
  /** Machine format, for tel: hrefs only. */
  phoneTel: PHONE_TEL,
  whatsappUrl: "https://wa.me/918287367640",

  url: SITE_URL,
  mapsUrl: "https://share.google/9eP7csF1sUEW5wZyT",
  placeId: "ChIJXWB8eXdhdEkRpxvky730FEE",

  /** Public Google rating, shown as text only. Update when the review count changes. */
  rating: { value: "5.0", count: 1, source: "Google" },

  /** Google Business Profile pin (the record Google already verified). */
  geo: { latitude: 28.4022656, longitude: 77.3190742 },

  // OWNER DECISION: see OWNER_DECISIONS.md
  // public = false -> schema and contact page omit streetAddress and postalCode.
  // public = true  -> publish the street address and postcode below
  //                   (and add the same address to the Google Business Profile).
  address: {
    public: false,
    streetAddress: "Mathura Road",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121003",
    addressCountry: "IN",
  },

  // OWNER DECISION: see OWNER_DECISIONS.md
  // The profile says "Open 24 hours"; the site says Mon-Sat 09:00-20:00.
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],

  /** Used in schema areaServed and on the contact page. */
  serviceAreas: [
    { type: "AdministrativeArea", name: "Faridabad" },
    { type: "AdministrativeArea", name: "Mathura Road Industrial Area" },
    { type: "AdministrativeArea", name: "DLF Industrial Area Sector 24/25" },
    { type: "AdministrativeArea", name: "Ballabgarh" },
    { type: "AdministrativeArea", name: "Greater Faridabad" },
    { type: "AdministrativeArea", name: "Sector 15 & 16 Faridabad" },
    { type: "AdministrativeArea", name: "NIT Faridabad" },
    { type: "AdministrativeArea", name: "Delhi NCR" },
    { type: "Country", name: "India" },
  ],

  services: [
    {
      name: "AI Voice Agents",
      path: "/services/ai-voice-agent-faridabad",
      title: "AI Voice Agent Services in Faridabad | MooreRevenue",
    },
    {
      name: "AI Workflow Automation",
      path: "/services/ai-automation-agency-faridabad",
      title: "AI Workflow Automation in Faridabad | MooreRevenue",
    },
    {
      name: "WhatsApp Business Automation",
      path: "/services/whatsapp-automation-faridabad",
      title: "WhatsApp Business Automation in Faridabad | MooreRevenue",
    },
    {
      name: "Website Design and Development",
      path: "/services/website-development-faridabad",
      title: "Website Design and Development in Faridabad | MooreRevenue",
    },
    {
      name: "Local SEO and AI Search Visibility",
      path: "/services/local-seo-aeo-faridabad",
      title: "Local SEO and AI Search Visibility in Faridabad | MooreRevenue",
    },
  ],
} as const;

/** `tel:` href for the business phone. */
export const telHref = `tel:${BUSINESS.phoneTel}`;

/** WhatsApp link, optionally with a pre-filled message. */
export const whatsappHref = (text?: string) =>
  text ? `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(text)}` : BUSINESS.whatsappUrl;
