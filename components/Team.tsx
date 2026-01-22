
import React from 'react';
import { Ruler, FileCheck, ShieldCheck, ThermometerSun } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">The Rencon Standard</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                    Not Just Contractors. <br/>
                    <span className="text-secondary">Home Comfort Engineers.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Most companies just swap boxes. We analyze your home's unique thermal envelope to design a system that delivers consistent comfort and lower utility bills.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <Ruler size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Precision Sizing</h3>
                    <p className="text-slate-500 leading-relaxed">
                        We perform comprehensive <strong>Manual J load calculations</strong> for every install. No guessing. We ensure your unit is perfectly sized for your home's square footage and insulation profile.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                        <FileCheck size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Rebate Specialists</h3>
                    <p className="text-slate-500 leading-relaxed">
                        Navigating government grants can be confusing. Our internal team handles the <strong>HER+ and Greener Homes Grant</strong> paperwork for you, ensuring you claim every dollar available.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">10-Year Craftsmanship</h3>
                    <p className="text-slate-500 leading-relaxed">
                        We don't just warranty the parts; we warranty our work. Every Rencon installation is backed by our ironclad <strong>10-Year Labor Warranty</strong>. If it breaks, we fix it. Free.
                    </p>
                </div>
            </div>

            {/* Visual Break / Image Strip */}
            <div className="mt-20 rounded-3xl overflow-hidden relative h-64 md:h-80 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1504384308090-c54be3855091?auto=format&fit=crop&q=80&w=2000" 
                    alt="HVAC Installation Quality" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center text-center p-6">
                    <ThermometerSun size={48} className="text-white mb-4 opacity-80" />
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Upgrade?</h3>
                    <p className="text-slate-200 max-w-lg mb-8">Join thousands of GTA homeowners enjoying perfect climate control.</p>
                    <a 
                        href="#quote"
                        className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-bold transition-colors shadow-lg"
                    >
                        Schedule Your Assessment
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Team;
