
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME, PHONE } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'Rebates', 'About Us', 'Testimonials', 'FAQ'];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getId = (item: string) => {
    return item.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 z-50" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                R
              </div>
              <span className={`font-display font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                {COMPANY_NAME.split(' ')[0].toUpperCase()}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${getId(item)}`}
                  onClick={(e) => handleScrollTo(e, getId(item))}
                  className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA Group */}
            <div className="hidden lg:flex items-center gap-4">
              <div className={`flex items-center gap-2 text-sm font-semibold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                <Phone size={16} className="text-accent" />
                {PHONE}
              </div>
              <a 
                href="#quote"
                onClick={(e) => handleScrollTo(e, 'quote')}
                className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden z-50 p-2 rounded-full ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 bg-white transform transition-transform duration-300 lg:hidden flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <a 
            key={item}
            href={`#${getId(item)}`}
            onClick={(e) => handleScrollTo(e, getId(item))}
            className="text-2xl font-display font-bold text-slate-900 hover:text-accent"
          >
            {item}
          </a>
        ))}
        <div className="flex flex-col items-center gap-4 mt-8">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-lg font-semibold text-slate-600">
            <Phone className="text-accent" /> {PHONE}
          </a>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={14} /> Across the GTA
          </div>
          <a 
            href="#quote"
            onClick={(e) => handleScrollTo(e, 'quote')}
            className="mt-4 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
