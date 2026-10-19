/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0E0D] text-neutral-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#201E1D] border border-[#FFA205]/40 flex items-center justify-center text-[#FFA205] font-serif font-bold text-sm">
                F
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-lg font-bold text-white leading-tight">
                  FEMAK REALTY
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#FFA205] font-medium uppercase leading-none font-mono">
                  CONSULT
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Professional real estate consultancy specializing in verified land acquisition, residential properties, and strategic investment opportunities along the Lekki–Epe growth corridor, Lagos, Nigeria.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <p className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#FFA205] shrink-0" />
                <span>Lekki, Lagos State, Nigeria</span>
              </p>
              <p className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-[#FFA205] shrink-0" />
                <a href="tel:+2347039277322" className="hover:text-[#FFA205] transition-colors font-mono">
                  +234 703 927 7322
                </a>
              </p>
              <p className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-[#FFA205] shrink-0" />
                <a href="mailto:femakrealtyconsult@gmail.com" className="hover:text-[#FFA205] transition-colors">
                  femakrealtyconsult@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FFA205] font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  Featured Properties
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Bespoke Services
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Corridor Locations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Why Choose Femak
                </a>
              </li>
              <li>
                <a href="#investment-guide" className="hover:text-white transition-colors">
                  Due Diligence Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Corridor Markets */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FFA205] font-mono">
              Corridor Focus
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Lekki Phase 1 & 2
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Ajah & Badore
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Sangotedo & Monastery
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Epe Expressway Axis
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Ibeju-Lekki Free Zone
                </a>
              </li>
            </ul>
          </div>

          {/* Client Assurance & Transparency */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FFA205] font-mono">
              Integrity & Standards
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We uphold transparency in property verification. All physical site inspections, survey coordinate charting, and legal title inquiries are conducted openly with clear documentation.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20have%20an%20enquiry%20regarding%20property%20investment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FFA205] hover:text-white transition-colors"
              >
                <span>Direct WhatsApp Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Proposal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Femak Realty Consult. All rights reserved.
          </p>
          <p className="text-[11px] text-neutral-500">
            Demonstration website preview for Femak Realty Consult · Prepared for commercial proposal presentation.
          </p>
        </div>
      </div>
    </footer>
  );
};
