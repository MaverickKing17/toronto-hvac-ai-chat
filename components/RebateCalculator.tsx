
import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const RebateCalculator: React.FC = () => {
  const [postalCode, setPostalCode] = useState('');
  const [systemType, setSystemType] = useState('heat-pump');
  const [calculated, setCalculated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCode.length > 3) {
      setIsLoading(true);
      // Simulate API calculation delay for better UX
      setTimeout(() => {
        setIsLoading(false);
        setCalculated(true);
      }, 1500);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-slate-900 text-white shadow-2xl border border-slate-700">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="relative p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
            <Calculator className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-display">2026 Ontario Rebate Estimator</h3>
            <p className="text-slate-400 text-sm">Powered by Enbridge & Save on Energy</p>
          </div>
        </div>

        {!calculated ? (
          <form onSubmit={handleCalculate} className={`space-y-6 transition-opacity duration-300 ${isLoading ? 'opacity-90' : 'opacity-100'}`}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Select System Upgrade</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  disabled={isLoading}
                  onClick={() => setSystemType('heat-pump')}
                  className={`p-3 rounded-xl border text-sm transition-all ${systemType === 'heat-pump' ? 'bg-secondary border-secondary text-white' : 'border-slate-600 hover:bg-white/5'}`}
                >
                  Heat Pump
                </button>
                <button 
                  type="button"
                  disabled={isLoading}
                  onClick={() => setSystemType('furnace')}
                  className={`p-3 rounded-xl border text-sm transition-all ${systemType === 'furnace' ? 'bg-secondary border-secondary text-white' : 'border-slate-600 hover:bg-white/5'}`}
                >
                  High-Eff. Furnace
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Postal Code</label>
              <input 
                type="text" 
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                placeholder="L5B 0L5"
                disabled={isLoading}
                className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-secondary transition-colors disabled:opacity-50"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-white text-primary font-bold py-4 rounded-xl hover:bg-slate-200 disabled:bg-slate-300 disabled:cursor-wait transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Calculating...
                </>
              ) : (
                <>
                  Calculate Savings <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="text-center mb-8">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Estimated Rebate</span>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mt-2 mb-1">
                ${systemType === 'heat-pump' ? '7,100' : '4,500'}
              </div>
              <span className="text-xs text-slate-500">*Based on typical {postalCode} installations</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Greener Homes Grant Eligible</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Enbridge HER+ Compatible</span>
              </div>
            </div>

            <a 
              href="#quote"
              className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-sky-400 transition-all shadow-lg shadow-sky-900/50 block text-center"
            >
              Book Eligibility Assessment
            </a>
            <button onClick={() => setCalculated(false)} className="w-full mt-4 text-sm text-slate-400 hover:text-white underline">
              Recalculate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateCalculator;
