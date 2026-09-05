import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { ImageModal } from '../components/ImageModal';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Social Dining', 'Food Made for Table', 'Interior & Seating', 'Café Culture', 'Drinks'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F4EFE6] border-t border-[#E7DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C85A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#233B2B]">
                Visual Journal
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1E1B] tracking-tight">
              Moments at <span className="font-editorial italic font-normal text-[#C85A32]">Bro's.</span>
            </h2>
          </div>

          <p className="text-base text-[#1C1E1B]/75 max-w-md">
            From the kitchen pans to the shared table conversations. Take a look inside daily life at Bro's in E-11 Markaz.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#1C1E1B] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#1C1E1B]/70 hover:bg-[#E7DEC8] hover:text-[#1C1E1B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Varied Ratio Gallery Grid (Masonry / Editorial rhythm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm border border-[#E7DEC8] bg-[#FAF7F2] flex flex-col"
            >
              <div className={`w-full ${item.aspectRatio} overflow-hidden relative bg-[#F2ECE1]`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-[#1C1E1B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="p-3 rounded-full bg-white/90 text-[#1C1E1B] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-[#233B2B]">
                  {item.category}
                </div>
              </div>

              {/* Title strip */}
              <div className="p-4 bg-[#FAF7F2] flex items-center justify-between">
                <span className="font-display font-semibold text-sm text-[#1C1E1B] group-hover:text-[#C85A32] transition-colors">
                  {item.title}
                </span>
                <span className="text-xs text-[#1C1E1B]/40 font-mono">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
