import React from 'react';
import { motion } from 'motion/react';
import { experiences } from '../data/restaurantData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E7DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C85A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
              The Dining Journey
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] tracking-tight">
            Made for <span className="font-editorial italic font-normal text-[#233B2B]">Good Company.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#1C1E1B]/70 max-w-xl">
            More than just dining out. Bro's is structured around the natural rhythm of a great gathering with your circle.
          </p>
        </div>

        {/* Editorial Storytelling Layout - NOT generic rounded card grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex flex-col justify-between border-t-2 border-[#1C1E1B]/20 pt-6 hover:border-[#C85A32] transition-colors duration-300"
            >
              <div>
                {/* Large Editorial Number */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-editorial text-5xl sm:text-6xl font-light text-[#C85A32]/80 group-hover:text-[#C85A32] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#233B2B] bg-[#E7DEC8]/60 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Experience Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1E1B] mb-2">
                  {item.title}
                </h3>

                {/* Core prompt sentence */}
                <p className="font-editorial italic text-lg sm:text-xl text-[#233B2B] mb-4">
                  "{item.number === '01' ? 'A comfortable place to catch up.' : item.number === '02' ? 'Enjoy satisfying food made for the table.' : 'Take your time and enjoy the atmosphere.'}"
                </p>

                {/* Extended description */}
                <p className="text-sm text-[#1C1E1B]/75 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Integrated Editorial Photography */}
              <div className="mt-auto relative rounded-xl overflow-hidden aspect-[4/3] border border-[#E7DEC8] bg-[#FAF7F2]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1B]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
