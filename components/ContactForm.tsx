
import React from 'react';
import { User, Mail, Phone, Wrench, Send, Clock, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div id="quote" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
      
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2600&auto=format&fit=crop" 
            alt="Comfortable Modern Living Room" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side - Value Prop */}
          <div className="lg:col-span-5 text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-bold backdrop-blur-md">
                <Clock size={16} />
                <span>24/7 Priority Response</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Bring Perfect Comfort Home
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed opacity-90">
              Don't let the weather dictate your happiness. Our AI-driven climate solutions ensure your home remains the perfect sanctuary, efficient and consistent, all year round.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Free In-Home Assessment",
                "Up to $10,500 in Rebates",
                "100% Satisfaction Guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full">
                    <CheckCircle2 className="text-green-400" size={20} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Floating Form */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50 relative overflow-hidden">
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
               
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
                  
                  <form 
                    action="https://formspree.io/f/xqeparjr" 
                    method="POST" 
                    className="space-y-5"
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                          <input 
                            id="name"
                            name="name" 
                            type="text" 
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" 
                            placeholder="Jane Smith" 
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 text-slate-400" size={18} />
                          <input 
                            id="phone"
                            name="phone" 
                            type="tel" 
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" 
                            placeholder="(555) 123-4567" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                        <input 
                          id="email"
                          name="email" 
                          type="email" 
                          required
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" 
                          placeholder="jane@example.com" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Service Required</label>
                      <div className="relative">
                        <Wrench className="absolute left-4 top-3.5 text-slate-400" size={18} />
                        <select 
                          id="service"
                          name="service" 
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all appearance-none"
                        >
                          <option value="New System Installation">New System Installation</option>
                          <option value="Repair & Diagnostics">Repair & Diagnostics</option>
                          <option value="Annual Maintenance">Annual Maintenance</option>
                          <option value="Rebate Consultation">Rebate Consultation</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-secondary to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                    >
                      Submit Request <Send size={18} />
                    </button>
                    
                    <p className="text-xs text-center text-slate-400 mt-4">
                      By submitting, you agree to our privacy policy. We never spam.
                    </p>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
