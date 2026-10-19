/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, MapPin, CheckCircle2, MessageCircle, Calendar, FileText, AlertCircle, Compass, Bed, Bath } from 'lucide-react';
import { Property } from '../types/property';
import { CurrencyCode, formatPriceInCurrency } from '../utils/currency';

interface PropertyModalProps {
  property: Property | null;
  currency: CurrencyCode;
  onClose: () => void;
  onBookInspection: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  currency,
  onClose,
  onBookInspection
}) => {
  const [imgError, setImgError] = useState(false);

  if (!property) return null;

  const displayedPrice = formatPriceInCurrency(property.priceNgn, currency);

  const whatsappUrl = `https://wa.me/2347039277322?text=${encodeURIComponent(
    `Hello Femak Realty Consult, I am interested in ${property.title} located at ${property.location} (Guide Price: ${property.priceFormatted} / ${displayedPrice}). Please provide more details.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 lg:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-[#151312] text-white w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close property details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#151312] overflow-hidden">
          {!imgError ? (
            <img
              src={property.imageUrl}
              alt={property.title}
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${property.fallbackGradient} flex flex-col items-center justify-center text-white`}>
              <Compass className="w-12 h-12 text-[#FFA205] mb-2 stroke-1" />
              <p className="font-serif text-lg font-bold">{property.corridor} Corridor</p>
              <p className="text-sm text-[#FFA205]">{property.plotSize}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-[#FFA205] uppercase font-mono tracking-wider mb-1">
              <span>{property.corridor} Corridor</span>
              <span aria-hidden="true">·</span>
              <span>{property.plotSize}</span>
              {property.status && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-white">{property.status}</span>
                </>
              )}
            </div>
            <h2 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold leading-tight">
              {property.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Demonstration Notice */}
          {property.isDemonstration && (
            <div className="flex items-start gap-3 p-3.5 bg-[#201E1D] border border-white/10 rounded-sm text-xs text-neutral-300">
              <AlertCircle className="w-4 h-4 text-[#FFA205] shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Demonstration Listing:</strong> This listing illustrates typical land and residential parameters along the Lekki–Epe corridor. Specific title searches and survey validations are conducted for active client mandates.
              </p>
            </div>
          )}

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#201E1D] border border-white/10 rounded-sm text-xs">
            <div>
              <span className="text-neutral-400 block mb-0.5">Guide Price</span>
              <span className="font-bold text-[#FFA205] text-base font-mono tabular-nums">
                {displayedPrice}
              </span>
              {currency !== 'NGN' && (
                <span className="text-[10px] text-neutral-400 block font-mono">
                  {property.priceFormatted}
                </span>
              )}
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5">Plot / Footprint</span>
              <span className="font-semibold text-white">{property.plotSize}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5">Category</span>
              <span className="font-semibold text-white capitalize">{property.propertyType}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5">Corridor Area</span>
              <span className="font-semibold text-white">{property.corridor}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
              Property Overview
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {property.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
              Key Features & Infrastructure
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5 text-xs text-neutral-300">
              {property.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA205] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Title Document Specification Note */}
          <div className="p-4 border border-white/10 rounded-sm bg-[#201E1D]">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
              <FileText className="w-4 h-4 text-[#FFA205]" />
              <span>Title & Legal Verification Note</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {property.titleDocument}. Femak Realty Consult assists clients with charting coordinates at the Lagos State Surveyor General’s Office and conducting official searches at the Lands Registry before final acquisition.
            </p>
          </div>

          {/* Call to Actions inside Modal */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#201E1D] hover:bg-neutral-800 border border-white/10 rounded-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#FFA205]" />
              <span>Direct WhatsApp Enquiry</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookInspection(property);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Inspection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
