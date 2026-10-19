/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlideshow } from './components/HeroSlideshow';
import { FeaturedProperties } from './components/FeaturedProperties';
import { MegaProjectsRadar } from './components/MegaProjectsRadar';
import { ServicesSuite } from './components/ServicesSuite';
import { ExploreLocations } from './components/ExploreLocations';
import { WhyChooseFemak } from './components/WhyChooseFemak';
import { PropertyInvestment } from './components/PropertyInvestment';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { InspectionModal } from './components/InspectionModal';
import { VideoTourModal } from './components/VideoTourModal';
import { ResearchInsightModal } from './components/ResearchInsightModal';
import { RealtorPopupModal } from './components/RealtorPopupModal';
import { RealtorAuthModal } from './components/RealtorAuthModal';
import { DEMO_PROPERTIES } from './data/properties';
import { Property } from './types/property';
import { CurrencyCode } from './utils/currency';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('NGN');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [inspectionTargetProperty, setInspectionTargetProperty] = useState<Property | null>(null);
  const [videoTourOpen, setVideoTourOpen] = useState(false);
  const [researchModalOpen, setResearchModalOpen] = useState(false);

  // Realtor Popup & Auth Modal State
  const [realtorPopupOpen, setRealtorPopupOpen] = useState(false);
  const [realtorAuthModalOpen, setRealtorAuthModalOpen] = useState(false);

  // Trigger popup on initial client visit (with natural 1.2s delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setRealtorPopupOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleBookInspection = (property?: Property) => {
    setInspectionTargetProperty(property || null);
    setInspectionModalOpen(true);
  };

  const handleStartEarning = () => {
    setRealtorPopupOpen(false);
    setRealtorAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#151312] text-[#F5F5F5] flex flex-col selection:bg-[#FFA205]/30 selection:text-[#FFA205]">
      {/* Clean, Streamlined Navigation Header */}
      <Header
        onExploreClick={() => scrollToSection('properties')}
        onContactClick={() => scrollToSection('contact')}
        onOpenRealtorPortal={() => setRealtorAuthModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Stationary Text & Background Slideshow */}
        <HeroSlideshow
          onExploreClick={() => scrollToSection('properties')}
          onContactClick={() => scrollToSection('contact')}
          onWatchVideoClick={() => setVideoTourOpen(true)}
        />

        {/* 1. Featured Properties with Search & Diaspora Multi-Currency Filter */}
        <FeaturedProperties
          properties={DEMO_PROPERTIES}
          currency={currency}
          onCurrencyChange={setCurrency}
          onViewDetails={handleOpenDetails}
          onBookInspection={handleBookInspection}
        />

        {/* 2. Megaprojects Radar (Deep Sea Port, Dangote Refinery, Airport, Alaro City) */}
        <MegaProjectsRadar />

        {/* 3. Bespoke Services & Full-Service Advisory */}
        <ServicesSuite
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 4. Explore Locations (Lekki, Ajah, Sangotedo, Epe) */}
        <ExploreLocations
          onSelectCorridor={() => {
            scrollToSection('properties');
          }}
        />

        {/* 5. Why Choose Femak (Grounded Philosophy) */}
        <WhyChooseFemak />

        {/* 6. Property Investment Editorial Guide & Research Reader */}
        <PropertyInvestment
          onOpenResearch={() => setResearchModalOpen(true)}
        />

        {/* 7. Call to Action (Inspections & Site Visits) */}
        <CallToAction
          onScheduleInspection={() => handleBookInspection()}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 8. Contact Section (Direct Phone, Email, WhatsApp, Validated Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Property Details Modal with Currency Support */}
      <PropertyModal
        property={selectedProperty}
        currency={currency}
        onClose={() => setSelectedProperty(null)}
        onBookInspection={(prop) => {
          setSelectedProperty(null);
          handleBookInspection(prop);
        }}
      />

      {/* Site Inspection Booking Modal (Physical & Virtual Video) */}
      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => {
          setInspectionModalOpen(false);
          setInspectionTargetProperty(null);
        }}
        preselectedProperty={inspectionTargetProperty}
      />

      {/* Simulated Drone & Corridor Video Tour Modal */}
      <VideoTourModal
        isOpen={videoTourOpen}
        onClose={() => setVideoTourOpen(false)}
        onBookInspection={() => {
          setVideoTourOpen(false);
          handleBookInspection();
        }}
      />

      {/* Corridor Market Research Reader Modal */}
      <ResearchInsightModal
        isOpen={researchModalOpen}
        onClose={() => setResearchModalOpen(false)}
        onScheduleInspection={() => {
          setResearchModalOpen(false);
          handleBookInspection();
        }}
      />

      {/* Realtor Partner Pop-Up Modal (Matched from user's screenshot) */}
      <RealtorPopupModal
        isOpen={realtorPopupOpen}
        onClose={() => setRealtorPopupOpen(false)}
        onStartEarning={handleStartEarning}
      />

      {/* Realtor Sign Up / Login / Dashboard Portal Modal */}
      <RealtorAuthModal
        isOpen={realtorAuthModalOpen}
        onClose={() => setRealtorAuthModalOpen(false)}
      />

      {/* Subtle Floating WhatsApp Affordance */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/2347039277322?text=Hello%20Femak%20Realty%20Consult%2C%20I%20would%20like%20to%20enquire%20about%20land%20and%20properties%20in%20Lagos."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#201E1D] text-white hover:bg-[#2A2421] rounded-full shadow-2xl border border-[#FFA205]/40 transition-all hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA205]"
          aria-label="Direct WhatsApp Chat with Femak Realty Consult"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0 animate-pulse" />
          <MessageCircle className="w-4 h-4 text-[#FFA205]" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            WhatsApp Us
          </span>
        </a>
      </aside>
    </div>
  );
}
