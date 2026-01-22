
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-semibold tracking-wider uppercase mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Trusted by Neighbors</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl transition-all">
            {/* Decorative Quote */}
            <Quote className="absolute top-8 left-8 text-secondary/20 w-16 h-16 -rotate-12" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
               <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div key={activeIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-slate-200 mb-8">
                  "{activeTestimonial.quote}"
                </blockquote>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg text-white">
                    {activeTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-lg text-white">{activeTestimonial.name}</cite>
                    <p className="text-sm text-slate-400">{activeTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/50 text-slate-300 hover:bg-secondary hover:text-white transition-all backdrop-blur-md hidden md:block group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/50 text-slate-300 hover:bg-secondary hover:text-white transition-all backdrop-blur-md hidden md:block group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-secondary' : 'bg-slate-700 hover:bg-slate-600'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
