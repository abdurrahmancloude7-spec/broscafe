import React from 'react';
import { ArrowDown, MapPin, Compass, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { restaurantInfo, heroAssets } from '../data/restaurantData';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Subtle organic background accent lines */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-[#F2ECE1]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E7DEC8]/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Grid: Content cleanly separated from photography, NEVER covering it with a giant card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Editorial Typography Column (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Location & Concept Badge */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#C85A32] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#233B2B]">
                Salam Heights • E-11 Markaz Islamabad
              </span>
            </div>

            {/* Brand Title */}
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-[#C85A32] mb-2">
              {restaurantInfo.brand}
            </h2>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1E1B] leading-[1.08] mb-4 sm:mb-6">
              GOOD FOOD. <br />
              <span className="font-editorial italic font-normal text-[#233B2B] text-[0.95em]">
                BETTER COMPANY.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#1C1E1B]/75 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              {restaurantInfo.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              <button
                id="hero-explore-menu-btn"
                type="button"
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-[#C85A32] text-white font-semibold text-sm sm:text-base tracking-wide hover:bg-[#b04b27] active:scale-95 transition-all duration-200 shadow-md shadow-[#C85A32]/25"
              >
                <span>Explore Menu</span>
              </button>

              <button
                id="hero-find-us-btn"
                type="button"
                onClick={() => scrollToSection('visit')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#F2ECE1] text-[#1C1E1B] hover:bg-[#E7DEC8] active:scale-95 border border-[#D8CFBE] font-semibold text-sm sm:text-base tracking-wide transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#233B2B]" />
                <span>Find Us</span>
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="pt-6 border-t border-[#E7DEC8] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#1C1E1B]/70">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C85A32]" />
                <span className="font-medium">Social Dining Space</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#233B2B]" />
                <span className="font-medium">Opposite M Store</span>
              </div>
            </div>
          </motion.div>

          {/* Right / Photography Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* The photograph remains naturally visible without large dark sheets or centered white box */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(28,30,27,0.09)] border border-[#E7DEC8] bg-[#F2ECE1]">
              <img
                src={heroAssets.heroTable}
                alt="Photorealistic sharing dining table at Bro's Cafe and Restaurant with gourmet dishes and natural daylight in Islamabad"
                className="w-full h-[360px] sm:h-[480px] lg:h-[560px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Tasteful, minimal editorial tag in the top corner (no dark overlay sheet, no giant box) */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <div className="bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-sm">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#233B2B]">
                    Good food is better together
                  </p>
                </div>
              </div>

              {/* Bottom right subtle credit/location badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <div className="bg-[#1C1E1B]/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide">
                  E-11 Markaz • Islamabad
                </div>
              </div>
            </div>

            {/* Decorative accent element */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7DEC8] shadow-lg">
              <div className="bg-[#F2ECE1] px-4 py-2.5 rounded-xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#233B2B]" />
                <span className="font-editorial italic text-sm text-[#1C1E1B]">
                  "Food made for good company"
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Subtle scroll down indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            type="button"
            onClick={() => scrollToSection('story')}
            aria-label="Scroll to our story"
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#1C1E1B]/50 hover:text-[#C85A32] transition-colors group focus:outline-none"
          >
            <span>Our Story</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#C85A32]" />
          </button>
        </div>
      </div>
    </section>
  );
};
