import React, { useState } from 'react';
import { PRODUCTS } from '../data/candies';
import { Star, ShoppingBag, Sparkles, Check, Heart } from 'lucide-react';

export default function ProductGrid({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItemMap, setAddedItemMap] = useState({});

  const categories = ['All', 'Special on NBL Shop', 'Sour', 'Gummies', 'Chocolate', 'Vegan'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory || p.tags.includes(selectedCategory));

  const handleAdd = (product) => {
    onAddToCart(product);
    // Trigger localized button animation
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          The Sweet Vault
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Handcrafted Candy Bestsellers
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Small-batch sweets created by master confectioners using natural extracts, real fruit purees, and zero high-fructose corn syrup.
        </p>

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-pink-600 hover:bg-pink-50/60 border border-slate-200'
                }`}
              >
                {cat === 'All' ? '🍭 All Flavors' : cat === 'Special on NBL Shop' ? '🌟 Special on NBL Shop' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid (6 Products) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const isRecentlyAdded = addedItemMap[product.id];

          const isSpecialKatttooo = product.id === 'katttooo-special';

          return (
            <div
              key={product.id}
              className={`group glass-card rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                isSpecialKatttooo
                  ? 'border-pink-400 ring-2 ring-pink-400/80 shadow-xl shadow-pink-500/15 bg-gradient-to-b from-pink-50/40 via-white to-purple-50/30'
                  : 'border-pink-100/80 hover:border-pink-300 hover:shadow-pink-400/20'
              }`}
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 overflow-hidden bg-pink-50/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Badge Tag */}
                {product.badge && (
                  <div className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                )}

                {/* Prominent KATTTOOO Section Overlay */}
                {isSpecialKatttooo && (
                  <div className="absolute inset-x-3 bottom-12 p-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-pink-400/60 text-white flex items-center justify-between shadow-xl animate-bounce-subtle">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🐾</span>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-pink-300">Section</div>
                        <div className="font-heading font-black text-sm tracking-wider text-yellow-300">KATTTOOO</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-lg bg-pink-500 text-white text-[10px] font-black uppercase tracking-wider">
                      Special on NBL
                    </span>
                  </div>
                )}

                {/* Wishlist Heart button */}
                <button
                  className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-slate-400 hover:text-pink-500 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                  aria-label="Save to wishlist"
                >
                  <Heart className="w-4 h-4 fill-transparent hover:fill-pink-500" />
                </button>

                {/* Category Pill on bottom */}
                <div className="absolute bottom-3 left-3.5 px-2.5 py-0.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                  {product.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating row */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviewsCount})</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Flavor Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-pink-50 text-pink-700 text-[10px] font-semibold border border-pink-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Price & Add to Cart */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">4.5 oz Pouch</span>
                    <span className="text-xl font-heading font-extrabold text-slate-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all duration-300 shadow-md ${
                      isRecentlyAdded
                        ? 'bg-emerald-500 text-white scale-95 shadow-emerald-500/25'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-pink-500/25 active:scale-95'
                    }`}
                  >
                    {isRecentlyAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
