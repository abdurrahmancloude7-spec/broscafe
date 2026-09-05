import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Phone, Info } from 'lucide-react';
import { menuCategories, restaurantInfo } from '../data/restaurantData';

export const FoodSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory) || menuCategories[0];

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C85A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
                Culinary Highlights
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] tracking-tight">
              Bring Your <span className="font-editorial italic font-normal text-[#C85A32]">Appetite.</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#1C1E1B]/75 max-w-xl">
              Freshly prepared offerings designed for hearty meals and casual bites with friends.
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F2ECE1] border border-[#E7DEC8] text-xs text-[#1C1E1B]/80 max-w-sm">
            <Info className="w-4 h-4 text-[#233B2B] shrink-0" />
            <span>Sample categories shown below. Inquire or visit Bro's for daily fresh specials.</span>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="relative mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max">
            {menuCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  id={`menu-cat-btn-${category.id}`}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#233B2B] text-white shadow-md shadow-[#233B2B]/20 scale-100'
                      : 'bg-[#F2ECE1] text-[#1C1E1B]/80 hover:bg-[#E7DEC8] hover:text-[#1C1E1B]'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Content Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Category Visual Highlight */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E7DEC8] bg-[#F2ECE1]">
                <img
                  src={currentCategory.image}
                  alt={`${currentCategory.name} showcase at Bro's Cafe & Restaurant`}
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-6 bg-[#FAF7F2]">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
                    {currentCategory.accent}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#1C1E1B] mt-1 mb-2">
                    {currentCategory.name}
                  </h3>
                  <p className="text-sm text-[#1C1E1B]/70 leading-relaxed">
                    {currentCategory.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E7DEC8] flex items-center justify-between">
                    <span className="text-xs text-[#233B2B] font-medium">Made to order in E-11</span>
                    <a
                      href={restaurantInfo.phoneTel}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C85A32] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call for Today's Specials</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Sample Items (No fake prices or ingredients) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E7DEC8] mb-6">
                <p className="text-xs text-[#1C1E1B]/70 leading-relaxed">
                  <span className="font-bold text-[#233B2B]">Sample Menu Structure:</span> Below are illustrative category selections to showcase our kitchen style. The full menu and current selections are provided fresh at our tables in Salam Heights.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {currentCategory.sampleItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E7DEC8] hover:border-[#C85A32]/40 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-[#C85A32] shrink-0" />
                        <h4 className="font-display text-lg font-bold text-[#1C1E1B]">
                          {item.name}
                        </h4>
                      </div>
                      <span className="inline-block self-start sm:self-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F2ECE1] text-[#233B2B] border border-[#E7DEC8]">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-[#1C1E1B]/70 leading-relaxed pl-6">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to inquire CTA banner */}
              <div className="p-6 rounded-2xl bg-[#233B2B] text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <p className="font-display font-bold text-base sm:text-lg">Craving something specific?</p>
                  <p className="text-xs sm:text-sm text-white/70">
                    Call Bro's team directly to hear today's chef specials or reserve a table.
                  </p>
                </div>
                <a
                  href={restaurantInfo.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E6A738] text-[#1C1E1B] font-bold text-sm hover:bg-[#f0b548] active:scale-95 transition-all shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {restaurantInfo.phone}</span>
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
