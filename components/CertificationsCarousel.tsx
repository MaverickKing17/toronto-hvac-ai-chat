
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
    <div className="w-full py-12 bg-slate-50/80 backdrop-blur-sm border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
          Trusted & Certified By
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee whitespace-nowrap py-4 pl-4">
          {[...BADGES, ...BADGES, ...BADGES, ...BADGES].map((badge, idx) => (
            <div key={idx} className="mx-4 group/badge cursor-default select-none">
              <div 
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="p-2 rounded-full bg-slate-50 group-hover/badge:bg-white transition-colors"
                  style={{ color: badge.color }}
                >
                  <badge.icon size={20} className="opacity-80 group-hover/badge:opacity-100 transition-opacity" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-slate-600 group-hover/badge:text-slate-900 transition-colors text-sm tracking-tight">
                  {badge.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
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
