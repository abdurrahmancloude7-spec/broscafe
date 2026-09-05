import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Coffee } from 'lucide-react';

export const BrandIntroSection: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E7DEC8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE1] border border-[#E7DEC8]">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
                The Bro's Story
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] leading-[1.12]">
              Come for the Food. <br />
              <span className="font-editorial italic font-normal text-[#C85A32]">
                Stay for the Company.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#1C1E1B]/80 leading-relaxed font-normal">
              Bro's was born out of a simple, enduring conviction: food simply tastes better when it is shared with great people. Located at Salam Heights in the heart of E-11 Markaz, Bro's Cafe & Restaurant is designed as a relaxed social dining retreat in Islamabad.
            </p>

            <p className="text-sm sm:text-base text-[#1C1E1B]/70 leading-relaxed">
              We bring together the comfort of an unhurried neighborhood café with the vibrant energy of a contemporary kitchen. From casual late-morning catch-ups over warm brews to evening table feasts with your circle, you are always invited to take your time and stay a while.
            </p>

            {/* Three key pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E7DEC8]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F2ECE1] text-[#233B2B]">
                  <Heart className="w-4 h-4 text-[#C85A32]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1E1B]">Social Spirit</h4>
                  <p className="text-xs text-[#1C1E1B]/65 mt-0.5">Built for conversation & connection</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F2ECE1] text-[#233B2B]">
                  <Coffee className="w-4 h-4 text-[#233B2B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1E1B]">Casual Premium</h4>
                  <p className="text-xs text-[#1C1E1B]/65 mt-0.5">Comfortable cafe & kitchen flair</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F2ECE1] text-[#233B2B]">
                  <Sparkles className="w-4 h-4 text-[#E6A738]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1E1B]">Islamabad Vibe</h4>
                  <p className="text-xs text-[#1C1E1B]/65 mt-0.5">Contemporary lifestyle destination</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photography Pair */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Primary vertical image */}
              <div className="col-span-7 rounded-2xl overflow-hidden shadow-md border border-[#E7DEC8] bg-[#F2ECE1]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85"
                  alt="Friends having conversation at a restaurant in Islamabad"
                  className="w-full h-80 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Offset secondary image */}
              <div className="col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E7DEC8] bg-[#F2ECE1]">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=85"
                    alt="Comfortable restaurant seating and atmosphere"
                    className="w-full h-44 sm:h-52 object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Minimal quote card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F2ECE1] border border-[#E7DEC8]">
                  <p className="font-editorial italic text-sm text-[#1C1E1B] leading-snug">
                    "Every table tells a story. We just provide the warmth and the feast."
                  </p>
                  <p className="text-[11px] font-semibold text-[#233B2B] uppercase tracking-wider mt-2">
                    — Bro's Philosophy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
