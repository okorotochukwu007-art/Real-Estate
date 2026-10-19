/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Land Acquisition Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please provide your full name';
    if (!formState.email.trim() && !formState.phone.trim()) {
      errs.contact = 'Please provide either a phone number or email address';
    }
    if (!formState.message.trim()) errs.message = 'Please include a brief message';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 400);
  };

  const getDirectWhatsAppUrl = () => {
    const text = `Hello Femak Realty Consult,
My Name: ${formState.name || 'Website Visitor'}
Subject: ${formState.subject}
Message: ${formState.message || 'I would like to enquire about your available properties.'}
Contact: ${formState.phone || formState.email || 'N/A'}`;
    return `https://wa.me/2347039277322?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#151312] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Details & Working Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA205] block mb-2 font-mono">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                Speak with Femak Realty Consult
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                We welcome enquiries from prospective buyers, diaspora investors, and property owners seeking dedicated real estate guidance along the Lekki–Epe corridor.
              </p>

              {/* Verified Contact Details Block */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#201E1D] border border-white/10 flex items-center justify-center text-[#FFA205] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#FFA205]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block font-mono">
                      Direct Phone Call
                    </span>
                    <a
                      href="tel:+2347039277322"
                      className="text-base font-bold text-white hover:text-[#FFA205] font-mono tabular-nums transition-colors"
                    >
                      +234 703 927 7322
                    </a>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      Available Monday to Saturday
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#201E1D] border border-white/10 flex items-center justify-center text-[#FFA205] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#FFA205]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block font-mono">
                      Email Communication
                    </span>
                    <a
                      href="mailto:femakrealtyconsult@gmail.com"
                      className="text-base font-semibold text-white hover:text-[#FFA205] transition-colors"
                    >
                      femakrealtyconsult@gmail.com
                    </a>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      Official enquiries & documentation review
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#201E1D] border border-white/10 flex items-center justify-center text-[#FFA205] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-[#FFA205]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block font-mono">
                      Instant WhatsApp Concierge
                    </span>
                    <a
                      href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#FFA205] hover:text-[#FFB733] underline underline-offset-4 transition-colors"
                    >
                      Open WhatsApp Chat (+234 703 927 7322)
                    </a>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      Fast response for quick questions & video audits
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#201E1D] border border-white/10 flex items-center justify-center text-[#FFA205] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#FFA205]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block font-mono">
                      Operating Base
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Lekki, Lagos State, Nigeria
                    </p>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      Covering Lekki, Ajah, Sangotedo, and Epe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2.5 text-xs text-neutral-400">
              <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Office Consultations: Mon – Sat (8:30 AM – 5:30 PM WAT)</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#201E1D] p-7 sm:p-9 rounded-sm border border-white/10 shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Complete this brief form to share your investment timeline or request information about land parcels along the corridor.
            </p>

            {isSent ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FFA205]/10 text-[#FFA205] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Enquiry Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formState.name}</strong>. Your enquiry has been received. You can also bridge this note directly to our official WhatsApp line for priority handling.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#151312]" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Land Acquisition Enquiry',
                        message: ''
                      });
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-sm transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tunde Williams"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs border rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205] ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +234 703 927 7322"
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({ ...formState, phone: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: '' });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs border border-white/10 rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. tunde@example.com"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: '' });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs border border-white/10 rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205]"
                    />
                  </div>
                </div>
                {errors.contact && <p className="text-[10px] text-red-500">{errors.contact}</p>}

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Enquiry Category
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-white/10 rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205]"
                  >
                    <option value="Land Acquisition Enquiry">Land Acquisition (Lekki / Epe)</option>
                    <option value="Residential Property Search">Residential Homes & Duplexes</option>
                    <option value="Site Inspection Request">Site Inspection Coordination</option>
                    <option value="Title & Document Advisory">Title & Survey Verification Guidance</option>
                    <option value="General Property Consultation">General Property Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Your Message or Property Preferences *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the property type, preferred corridor location (e.g., Sangotedo, Epe), plot dimensions, or investment budget..."
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs border rounded-sm bg-[#151312] text-white focus:outline-none focus:border-[#FFA205] ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] active:bg-[#E08A00] rounded-sm transition-colors shadow-sm disabled:opacity-70"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Direct Enquiry'}</span>
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                    Your contact information is handled directly by Femak Realty Consult.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
