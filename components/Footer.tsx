
import React from 'react';
import { COMPANY_NAME, ADDRESS, PHONE, EMAIL } from '../constants';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-display font-bold">{COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed">
              Providing top-tier HVAC solutions to the Greater Toronto Area since 1977. Dedicated to comfort, efficiency, and safety.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {['AC Installation', 'Heating Repair', 'Maintenance Plans', 'Rebates', 'Commercial HVAC'].map(link => (
                <li key={link}><a href="#" className="hover:text-secondary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE}</a>
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

          {/* Map */}
          <div className="h-48 rounded-xl overflow-hidden bg-slate-900 relative">
             {/* Placeholder for map */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
               <span className="text-xs font-semibold uppercase tracking-widest">Map Area</span>
             </div>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.273676839364!2d-79.6441!3d43.5890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4724b7555555%3A0x1234567890abcdef!2s360%20City%20Centre%20Dr%2C%20Mississauga%2C%20ON%20L5B%200L5!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca" 
               width="100%" 
               height="100%" 
               style={{ border: 0, opacity: 0.7, mixBlendMode: 'luminosity' }} 
               allowFullScreen 
               loading="lazy"
             ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Rencon Heating & Air Conditioning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
