import React from 'react';
import { Sparkles, Truck, Heart, Leaf, Star, ShieldCheck } from 'lucide-react';

export default function Marquee() {
  const perks = [
    { icon: <Truck className="w-4 h-4 text-pink-500" />, text: "Free Fast Shipping Over $35" },
    { icon: <Sparkles className="w-4 h-4 text-purple-500" />, text: "Small-Batch Handcrafted Confections" },
    { icon: <Leaf className="w-4 h-4 text-emerald-500" />, text: "100% Vegan & Non-GMO Options" },
    { icon: <Star className="w-4 h-4 text-amber-500" />, text: "50,000+ Five-Star Sweet Tooths" },
    { icon: <Heart className="w-4 h-4 text-rose-500" />, text: "100% Happiness Guarantees" },
    { icon: <ShieldCheck className="w-4 h-4 text-sky-500" />, text: "Melt-Proof Insulated Packaging" },
  ];

  return (
    <div className="relative py-4 bg-gradient-to-r from-rose-200/90 via-red-100 to-rose-200/90 border-y border-rose-300/60 overflow-hidden shadow-inner">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] gap-8 items-center">
        {/* Double the list for seamless continuous loop */}
        {[...perks, ...perks, ...perks].map((perk, idx) => (
          <div key={idx} className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-pink-200/50 shadow-xs text-xs font-bold text-slate-800 flex-shrink-0">
            {perk.icon}
            <span>{perk.text}</span>
            <span className="text-pink-300 ml-2">•</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
