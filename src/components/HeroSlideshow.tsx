/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, MapPin, PhoneCall, Play } from 'lucide-react';
import { HERO_SLIDES } from '../data/properties';

interface HeroSlideshowProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onWatchVideoClick: () => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  onExploreClick,
  onContactClick,
  onWatchVideoClick
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesFailed, setImagesFailed] = useState<Record<number, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 6 second timer, respects hover pause & prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  const handleImageError = (index: number) => {
    setImagesFailed((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#151312] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Femak Realty Consult Hero Showcase"
    >
      {/* Background Slides with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const hasFailed = imagesFailed[index];

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {!hasFailed ? (
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  onError={() => handleImageError(index)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[7000ms] ease-out motion-reduce:transform-none"
                />
              ) : (
                /* Reliable architectural fallback container */
                <div className="w-full h-full bg-gradient-to-br from-[#151312] via-[#201E1D] to-[#2A2421] flex items-center justify-center">
                  <div className="w-full h-full opacity-15 bg-[radial-gradient(#FFA205_1px,transparent_1px)] [background-size:24px_24px]" />
                </div>
              )}

              {/* Master Scrim & Architectural Contrast Overlay (Icon Homes warm bronze/dark grading) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#151312]/95 via-[#151312]/85 to-[#151312]/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-transparent to-[#151312]/60" />
            </div>
          );
        })}
      </div>

      {/* Stationary Hero Content Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 lg:py-44 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-6 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FFA205] uppercase font-mono">
            <span className="w-8 h-[1px] bg-[#FFA205]" aria-hidden="true" />
            <span>FEMAK REALTY CONSULT</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance mb-6">
            Find Your Place. <br />
            <span className="text-[#FFA205]">Invest in Your Future.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Explore land and property opportunities across the Lekki–Epe corridor with Femak Realty Consult.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] active:bg-[#E08A00] rounded-sm transition-all duration-150 shadow-xl hover:shadow-[#FFA205]/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onWatchVideoClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:text-[#FFA205] bg-[#201E1D]/90 hover:bg-[#201E1D] border border-white/15 hover:border-[#FFA205]/60 rounded-sm transition-all duration-150 backdrop-blur-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA205]"
            >
              <Play className="w-4 h-4 text-[#FFA205] fill-current" />
              <span>Watch Corridor Tour</span>
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-neutral-300 hover:text-white rounded-sm transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#FFA205]" />
              <span>Speak to Our Team</span>
            </button>
          </div>

          {/* Corridor Trust Badges */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FFA205] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Lekki–Epe Corridor</p>
                <p className="text-neutral-400 text-[11px]">Lekki, Ajah, Sangotedo, Epe</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#FFA205] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Title Verification</p>
                <p className="text-neutral-400 text-[11px]">Due diligence before purchase</p>
              </div>
            </div>
            <div className="hidden sm:flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#FFA205] shrink-0 mt-1.5" />
              <div>
                <p className="font-semibold text-white">Diaspora Ready</p>
                <p className="text-neutral-400 text-[11px]">Virtual tours & multi-currency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Slideshow Controls & Slide Indicators */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-4 bg-[#201E1D]/90 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10">
        {/* Slide Counter */}
        <div className="text-xs text-neutral-300 font-mono tabular-nums pr-2 border-r border-white/10">
          <span className="text-[#FFA205] font-semibold">{currentSlide + 1}</span>
          <span className="text-neutral-400"> / {HERO_SLIDES.length}</span>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slideshow Indicators">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-6 bg-[#FFA205]'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              aria-selected={idx === currentSlide}
              role="tab"
            />
          ))}
        </div>

        {/* Previous / Next Controls */}
        <div className="flex items-center gap-1 pl-1">
          <button
            type="button"
            onClick={prevSlide}
            className="p-1 text-neutral-300 hover:text-white rounded hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFA205]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-1 text-neutral-300 hover:text-white rounded hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFA205]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
