import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    question: "Can your AI Voice Agents speak fluent Hindi and understand regional Indian accents?",
    answer:
      "Voice agents can be configured for Hindi, English, and other supported language needs. Performance depends on the model, audio conditions, and the examples and information provided.",
  },
  {
    question: "Which CRMs, communication tools, and APIs do you integrate with?",
    answer:
      "Integration options depend on your existing tools and their available APIs. We can review your current setup and discuss a suitable approach before work begins.",
  },
  {
    question: "How long does it take from discovery audit to live deployment?",
    answer:
      "We develop your custom voice agent or automation pipeline within week one and then deliver you on week two",
  },
  {
    question: "Which business processes can be automated with AI?",
    answer:
      "Common areas include invoice and form processing, customer enquiry handling, approval workflows, report generation, inventory updates, appointment reminders, and data movement between different software tools.",
  },
  {
    question: "Is AI automation suitable for small and mid-size businesses?",
    answer:
      "Yes. Many mid-size companies start with one or two high-impact processes. Once they see time savings and positive impact, they expand. You do not need a large technical team to begin.",
  },
  {
    question: "Can the system handle documents and communication in Indian languages?",
    answer:
      "Yes. Automation solutions can be designed to work with English as well as major Indian languages commonly used.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/60 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 text-[#047857] text-xs font-semibold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Everything You Need To Know
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Answers to common questions from business owners seeking AI automation in Faridabad and across India.
          </p>
        </div>

        {/* Shadcn Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all duration-200 hover:border-emerald-300 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#047857] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-100" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default FaqSection;
