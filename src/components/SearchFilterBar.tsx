/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, MapPin, Home, ArrowUpDown, Globe2, RotateCcw } from 'lucide-react';
import { CorridorLocation, PropertyType } from '../types/property';
import { CurrencyCode, CURRENCIES } from '../utils/currency';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCorridor: CorridorLocation | 'all';
  onCorridorChange: (val: CorridorLocation | 'all') => void;
  selectedType: PropertyType | 'all';
  onTypeChange: (val: PropertyType | 'all') => void;
  sortBy: 'featured' | 'price-asc' | 'price-desc';
  onSortChange: (val: 'featured' | 'price-asc' | 'price-desc') => void;
  currency: CurrencyCode;
  onCurrencyChange: (val: CurrencyCode) => void;
  onReset: () => void;
  totalResults: number;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCorridor,
  onCorridorChange,
  selectedType,
  onTypeChange,
  sortBy,
  onSortChange,
  currency,
  onCurrencyChange,
  onReset,
  totalResults
}) => {
  const isFiltered = searchQuery !== '' || selectedCorridor !== 'all' || selectedType !== 'all' || sortBy !== 'featured';

  return (
    <div className="bg-[#201E1D] border border-white/10 p-4 sm:p-5 rounded-sm shadow-xl mb-10 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-center">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <Search className="w-4 h-4 text-[#FFA205] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, road, or features..."
            className="w-full pl-10 pr-3 py-2.5 bg-[#151312] border border-white/10 rounded-sm text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFA205] transition-colors"
          />
        </div>

        {/* Corridor Dropdown */}
        <div className="lg:col-span-2 relative">
          <MapPin className="w-3.5 h-3.5 text-[#FFA205] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedCorridor}
            onChange={(e) => onCorridorChange(e.target.value as CorridorLocation | 'all')}
            className="w-full pl-8 pr-3 py-2.5 bg-[#151312] border border-white/10 rounded-sm text-xs text-white focus:outline-none focus:border-[#FFA205] appearance-none cursor-pointer"
          >
            <option value="all">All Locations</option>
            <option value="Lekki">Lekki Phase 1 & 2</option>
            <option value="Ajah">Ajah Axis</option>
            <option value="Sangotedo">Sangotedo</option>
            <option value="Epe">Epe Growth Corridor</option>
          </select>
        </div>

        {/* Property Category */}
        <div className="lg:col-span-2 relative">
          <Home className="w-3.5 h-3.5 text-[#FFA205] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value as PropertyType | 'all')}
            className="w-full pl-8 pr-3 py-2.5 bg-[#151312] border border-white/10 rounded-sm text-xs text-white focus:outline-none focus:border-[#FFA205] appearance-none cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="land">Land & Plots</option>
            <option value="residential">Residential Homes</option>
            <option value="commercial">Commercial / Mixed</option>
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="lg:col-span-2 relative">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#FFA205] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'featured' | 'price-asc' | 'price-desc')}
            className="w-full pl-8 pr-3 py-2.5 bg-[#151312] border border-white/10 rounded-sm text-xs text-white focus:outline-none focus:border-[#FFA205] appearance-none cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Currency Switcher (Icon Homes Diaspora Feature) */}
        <div className="lg:col-span-2 flex items-center gap-2">
          <div className="relative flex-grow">
            <Globe2 className="w-3.5 h-3.5 text-[#E8A832] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="w-full pl-7 pr-2 py-2.5 bg-[#151312] border border-[#FFA205]/40 rounded-sm text-xs font-semibold text-[#FFA205] focus:outline-none focus:border-[#FFA205] appearance-none cursor-pointer"
              aria-label="Select Currency for Diaspora Investors"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="p-2.5 bg-[#151312] hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 rounded-sm transition-colors"
              title="Reset Search Filters"
              aria-label="Reset Search Filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Summary & Count Bar */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
        <span>
          Showing <strong className="text-white font-mono tabular-nums">{totalResults}</strong> corridor opportunities
        </span>
        <span className="text-[#FFA205]/90">
          Viewing prices in <strong className="font-semibold text-white">{CURRENCIES[currency].label}</strong>
        </span>
      </div>
    </div>
  );
};
