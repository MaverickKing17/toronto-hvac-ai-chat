
import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import RebateCalculator from './RebateCalculator';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      
      {/* Dark Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/10 to-slate-50/100"></div>

      {/* Hero Image Layer (Pressure Gauges Concept) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="HVAC Gauges" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium">
              <ShieldCheck size={16} className="text-green-400" />
              <span>Certified GTA Experts Since 1977</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
              Mastering Comfort <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">
                In Every Season
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the Rencon difference. We provide elite HVAC installation, maintenance, and repairs with up to <span className="text-white font-bold">$10,500</span> in available rebates.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#quote" 
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Calculator Widget */}
          <div className="lg:mt-0 animate-in slide-in-from-right duration-700 delay-200">
            <RebateCalculator />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden lg:block">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
