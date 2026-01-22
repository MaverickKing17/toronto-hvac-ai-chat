
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Experts in HVAC <br/>
              <span className="text-secondary">Since 1977</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                At Rencon, we are more than just contractors; we are your neighbors in the GTA. Our dedicated team of HVAC technicians are certified, experienced, and continuously trained professionals.
              </p>
              <p>
                We adhere to strict safety guidelines and bring the highest standard of carpentry, electrical, and HVAC expertise to every project. Whether it's a simple repair or a complex commercial installation, we treat your home like our own.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">45+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">10k+</span>
                <span className="text-sm text-slate-500">Projects Completed</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-3xl rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/600/400?grayscale" 
              alt="Rencon Team at work" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
            />
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-secondary font-medium text-sm mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert) => (
                    <span key={cert} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">
                      {cert}
                    </span>
                  ))}
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
