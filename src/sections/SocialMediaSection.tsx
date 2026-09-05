import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E7DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C85A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
              Connect With Us
            </span>
            <span className="w-6 h-[1.5px] bg-[#C85A32]" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] tracking-tight">
            See What's Happening <br />
            <span className="font-editorial italic font-normal text-[#C85A32]">
              at Bro's
            </span>
          </h2>
          <p className="mt-3 text-base text-[#1C1E1B]/70">
            Keep up with daily table stories, kitchen updates, and relaxed moments from E-11 Markaz.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#FAF7F2] border-2 border-[#E7DEC8] hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F2ECE1] flex items-center justify-center text-[#C85A32]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#233B2B] bg-[#E7DEC8]/60 px-3 py-1 rounded-full">
                    Instagram
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#1C1E1B] mb-1">
                @2bros_lounge
              </h3>
              <p className="font-editorial italic text-base text-[#233B2B] mb-4">
                Visual stories, daily vibes & food reels
              </p>

              <div className="py-4 border-y border-[#E7DEC8] mb-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold text-[#1C1E1B]">
                  {restaurantInfo.social.instagram.followers}
                </span>
                <span className="text-xs text-[#1C1E1B]/60 font-medium uppercase tracking-wider">
                  Community
                </span>
              </div>
            </div>

            <a
              id="social-link-instagram"
              href={restaurantInfo.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#1C1E1B] text-white text-sm font-semibold hover:bg-[#C85A32] active:scale-95 transition-all duration-200"
            >
              <span>Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Facebook Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#FAF7F2] border-2 border-[#E7DEC8] hover:border-[#233B2B]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F2ECE1] flex items-center justify-center text-[#233B2B]">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#233B2B] bg-[#E7DEC8]/60 px-3 py-1 rounded-full">
                    Facebook
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#1C1E1B] mb-1">
                Bro's Cafe
              </h3>
              <p className="font-editorial italic text-base text-[#233B2B] mb-4">
                Updates, guest check-ins & notices
              </p>

              <div className="py-4 border-y border-[#E7DEC8] mb-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold text-[#1C1E1B]">
                  {restaurantInfo.social.facebook.followers}
                </span>
                <span className="text-xs text-[#1C1E1B]/60 font-medium uppercase tracking-wider">
                  Community
                </span>
              </div>
            </div>

            <a
              id="social-link-facebook"
              href={restaurantInfo.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#233B2B] text-white text-sm font-semibold hover:bg-[#1E3524] active:scale-95 transition-all duration-200"
            >
              <span>Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
