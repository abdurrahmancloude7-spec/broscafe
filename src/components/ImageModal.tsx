import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C1E1B]/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E7DEC8] z-10"
          >
            {/* Close button */}
            <button
              id="gallery-modal-close-btn"
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1C1E1B]/60 text-white hover:bg-[#1C1E1B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image display */}
            <div className="max-h-[75vh] overflow-hidden bg-[#1C1E1B] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption */}
            <div className="p-5 sm:p-6 bg-[#FAF7F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#E7DEC8]">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
                  {item.category}
                </span>
                <h4 className="font-display text-xl font-bold text-[#1C1E1B] mt-0.5">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-[#1C1E1B]/60 font-medium">
                Bro's Cafe & Restaurant • E-11 Markaz
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
