import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BrandGuide from './components/BrandGuide';
import Services from './components/Services';
import Deliveries from './components/Deliveries';
import Location from './components/Location';
import LegalNotice from './components/LegalNotice';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BrandGuideModal from './components/BrandGuideModal';

export default function App() {
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Navigation */}
      <Navbar onOpenBrandGuide={() => setBrandModalOpen(true)} />

      {/* Main Content */}
      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <Hero onOpenBrandGuide={() => setBrandModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Customer Service & WhatsApp Message Builder */}
        <Services />

        {/* Deliveries & Regional Feasibility Simulator */}
        <Deliveries />

        {/* Embedded Interactive Brand Guidelines Showcase */}
        <section id="marca" className="bg-[#05070B] border-t border-white/5">
          <BrandGuide isModal={false} />
        </section>

        {/* Location & GPS Map */}
        <Location />

        {/* Legal Advisory (18+ & Compliance) */}
        <LegalNotice />
      </main>

      {/* Footer */}
      <Footer onOpenBrandGuide={() => setBrandModalOpen(true)} />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <BrandGuideModal isOpen={brandModalOpen} onClose={() => setBrandModalOpen(false)} />

    </div>
  );
}
