import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { ArrowRight, Menu, X, MessageSquare, Calendar } from "lucide-react";

interface NavbarProps {
  onOpenAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuditClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      scrollToSection("audit-section");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.06)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2">
          <Logo size={34} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a
            href="/services"
            className="hover:text-[#059669] transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="/areas-we-serve"
            className="hover:text-[#059669] transition-colors duration-200 flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
            Areas We Serve
          </a>
          <a
            href="/#capabilities"
            className="hover:text-[#059669] transition-colors duration-200"
          >
            AI Systems
          </a>
          <a
            href="/#faq"
            className="hover:text-[#059669] transition-colors duration-200"
          >
            FAQ
          </a>
        </nav>

        {/* Right CTA Group */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/918287367640"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
            <span className="font-mono">WhatsApp +91 8287367640</span>
          </a>

          <button
            onClick={handleAuditClick}
            className="relative group inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-black bg-[#00dc82] hover:bg-[#05df85] rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(0,220,130,0.3)] hover:shadow-[0_6px_24px_rgba(0,220,130,0.5)] cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4 mr-2 text-black/80" />
            <span>Book Free AI Audit</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleAuditClick}
            className="px-3 py-1.5 text-xs font-semibold text-black bg-[#00dc82] rounded-lg shadow-sm"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 bg-slate-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-xl">
          <a
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            All Services & Solutions
          </a>
          <a
            href="/areas-we-serve"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            Areas We Serve (Faridabad Hub)
          </a>
          <a
            href="/#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            AI Capabilities
          </a>
          <a
            href="https://wa.me/918287367640"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-sm text-[#059669] font-mono font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp +91 8287367640</span>
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            Frequently Asked Questions
          </a>
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={handleAuditClick}
              className="w-full py-3 text-center text-sm font-semibold text-black bg-[#00dc82] hover:bg-[#05df85] rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free 30-Min AI Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
