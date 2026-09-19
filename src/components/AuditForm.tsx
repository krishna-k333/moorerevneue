import React, { useState } from "react";
import { MessageSquare, CheckCircle, ArrowRight, ExternalLink, Loader2 } from "lucide-react";

export const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    location: "Faridabad",
    useCase: "AI Voice Calling Agent",
    contact: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const name = formData.name.trim();
    const company = formData.company.trim();
    const location = formData.location.trim() || "Faridabad";
    const service = formData.useCase.trim();

    const message = `Hi, Krishna. I am ${name} from ${company} we based in ${location} and we are looking for ${service} solutions.`;
    const url = `https://wa.me/918287367640?text=${encodeURIComponent(message)}`;

    setWhatsappUrl(url);

    // Dynamically import confetti to avoid shipping it in initial bundle
    try {
      const confettiModule = await import("canvas-confetti");
      const confetti = confettiModule.default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00dc82", "#10b981", "#ffffff", "#05df85"],
      });
    } catch {
      // Fallback if confetti fails or is blocked
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, "_blank");
    }, 400);
  };

  return (
    <section id="audit-section" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00dc82]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-12 shadow-xl">
          
          {!submitted ? (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-600/30 bg-emerald-50 text-[#047857] text-xs font-semibold uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 text-[#047857]" />
                  Free AI Audit Call
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Book an AI Audit Call
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Fill in your details below and click submit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="audit-name" className="text-xs font-semibold text-slate-800">
                      Your Full Name *
                    </label>
                    <input
                      id="audit-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] text-sm transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="audit-company" className="text-xs font-semibold text-slate-800">
                      Company / Business Name *
                    </label>
                    <input
                      id="audit-company"
                      name="company"
                      type="text"
                      required
                      placeholder="e.g. Apex Engineering Works"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] text-sm transition-all"
                    />
                  </div>

                  {/* Business Location */}
                  <div className="space-y-2">
                    <label htmlFor="audit-location" className="text-xs font-semibold text-slate-800">
                      Location / Area *
                    </label>
                    <input
                      id="audit-location"
                      name="location"
                      type="text"
                      required
                      placeholder="e.g. Faridabad, DLF Phase 1, Ballabgarh"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] text-sm transition-all"
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="space-y-2">
                    <label htmlFor="audit-service" className="text-xs font-semibold text-slate-800">
                      Service / Solution You Need *
                    </label>
                    <select
                      id="audit-service"
                      name="service"
                      aria-label="Service / Solution You Need"
                      value={formData.useCase}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857] transition-all"
                    >
                      <option value="AI Voice Calling Agent">AI Voice Calling Agent</option>
                      <option value="WhatsApp Business Automation">WhatsApp Business Automation</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Business Automation">Custom Business Automation</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 text-base font-bold text-black bg-[#00dc82] hover:bg-[#05df85] rounded-xl shadow-[0_4px_16px_rgba(0,220,130,0.3)] hover:shadow-[0_6px_24px_rgba(0,220,130,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5 text-black fill-current" />
                        <span>Book a Free AI Audit</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-[#047857] flex items-center justify-center text-[#047857] mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Audit Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  If WhatsApp did not open automatically, click the button below to send your inquiry directly to Krishna.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00dc82] hover:bg-[#05df85] text-black font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Directly</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-semibold underline transition-colors cursor-pointer"
                >
                  Edit details or send another inquiry
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AuditForm;
