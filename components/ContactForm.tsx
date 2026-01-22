
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div id="quote" className="py-24 bg-gradient-to-r from-secondary to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-8 md:p-12 bg-slate-50">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Get a Free Quote</h3>
            <p className="text-slate-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours. Emergency? Call us directly.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-white">
                  <option>New Installation</option>
                  <option>Repair / Service</option>
                  <option>Maintenance</option>
                  <option>Rebate Inquiry</option>
                </select>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors mt-2">
                Submit Request
              </button>
            </form>
          </div>
          <div className="hidden md:block relative">
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Technician" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center p-8 text-center">
              <div>
                <h4 className="text-white font-bold text-2xl mb-2">24/7 Available</h4>
                <p className="text-slate-200">We are ready to help whenever you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
