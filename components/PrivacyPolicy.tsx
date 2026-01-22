
import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { COMPANY_NAME, EMAIL } from '../constants';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full text-secondary mb-4">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last Updated: January 1, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Eye className="text-secondary" size={24} /> 1. Information We Collect
            </h2>
            <p>
              At {COMPANY_NAME}, we collect information necessary to provide accurate HVAC estimates, installations, and maintenance services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Personal Identification:</strong> Name, phone number, and email address for communication.</li>
              <li><strong>Property Details:</strong> Address, home size (sq. ft), insulation levels, and existing HVAC equipment data for Manual J Load Calculations.</li>
              <li><strong>Financial Information:</strong> Payment details processed securely through our third-party payment providers (Stripe/Square). We do not store raw credit card numbers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <FileText className="text-secondary" size={24} /> 2. How We Use Your Data
            </h2>
            <p>
              Your data is used exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Generating accurate quotes and rebate estimates.</li>
              <li>Scheduling installation, repair, and maintenance visits.</li>
              <li>Registering equipment warranties with manufacturers (e.g., Carrier, Lennox, Bosch).</li>
              <li>Filing rebate applications with the <strong>Home Efficiency Rebate Plus (HER+)</strong> program and Enbridge Gas on your behalf.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Lock className="text-secondary" size={24} /> 3. Data Sharing & Security
            </h2>
            <p>
              We value your trust. We <strong>never sell</strong> your personal information. We only share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Government & Utility Partners:</strong> Enbridge Gas and IESO solely for the purpose of processing your energy rebates.</li>
              <li><strong>Manufacturers:</strong> To activate your 10-year parts warranties.</li>
              <li><strong>Subcontractors:</strong> Certified electricians or gas fitters directly involved in your installation, under strict confidentiality agreements.</li>
            </ul>
          </section>

          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h3>
            <p>
              If you have questions about your data or wish to request its deletion, please contact our Privacy Officer at:
              <br />
              <a href={`mailto:${EMAIL}`} className="text-secondary font-bold hover:underline">{EMAIL}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
