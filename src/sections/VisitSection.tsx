import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Copy, Check, Car, Compass } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const VisitSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(restaurantInfo.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#F4EFE6] border-t border-[#E7DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C85A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
              Location & Access
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] tracking-tight">
            Find Us in <span className="font-editorial italic font-normal text-[#C85A32]">E-11 Markaz.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#1C1E1B]/75">
            Conveniently situated in Salam Heights, directly opposite M Store. Easy to find and easy to reach.
          </p>
        </div>

        {/* Location Details & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Address Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#E7DEC8] shadow-sm"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#F2ECE1] text-[#233B2B] text-xs font-bold uppercase tracking-wider mb-6">
                BRO'S CAFE & RESTAURANT
              </div>

              {/* Exact Address Block */}
              <div className="space-y-2 mb-8">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#C85A32]">
                  Physical Address
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1C1E1B]">
                  Salam Heights
                </h3>
                <p className="text-lg text-[#1C1E1B]/80 font-medium">
                  E-11 Markaz, Opposite M Store
                </p>
                <p className="text-base text-[#1C1E1B]/70">
                  Islamabad, Pakistan
                </p>
              </div>

              {/* Contact Block */}
              <div className="pt-6 border-t border-[#E7DEC8] mb-8">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#233B2B] mb-2">
                  Direct Telephone
                </p>
                <a
                  id="visit-phone-link"
                  href={restaurantInfo.phoneTel}
                  className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-display font-extrabold text-[#1C1E1B] hover:text-[#C85A32] transition-colors"
                >
                  <Phone className="w-6 h-6 text-[#C85A32]" />
                  <span>{restaurantInfo.phone}</span>
                </a>
              </div>

              {/* Neighborhood cues */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#1C1E1B]/70 mb-8">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F2ECE1]/70">
                  <MapPin className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1E1B] block">Key Landmark</span>
                    Directly opposite M Store in E-11 Markaz.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F2ECE1]/70">
                  <Car className="w-4 h-4 text-[#233B2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1E1B] block">Markaz Parking</span>
                    Accessible commercial parking around the square.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E7DEC8]">
              <a
                id="visit-get-directions-btn"
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C85A32] text-white font-bold text-sm tracking-wide hover:bg-[#b04b27] active:scale-95 transition-all shadow-md shadow-[#C85A32]/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <button
                id="visit-copy-address-btn"
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F2ECE1] text-[#1C1E1B] hover:bg-[#E7DEC8] active:scale-95 border border-[#D8CFBE] font-semibold text-sm transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#1C1E1B]/70" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Orientation & Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between rounded-3xl overflow-hidden border border-[#E7DEC8] bg-[#FAF7F2] shadow-sm"
          >
            {/* Styled Map Preview Canvas */}
            <div className="relative p-6 sm:p-8 bg-[#FAF7F2] flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#233B2B] uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-[#C85A32]" />
                    <span>Islamabad Sector E-11 Navigator</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#1C1E1B]/50">E-11 / Islamabad</span>
                </div>

                <h4 className="font-display text-xl font-bold text-[#1C1E1B] mb-2">
                  Salam Heights Landmark Anchor
                </h4>
                <p className="text-sm text-[#1C1E1B]/70 leading-relaxed mb-6">
                  Coming from Margalla Road or the main sector avenues, enter E-11 Markaz. Look for the commercial strip facing M Store — Bro's Cafe & Restaurant is situated in Salam Heights.
                </p>
              </div>

              {/* Graphical Location Card */}
              <div className="p-6 rounded-2xl bg-[#F2ECE1] border border-[#E7DEC8] relative overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E7DEC8] pb-3">
                    <span className="text-xs text-[#1C1E1B]/70">Building:</span>
                    <span className="text-xs font-bold text-[#1C1E1B]">Salam Heights</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#E7DEC8] pb-3">
                    <span className="text-xs text-[#1C1E1B]/70">Sector:</span>
                    <span className="text-xs font-bold text-[#1C1E1B]">E-11 Markaz</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#E7DEC8] pb-3">
                    <span className="text-xs text-[#1C1E1B]/70">Front Landmark:</span>
                    <span className="text-xs font-bold text-[#C85A32]">Opposite M Store</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#1C1E1B]/70">City:</span>
                    <span className="text-xs font-bold text-[#233B2B]">Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7DEC8] flex items-center justify-between text-xs text-[#1C1E1B]/60">
                <span>Direct inquiry or table holds:</span>
                <a href={restaurantInfo.phoneTel} className="font-bold text-[#C85A32] hover:underline">
                  {restaurantInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
