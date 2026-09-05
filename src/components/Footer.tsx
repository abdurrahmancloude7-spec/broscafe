import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <footer id="main-footer" className="bg-[#F2ECE1] border-t border-[#E7DEC8] text-[#1C1E1B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D8CFBE]">
          
          {/* Brand & Address (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-display text-2xl font-extrabold tracking-tight text-[#1C1E1B]">
                {restaurantInfo.brand}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#233B2B] mt-0.5">
                Cafe & Restaurant • Islamabad
              </p>
            </div>

            <p className="font-editorial italic text-base text-[#1C1E1B]/80">
              "Food Made for Good Company"
            </p>

            <div className="space-y-1.5 text-xs sm:text-sm text-[#1C1E1B]/75 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>
                  {restaurantInfo.address.building}, {restaurantInfo.address.sector}, {restaurantInfo.address.landmark}, {restaurantInfo.address.city}, {restaurantInfo.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#233B2B] shrink-0" />
                <a href={restaurantInfo.phoneTel} className="font-bold hover:text-[#C85A32] transition-colors">
                  {restaurantInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#233B2B]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-[#1C1E1B]/75 hover:text-[#C85A32] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#233B2B]">
              Social
            </h4>
            <div className="space-y-2.5">
              <a
                id="footer-facebook-link"
                href={restaurantInfo.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8] hover:border-[#233B2B] text-xs font-semibold text-[#1C1E1B] transition-colors"
              >
                <span>Facebook ({restaurantInfo.social.facebook.followers})</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#1C1E1B]/50" />
              </a>

              <a
                id="footer-instagram-link"
                href={restaurantInfo.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8] hover:border-[#C85A32] text-xs font-semibold text-[#1C1E1B] transition-colors"
              >
                <span>Instagram ({restaurantInfo.social.instagram.followers})</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#1C1E1B]/50" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1C1E1B]/60">
          <p>© {new Date().getFullYear()} Bro's Cafe & Restaurant. All rights reserved.</p>
          <p className="font-mono text-[11px]">Salam Heights • E-11 Markaz • Islamabad</p>
        </div>

      </div>
    </footer>
  );
};
