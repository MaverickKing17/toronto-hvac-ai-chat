
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CertificationsCarousel from './components/CertificationsCarousel';
import Team from './components/Team';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Sitemap from './components/Sitemap';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'sitemap':
        return <Sitemap onNavigate={navigate} onScrollTo={scrollToSection} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <CertificationsCarousel />
            <Team />
            <Services />
            <Testimonials />
            <FAQ />
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="antialiased text-slate-900 bg-white">
      <Header onNavigate={navigate} onScrollTo={scrollToSection} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} onScrollTo={scrollToSection} />
      <AIChat />
      <ScrollToTop />
    </div>
  );
};

export default App;
