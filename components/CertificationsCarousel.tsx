
import React from 'react';

const BADGES = [
  { name: 'HRAI Member', color: '#005596' },
  { name: 'TSSA Certified', color: '#C41230' },
  { name: 'Enbridge Partner', color: '#FDB913' },
  { name: 'Save on Energy', color: '#78BE20' },
  { name: 'Energy Star', color: '#00AEEF' },
  { name: 'BBB Accredited', color: '#005A9C' },
];

const CertificationsCarousel: React.FC = () => {
  return (
    <div className="w-full py-8 bg-white/50 backdrop-blur-sm border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted & Certified By</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...BADGES, ...BADGES, ...BADGES].map((badge, idx) => (
            <div key={idx} className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer">
              {/* Placeholder for actual logos - using stylized text for code generation */}
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white shadow-sm"
                style={{ borderLeft: `4px solid ${badge.color}` }}
              >
                <span className="font-bold text-slate-700">{badge.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default CertificationsCarousel;
