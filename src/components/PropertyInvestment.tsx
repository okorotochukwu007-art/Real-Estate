/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, FileCheck2, AlertTriangle, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface PropertyInvestmentProps {
  onOpenResearch?: () => void;
}

export const PropertyInvestment: React.FC<PropertyInvestmentProps> = ({ onOpenResearch }) => {
  const [activeTab, setActiveTab] = useState<'titles' | 'checklist' | 'topography'>('titles');

  return (
    <section id="investment-guide" className="py-20 sm:py-28 bg-[#1A1817] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
              Investor Advisory Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Land Titles, Due Diligence & Location Suitability
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              In Lagos real estate, informed decisions protect wealth. Before committing capital to any plot or residential scheme along the Lekki–Epe corridor, understanding the legal title status and physical parameters is paramount.
            </p>
          </div>

          {onOpenResearch && (
            <button
              type="button"
              onClick={onOpenResearch}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFA205] bg-[#201E1D] hover:bg-neutral-800 border border-[#FFA205]/40 rounded-sm transition-colors whitespace-nowrap self-start md:self-auto shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Market Research</span>
            </button>
          )}
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-[#201E1D] rounded-sm max-w-fit mb-10 border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('titles')}
            className={`px-4 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
              activeTab === 'titles'
                ? 'bg-[#FFA205] text-[#151312] font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            01. Land Titles Decoded
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
              activeTab === 'checklist'
                ? 'bg-[#FFA205] text-[#151312] font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            02. Due Diligence Checklist
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('topography')}
            className={`px-4 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
              activeTab === 'topography'
                ? 'bg-[#FFA205] text-[#151312] font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            03. Topography & Drainage
          </button>
        </div>

        {/* Tab 1: Nigerian Land Titles */}
        {activeTab === 'titles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] font-mono font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Certificate of Occupancy (C of O)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                The initial document granted by the Lagos State Governor conferring ownership of land for a 99-year leasehold. It is one of the highest levels of recognized title documentation in Nigeria.
              </p>
              <div className="text-xs text-[#FFA205] font-medium bg-[#151312] p-3 rounded-sm border border-white/5">
                Key takeaway: When purchasing from a previous owner with a C of O, ensure subsequent transfers obtain Governor’s Consent.
              </div>
            </div>

            <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] font-mono font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Governor’s Consent
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                Under the Land Use Act, any secondary transaction involving land that already has a C of O or deemed grant requires the formal approval (consent) of the State Governor to be legally perfected.
              </p>
              <div className="text-xs text-[#FFA205] font-medium bg-[#151312] p-3 rounded-sm border border-white/5">
                Key takeaway: Critical for prime estates in Lekki Phase 1, Ajah, and established corridors.
              </div>
            </div>

            <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] font-mono font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Gazette & Excision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                An Excision is the legal release of land by the State Government back to the ancestral community. A Gazette is the official government record detailing that excision. Parcels with Gazette are free from government acquisition.
              </p>
              <div className="text-xs text-[#FFA205] font-medium bg-[#151312] p-3 rounded-sm border border-white/5">
                Key takeaway: Prevalent in emerging schemes across Sangotedo, Ibeju-Lekki, and Epe.
              </div>
            </div>

            <div className="p-7 bg-[#201E1D] border border-white/10 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] font-mono font-bold text-xs flex items-center justify-center">
                  04
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Registered Survey & Deed of Assignment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                The Registered Survey outlines precise GPS coordinates, beacon numbers, and boundaries filed with the Surveyor General. The Deed of Assignment documents the legal transfer between seller and buyer.
              </p>
              <div className="text-xs text-[#FFA205] font-medium bg-[#151312] p-3 rounded-sm border border-white/5">
                Key takeaway: Always verify survey coordinates independently to confirm the land is free from committed government acquisition.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Due Diligence Checklist */}
        {activeTab === 'checklist' && (
          <div className="bg-[#201E1D] border border-white/10 rounded-sm p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-white mb-6">
              The 4-Step Femak Buyer Due Diligence Standard
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Charting Coordinates at Lagos State Surveyor General’s Office
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Obtain the coordinates from the land’s survey plan and commission an official charting search. This step confirms whether the land falls under government committed acquisition or is free.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Physical On-Site Beacon Verification
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Never buy land strictly from paper drawings. A licensed surveyor must physically visit the land, identify the concrete corner boundary beacons, and confirm that the coordinates on paper correspond precisely with the physical parcel being shown.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Search at the Lands Registry (Alausa)
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Review legal encumbrances, pending mortgages, court attachments, or conflicting claims registered on the parcel file at the Lagos State Lands Bureau in Alausa, Ikeja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#151312] border border-[#FFA205]/40 text-[#FFA205] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Layout Plan & Development Approval Audit
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    For gated estate schemes, inspect the approved layout plan to ensure dedicated road setbacks, recreation spaces, and utility reservations are legally maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Topography & Drainage */}
        {activeTab === 'topography' && (
          <div className="bg-[#201E1D] border border-white/10 rounded-sm p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Topography, Seasonal Water Tables & Site Suitability
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              The coastal ecology of Lagos means that soil condition and seasonal water tables directly affect building foundation costs and overall holding enjoyment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#151312] border border-white/5 rounded-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFA205] mb-2 font-mono">
                  100% Dry Table Land (Epe & Sangotedo Ridges)
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Naturally elevated red earth or firm soil that does not hold water during the rainy season. Allows standard raft foundations or strip footings without costly sand-filling or piling. Highly favored for immediate building projects and lower development overhead.
                </p>
              </div>

              <div className="p-6 bg-[#151312] border border-white/5 rounded-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFA205] mb-2 font-mono">
                  Lowland & Reclaimed Soils (Coastlines & Swamplands)
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Requires careful soil tests, sand-filling, perimeter sheet piling, and deep raft/pile foundations. While these areas can offer high commercial returns once reclaimed, investors must factor preliminary civil engineering costs into their budget.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Action Note */}
        <div className="mt-12 p-6 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Need Guidance on a Specific Land Survey or Title Document?
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Share the survey plan or coordinates with Femak Realty Consult for preliminary guidance before financial commitment.
            </p>
          </div>
          <a
            href="mailto:femakrealtyconsult@gmail.com?subject=Title%20Verification%20Guidance%20Enquiry"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm whitespace-nowrap transition-colors shadow-sm shrink-0"
          >
            Email Document for Review
          </a>
        </div>
      </div>
    </section>
  );
};
