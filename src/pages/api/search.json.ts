export const prerender = true;

export const SITE_PAGES = [
  {
    title: "AI Automation Agency in Faridabad | MooreRevenue",
    url: "/",
    excerpt: "Custom AI Voice Agents, WhatsApp business automation, and fast modern websites for businesses in Faridabad, Delhi NCR, and worldwide.",
  },
  {
    title: "All Services | MooreRevenue",
    url: "/services",
    excerpt: "Overview of AI voice agents, n8n workflow automation, WhatsApp CRM bots, custom web development, and local SEO services.",
  },
  {
    title: "AI Voice Agent Services in Faridabad | MooreRevenue",
    url: "/services/ai-voice-agent-faridabad",
    excerpt: "Bilingual Hindi and English conversational voice agents for 24/7 inbound customer support, outbound lead calls, and appointment booking.",
  },
  {
    title: "AI Workflow Automation in Faridabad | MooreRevenue",
    url: "/services/ai-automation-agency-faridabad",
    excerpt: "End-to-end business workflow automation using n8n, CRM integration, lead routing pipelines, and webhook data synchronization.",
  },
  {
    title: "WhatsApp Business Automation in Faridabad | MooreRevenue",
    url: "/services/whatsapp-automation-faridabad",
    excerpt: "Official WhatsApp Cloud API chatbots, automated catalog inquiries, order notifications, and CRM lead capture.",
  },
  {
    title: "Website Design and Development in Faridabad | MooreRevenue",
    url: "/services/website-development-faridabad",
    excerpt: "Ultra-fast modern websites built with Astro, React, and Tailwind CSS, engineered for SEO, conversions, and speed.",
  },
  {
    title: "Local SEO and AI Search Visibility in Faridabad | MooreRevenue",
    url: "/services/local-seo-aeo-faridabad",
    excerpt: "Google Business Profile optimization, local citation management, schema architecture, and AI search visibility (AEO).",
  },
  {
    title: "Portfolio & Case Studies | MooreRevenue",
    url: "/portfolio",
    excerpt: "Real client projects including Shri Krishna Sarees e-commerce catalog, Story Night 4 Kids web application, and custom automation.",
  },
  {
    title: "Blog & Insights | MooreRevenue",
    url: "/blog",
    excerpt: "Actionable articles and technical guides on AI automation, voice agents, n8n workflows, and local digital growth.",
  },
  {
    title: "What is n8n? Complete Guide to Workflow Automation",
    url: "/blog/what-is-n8n",
    excerpt: "In-depth guide exploring n8n, self-hosting advantages, node configurations, and comparing n8n with Zapier and Make.",
  },
  {
    title: "What is TTS Used For? Text-to-Speech Use Cases",
    url: "/blog/what-is-tts-used-for",
    excerpt: "Comprehensive guide to Text-to-Speech applications in voice AI agents, IVR systems, customer support, and assistive technology.",
  },
  {
    title: "AI Receptionist for Clinics: Automating Patient Booking",
    url: "/blog/ai-receptionist-for-clinics",
    excerpt: "How medical clinics and healthcare practices reduce missed calls and automate patient appointments with AI voice agents.",
  },
  {
    title: "Build a Vapi Voice Agent for Coaching Institutes",
    url: "/blog/build-vapi-voice-agent-for-coaching-institute",
    excerpt: "Step-by-step tutorial on building and deploying a conversational Vapi AI voice agent for student inquiry qualification.",
  },
  {
    title: "AI Agency vs Traditional IT Companies in Faridabad",
    url: "/comparisons/ai-agency-vs-traditional-it-faridabad",
    excerpt: "Detailed comparison of modern AI automation agencies versus legacy IT service vendors on agility, cost, and delivery time.",
  },
  {
    title: "Global Clients & Remote Projects | MooreRevenue",
    url: "/global",
    excerpt: "AI automation and web engineering services for international clients across North America, Europe, the Middle East, and APAC.",
  },
  {
    title: "Areas We Serve in Faridabad & Delhi NCR",
    url: "/areas-we-serve",
    excerpt: "Local service directory across Faridabad industrial sectors, commercial hubs, residential areas, and the wider Delhi NCR.",
  },
  {
    title: "AI Automation in Mathura Road Industrial Area | MooreRevenue",
    url: "/areas-we-serve/mathura-road-faridabad",
    excerpt: "Automation and voice AI services tailored for manufacturing, logistics, and industrial suppliers along Mathura Road.",
  },
  {
    title: "AI Automation in DLF Industrial Area Sector 24/25 | MooreRevenue",
    url: "/areas-we-serve/dlf-industrial-area-faridabad",
    excerpt: "Custom CRM pipelines, inventory sync, and lead automation for businesses in DLF Industrial Area Faridabad.",
  },
  {
    title: "AI Automation & Web Development in Ballabgarh | MooreRevenue",
    url: "/areas-we-serve/ballabgarh-faridabad",
    excerpt: "Digital transformation, web development, and WhatsApp automations for Ballabgarh businesses and retail stores.",
  },
  {
    title: "AI Automation in Greater Faridabad (Neharpar) | MooreRevenue",
    url: "/areas-we-serve/greater-faridabad",
    excerpt: "Fast modern websites and AI solutions for high-growth businesses and startups in Greater Faridabad.",
  },
  {
    title: "AI Automation in Sector 15 & 16 Faridabad | MooreRevenue",
    url: "/areas-we-serve/sector-15-16-faridabad",
    excerpt: "AI voice agents and automated lead routing for professional services, clinics, and businesses in Sector 15 and 16.",
  },
  {
    title: "Contact MooreRevenue in Faridabad",
    url: "/contact",
    excerpt: "Get in touch with Krishna Aggarwal at MooreRevenue. Phone: +91 8287367640, WhatsApp support, office hours Mon-Sat 09:00 to 20:00.",
  },
  {
    title: "Privacy Policy | MooreRevenue",
    url: "/privacy-policy",
    excerpt: "Privacy policy, data protection, and analytics disclosures for visitors and clients of MooreRevenue.",
  },
  {
    title: "Terms of Service | MooreRevenue",
    url: "/terms-of-service",
    excerpt: "Terms and conditions governing consulting, development, and AI automation services provided by MooreRevenue.",
  },
];

export async function GET() {
  return new Response(
    JSON.stringify({
      results: SITE_PAGES,
      total: SITE_PAGES.length,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
