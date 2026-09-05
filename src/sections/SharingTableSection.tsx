import React from 'react';
import { motion } from 'motion/react';
import { heroAssets } from '../data/restaurantData';

export const SharingTableSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E7DEC8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Headline with generous negative space */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C85A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
              Communal Rituals
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#1C1E1B] tracking-tight leading-[1.08]">
            Better When <br />
            <span className="font-editorial italic font-normal text-[#C85A32]">
              Shared.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#1C1E1B]/75 max-w-xl leading-relaxed">
            Plates made to pass around, sauces crafted for dipping, and a table where everyone digs in. At Bro's, dining is a shared adventure.
          </p>
        </div>

        {/* The Sharing Feast Showcase (No giant card overlay over the image) */}
        <div className="relative">
          
          {/* Main Photo Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(28,30,27,0.08)] border border-[#E7DEC8] bg-[#FAF7F2]"
          >
            <img
              src={heroAssets.sharingTable}
              alt="Communal sharing feast at Bro's Cafe & Restaurant with gourmet sliders, fries, grilled platters, and mocktails"
              className="w-full h-[400px] sm:h-[540px] lg:h-[640px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </motion.div>

          {/* Tasteful Minimal Editorial Labels - Clean Floating Badges */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7DEC8] flex items-center gap-4">
              <span className="font-display text-sm font-extrabold text-[#C85A32] tracking-wider">
                01
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#1C1E1B]">
                  FOR THE TABLE
                </p>
                <p className="text-xs text-[#1C1E1B]/65 mt-0.5">
                  Generous platters and finger foods to share easily
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7DEC8] flex items-center gap-4">
              <span className="font-display text-sm font-extrabold text-[#233B2B] tracking-wider">
                02
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#1C1E1B]">
                  FOR THE MOMENT
                </p>
                <p className="text-xs text-[#1C1E1B]/65 mt-0.5">
                  Good food timed to keep conversations flowing
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7DEC8] flex items-center gap-4">
              <span className="font-display text-sm font-extrabold text-[#E6A738] tracking-wider">
                03
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#1C1E1B]">
                  FOR THE CREW
                </p>
                <p className="text-xs text-[#1C1E1B]/65 mt-0.5">
                  Room for your entire circle of friends or family
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
