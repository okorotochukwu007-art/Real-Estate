/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Anchor, Factory, Plane, Building2, MapPin, TrendingUp, ArrowUpRight } from 'lucide-react';
import { MEGA_PROJECTS } from '../data/properties';

export const MegaProjectsRadar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Anchor':
        return Anchor;
      case 'Factory':
        return Factory;
      case 'Plane':
        return Plane;
      default:
        return Building2;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#1A1817] border-b border-white/10 text-white relative overflow-hidden">
      {/* Background Subtle Radar Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#FFA205]/[0.05] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
            Catalytic Growth Drivers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Strategic Infrastructure & Megaprojects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            The multi-billion dollar industrial and logistical anchors transforming the Lekki–Epe expressway into West Africa’s most lucrative economic zone.
          </p>
        </div>

        {/* 4 Megaprojects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEGA_PROJECTS.map((proj) => {
            const Icon = getIcon(proj.iconName);

            return (
              <div
                key={proj.id}
                className="bg-[#201E1D] p-6 rounded-sm border border-white/10 hover:border-[#FFA205]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#151312] border border-white/10 text-[#FFA205] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    {proj.category}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#FFA205] transition-colors leading-snug">
                    {proj.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {proj.impactSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA205] shrink-0" />
                    <span>{proj.distanceFromCorridor}</span>
                  </div>

                  <div className="flex items-start gap-1.5 text-[11px] text-[#FFA205]/90 font-medium">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{proj.investmentCatalyst}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corridor Link Strip */}
        <div className="mt-12 p-6 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFA205] animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-300">
              Land positioned within 10–20 minutes of these anchors has historically experienced high compound capital growth.
            </p>
          </div>
          <a
            href="https://wa.me/2347039277322?text=Hello%20Femak%2C%20I%20am%20interested%20in%20parcels%20close%20to%20the%20Lekki%20Deep%20Sea%20Port%20and%20Dangote%20Refinery%20axis."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#FFA205] hover:text-white flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            <span>Request Megaproject Radius Parcels</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
