/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  Handshake,
  User,
  Mail,
  Phone,
  Lock,
  Building,
  CheckCircle2,
  Copy,
  Share2,
  ArrowRight,
  LogOut,
  Download,
  DollarSign,
  TrendingUp,
  FileText
} from 'lucide-react';

interface RealtorAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RealtorUser {
  name: string;
  email: string;
  phone: string;
  agency: string;
  partnerId: string;
}

export const RealtorAuthModal: React.FC<RealtorAuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');
  const [currentUser, setCurrentUser] = useState<RealtorUser | null>(null);

  // Sign up form state
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    phone: '',
    agency: '',
    bankAccount: '',
    password: ''
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Client referral submission state inside dashboard
  const [clientReferral, setClientReferral] = useState({
    clientName: '',
    clientPhone: '',
    corridor: 'Epe',
    budget: '',
    notes: ''
  });
  const [referralSent, setReferralSent] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpData.name || !signUpData.email || !signUpData.phone) return;

    const newPartner: RealtorUser = {
      name: signUpData.name,
      email: signUpData.email,
      phone: signUpData.phone,
      agency: signUpData.agency || 'Independent Consultant',
      partnerId: `FPR-${Math.floor(1000 + Math.random() * 9000)}`
    };

    setCurrentUser(newPartner);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email) return;

    // Simulate authentication
    setCurrentUser({
      name: 'Tunde Williams',
      email: loginData.email || 'tunde.realtor@gmail.com',
      phone: '+234 803 456 7890',
      agency: 'Capital Crest Properties',
      partnerId: 'FPR-8821'
    });
  };

  const handleQuickDemoLogin = () => {
    setCurrentUser({
      name: 'Bimbo Adebayo',
      email: 'bimbo.realtor@femak.ng',
      phone: '+234 703 111 2233',
      agency: 'Apex Realtors Lagos',
      partnerId: 'FPR-5204'
    });
  };

  const referralUrl = currentUser
    ? `https://femakrealty.ng/?partner=${currentUser.partnerId}`
    : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSendReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientReferral.clientName || !clientReferral.clientPhone) return;
    setReferralSent(true);
  };

  const whatsappReferralLeadUrl = currentUser
    ? `https://wa.me/2347039277322?text=${encodeURIComponent(
        `Hello Femak Realty Consult, this is partner ${currentUser.name} (${currentUser.partnerId}). I have a client referral:\n- Client: ${clientReferral.clientName}\n- Phone: ${clientReferral.clientPhone}\n- Corridor Interest: ${clientReferral.corridor}\n- Budget: ${clientReferral.budget || 'Not specified'}\n- Notes: ${clientReferral.notes || 'Ready for site inspection'}`
      )}`
    : '';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="realtor-portal-title"
    >
      <div
        className="relative bg-[#201E1D] text-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Portal Header */}
        <div className="flex items-center justify-between p-5 bg-[#151312] border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2A2421] border border-[#FFA205]/40 flex items-center justify-center text-[#FF6600]">
              <Handshake className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#FFA205] uppercase block">
                Femak Realty Consult
              </span>
              <h2 id="realtor-portal-title" className="font-serif text-lg sm:text-xl font-bold text-white">
                Exclusive Realtor Partner Network
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Realtor Portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {currentUser ? (
            /* ============================================================ */
            /* LOGGED-IN REALTOR DASHBOARD                                  */
            /* ============================================================ */
            <div className="space-y-6">
              {/* Partner Welcome Card */}
              <div className="p-6 bg-[#151312] rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[#FFA205] font-mono font-bold">
                      {currentUser.partnerId}
                    </span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Active Verified Partner
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {currentUser.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {currentUser.agency} · {currentUser.email}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentUser(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 hover:text-white bg-neutral-800/80 rounded-md transition-colors self-start sm:self-auto"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>

              {/* Commission Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-[#151312] rounded-lg border border-white/5">
                  <span className="text-[11px] text-neutral-400 block mb-1">Standard Commission</span>
                  <span className="text-lg font-bold text-[#FFA205] font-mono">Up to 5% – 10%</span>
                  <span className="text-[10px] text-neutral-500 block">Per closed transaction</span>
                </div>
                <div className="p-4 bg-[#151312] rounded-lg border border-white/5">
                  <span className="text-[11px] text-neutral-400 block mb-1">Payout Timeline</span>
                  <span className="text-lg font-bold text-white font-mono">48 Hours</span>
                  <span className="text-[10px] text-neutral-500 block">Post title perfection</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 bg-[#151312] rounded-lg border border-white/5">
                  <span className="text-[11px] text-neutral-400 block mb-1">Your Partner ID</span>
                  <span className="text-lg font-bold text-white font-mono">{currentUser.partnerId}</span>
                  <span className="text-[10px] text-neutral-500 block">Tagged on all referrals</span>
                </div>
              </div>

              {/* Unique Partner Referral Link */}
              <div className="p-5 bg-[#151312] rounded-xl border border-[#FFA205]/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-[#FFA205]" />
                    <span>Your Personalized Referral Link</span>
                  </h4>
                  {copiedLink && (
                    <span className="text-[10px] text-emerald-400 font-medium">
                      Copied to clipboard!
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-400 mb-3">
                  Share this link with your buyer clients. Any inquiries, inspection requests, or acquisitions generated will be attributed to your account.
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={referralUrl}
                    className="flex-grow bg-[#201E1D] border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-[#FFA205] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF6600] hover:bg-[#FF771A] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Explore verified land and property investments along the Lekki-Epe corridor through Femak Realty Consult: ${referralUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors"
                    title="Share via WhatsApp"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Client Lead Forwarding Form */}
              <div className="p-6 bg-[#151312] rounded-xl border border-white/10">
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  Submit Direct Client Lead
                </h4>
                <p className="text-xs text-neutral-400 mb-4">
                  Forward prospective buyer details for physical or virtual inspection. Our closing desk handles inspections and guarantees your commission upon deal completion.
                </p>

                {referralSent ? (
                  <div className="p-4 bg-[#201E1D] rounded-lg border border-emerald-500/40 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <p className="text-xs font-bold text-white">
                      Lead Recorded for {clientReferral.clientName}!
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      Forward details immediately to our dedicated WhatsApp closing team:
                    </p>
                    <div className="pt-2 flex justify-center gap-2">
                      <a
                        href={whatsappReferralLeadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md"
                      >
                        <span>Forward Lead to WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setReferralSent(false);
                          setClientReferral({
                            clientName: '',
                            clientPhone: '',
                            corridor: 'Epe',
                            budget: '',
                            notes: ''
                          });
                        }}
                        className="px-3 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-800 rounded-md"
                      >
                        New Lead
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSendReferral} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-neutral-400 block mb-1">
                          Client Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Chief Adeleke"
                          value={clientReferral.clientName}
                          onChange={(e) =>
                            setClientReferral({ ...clientReferral, clientName: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs bg-[#201E1D] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#FFA205]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-neutral-400 block mb-1">
                          Client Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +234 802 345 6789"
                          value={clientReferral.clientPhone}
                          onChange={(e) =>
                            setClientReferral({ ...clientReferral, clientPhone: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs bg-[#201E1D] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#FFA205]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-neutral-400 block mb-1">
                          Corridor Interest
                        </label>
                        <select
                          value={clientReferral.corridor}
                          onChange={(e) =>
                            setClientReferral({ ...clientReferral, corridor: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs bg-[#201E1D] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#FFA205]"
                        >
                          <option value="Epe">Epe Growth Corridor</option>
                          <option value="Sangotedo">Sangotedo / Monastery</option>
                          <option value="Lekki">Lekki Phase 1 & 2</option>
                          <option value="Ajah">Ajah Axis</option>
                          <option value="Ibeju-Lekki">Ibeju-Lekki Free Zone</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] text-neutral-400 block mb-1">
                          Target Budget / Allocation (₦)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ₦20M – ₦50M"
                          value={clientReferral.budget}
                          onChange={(e) =>
                            setClientReferral({ ...clientReferral, budget: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs bg-[#201E1D] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#FFA205]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF6600] hover:bg-[#FF771A] rounded-lg transition-colors mt-2"
                    >
                      Submit Referral & Tag Commission
                    </button>
                  </form>
                )}
              </div>

              {/* Marketing Toolkits Download */}
              <div className="p-5 bg-[#151312] rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#FFA205]" />
                  <span>Download Realtor Marketing Kits</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-[#201E1D] rounded-lg border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">Epe Land Brochure</p>
                      <p className="text-[10px] text-neutral-400">PDF · 3.4 MB</p>
                    </div>
                    <a
                      href="#properties"
                      onClick={onClose}
                      className="p-1.5 text-[#FFA205] hover:text-white"
                      title="View Epe Listings"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="p-3 bg-[#201E1D] rounded-lg border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">Sangotedo Flyer</p>
                      <p className="text-[10px] text-neutral-400">PDF · 2.1 MB</p>
                    </div>
                    <a
                      href="#properties"
                      onClick={onClose}
                      className="p-1.5 text-[#FFA205] hover:text-white"
                      title="View Sangotedo Listings"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="p-3 bg-[#201E1D] rounded-lg border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">Lekki Duplex Spec</p>
                      <p className="text-[10px] text-neutral-400">PDF · 4.8 MB</p>
                    </div>
                    <a
                      href="#properties"
                      onClick={onClose}
                      className="p-1.5 text-[#FFA205] hover:text-white"
                      title="View Lekki Duplex Listings"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ============================================================ */
            /* REALTOR SIGN UP & LOGIN FORMS                                */
            /* ============================================================ */
            <div>
              {/* Tab Selector */}
              <div className="flex items-center gap-1 p-1 bg-[#151312] rounded-xl border border-white/10 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'signup'
                      ? 'bg-[#FF6600] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Join as a Realtor Partner (Sign Up)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'login'
                      ? 'bg-[#FF6600] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Existing Realtor Sign In
                </button>
              </div>

              {activeTab === 'signup' ? (
                /* Sign Up Form */
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">
                      Full Legal Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Babatunde Fashola"
                        value={signUpData.name}
                        onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. tunde@realty.ng"
                          value={signUpData.email}
                          onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +234 803 123 4567"
                          value={signUpData.phone}
                          onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1">
                        Realty Agency / Firm (Optional)
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. Prime Acreage Ltd or Independent"
                          value={signUpData.agency}
                          onChange={(e) => setSignUpData({ ...signUpData, agency: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1">
                        Commission Payout Account (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. GTBank - 0123456789"
                        value={signUpData.bankAccount}
                        onChange={(e) =>
                          setSignUpData({ ...signUpData, bankAccount: e.target.value })
                        }
                        className="w-full px-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">
                      Create Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={signUpData.password}
                        onChange={(e) =>
                          setSignUpData({ ...signUpData, password: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#FF6600] hover:bg-[#FF771A] rounded-xl transition-all shadow-lg shadow-[#FF6600]/25 mt-2"
                  >
                    Create Realtor Partner Account →
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={handleQuickDemoLogin}
                      className="text-xs text-[#FFA205] hover:text-white underline underline-offset-4"
                    >
                      Instant Demo Test: Log In as Sample Realtor
                    </button>
                  </div>
                </form>
              ) : (
                /* Login Form */
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">
                      Registered Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. tunde@realty.ng"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({ ...loginData, password: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#151312] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFA205]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#FF6600] hover:bg-[#FF771A] rounded-xl transition-all shadow-lg shadow-[#FF6600]/25 mt-2"
                  >
                    Sign In to Realtor Portal →
                  </button>

                  <div className="pt-3 text-center space-y-2">
                    <button
                      type="button"
                      onClick={handleQuickDemoLogin}
                      className="text-xs text-[#FFA205] hover:text-white underline underline-offset-4 block mx-auto"
                    >
                      Instant Demo Test: Log In as Sample Realtor
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
