import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { restaurantInfo } from '../data/restaurantData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit', href: '#visit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DEC8]/80 py-3 shadow-[0_4px_20px_rgba(28,30,27,0.04)]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="nav-brand-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex flex-col items-start focus:outline-none"
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1E1B] group-hover:text-[#C85A32] transition-colors">
                BRO'S
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[#233B2B]/80 -mt-1">
                Cafe & Restaurant • Islamabad
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-links" className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-[#1C1E1B]/80 hover:text-[#C85A32] hover:bg-[#F2ECE1]/60 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                id="nav-call-btn-desktop"
                href={restaurantInfo.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#233B2B] text-white text-sm font-semibold tracking-wide hover:bg-[#1E3524] active:scale-95 transition-all duration-200 shadow-sm shadow-[#233B2B]/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#E6A738]" />
                <span>Call Us</span>
                <span className="text-white/60 text-xs font-normal border-l border-white/20 pl-2">
                  {restaurantInfo.phone}
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                id="nav-quick-call-mobile"
                href={restaurantInfo.phoneTel}
                aria-label="Call Bro's Cafe"
                className="p-2.5 rounded-full bg-[#233B2B] text-white hover:bg-[#1E3524] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E6A738]" />
              </a>

              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-[#F2ECE1] text-[#1C1E1B] hover:bg-[#E7DEC8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#1C1E1B]/50 backdrop-blur-sm"
            />

            {/* Slide Down / In Panel */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-[#FAF7F2] w-full pt-24 pb-8 px-6 shadow-2xl border-b border-[#E7DEC8]"
            >
              <div className="flex flex-col space-y-3 max-w-sm mx-auto">
                <div className="pb-3 mb-2 border-b border-[#E7DEC8]/60">
                  <p className="font-display font-bold text-xl text-[#1C1E1B]">BRO'S</p>
                  <p className="text-xs text-[#233B2B]">Food Made for Good Company</p>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-4 text-base font-semibold text-[#1C1E1B] hover:text-[#C85A32] hover:bg-[#F2ECE1] rounded-xl transition-all"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-normal text-[#1C1E1B]/40">→</span>
                  </a>
                ))}

                <div className="pt-4 mt-2 border-t border-[#E7DEC8] space-y-3">
                  <a
                    id="mobile-menu-call-cta"
                    href={restaurantInfo.phoneTel}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#233B2B] text-white font-medium text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4 text-[#E6A738]" />
                    <span>Call Us: {restaurantInfo.phone}</span>
                  </a>

                  <div className="flex items-start gap-2 text-xs text-[#1C1E1B]/70 px-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32] shrink-0 mt-0.5" />
                    <span>Salam Heights, E-11 Markaz, opposite M Store, Islamabad</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
