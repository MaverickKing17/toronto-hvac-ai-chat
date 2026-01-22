
import React from 'react';
import { TEAM } from '../constants';
import { Cpu, Wifi, Shield, Zap, Search, ChevronRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-accent font-mono text-xs tracking-widest uppercase mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Live Operations
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Elite Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">
                Squadron
              </span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
             <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                SYSTEMS OPTIMIZED
             </div>
             <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono flex items-center gap-2">
                <Wifi size={12} />
                FLEET CONNECTED
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div 
              key={member.id} 
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]"
            >
              {/* Image Layer */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              
              {/* Scanning Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              
              {/* Scanline */}
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary/50 shadow-[0_0_15px_rgba(14,165,233,1)] translate-y-[-100%] group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>

              {/* Content Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="px-2 py-1 bg-secondary/20 border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-wider rounded">
                      Level 3 Technician
                    </span>
                    <Cpu className="text-slate-400 group-hover:text-accent transition-colors" size={18} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium mb-4 flex items-center gap-2">
                    {member.role}
                  </p>

                  <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-slate-800 pt-4 mt-4">
                    {member.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Shield size={12} className="text-accent" />
                        {cert}
                      </div>
                    ))}
                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-secondary">
                      <span>EFFICIENCY RATING</span>
                      <span>99.{8 - idx}%</span>
                    </div>
                    {/* Simulated Progress Bar */}
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[90%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Status Bar */}
        <div className="mt-12 py-6 border-t border-slate-900 flex flex-wrap gap-8 justify-center md:justify-start text-slate-500 font-mono text-xs">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span>AI MONITORING: ACTIVE</span>
           </div>
           <div className="flex items-center gap-2">
             <Search size={14} />
             <span>DIAGNOSTICS: RUNNING</span>
           </div>
           <div className="flex items-center gap-2">
             <Zap size={14} />
             <span>POWER GRID: STABLE</span>
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(420px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Team;
