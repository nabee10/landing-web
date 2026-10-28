import React from 'react';
import { TESTIMONIALS, PRODUCTS } from '../data/candies';
import { Star, CheckCircle, Sparkles, Quote, ArrowRight, Plus } from 'lucide-react';

export default function Testimonials({ onAddToCart }) {
  const handlePillClick = (testimonial) => {
    if (testimonial.action === 'box-builder') {
      const el = document.getElementById('box-builder');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (testimonial.productId && onAddToCart) {
      const product = PRODUCTS.find((p) => p.id === testimonial.productId);
      if (product) {
        onAddToCart(product);
      } else {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Customer Love
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Over 50,000 Sweet Obsessions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Read what foodies, pastry chefs, and everyday candy lovers have to say about our handcrafted confections.
        </p>

        {/* Social Proof Summary Pill */}
        <div className="pt-3 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-rose-200/90 shadow-sm backdrop-blur-md text-xs sm:text-sm text-slate-700">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-slate-900">4.9/5</span>
            <span className="text-slate-600">
              Average Rating based on <strong className="text-slate-800 font-bold">12,400+ Verified Reviews</strong>
            </span>
            <span className="text-rose-300 hidden sm:inline">•</span>
            <a
              href="#reviews"
              className="font-bold text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 hover:underline transition-colors"
            >
              <span>See All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Grid (3 Cards perfectly aligned) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="glass-card rounded-3xl p-8 border border-rose-200/80 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group h-full"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-rose-100 group-hover:text-rose-200 transition-colors pointer-events-none" />

            {/* Top Content: Star rating & Highlighted Non-italic Quote */}
            <div className="flex-1 flex flex-col justify-start">
              {/* Star Rating */}
              <div className="flex text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote without italic, with highlighted best phrase */}
              <p className="text-sm text-slate-700 leading-relaxed not-italic font-normal mb-6">
                "{t.quoteBefore}
                <span className="bg-pink-100 text-pink-700 font-semibold px-1 rounded">
                  {t.highlight}
                </span>
                {t.quoteAfter}"
              </p>
            </div>

            {/* Bottom Content: Profile and Interactive Ordered Pill (Perfect Horizontal Alignment) */}
            <div className="mt-auto pt-6 border-t border-rose-100/90 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-rose-200 shadow-xs"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-800 flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle className="w-3.5 h-3.5 text-rose-500 fill-rose-100" />
                    </h4>
                    <span className="text-[11px] text-slate-400 block">{t.role}</span>
                  </div>
                </div>
              </div>

              {/* Interactive "Ordered" Button Pill */}
              <div>
                <button
                  type="button"
                  onClick={() => handlePillClick(t)}
                  title={t.action === 'box-builder' ? 'Click to open Custom Box Builder' : 'Click to add item to bag'}
                  className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100/90 text-rose-700 hover:text-rose-800 text-[11px] font-bold border border-rose-200 shadow-2xs hover:shadow-xs active:scale-95 transition-all cursor-pointer"
                >
                  <span>{t.tag}</span>
                  {t.action === 'box-builder' ? (
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-rose-500" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform text-rose-500" />
                  )}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Perks Highlight Row */}
      <div id="perks" className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-rose-200/80">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/75 border border-rose-100 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-2xl flex-shrink-0">
            🚚
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-800">Melt-Proof Guaranteed</h4>
            <p className="text-xs text-slate-500">Insulated thermal liners keep candy pristine in any weather.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/75 border border-rose-100 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-2xl flex-shrink-0">
            🌿
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-800">Clean Sweetness</h4>
            <p className="text-xs text-slate-500">Real fruit colors, non-GMO cane sugar, no artificial dyes.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/75 border border-rose-100 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-2xl flex-shrink-0">
            💖
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-800">100% Smile Policy</h4>
            <p className="text-xs text-slate-500">Not obsessed? We'll replace or refund your box, no questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
