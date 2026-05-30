import React, { useState } from 'react';
import { FadeIn } from './components/FadeIn';
import { AnimatedHeading } from './components/AnimatedHeading';
import { MapPin, ArrowRight, Sparkles, Navigation, Menu, X } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-maroon-900 font-sans text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-50 contrast-125"
        // The user should upload their video to the 'public' folder and name it 'background.mp4'
        src="/background.mp4"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <div className="px-4 pt-4 md:px-8 lg:px-16 lg:pt-6">
          <nav className="liquid-glass flex min-h-[64px] items-center justify-between rounded-xl px-4 py-3 md:px-6">
            {/* Left */}
            <div className="flex items-center gap-2 md:gap-3">
              <img src="/logo.png" alt="Torogan Logo" className="h-8 w-8 object-contain md:h-10 md:w-10" />
              <div className="text-lg font-bold tracking-widest text-gold drop-shadow-md md:text-xl">
                TOROGAN
              </div>
            </div>
            
            {/* Center (Desktop) */}
            <div className="hidden items-center gap-8 text-sm font-medium tracking-wide lg:flex xl:gap-10">
              <a href="#" className="text-white drop-shadow-md transition-colors hover:text-gold">Heritage</a>
              <a href="#" className="text-white drop-shadow-md transition-colors hover:text-gold">Living Spaces</a>
              <a href="#" className="text-white drop-shadow-md transition-colors hover:text-gold">Amenities</a>
              <a href="#" className="text-white drop-shadow-md transition-colors hover:text-gold">Admissions</a>
            </div>

            {/* Right (Desktop) */}
            <div className="hidden items-center gap-4 lg:flex">
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-2.5 text-sm font-semibold text-maroon-900 shadow-lg transition-transform hover:scale-105 active:scale-95">
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white transition-colors hover:text-gold lg:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-maroon-900/95 px-6 backdrop-blur-lg lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-6 top-8 p-2 text-white hover:text-gold"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 text-xl font-medium tracking-widest">
              <a href="#" className="text-white transition-colors hover:text-gold">Heritage</a>
              <a href="#" className="text-white transition-colors hover:text-gold">Living Spaces</a>
              <a href="#" className="text-white transition-colors hover:text-gold">Amenities</a>
              <a href="#" className="text-white transition-colors hover:text-gold">Admissions</a>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-base font-semibold text-maroon-900 shadow-lg active:scale-95">
                Apply Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-1 flex-col justify-end px-4 pb-12 pt-16 md:px-8 lg:px-16 lg:pb-16 lg:pt-0">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-end">
            
            {/* Left Column */}
            <div className="mb-12 lg:mb-0">
              <FadeIn delayMs={0} durationMs={800}>
                <div className="mb-4 flex items-center gap-2 md:mb-6">
                  <div className="liquid-glass flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-gold-light sm:text-xs md:px-4">
                    <MapPin size={12} className="text-gold sm:size-[14px]" />
                    <span>Mindanao State University - Main Campus</span>
                  </div>
                </div>
              </FadeIn>

              <AnimatedHeading 
                text={"Preserving heritage\nwhile shaping scholars."}
                className="mb-4 text-4xl font-medium tracking-tight text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.6)] sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl"
              />
              
              <FadeIn delayMs={800} durationMs={1000}>
                <p className="mb-6 max-w-xl text-base font-light leading-relaxed text-white/95 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] sm:text-lg md:mb-8 md:text-xl">
                  Experience premium, culture-inspired student living at the architectural heart of Islamic and Maranao heritage.
                </p>
              </FadeIn>
              
              <FadeIn delayMs={1200} durationMs={1000}>
                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-5">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-3.5 font-semibold text-maroon-900 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] sm:w-auto md:px-8 md:py-4">
                    Schedule a Tour
                    <Navigation size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="liquid-glass group w-full rounded-lg border border-gold/40 px-6 py-3.5 font-semibold text-gold transition-colors hover:bg-gold/10 hover:text-gold-light sm:w-auto md:px-8 md:py-4">
                    Explore Spaces
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="flex items-end justify-start lg:justify-end">
              <FadeIn delayMs={1500} durationMs={1000}>
                <div className="liquid-glass w-full rounded-2xl border border-white/10 px-6 py-5 shadow-2xl backdrop-blur-md sm:w-auto md:px-8 md:py-6">
                  <div className="flex flex-col gap-1 md:gap-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase md:text-xs">The Torogan Ethos</span>
                    <span className="text-lg font-light tracking-wide text-white drop-shadow-md sm:text-xl lg:text-2xl">
                      Culture. <br className="hidden lg:block" />
                      Community. <br className="hidden lg:block" />
                      Excellence.
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
