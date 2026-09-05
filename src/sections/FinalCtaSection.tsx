import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] border-t border-[#E7DEC8] relative overflow-hidden">
      {/* Subtle organic warmth glows in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F2ECE1]/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Subtle Brand Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE1] border border-[#E7DEC8]">
            <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
              BRO'S CAFE & RESTAURANT
            </span>
          </div>

          {/* Emotional Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1E1B] tracking-tight leading-[1.08]">
            GOOD FOOD. <br />
            <span className="font-editorial italic font-normal text-[#233B2B]">
              GOOD PEOPLE.
            </span> <br />
            <span className="text-[#C85A32]">GOOD TIMES.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#1C1E1B]/75 max-w-xl mx-auto font-normal">
            Make your next catch-up a little more delicious.
          </p>

          {/* Primary CTA - Clickable Call */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="final-call-bros-cta"
              href={restaurantInfo.phoneTel}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#233B2B] text-white text-base sm:text-lg font-bold tracking-wide hover:bg-[#1E3524] active:scale-95 transition-all shadow-lg shadow-[#233B2B]/20"
            >
              <Phone className="w-5 h-5 text-[#E6A738]" />
              <span>Call Bro's</span>
              <span className="font-mono text-sm text-white/70 border-l border-white/20 pl-2.5">
                {restaurantInfo.phone}
              </span>
            </a>
          </div>

          {/* Location reassurance */}
          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-[#1C1E1B]/60">
            <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Salam Heights, E-11 Markaz, Opposite M Store, Islamabad</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
