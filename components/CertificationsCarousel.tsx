
import React from 'react';
import { ShieldCheck, Award, Zap, ThumbsUp, CheckCircle2, Leaf } from 'lucide-react';

const BADGES = [
  { name: 'HRAI Member', color: '#005596', icon: Award },
  { name: 'TSSA Certified', color: '#C41230', icon: ShieldCheck },
  { name: 'Enbridge Partner', color: '#FDB913', icon: Zap },
  { name: 'Save on Energy', color: '#78BE20', icon: Leaf },
  { name: 'Energy Star', color: '#00AEEF', icon: CheckCircle2 },
  { name: 'BBB Accredited', color: '#005A9C', icon: ThumbsUp },
];

const CertificationsCarousel: React.FC = () => {
  return (
    <div className="w-full py-16 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
          Trusted & Certified By
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Stronger Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee whitespace-nowrap py-2 pl-4">
          {[...BADGES, ...BADGES, ...BADGES, ...BADGES].map((badge, idx) => (
            <div key={idx} className="mx-5 group/badge cursor-default select-none">
              <div 
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)] border-y border-r border-slate-50 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
                style={{ borderLeft: `4px solid ${badge.color}` }}
              >
                <div 
                  className="p-2 rounded-lg bg-slate-50"
                  style={{ color: badge.color }}
                >
                  <badge.icon size={24} strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-slate-800 text-sm leading-tight">
                    {badge.name}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
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
