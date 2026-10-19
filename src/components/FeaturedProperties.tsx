/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Property, PropertyType, CorridorLocation } from '../types/property';
import { PropertyCard } from './PropertyCard';
import { SearchFilterBar } from './SearchFilterBar';
import { Info, Sparkles, AlertCircle } from 'lucide-react';
import { CurrencyCode } from '../utils/currency';

interface FeaturedPropertiesProps {
  properties: Property[];
  currency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  onViewDetails: (property: Property) => void;
  onBookInspection: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  currency,
  onCurrencyChange,
  onViewDetails
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCorridor, setSelectedCorridor] = useState<CorridorLocation | 'all'>('all');
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCorridor('all');
    setSelectedType('all');
    setSortBy('featured');
  };

  const filteredAndSortedProperties = useMemo(() => {
    let result = properties.filter((prop) => {
      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesLocation = prop.location.toLowerCase().includes(query);
        const matchesDesc = prop.shortDescription.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesDesc) return false;
      }

      // Corridor filter
      if (selectedCorridor !== 'all') {
        if (prop.corridor !== selectedCorridor) return false;
      }

      // Type filter
      if (selectedType !== 'all') {
        if (prop.propertyType !== selectedType) return false;
      }

      return true;
    });

    // Sort
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.priceNgn - b.priceNgn);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.priceNgn - a.priceNgn);
    }

    return result;
  }, [properties, searchQuery, selectedCorridor, selectedType, sortBy]);

  return (
    <section id="properties" className="py-20 sm:py-28 bg-[#151312] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
              Curated Opportunities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Exclusive Corridor Properties
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Explore verified land opportunities and residential schemes across the Lekki–Epe growth axis. Each listing features authentic corridor specifications and title benchmarks.
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="flex items-center gap-2 px-3.5 py-2 bg-[#201E1D] border border-white/10 rounded-sm text-xs text-neutral-400 shrink-0 self-start md:self-auto">
            <Info className="w-4 h-4 text-[#FFA205] shrink-0" />
            <span>Demonstration models for proposal presentation</span>
          </div>
        </div>

        {/* Search & Multi-Currency Filter Bar (Icon Homes Feature) */}
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCorridor={selectedCorridor}
          onCorridorChange={setSelectedCorridor}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          sortBy={sortBy}
          onSortChange={setSortBy}
          currency={currency}
          onCurrencyChange={onCurrencyChange}
          onReset={handleReset}
          totalResults={filteredAndSortedProperties.length}
        />

        {/* Properties Grid */}
        {filteredAndSortedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                currency={currency}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-[#201E1D] border border-white/10 rounded-sm my-6">
            <AlertCircle className="w-8 h-8 text-[#FFA205] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-white mb-1">
              No matching properties found
            </h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-4">
              Try adjusting your search criteria or resetting the corridor filter.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Database & Future Admin Dashboard Readiness Strip */}
        <div className="mt-14 p-6 bg-[#201E1D] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#151312] border border-[#FFA205]/30 flex items-center justify-center text-[#FFA205] shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Prepared for Live Inventory & Admin Synchronization
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                These listings are decoupled in typed data models, primed for instant connectivity to a future Supabase database and custom administrative dashboard.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20am%20looking%20for%20a%20specific%20property%20along%20the%20Lekki-Epe%20corridor."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm whitespace-nowrap transition-colors shadow-sm shrink-0"
          >
            Custom Property Search
          </a>
        </div>
      </div>
    </section>
  );
};
