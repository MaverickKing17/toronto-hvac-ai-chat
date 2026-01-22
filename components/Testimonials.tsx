
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-display font-bold mb-16">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-panel-dark p-8 rounded-2xl relative">
              <Quote className="absolute top-6 left-6 text-secondary opacity-30 w-8 h-8" />
              <p className="relative z-10 text-slate-300 italic mb-6 pt-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-blue-600 rounded-full flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-sm">{t.name}</h5>
                  <span className="text-xs text-slate-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
