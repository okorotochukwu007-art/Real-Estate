/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CORRIDOR_LOCATIONS } from '../data/properties';
import { LocationHighlight } from '../types/property';
import { MapPin, TrendingUp, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ExploreLocationsProps {
  onSelectCorridor: (locationName: string) => void;
}

export const ExploreLocations: React.FC<ExploreLocationsProps> = ({ onSelectCorridor }) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationHighlight>(CORRIDOR_LOCATIONS[0]);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[#1A1817] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
            Strategic Geography
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Explore the Lekki–Epe Growth Corridor
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            The Lekki–Epe Expressway represents the fastest appreciating real estate trajectory in West Africa. Understand each territory’s investment dynamics and infrastructure maturity.
          </p>
          <p className="mt-2 text-xs text-neutral-500 italic">
            * Note: These profiles illustrate key corridor growth zones. Property availability in any specific area is subject to confirmed developer and title mandates.
          </p>
        </div>

        {/* Location Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CORRIDOR_LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            const hasError = imgErrors[loc.id];

            return (
              <div
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`cursor-pointer group rounded-sm border transition-all duration-300 flex flex-col overflow-hidden bg-[#201E1D] ${
                  isSelected
                    ? 'border-[#FFA205] ring-1 ring-[#FFA205] shadow-2xl'
                    : 'border-white/10 hover:border-[#FFA205]/60 hover:shadow-xl'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedLocation(loc);
                  }
                }}
              >
                {/* Visual Area Banner */}
                <div className="relative aspect-[16/10] bg-[#151312] overflow-hidden">
                  {!hasError ? (
                    <img
                      src={loc.imageUrl}
                      alt={loc.name}
                      onError={() => handleImageError(loc.id)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#151312] to-[#2A2421] flex items-center justify-center text-white">
                      <Compass className="w-8 h-8 text-[#FFA205] stroke-1" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-[#FFA205] font-mono uppercase tracking-wider block">
                      {loc.distanceFromVictoriaIsland}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {loc.name}
                    </h3>
                  </div>
                </div>

                {/* Subtitle & Summary */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-xs font-semibold text-[#FFA205] mb-1.5 leading-tight">
                      {loc.subtitle}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                      {loc.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-neutral-300 group-hover:text-[#FFA205]">
                    <span>View Corridor Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Location In-Depth Spotlight Box */}
        <div className="bg-[#201E1D] rounded-sm border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#FFA205]" />
                <span>Deep-Dive Profile</span>
                <span aria-hidden="true">·</span>
                <span>{selectedLocation.distanceFromVictoriaIsland} to VI</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {selectedLocation.name} — {selectedLocation.subtitle}
              </h3>
            </div>

            <a
              href={`https://wa.me/2347039277322?text=${encodeURIComponent(
                `Hello Femak Realty Consult, I am interested in learning more about property investment opportunities in the ${selectedLocation.name} corridor.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors whitespace-nowrap self-start lg:self-auto shadow-sm"
            >
              <span>Enquire About {selectedLocation.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3 font-mono">
                <TrendingUp className="w-4 h-4 text-[#FFA205]" />
                <span>Infrastructure & Strategic Connectivity</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {selectedLocation.infrastructureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA205] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3 font-mono">
                <Compass className="w-4 h-4 text-[#FFA205]" />
                <span>Primary Growth Drivers & Investment Case</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {selectedLocation.growthDrivers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA205] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
