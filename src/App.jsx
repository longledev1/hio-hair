import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { CustomCursor } from "./components/CustomCursor";
import { SplashScreen } from "./components/SplashScreen";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { Services } from "./components/Services";
import { StudioShowcase } from "./components/StudioShowcase";
import { Lookbook } from "./components/Lookbook";
import { Studio } from "./components/Studio";
import { Testimonials } from "./components/Testimonials";
import { BookingCTA } from "./components/BookingCTA";
import { Footer } from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F0E9] text-[#302724] font-sans selection:bg-[#E5D8C8]">
      {/* Màn chào nghệ thuật SplashScreen */}
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Con trỏ chuột nghệ thuật CustomCursor */}
      <CustomCursor />

      {/* 1. Header with logo & navigation */}
      <Header />

      <main>
        {/* 2. Hero with hero.jpg & primary CTA */}
        <Hero />

        {/* 3. Brand Philosophy */}
        <Philosophy />

        {/* 4. Signature Services */}
        <Services />

        {/* 4.5. Studio Showcase Zoom-in Background with Marquee */}
        <StudioShowcase />

        {/* 5. Hair Lookbook with image grid */}
        <Lookbook />

        {/* 6. The Studio & Master Stylists */}
        <Studio />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8 . Final Booking Call to Action */}
        <BookingCTA />
      </main>

      {/* 9. Comprehensive Footer */}
      <Footer />
    </div>
  );
}

export default App;
