
import React from 'react';
import { COMPANY_NAME, ADDRESS, PHONE, EMAIL } from '../constants';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onScrollTo: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollTo }) => {
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate('home');
    // Allow state update to propagate
    setTimeout(() => {
      onScrollTo(id);
    }, 100);
  };

  const handlePageLink = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Certs */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-600 rounded flex items-center justify-center text-white font-bold shadow-lg">R</div>
                <h3 className="text-white text-xl font-display font-bold">{COMPANY_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Providing top-tier HVAC solutions to the Greater Toronto Area since 1977. 
              Certified, insured, and dedicated to your comfort.
            </p>
            <div className="flex items-center gap-4 pt-2">
                <ShieldCheck className="text-slate-600" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">TSSA Certified • HRAI Member</span>
            </div>
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" onClick={(e) => handleInternalLink(e, 'services')} className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#rebates" onClick={(e) => handleInternalLink(e, 'rebates')} className="hover:text-secondary transition-colors">Rebate Calculator</a></li>
              <li><a href="#about-us" onClick={(e) => handleInternalLink(e, 'about-us')} className="hover:text-secondary transition-colors">About Rencon</a></li>
              <li><a href="#testimonials" onClick={(e) => handleInternalLink(e, 'testimonials')} className="hover:text-secondary transition-colors">Client Reviews</a></li>
              <li><a href="#faq" onClick={(e) => handleInternalLink(e, 'faq')} className="hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#quote" onClick={(e) => handleInternalLink(e, 'quote')} className="text-accent hover:text-white font-semibold transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3 text-sm">
              {['Toronto', 'Mississauga', 'Brampton', 'Oakville', 'Burlington', 'Milton', 'Etobicoke', 'North York', 'Scarborough', 'Vaughan'].map(city => (
                <li key={city} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-secondary rounded-full"></div>
                  <span className="hover:text-slate-200 transition-colors cursor-default">{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-0.5" size={18} />
                <span className="leading-tight">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href={`tel:${PHONE}`} className="hover:text-white font-medium">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-secondary shrink-0" size={18} />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Rencon Heating & Air Conditioning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => handlePageLink(e, 'privacy')} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => handlePageLink(e, 'terms')} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => handlePageLink(e, 'sitemap')} className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
