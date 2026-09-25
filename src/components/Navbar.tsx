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
            href="/portfolio"
            className="hover:text-[#059669] transition-colors duration-200"
          >
            Portfolio
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
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/918287367640"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
            <span className="font-mono">WhatsApp +91 8287367640</span>
          </a>

          {/* Social Channels */}
          <div className="flex items-center gap-1">
            <a
              href="https://share.google/9eP7csF1sUEW5wZyT"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Maps Profile"
              aria-label="MooreRevenue on Google Maps"
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 text-[#ea4335]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>

            <a
              href="https://youtube.com/@preparemytech"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube (@preparemytech)"
              aria-label="PrepareMyTech on YouTube"
              className="p-2 text-slate-500 hover:text-[#ff0000] hover:bg-red-50 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/aiwkrishna"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram (@aiwkrishna)"
              aria-label="Krishna on Instagram"
              className="p-2 text-slate-500 hover:text-[#e1306c] hover:bg-pink-50 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={handleAuditClick}
            className="relative group inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-black bg-[#00dc82] hover:bg-[#05df85] rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(0,220,130,0.3)] hover:shadow-[0_6px_24px_rgba(0,220,130,0.5)] cursor-pointer active:scale-95"
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
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#059669]"
          >
            Website Portfolio & Work
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

          {/* Social Channels Mobile */}
          <div className="flex flex-wrap items-center gap-3 py-2 border-y border-slate-100">
            <span className="text-xs font-semibold text-slate-500">Profiles:</span>
            <a
              href="https://share.google/9eP7csF1sUEW5wZyT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 text-[#ea4335]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Google Maps</span>
            </a>
            <a
              href="https://youtube.com/@preparemytech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              <svg className="w-4 h-4 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
            <a
              href="https://instagram.com/aiwkrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-pink-600 transition-colors"
            >
              <svg className="w-4 h-4 text-[#e1306c]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>

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
