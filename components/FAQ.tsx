
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-semibold tracking-wider uppercase mb-3">Common Questions</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const contentId = `faq-content-${idx}`;

            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-secondary shadow-lg' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset rounded-2xl group"
                >
                  <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-secondary' : 'text-slate-900 group-hover:text-secondary'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
