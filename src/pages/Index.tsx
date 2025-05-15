
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import useScroll from '@/hooks/useScroll';
import { useEffect } from 'react';

const Index = () => {
  // Initialize scroll animations
  useScroll();
  
  // Update page title
  useEffect(() => {
    document.title = "Lenício Souza | Insights & Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="animate-on-scroll">
        <ServicesSection />
      </div>
      
      <div className="animate-on-scroll">
        <AboutSection />
      </div>
      
      <div className="animate-on-scroll">
        <ContactSection />
      </div>
      
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
