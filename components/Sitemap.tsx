
import React, { useEffect } from 'react';
import { Network, Home, Wrench, Calculator, Users, MessageSquare, FileText } from 'lucide-react';

interface SitemapProps {
  onNavigate: (page: string) => void;
  onScrollTo: (sectionId: string) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onNavigate, onScrollTo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      onScrollTo(sectionId);
    }, 100);
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-full text-slate-700 mb-4">
            <Network size={32} />
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-slate-500">Navigate Rencon Heating & Air Conditioning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Pages */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Home size={20} className="text-secondary" /> Main Sections
            </h2>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleLinkClick('top')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Home / Hero
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('rebates')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Rebate Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about-us')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> About Us & Team
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('testimonials')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('quote')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-secondary" /> Legal & Support
            </h2>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sitemap')} className="text-slate-600 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
