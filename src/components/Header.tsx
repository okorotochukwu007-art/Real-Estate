/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Handshake } from 'lucide-react';

interface HeaderProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onOpenRealtorPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onExploreClick,
  onContactClick,
  onOpenRealtorPortal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#151312]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#151312]/95 via-[#151312]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA205] rounded whitespace-nowrap shrink-0 group"
              aria-label="Femak Realty Consult Home"
            >
              <div className="w-8 h-8 rounded bg-[#201E1D] border border-[#FFA205]/40 flex items-center justify-center text-[#FFA205] font-serif font-bold text-sm tracking-wider shadow-inner group-hover:border-[#FFA205] transition-colors">
                F
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-base sm:text-lg font-bold text-white group-hover:text-[#FFA205] transition-colors leading-tight">
                  FEMAK REALTY
                </span>
                <span className="text-[9px] tracking-[0.26em] text-[#FFA205] font-medium uppercase leading-none font-mono">
                  CONSULT
                </span>
              </div>
            </a>

            {/* Zone 2: Clean, Streamlined Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium text-neutral-300">
              <a
                href="#hero"
                className="hover:text-[#FFA205] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Home
              </a>
              <a
                href="#properties"
                className="hover:text-[#FFA205] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Properties
              </a>
              <a
                href="#services"
                className="hover:text-[#FFA205] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Services
              </a>
              <a
                href="#locations"
                className="hover:text-[#FFA205] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Locations
              </a>
              <a
                href="#about"
                className="hover:text-[#FFA205] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="hover:text-[#FFA205] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: Actions (Realtor Portal & Explore Properties CTA) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Realtor Partner Portal Button */}
              <button
                type="button"
                onClick={onOpenRealtorPortal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white hover:text-[#FFA205] bg-[#2A2421] hover:bg-[#332B27] border border-[#FFA205]/40 hover:border-[#FFA205] rounded-sm transition-all whitespace-nowrap shadow-sm group"
                title="Partner with us & earn commissions"
              >
                <Handshake className="w-3.5 h-3.5 text-[#FF6600] group-hover:scale-110 transition-transform" />
                <span>Realtor Portal</span>
              </button>

              {/* Primary Explore CTA */}
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] active:bg-[#E08A00] rounded-sm transition-colors duration-150 shadow-md whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenRealtorPortal}
                className="p-1.5 text-xs font-semibold text-[#FFA205] bg-[#2A2421] border border-[#FFA205]/40 rounded flex items-center gap-1"
                title="Realtor Portal"
              >
                <Handshake className="w-3.5 h-3.5 text-[#FF6600]" />
                <span className="text-[11px]">Realtors</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#FFA205] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA205]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/75 backdrop-blur-sm"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-0 right-0 w-5/6 max-w-sm h-full bg-[#151312] text-white p-6 shadow-2xl flex flex-col justify-between border-l border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-serif tracking-widest text-lg font-bold text-white">
                    FEMAK REALTY
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-[#FFA205] font-medium uppercase font-mono">
                    CONSULT
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 text-neutral-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Realtor Network Banner inside Mobile Drawer */}
              <div className="pt-4 pb-2">
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    onOpenRealtorPortal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6600] text-white font-semibold text-xs rounded-xl shadow-lg shadow-[#FF6600]/25"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Realtor Network (Login &amp; Sign Up)</span>
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-3 mt-4 text-base font-medium">
                <a
                  href="#hero"
                  onClick={closeMobileMenu}
                  className="text-neutral-200 hover:text-[#FFA205] py-2 border-b border-white/5 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#properties"
                  onClick={closeMobileMenu}
                  className="text-neutral-200 hover:text-[#FFA205] py-2 border-b border-white/5 transition-colors"
                >
                  Properties
                </a>
                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="text-neutral-200 hover:text-[#FFA205] py-2 border-b border-white/5 transition-colors"
                >
                  Services &amp; Advisory
                </a>
                <a
                  href="#locations"
                  onClick={closeMobileMenu}
                  className="text-neutral-200 hover:text-[#FFA205] py-2 border-b border-white/5 transition-colors"
                >
                  Corridor Locations
                </a>
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="text-neutral-200 hover:text-[#FFA205] py-2 border-b border-white/5 transition-colors"
                >
                  Why Femak
                </a>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="text-neutral-200 hover:text-[#FFA205] py-2 border-b border-white/5 transition-colors"
                >
                  Contact &amp; Office
                </a>
              </nav>
            </div>

            {/* Mobile Action Block */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onExploreClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors shadow-sm"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-xs text-neutral-400 space-y-1">
                <a
                  href="tel:+2347039277322"
                  className="flex items-center gap-2 text-neutral-300 hover:text-white py-1"
                >
                  <span>+234 703 927 7322</span>
                </a>
                <p className="text-[11px] text-neutral-400">Lekki, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
