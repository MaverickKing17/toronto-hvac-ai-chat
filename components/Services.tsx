
import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-semibold tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Complete Home Comfort Solutions</h3>
          <p className="text-slate-600 text-lg">
            From emergency repairs to energy-efficient installations, our certified technicians handle it all with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                <service.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {service.rebateEligible && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                  <Check size={12} />
                  Rebate Eligible
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
