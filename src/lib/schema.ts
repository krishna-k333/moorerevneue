import { BUSINESS } from "./business";

/** Page-level Service schema. The provider points at the sitewide LocalBusiness entity in Layout.astro. */
export const serviceSchema = (opts: {
  name: string;
  serviceType: string;
  path: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BUSINESS.url}${opts.path}#service`,
  "name": opts.name,
  "serviceType": opts.serviceType,
  "url": `${BUSINESS.url}${opts.path}`,
  "description": opts.description,
  "provider": { "@id": `${BUSINESS.url}/#organization` },
  "areaServed": { "@type": "City", "name": "Faridabad" },
});

/** Generic WebPage schema for hub and info pages. */
export const webPageSchema = (opts: { name: string; path: string; description: string; type?: string }) => ({
  "@context": "https://schema.org",
  "@type": opts.type ?? "WebPage",
  "name": opts.name,
  "url": `${BUSINESS.url}${opts.path}`,
  "description": opts.description,
  "isPartOf": { "@id": `${BUSINESS.url}/#website` },
  "about": { "@id": `${BUSINESS.url}/#organization` },
});

export const faqPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
});
