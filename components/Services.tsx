
import React from 'react';
import { SERVICES } from '../constants';
import { Check, Sparkles, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Dark theme for high-tech feel */}
        
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
                    <Sparkles size={14} />
                    <span>Next-Gen Capabilities</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Intelligent Climate <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Processing & Control</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Deploying advanced sensors, machine learning models, and IoT infrastructure to deliver the most efficient HVAC solutions in history.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, idx) => (
                    <div 
                        key={service.id}
                        className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-1 border border-slate-800 hover:border-secondary/50 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/10"
                    >
                        {/* Hover Gradient Bloom */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative h-full bg-slate-900 rounded-xl p-8 flex flex-col z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-lg shadow-black/50">
                                    <service.icon size={28} />
                                </div>
                                <ArrowUpRight className="text-slate-700 group-hover:text-secondary transition-colors" />
                            </div>

                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{service.title}</h4>
                            <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.rebateEligible && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase border border-green-500/20">
                                        <Check size={10} /> Rebate Ready
                                    </span>
                                )}
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase border border-blue-500/20">
                                    AI Optimized
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
