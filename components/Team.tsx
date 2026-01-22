
import React from 'react';
import { TEAM } from '../constants';
import { Cpu, Activity, Zap, Network, BrainCircuit, BarChart3, LineChart } from 'lucide-react';

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
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-secondary/20 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Activity className="text-green-600" size={20} />
                  </div>
                  <span className="font-bold text-2xl text-slate-900">99.8%</span>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">Diagnostic Accuracy</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-secondary/20 transition-all">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-yellow-100 rounded-lg">
                    <Zap className="text-yellow-600" size={20} />
                   </div>
                  <span className="font-bold text-2xl text-slate-900">-35%</span>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">Avg. Energy Reduction</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-3 ring-1 ring-slate-900/5 shadow-2xl overflow-hidden">
               
               {/* Dashboard Content Container */}
               <div className="relative h-[400px] rounded-xl overflow-hidden bg-slate-950">
                  {/* Background Chart Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                    alt="Data Center HVAC Analytics" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  />
                  
                  {/* Digital Overlay UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
                  
                  {/* Header Elements */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="px-2 py-1 bg-slate-800/80 rounded text-[10px] font-mono text-green-400 border border-green-500/30 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        SYSTEM ACTIVE
                    </div>
                  </div>

                  {/* Central Chart Graphic (Simulated) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 border-b border-l border-slate-700/50 z-10 flex items-end gap-1 px-1 opacity-80">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 65].map((h, i) => (
                          <div key={i} className="flex-1 bg-secondary/50 hover:bg-secondary transition-all" style={{ height: `${h}%` }}></div>
                      ))}
                  </div>

                  {/* Bottom Information Panel - Made Very Clear */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-20">
                      <div className="flex items-center gap-3 mb-2">
                         <BarChart3 className="text-secondary" size={24} />
                         <h3 className="text-white font-bold text-lg tracking-tight">Real-Time Performance Monitoring</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                              <p className="text-[10px] text-slate-400 uppercase">Current Load</p>
                              <p className="text-lg font-mono text-white">42.5 <span className="text-xs text-slate-500">kWh</span></p>
                          </div>
                          <div>
                              <p className="text-[10px] text-slate-400 uppercase">Efficiency</p>
                              <p className="text-lg font-mono text-green-400">98.2%</p>
                          </div>
                      </div>
                  </div>
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
    