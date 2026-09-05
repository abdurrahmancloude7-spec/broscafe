import React from 'react';
import { motion } from 'motion/react';
import { heroAssets } from '../data/restaurantData';
import { Sparkles, Sun, Coffee, Users } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  return (
    <section id="atmosphere" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C85A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
                The Bro's Environment
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] tracking-tight">
              Your Table Is <span className="font-editorial italic font-normal text-[#233B2B]">Waiting.</span>
            </h2>
          </div>

          <p className="text-base text-[#1C1E1B]/75 max-w-md">
            Muted greens, warm sand walls, and natural daylight create an inviting retreat where conversations can linger.
          </p>
        </div>

        {/* Asymmetrical Editorial Lifestyle Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Large Hero Image (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#E7DEC8] bg-[#F2ECE1] h-full min-h-[380px] sm:min-h-[460px]">
              <img
                src={heroAssets.interiorVibe}
                alt="Modern cafe interior at Bro's in E-11 Markaz with warm lighting and comfortable green seating"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-[#FAF7F2]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-md max-w-md">
                  <p className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
                    Atmosphere & Seating
                  </p>
                  <p className="font-editorial italic text-base sm:text-lg text-[#1C1E1B] mt-1">
                    "A space where time slows down and good conversations flow naturally."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Staggered Secondary Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Top secondary image: Coffee & Table Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E7DEC8] bg-[#F2ECE1] h-60 sm:h-64"
            >
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85"
                alt="Freshly poured artisan coffee and warm cafe details at Bro's"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#1C1E1B]/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-medium">
                Artisan Brews & Drinks
              </div>
            </motion.div>

            {/* Bottom Magazine Editorial Text Box & Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#F4EFE6] border border-[#E7DEC8] flex flex-col justify-between flex-grow"
            >
              <div>
                <p className="font-editorial italic text-xl text-[#233B2B] leading-snug mb-3">
                  Contemporary Islamabad living meets genuine hospitality.
                </p>
                <p className="text-sm text-[#1C1E1B]/70 leading-relaxed font-normal">
                  Located opposite M Store in Salam Heights, we've thoughtfully designed our space to accommodate both intimate one-on-one catch-ups and lively group gatherings.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#E7DEC8]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#1C1E1B]">
                  <Sun className="w-3.5 h-3.5 text-[#E6A738]" />
                  <span>Daylight Seating</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#1C1E1B]">
                  <Coffee className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Coffee & Mocktails</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#1C1E1B]">
                  <Users className="w-3.5 h-3.5 text-[#233B2B]" />
                  <span>Group Tables</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#1C1E1B]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Cozy Evening Glow</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
