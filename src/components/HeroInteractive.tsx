import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Bot,
  PhoneCall,
  MessageSquare,
  Globe,
  CheckCircle2,
  Cpu,
  ChevronRight,
  Activity,
  CheckCheck,
  Paperclip,
  Send,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";

interface HeroInteractiveProps {
  onOpenAudit?: () => void;
}

export const HeroInteractive: React.FC<HeroInteractiveProps> = ({
  onOpenAudit,
}) => {
  const [activeTab, setActiveTab] = useState<"voice" | "whatsapp" | "web" | "automations">("voice");
  const [liveLogs, setLiveLogs] = useState<string[]>([
    "09:42:01 [Voice AI] Faridabad Inbound caller answered in Hindi/English",
    "09:42:04 [Voice AI] Identified inquiry: high-volume order consultation",
    "09:42:06 [WhatsApp Engine] Automated brochure & quote dispatched instantly",
    "09:42:09 [CRM Pipeline] Lead scored & synced with sales calendar",
  ]);

  // Rotate simulated events
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      const events = [
        `${timeStr} [Voice Agent] Inbound booking confirmed for Mathura Rd manufacturer`,
        `${timeStr} [Web System] Modern responsive landing page launched for Faridabad firm`,
        `${timeStr} [WhatsApp AI] Customer payment link generated (₹84,500)`,
        `${timeStr} [Lead Engine] New B2B local prospects enriched & qualified`,
        `${timeStr} [Voice Agent] Bilingual Hindi/English call handled promptly`,
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setLiveLogs((prev) => [randomEvent, ...prev.slice(0, 4)]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00dc82]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-emerald-300/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 text-[#059669] text-xs md:text-sm font-semibold backdrop-blur-md shadow-xs transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
            </span>
            <span>AI Automation in Faridabad & NCR</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#059669]" />
          </div>

          {/* Primary SEO Heading (H1) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Best AI Voice Agents &{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#047857] via-[#059669] to-[#00dc82]">
              Automation in Faridabad
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[#059669]/40"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M1 9C50 3 150 1 299 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Faridabad’s AI automation agency. We build custom <strong className="text-slate-900 font-semibold">AI Voice Agents</strong> and <strong className="text-slate-900 font-semibold">automations</strong> for Businesses.
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onOpenAudit) onOpenAudit();
                else scrollToSection("audit-section");
              }}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-[#00dc82] hover:bg-[#05df85] rounded-xl shadow-[0_4px_20px_rgba(0,220,130,0.35)] hover:shadow-[0_6px_30px_rgba(0,220,130,0.55)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
            >
              <Calendar className="w-5 h-5 text-black" />
              <span>Book a Free Discovery Call</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/918287367640"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-[#059669]" />
              <span>WhatsApp +91 8287367640</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInteractive;
