
import React from 'react';
import { TEAM } from '../constants';
import { Cpu, Activity, Zap, Network, BrainCircuit } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration - Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
              <BrainCircuit size={14} />
              <span>AI-Driven Climate Control</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              The Future of Comfort <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
                Is Intelligent
              </span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                We've evolved beyond traditional HVAC. Our fleet is equipped with <strong className="text-slate-900">predictive machine learning algorithms</strong> that diagnose system inefficiencies before they become breakdowns.
              </p>
              <p>
                By combining human expertise with real-time data analytics, we optimize your home's energy consumption, reducing your carbon footprint while maximizing comfort.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="text-green-500" size={20} />
                  <span className="font-bold text-slate-900">99.8%</span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Diagnostic Accuracy</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-yellow-500" size={20} />
                  <span className="font-bold text-slate-900">-35%</span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Avg. Energy Reduction</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-2 ring-1 ring-slate-900/5 shadow-2xl overflow-hidden">
               {/* Dashboard Graphic Overlay */}
               <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
               </div>
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Data Center HVAC Analytics" 
                className="rounded-xl w-full object-cover h-[400px] opacity-80"
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent text-white">
                  <p className="font-mono text-xs text-secondary mb-1">SYSTEM STATUS: OPTIMIZED</p>
                  <p className="font-bold text-lg">Real-Time Performance Monitoring</p>
               </div>
            </div>
          </div>
        </div>

        {/* Team Cards - AI Enhanced */}
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div key={member.id} className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              {/* Tech Overlay Lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Holographic Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/50 shadow-lg z-20 flex items-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Cpu size={14} className="text-secondary" />
                  <span className="text-xs font-bold text-slate-800">AI Enabled</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors">{member.name}</h4>
                    <p className="text-slate-500 font-medium text-sm">{member.role}</p>
                  </div>
                  <Network className="text-slate-200 group-hover:text-secondary/50 transition-colors" />
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                   <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <span key={cert} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fake Stat Bar */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400">EFFICIENCY RATING</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-blue-400 rounded-full" 
                      style={{ width: `${90 + idx * 3}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
