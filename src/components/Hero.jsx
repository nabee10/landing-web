import React, { useState } from 'react';
import { Sparkles, ArrowRight, Star, Heart, Award, Gift, Zap, Plus, Check } from 'lucide-react';

export default function Hero({ onOpenCustomBox, onAddToCart }) {
  const [heroAdded, setHeroAdded] = useState(false);

  const handleAddHeroItem = () => {
    if (onAddToCart) {
      onAddToCart({
        id: 'hero-rainbow-bears',
        name: 'Artisanal Rainbow Gummy Bears',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=700&q=80',
      });
      setHeroAdded(true);
      setTimeout(() => setHeroAdded(false), 1500);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
      {/* Decorative ambient glowing pastel spheres in background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-rose-400/30 via-red-300/25 to-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute -top-12 -right-20 w-80 h-80 bg-rose-400/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-red-300/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-converting Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/80 shadow-sm text-xs sm:text-sm font-bold text-pink-600 animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
              <span>✨ Artisanal, Small-Batch Candy Experience</span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Unwrap Pure{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Sweet Euphoria
              </span>
              , Delivered To Your Door.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Melt-in-your-mouth sour ribbons, real fruit glitter gummies, and velvety filled chocolate clouds. Made with non-GMO ingredients, zero weird chemicals, and 100% fun.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-heading font-bold text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Shop Bestsellers</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#box-builder"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-pink-50/70 text-slate-800 hover:text-pink-600 font-heading font-bold text-base border-2 border-pink-200 shadow-sm hover:border-pink-300 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span>Build Your Dream Box</span>
              </a>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-6 border-t border-pink-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Customer avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Customer avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" alt="Customer avatar" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-500 text-white font-bold flex items-center justify-center text-[10px]">
                    +50k
                  </div>
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-bold text-slate-800">4.9/5</span> from 50,000+ sweet teeth
                </div>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-pink-600 font-semibold">
                <Gift className="w-4 h-4 text-pink-500" />
                <span>Eco-friendly biodegradable gift packaging</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Glassmorphism & Floating Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Central Candy Showcase Card */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-3xl blur-xl opacity-60 animate-pulse-subtle" />

              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/80 p-4 shadow-2xl">
                {/* Hero featured image */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=80"
                    alt="Artisanal candies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/70 flex items-center justify-between shadow-xl z-10">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-rose-600 block">Today's Fresh Batch</span>
                      <h4 className="font-heading font-bold text-slate-900 text-sm truncate">Artisanal Rainbow Gummy Bears</h4>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="px-2.5 py-1 rounded-xl bg-rose-100 text-rose-700 font-extrabold text-xs">$6.50</span>
                      <button
                        type="button"
                        onClick={handleAddHeroItem}
                        className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 shadow-sm active:scale-95 transition-all ${
                          heroAdded
                            ? 'bg-emerald-500 text-white shadow-emerald-500/25'
                            : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-500/25'
                        }`}
                        aria-label="Add Artisanal Rainbow Gummy Bears to Cart"
                      >
                        {heroAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>+ Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge 1: Top Right */}
              <div className="absolute -top-6 -right-6 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/80 animate-float-slow hidden sm:flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl">
                  🍭
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Pure Quality</div>
                  <div className="font-heading font-bold text-xs text-slate-800">100% Real Cane Sugar</div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Repositioned to prevent overlap with bottom bar */}
              <div className="absolute bottom-24 -left-12 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/80 animate-float-reverse hidden sm:flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  🌱
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Diet Friendly</div>
                  <div className="font-heading font-bold text-xs text-slate-800">Gelatin-Free & Vegan</div>
                </div>
              </div>

              {/* Floating Sparkle Pill */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full px-3.5 py-1.5 shadow-lg text-xs font-bold flex items-center gap-1.5 animate-bounce-subtle hidden md:flex z-20">
                <Zap className="w-3.5 h-3.5 text-yellow-300" />
                <span>Zero Artificial Dyes!</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Playful smooth wavy SVG divider at bottom of Hero */}
      <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 text-rose-200/60"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,80 350,-30 500,45 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
