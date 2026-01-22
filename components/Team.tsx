
import React from 'react';
import { Cpu, Globe, Activity, Shield } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    SYSTEM STATUS: ONLINE
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Rencon Operating System</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                    We've replaced the traditional HVAC service model with a vertically integrated digital infrastructure. 
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[600px]">
                
                {/* 1. Main Feature - AI Core (Large, Spans 2x2) */}
                <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0">
                        {/* Abstract Tech Image - Circuit/Chip/Data */}
                        <img 
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" 
                            alt="AI Core Processing" 
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-20">
                        <div className="w-14 h-14 bg-blue-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Cpu size={28} />
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-white">Central Intelligence</h3>
                        <p className="text-slate-300 leading-relaxed max-w-md text-sm md:text-base">
                            Our proprietary predictive model processes 5,000+ data points daily, anticipating system failures days before they occur.
                        </p>
                    </div>
                </div>

                {/* 2. Secondary Feature - Global Fleet (Wide, Spans 2 cols) */}
                <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800">
                    <div className="absolute inset-0">
                         {/* Abstract Map/Network Image */}
                         <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                            alt="Global Network Map" 
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
                         <div className="w-12 h-12 bg-indigo-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 text-indigo-400 border border-indigo-500/30">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Autonomous Dispatch</h3>
                        <p className="text-slate-300 text-sm max-w-sm">
                            AI-routed logistics ensure the nearest expert is deployed instantly, cutting response times to <span className="text-white font-bold">&lt; 45 mins</span>.
                        </p>
                    </div>
                </div>

                {/* 3. Stat Card (Small Square) */}
                <div className="relative group overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between">
                     <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                        <img 
                           src="https://images.unsplash.com/photo-1558494949-efc535b5c47c?auto=format&fit=crop&q=80&w=800" 
                           alt="Server Status"
                           className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-slate-950/50"></div>
                     </div>
                     
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                <Activity className="text-emerald-400" size={20} />
                            </div>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white mb-1 tracking-tighter">99.9%</div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">System Uptime</div>
                     </div>
                </div>

                {/* 4. Security Feature (Small Square) */}
                <div className="relative group overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between">
                     <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                         <img 
                           src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" 
                           alt="Code Security"
                           className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-slate-900/80"></div>
                     </div>
                     
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                <Shield className="text-orange-400" size={20} />
                            </div>
                        </div>
                        <div className="text-xl font-bold text-white mb-1">IoT Shield</div>
                        <div className="text-xs text-slate-400">AES-256 Encryption</div>
                     </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Team;
