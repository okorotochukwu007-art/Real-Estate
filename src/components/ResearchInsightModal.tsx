/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, BookOpen, TrendingUp, Compass, Calendar, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';

interface ResearchInsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleInspection: () => void;
}

export const ResearchInsightModal: React.FC<ResearchInsightModalProps> = ({
  isOpen,
  onClose,
  onScheduleInspection
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="research-title"
    >
      <div
        className="relative bg-[#151312] text-white w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#201E1D] border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFA205] uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Femak Market Research & Intelligence</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#FFA205] tracking-widest block mb-2">
              Corridor Macro Analysis
            </span>
            <h2 id="research-title" className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-3">
              Why the Lekki–Epe Corridor Is Lagos’s Fastest-Growing Real Estate Frontier
            </h2>
            <div className="flex items-center gap-3 text-xs text-neutral-400 pb-4 border-b border-white/10">
              <span>By Femak Research Team</span>
              <span aria-hidden="true">·</span>
              <span>Lekki, Lagos</span>
              <span aria-hidden="true">·</span>
              <span>5 Min Read</span>
            </div>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed">
            Over the past two decades, Lagos’s economic gravity has steadily migrated eastward from the congested commercial centres of Lagos Island and Victoria Island toward the expansive Lekki Peninsula. Today, that migration has crossed a transformative tipping point along the Lekki–Epe expressway.
          </p>

          {/* Key Factor 1 */}
          <div className="p-5 bg-[#201E1D] border border-white/10 rounded-sm space-y-2">
            <h3 className="font-serif text-base font-bold text-[#FFA205] flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>1. Industrial Concentration & Employment Gravity</span>
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              With the operationalization of the $20B+ Dangote Petroleum Refinery, the Lekki Deep Sea Port, and the expanding Lekki Free Trade Zone, over 50,000 direct and indirect high-skilled jobs are being injected into the corridor. Corporate executives, engineers, and supply chain operators require modern residential housing in Sangotedo, Ajah, and Epe.
            </p>
          </div>

          {/* Key Factor 2 */}
          <div className="p-5 bg-[#201E1D] border border-white/10 rounded-sm space-y-2">
            <h3 className="font-serif text-base font-bold text-[#FFA205] flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>2. Multi-Modal Transportation Infrastructure</span>
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              The dualisation and expansion of the 6-lane Lekki–Epe Expressway, combined with the coastal highway trajectory, water transport jetties at Badore, and the planned international airport, is systematically dismantling historical commute bottlenecks.
            </p>
          </div>

          {/* Key Factor 3 */}
          <div className="p-5 bg-[#201E1D] border border-white/10 rounded-sm space-y-2">
            <h3 className="font-serif text-base font-bold text-[#FFA205] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>3. Dry Land Topography & Foundation Economics</span>
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Unlike coastal reclaimed areas that demand substantial sand-filling and deep piling, Epe and upper Sangotedo offer naturally elevated, dry table red earth. This drastically reduces foundation construction expenditures for developers and private home builders.
            </p>
          </div>

          {/* Conclusion */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Strategic Recommendation
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              For capital preservation and aggressive appreciation, land banking in gazetted schemes along the Epe axis represents the prime entry window, while Sangotedo and Lekki Phase 2 remain the leaders for immediate residential rental yields.
            </p>
          </div>

          {/* Action Callout */}
          <div className="p-5 bg-[#201E1D] border border-[#FFA205]/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <p className="text-xs font-bold text-white">Interested in reviewing specific parcels along this trajectory?</p>
              <p className="text-[11px] text-neutral-400">Speak directly with our corridor acquisitions desk.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onScheduleInspection();
              }}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors whitespace-nowrap shadow-sm"
            >
              Arrange Site Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
