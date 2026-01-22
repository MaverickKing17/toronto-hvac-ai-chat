
import React, { useEffect } from 'react';
import { Scale, AlertCircle, Wrench, Calendar } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-50 rounded-full text-accent mb-4">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500">Effective Date: January 1, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Estimates & Quotes</h3>
            <p>
              All quotes provided by Rencon Heating & Air Conditioning are valid for <strong>30 days</strong> from the date of issuance. Pricing is subject to change after this period due to manufacturer equipment cost fluctuations. Rebate estimates are based on current government guidelines and are not guaranteed by Rencon, as eligibility is determined by the specific program administrators (e.g., Enbridge, NRCan).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Calendar size={20} className="text-accent" /> Cancellations & Rescheduling
            </h3>
            <p>
              We respectfully request at least <strong>24 hours notice</strong> for cancellations or rescheduling of maintenance and assessment appointments. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Cancellations made less than 24 hours in advance may be subject to a $50 administrative fee.</li>
              <li>Custom equipment orders (non-stock items) are non-refundable once the order has been placed with the manufacturer.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Wrench size={20} className="text-accent" /> Warranties & Guarantees
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-accent">
              <p className="font-semibold text-slate-900 mb-1">10-Year Craftsmanship Guarantee</p>
              <p className="text-sm">
                We warranty our labor and workmanship for 10 years on all full system installations. This covers any defects arising from the installation process itself.
              </p>
            </div>
            <p className="mt-4">
              <strong>Manufacturer Warranty:</strong> Equipment is covered by the specific manufacturer's warranty (typically 10 years parts). Routine annual maintenance is often required by manufacturers to keep these warranties valid.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <AlertCircle size={20} className="text-accent" /> Emergency Services
            </h3>
            <p>
              "24/7 Emergency Service" refers to our availability to diagnose and attempt repair of "No Heat" (in winter) or "No Cool" (in extreme heat) situations. Emergency rates apply for calls outside standard business hours (M-F, 8am-5pm) and on holidays.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">5. Payment Terms</h3>
            <p>
              Payment is due in full upon satisfactory completion of the work. We accept Visa, Mastercard, Interac e-Transfer, and Certified Cheques. Financing plans are subject to approval by our lending partners and are governed by their specific terms and conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
