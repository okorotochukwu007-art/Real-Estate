/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, MapPin, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { Property, CorridorLocation, InspectionBooking } from '../types/property';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProperty?: Property | null;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  isOpen,
  onClose,
  preselectedProperty
}) => {
  const [formData, setFormData] = useState<InspectionBooking>({
    fullName: '',
    email: '',
    phone: '',
    propertyId: preselectedProperty?.id || '',
    preferredDate: '',
    inspectionType: 'physical',
    corridorInterest: preselectedProperty?.corridor || 'Epe',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Valid phone number is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  const getWhatsAppForwardUrl = () => {
    const text = `Hello Femak Realty Consult, I have submitted a site inspection request:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Inspection Format: ${formData.inspectionType.toUpperCase()}
- Corridor: ${formData.corridorInterest}
- Preferred Date: ${formData.preferredDate}
${formData.notes ? `- Notes: ${formData.notes}` : ''}`;
    return `https://wa.me/2347039277322?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 lg:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inspection-modal-title"
    >
      <div
        className="relative bg-[#151312] text-white w-full max-w-xl rounded-sm shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#201E1D] p-6 sm:p-7 relative border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-mono tracking-widest text-[#FFA205] uppercase block mb-1">
            Femak Site Inspection Service
          </span>
          <h2 id="inspection-modal-title" className="font-serif text-2xl font-bold text-white">
            Schedule a Site Inspection
          </h2>
          <p className="text-xs text-neutral-400 mt-1 max-w-md">
            Physical on-site corridor visits in Lagos, or live video walkthroughs for diaspora investors.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FFA205]/10 text-[#FFA205] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Inspection Request Ready
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. To ensure priority coordination with our field team, you can immediately send your request details directly to our WhatsApp team or await our phone confirmation.
              </p>

              <div className="p-4 bg-[#201E1D] border border-white/10 rounded-sm text-left text-xs text-neutral-300 space-y-1.5 max-w-sm mx-auto">
                <p><strong>Corridor:</strong> {formData.corridorInterest}</p>
                <p><strong>Format:</strong> {formData.inspectionType === 'physical' ? 'Physical On-Site' : 'Live Virtual Video Walkthrough'}</p>
                <p><strong>Target Date:</strong> {formData.preferredDate}</p>
                <p><strong>Contact:</strong> {formData.phone}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppForwardUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors shadow-sm"
                >
                  <span>Forward to WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 text-xs font-semibold text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Inspection Type Selector */}
              <div>
                <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2 font-mono">
                  Inspection Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inspectionType: 'physical' })}
                    className={`p-3 text-left border rounded-sm transition-all ${
                      formData.inspectionType === 'physical'
                        ? 'border-[#FFA205] bg-[#201E1D] ring-1 ring-[#FFA205]'
                        : 'border-white/10 hover:border-white/20 bg-[#151312]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-[#FFA205]" />
                      <span className="text-xs font-bold text-white">Physical Visit</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 block">
                      Meet our team in Lagos for physical beacon inspection
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inspectionType: 'virtual' })}
                    className={`p-3 text-left border rounded-sm transition-all ${
                      formData.inspectionType === 'virtual'
                        ? 'border-[#FFA205] bg-[#201E1D] ring-1 ring-[#FFA205]'
                        : 'border-white/10 hover:border-white/20 bg-[#151312]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Video className="w-4 h-4 text-[#FFA205]" />
                      <span className="text-xs font-bold text-white">Virtual Video</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 block">
                      Live walkthrough designed for diaspora buyers
                    </span>
                  </button>
                </div>
              </div>

              {/* Corridor & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Corridor of Interest *
                  </label>
                  <select
                    value={formData.corridorInterest}
                    onChange={(e) => setFormData({ ...formData, corridorInterest: e.target.value as CorridorLocation })}
                    className="w-full px-3 py-2 text-xs border border-white/10 rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205]"
                  >
                    <option value="Lekki">Lekki (Phase 1 & 2)</option>
                    <option value="Ajah">Ajah Enclaves</option>
                    <option value="Sangotedo">Sangotedo / Monastery Rd</option>
                    <option value="Epe">Epe Growth Axis</option>
                    <option value="Ibeju-Lekki">Ibeju-Lekki / Free Zone</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs border rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205] ${
                      errors.preferredDate ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-[10px] text-red-500 mt-0.5">{errors.preferredDate}</p>}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Adebayo Balogun"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs border rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205] ${
                      errors.fullName ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +234 803 123 4567"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs border rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205] ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-white/10 rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Specific Requirements or Property Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking for dry residential plot for immediate construction or land banking..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-white/10 rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors shadow-sm"
                >
                  Confirm Inspection Request
                </button>
                <p className="text-[11px] text-neutral-400 text-center mt-2">
                  No automated booking fees. Direct inspection coordination with Femak team.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
