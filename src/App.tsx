import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Narrative } from './components/Narrative';
import { Solution } from './components/Solution';
import { TargetAudience } from './components/TargetAudience';
import { Expectations } from './components/Expectations';
import { Author } from './components/Author';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Recap } from './components/Recap';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ExitPopup } from './components/ExitPopup';
import { FloatingCTA } from './components/FloatingCTA';
import { WhatsAppButton } from './components/WhatsAppButton';
import { InstagramButton } from './components/InstagramButton';

export default function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('ofertas');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setShowFloatingCTA(true);
        } else {
          setShowFloatingCTA(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      const hasShown = sessionStorage.getItem('exitPopupShown');
      if (e.clientY < 10 && timeOnPage >= 15 && !hasShown) {
        setShowExitPopup(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [timeOnPage]);

  const scrollToOffers = () => {
    setShowExitPopup(false);
    const element = document.getElementById('ofertas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <ExitPopup 
        show={showExitPopup} 
        onClose={() => setShowExitPopup(false)} 
        onConfirm={scrollToOffers} 
      />
      
      <Hero />
      <Benefits />
      <Narrative />
      <Solution />
      <TargetAudience />
      <Expectations />
      <Author />
      <Bonuses />
      <Pricing />
      <Recap />
      <FAQ />
      <Footer />
      
      <FloatingCTA 
        show={showFloatingCTA} 
        onClick={scrollToOffers} 
      />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
}
