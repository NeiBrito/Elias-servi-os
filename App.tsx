
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Features />
        <CTASection />
      </main>
      <Footer onAdminClick={() => {}} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
