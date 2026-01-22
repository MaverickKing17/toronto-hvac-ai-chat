
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        <CertificationsCarousel />
        <Team />
        <Services />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
