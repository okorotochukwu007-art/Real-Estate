/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, ShieldCheck, Building2, Globe2, Briefcase, ArrowUpRight } from 'lucide-react';

interface ServicesSuiteProps {
  onContactClick: () => void;
}

export const ServicesSuite: React.FC<ServicesSuiteProps> = ({ onContactClick }) => {
  const services = [
    {
      number: '01',
      title: 'Property Advisory & Acquisitions',
      description: 'Strategic advisory for discerning individuals and corporate investors looking to acquire high-potential land and residential properties across the Lekki–Epe corridor.',
      icon: Compass,
      highlight: 'Market Timing & Site Selection'
    },
    {
      number: '02',
      title: 'Strategic Land Banking',
      description: 'Identifying and securing verified large-acreage parcels in the direct path of major industrial infrastructure, positioned for substantial capital appreciation.',
      icon: Briefcase,
      highlight: 'High ROI Growth Trajectory'
    },
    {
      number: '03',
      title: 'Title & Due Diligence Verification',
      description: 'Independent coordination with the Lagos State Surveyor General’s Office and Lands Bureau to chart coordinates and verify genuine government-approved titles.',
      icon: ShieldCheck,
      highlight: 'Zero Title Blindspots'
    },
    {
      number: '04',
      title: 'Dedicated Diaspora Concierge',
      description: 'Transparent remote execution for Nigerians in the diaspora. Live virtual walkthroughs, beacon confirmations, and secure legal representation without travel stress.',
      icon: Globe2,
      highlight: 'Global Investor Bridge'
    },
    {
      number: '05',
      title: 'Property Management & Facility Oversight',
      description: 'Post-acquisition estate management, tenant vetting, and perimeter fencing surveillance to protect and maximize your real estate asset value over time.',
      icon: Building2,
      highlight: 'Asset Preservation'
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#151312] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
              Full-Service Real Estate
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Bespoke Services & Property Advisory
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Inspired by the highest standards of luxury property consultancy in Lagos, Femak delivers end-to-end guidance from initial corridor charting to perfected title handover.
            </p>
          </div>

          <a
            href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20would%20like%20to%20enquire%20about%20your%20advisory%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors whitespace-nowrap self-start md:self-auto shadow-md"
          >
            <span>Consult With An Advisor</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid (Asymmetric Bento style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={service.number}
                className={`p-7 sm:p-8 bg-[#201E1D] border border-white/10 hover:border-[#FFA205]/60 rounded-sm transition-all duration-300 flex flex-col justify-between group ${
                  isLarge ? 'lg:col-span-1 bg-gradient-to-b from-[#201E1D] to-[#1A1817]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#FFA205] tracking-widest">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#151312] border border-white/10 flex items-center justify-center text-[#FFA205] group-hover:border-[#FFA205]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#FFA205] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#E8A832] font-medium">
                  <span>{service.highlight}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
