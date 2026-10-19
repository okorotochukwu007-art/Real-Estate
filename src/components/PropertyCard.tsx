/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Maximize2, MessageCircle, Bed, Bath, Compass } from 'lucide-react';
import { Property } from '../types/property';
import { CurrencyCode, formatPriceInCurrency } from '../utils/currency';

interface PropertyCardProps {
  property: Property;
  currency: CurrencyCode;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  currency,
  onViewDetails
}) => {
  const [imageError, setImageError] = useState(false);

  // Formatted price in current currency
  const displayedPrice = formatPriceInCurrency(property.priceNgn, currency);

  // Direct WhatsApp enquiry message
  const whatsappUrl = `https://wa.me/2347039277322?text=${encodeURIComponent(
    `Hello Femak Realty Consult, I would like to enquire about the property "${property.title}" (${property.location}, Ref: ${property.id}) listed on your website.`
  )}`;

  return (
    <article className="group bg-[#201E1D] rounded-sm border border-white/10 hover:border-[#FFA205]/60 hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden text-neutral-200">
      {/* Property Visual Carrier */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#151312]">
        {!imageError ? (
          <img
            src={property.imageUrl}
            alt={property.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${property.fallbackGradient} flex flex-col items-center justify-center p-6 text-center text-white/90`}>
            <Compass className="w-10 h-10 text-[#FFA205] mb-2 stroke-1" />
            <p className="text-xs font-serif font-bold text-white tracking-wider uppercase">
              {property.corridor} Corridor
            </p>
            <p className="text-[11px] text-[#FFA205]">{property.plotSize}</p>
          </div>
        )}

        {/* Status Badge (Icon Homes Style) */}
        <div className="absolute top-3 left-3 bg-[#151312]/90 backdrop-blur-sm text-[#FFA205] text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-sm border border-[#FFA205]/30">
          {property.status}
        </div>

        {/* Demo Spec Tag */}
        {property.isDemonstration && (
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-neutral-400 text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm">
            Demo Spec
          </div>
        )}

        {/* Quick Corridor Tag */}
        <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-0.5 rounded-sm flex items-center gap-1.5 border border-white/10">
          <MapPin className="w-3 h-3 text-[#FFA205]" />
          <span>{property.corridor}</span>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
            <span className="font-medium text-neutral-300 capitalize">{property.propertyType}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{property.plotSize}</span>
            {property.bedrooms && (
              <>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="inline-flex items-center gap-1">
                  <Bed className="w-3 h-3 text-[#FFA205]" />
                  <span>{property.bedrooms} Beds</span>
                </span>
              </>
            )}
          </div>

          {/* Property Title */}
          <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#FFA205] transition-colors leading-snug line-clamp-2 mb-2">
            {property.title}
          </h3>

          {/* Location */}
          <p className="flex items-center gap-1.5 text-xs text-neutral-400 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#FFA205] shrink-0" />
            <span className="truncate">{property.location}</span>
          </p>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {property.shortDescription}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="pt-4 border-t border-white/10 mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-medium">
                Guide Price ({currency})
              </span>
              <span className="text-xl font-bold text-[#FFA205] font-mono tabular-nums tracking-tight">
                {displayedPrice}
              </span>
            </div>
            {currency !== 'NGN' && (
              <span className="text-[10px] text-neutral-500 font-mono">
                ≈ {property.priceFormatted}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => onViewDetails(property)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-neutral-200 hover:text-white bg-[#151312] hover:bg-neutral-800 border border-white/10 rounded-sm transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFA205]"
            >
              <span>View Details</span>
              <Maximize2 className="w-3 h-3 text-neutral-400" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] active:bg-[#E08A00] rounded-sm transition-colors duration-150 whitespace-nowrap shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Enquire via WhatsApp about ${property.title}`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#151312]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
