/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Search, Users, Compass } from 'lucide-react';

export const WhyChooseFemak: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#151312] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
            Company Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Independent Guidance for Confident Property Decisions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Femak Realty Consult operates as a dedicated property consultancy based in Lekki, Lagos. We bridge the gap between prospective land buyers, home seekers, and the dynamic real estate landscape along the Lekki–Epe expressway.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col justify-between hover:border-[#FFA205]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#151312] border border-[#FFA205]/30 text-[#FFA205] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Verification First
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We believe true peace of mind starts with documentation. We prioritize title searches, survey charting at the Surveyor General’s office, and beacon verification before advising client commitments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#FFA205]">
              No Title Blindspots
            </div>
          </div>

          <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col justify-between hover:border-[#FFA205]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#151312] border border-[#FFA205]/30 text-[#FFA205] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Corridor Focus
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                By focusing our attention specifically along the Lekki–Epe corridor (Lekki, Ajah, Sangotedo, and Epe), we maintain real-time visibility into infrastructure progression, drainage patterns, and zoned corridors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#FFA205]">
              Local Ground Reality
            </div>
          </div>

          <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col justify-between hover:border-[#FFA205]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#151312] border border-[#FFA205]/30 text-[#FFA205] flex items-center justify-center mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Diaspora Care
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Distance should never compromise diligence. We coordinate verifiable virtual video walkthroughs, unedited on-site visual audits, and transparent reporting for Nigerian investors living abroad.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#FFA205]">
              Transparent Remote Audits
            </div>
          </div>

          <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col justify-between hover:border-[#FFA205]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#151312] border border-[#FFA205]/30 text-[#FFA205] flex items-center justify-center mb-5">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Objective Matching
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We do not push one-size-fits-all parcels. Whether you are seeking immediate construction land, long-term land banking, or rental income properties, we tailor opportunities to your timeline and capital.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#FFA205]">
              Tailored Acquisition
            </div>
          </div>
        </div>

        {/* Commitment Statement Strip */}
        <div className="mt-14 p-8 bg-[#201E1D] text-white rounded-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl font-bold text-white mb-2">
              Our Professional Standard
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Real estate in Lagos is a major financial milestone. Femak Realty Consult pledges clarity, honest disclosures regarding land topography and drainage, and straightforward advisory at every step of your transaction.
            </p>
          </div>
          <a
            href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20would%20like%20to%20discuss%20property%20opportunities%20in%20Lagos."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm whitespace-nowrap transition-colors shadow-sm shrink-0"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};
