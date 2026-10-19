/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, MapPin, Calendar, Compass, ArrowRight } from 'lucide-react';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookInspection: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({
  isOpen,
  onClose,
  onBookInspection
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState<'lekki' | 'sangotedo' | 'epe'>('epe');

  if (!isOpen) return null;

  const chapters = [
    {
      id: 'lekki',
      title: 'Lekki Phase 1 & 2',
      tag: 'Urban Luxury',
      timestamp: '01:15',
      description: 'Modern cantilevered architectural duplexes, paved boulevards, and waterfront vistas.'
    },
    {
      id: 'sangotedo',
      title: 'Sangotedo Family Hub',
      tag: 'Gated Estates',
      timestamp: '03:40',
      description: 'Monastery Road gated layouts, Novare Mall proximity, and family-centric residences.'
    },
    {
      id: 'epe',
      title: 'Epe Growth Axis',
      tag: 'Industrial Horizon',
      timestamp: '06:20',
      description: 'Dualised 6-lane expressways, Alaro City perimeter, and expansive table dry land.'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative bg-[#151312] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 bg-[#201E1D] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFA205] animate-pulse" />
            <span id="video-modal-title" className="text-xs font-serif font-bold text-white tracking-wider uppercase">
              Femak Corridor Aerial & Property Showcase
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
          {/* Simulated cinematic drone footage visual */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#151312] via-[#201E1D] to-[#2A2421]">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
              alt="Corridor drone footage"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-75'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Overlay Drone HUD & Coordinates */}
          <div className="absolute top-4 left-4 z-10 font-mono text-[11px] text-white/80 space-y-0.5 bg-black/50 p-2 rounded backdrop-blur-sm border border-white/10">
            <p className="text-[#FFA205]">CORRIDOR DRONE RADAR · ACTIVE</p>
            <p>LAT: 6.4698° N, LNG: 3.5852° E (LEKKI-EPE)</p>
            <p>ALT: 120M AGL · 4K UHD 60FPS</p>
          </div>

          {/* Center Play/Pause Indicator if Paused */}
          {!isPlaying && (
            <div className="relative z-20 w-16 h-16 rounded-full bg-[#FFA205] text-[#151312] flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          )}

          {/* Current Chapter Overlay */}
          <div className="absolute bottom-14 left-4 right-4 z-10 flex items-end justify-between text-white">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFA205] block mb-1">
                Chapter: {chapters.find((c) => c.id === activeChapter)?.tag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {chapters.find((c) => c.id === activeChapter)?.title}
              </h3>
              <p className="text-xs text-neutral-300 max-w-lg mt-1 hidden sm:block">
                {chapters.find((c) => c.id === activeChapter)?.description}
              </p>
            </div>
          </div>

          {/* Video Control Bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/95 to-transparent px-4 py-3 flex items-center justify-between text-white border-t border-white/5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 hover:text-[#FFA205] transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 hover:text-[#FFA205] transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="text-xs font-mono tabular-nums text-neutral-400">
                <span>02:45 / 08:30</span>
              </div>
            </div>

            {/* Chapter Pills */}
            <div className="flex items-center gap-1.5">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChapter(ch.id as any)}
                  className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm transition-colors ${
                    activeChapter === ch.id
                      ? 'bg-[#FFA205] text-[#151312] font-bold'
                      : 'bg-white/10 hover:bg-white/20 text-neutral-300'
                  }`}
                >
                  {ch.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="p-5 bg-[#201E1D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Want a customized live video walkthrough of a specific parcel?
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              We conduct personalized virtual inspections with live boundary beacon reviews for diaspora investors.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookInspection();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151312] bg-[#FFA205] hover:bg-[#FFB733] rounded-sm transition-colors whitespace-nowrap shadow-md shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Live Virtual Tour</span>
          </button>
        </div>
      </div>
    </div>
  );
};
