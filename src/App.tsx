import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BrandIntroSection } from './sections/BrandIntroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FoodSection } from './sections/FoodSection';
import { SharingTableSection } from './sections/SharingTableSection';
import { AtmosphereSection } from './sections/AtmosphereSection';
import { GallerySection } from './sections/GallerySection';
import { SocialMediaSection } from './sections/SocialMediaSection';
import { VisitSection } from './sections/VisitSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1E1B] flex flex-col selection:bg-[#C85A32] selection:text-white font-sans-clean overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Opening Brand Section */}
        <BrandIntroSection />

        {/* 3. The Bro's Experience (01 Meet, 02 Eat, 03 Stay) */}
        <ExperienceSection />

        {/* 4. Food & Broad Categories Showcase */}
        <FoodSection />

        {/* 5. Sharing Table Section */}
        <SharingTableSection />

        {/* 6. Atmosphere & Interior Section */}
        <AtmosphereSection />

        {/* 7. Gallery Section */}
        <GallerySection />

        {/* 8. Social Media Proof */}
        <SocialMediaSection />

        {/* 9. Visit & Location Details */}
        <VisitSection />

        {/* 10. Emotional Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
