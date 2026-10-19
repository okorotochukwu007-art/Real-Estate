/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Handshake, ArrowRight } from 'lucide-react';

interface RealtorPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEarning: () => void;
}

export const RealtorPopupModal: React.FC<RealtorPopupModalProps> = ({
  isOpen,
  onClose,
  onStartEarning
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="realtor-popup-title"
    >
      <div
        className="relative bg-[#201E1D] text-white w-full max-w-md rounded-2xl p-7 sm:p-9 shadow-2xl border border-white/10 text-center transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button at top right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFA205]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Circular Handshake Icon Badge (matches screenshot) */}
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#2A2421] border border-[#FFA205]/30 flex items-center justify-center mx-auto mb-6 shadow-inner text-[#FF6600]">
          <Handshake className="w-8 h-8 text-[#FF6600] stroke-[1.75]" />
        </div>

        {/* Headline */}
        <h3
          id="realtor-popup-title"
          className="font-serif text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug mb-3.5"
        >
          Partner With Us &amp; Earn In Millions
        </h3>

        {/* Supporting Copy */}
        <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mb-8 max-w-xs mx-auto">
          Join our exclusive realtor network. Refer clients, close deals, and earn premium commissions on every successful transaction.
        </p>

        {/* Primary Action Button (Vibrant Orange / Amber with right arrow) */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onStartEarning();
          }}
          className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-semibold text-white bg-[#FF6600] hover:bg-[#FF771A] active:bg-[#E55B00] rounded-xl transition-all duration-150 shadow-lg shadow-[#FF6600]/25 hover:shadow-[#FF6600]/40 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mb-4 group"
        >
          <span>Start Earning Now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dismiss Link */}
        <button
          type="button"
          onClick={onClose}
          className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors py-1 cursor-pointer"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
};
