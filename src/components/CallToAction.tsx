/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';

interface CallToActionProps {
  onScheduleInspection: () => void;
  onContactClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onScheduleInspection
}) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#151312] text-white overflow-hidden border-b border-white/10">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFA205_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFA205]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-3 font-mono">
            Take The Next Step
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Ready to Explore Land & Property Opportunities Along the Corridor?
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are evaluating entry-point plots in Epe or looking for family residences in Lekki and Sangotedo, our team provides transparent guidance and organized site visits.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onScheduleInspection}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] active:bg-[#E08A00] rounded-sm transition-all duration-150 shadow-xl whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Calendar className="w-4 h-4" />
              <span>Arrange Site Inspection</span>
            </button>

            <a
              href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20would%20like%20to%20enquire%20about%20available%20properties%20and%20land%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-white hover:text-[#FFA205] bg-[#201E1D] hover:bg-neutral-800 border border-white/15 hover:border-[#FFA205] rounded-sm transition-all duration-150 backdrop-blur-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA205]"
            >
              <MessageCircle className="w-4 h-4 text-[#FFA205]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Contact Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400">
            <a
              href="tel:+2347039277322"
              className="flex items-center gap-2 hover:text-[#FFA205] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFA205]" />
              <span className="font-mono tabular-nums text-white">+234 703 927 7322</span>
            </a>
            <span className="hidden sm:inline text-neutral-700" aria-hidden="true">·</span>
            <a
              href="mailto:femakrealtyconsult@gmail.com"
              className="hover:text-[#FFA205] transition-colors text-white"
            >
              femakrealtyconsult@gmail.com
            </a>
            <span className="hidden sm:inline text-neutral-700" aria-hidden="true">·</span>
            <span className="text-neutral-400">Lekki, Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
};
