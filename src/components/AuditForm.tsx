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

              <div className="pt-6 border-t border-slate-100 flex flex-col items-center gap-2.5">
                <span className="text-xs text-slate-500 font-medium">Follow tutorials, reviews & updates:</span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://share.google/9eP7csF1sUEW5wZyT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#ea4335]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Google Reviews & Profile</span>
                  </a>
                  <a
                    href="https://youtube.com/@preparemytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-red-600 hover:border-red-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube (@preparemytech)</span>
                  </a>
                  <a
                    href="https://instagram.com/aiwkrishna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-pink-600 hover:border-pink-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#e1306c]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram (@aiwkrishna)</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AuditForm;
