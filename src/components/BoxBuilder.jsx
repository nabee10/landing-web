import React, { useState } from 'react';
import { BOX_FLAVORS } from '../data/candies';
import { Sparkles, Plus, Check, Trash2, ShoppingBag, ArrowRight, Package } from 'lucide-react';

export default function BoxBuilder({ onAddCustomBox }) {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [boxAdded, setBoxAdded] = useState(false);

  const MAX_SLOTS = 3;
  const BOX_PRICE = 18.00;

  const handleToggleFlavor = (flavor) => {
    if (selectedFlavors.some(f => f.id === flavor.id)) {
      // Remove it
      setSelectedFlavors(selectedFlavors.filter(f => f.id !== flavor.id));
    } else {
      if (selectedFlavors.length < MAX_SLOTS) {
        setSelectedFlavors([...selectedFlavors, flavor]);
      }
    }
  };

  const handleRemoveSlot = (index) => {
    setSelectedFlavors(selectedFlavors.filter((_, i) => i !== index));
  };

  const handleAddBoxToCart = () => {
    if (selectedFlavors.length === 0) return;

    const customBoxItem = {
      id: `custom-box-${Date.now()}`,
      name: `Artisanal 3-Pack Mix Box (${selectedFlavors.map(f => f.name).join(', ')})`,
      price: BOX_PRICE,
      quantity: 1,
      flavors: selectedFlavors,
      icon: '🎁',
    };

    onAddCustomBox(customBoxItem);
    setBoxAdded(true);
    setTimeout(() => {
      setBoxAdded(false);
      setSelectedFlavors([]);
    }, 1500);
  };

  const isBoxFull = selectedFlavors.length === MAX_SLOTS;

  return (
    <section id="box-builder" className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-rose-100/50 to-transparent">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Mix & Match
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Build Your Custom 3-Pack Box
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select any 3 gourmet creations to craft your personalized indulgence box. Comes in an embossed pastel gift carton with free custom sweet note!
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Custom Box Container & Progress (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-pink-500" />
                  <h3 className="font-heading font-bold text-lg text-slate-900">Your Bento Candy Box</h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-pink-100 text-pink-700">
                  {selectedFlavors.length} of {MAX_SLOTS} Selected
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden mb-6 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-300"
                  style={{ width: `${(selectedFlavors.length / MAX_SLOTS) * 100}%` }}
                />
              </div>

              {/* 3 Box Slots Visualizer */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[0, 1, 2].map((index) => {
                  const flavor = selectedFlavors[index];
                  return (
                    <div
                      key={index}
                      className={`relative aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ${
                        flavor
                          ? `border-solid ${flavor.border} bg-white shadow-md animate-bounce-subtle`
                          : 'border-pink-200 bg-pink-50/50'
                      }`}
                    >
                      {flavor ? (
                        <>
                          <button
                            onClick={() => handleRemoveSlot(index)}
                            className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                            aria-label="Remove flavor"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                          <span className="text-3xl mb-1">{flavor.icon}</span>
                          <span className="font-heading font-bold text-[11px] text-slate-800 line-clamp-1 leading-tight">
                            {flavor.name}
                          </span>
                          <span className="text-[9px] font-semibold text-pink-600 mt-0.5 uppercase">
                            {flavor.type}
                          </span>
                        </>
                      ) : (
                        <div className="flex flex-col items-center text-pink-300">
                          <Plus className="w-6 h-6 mb-1 opacity-70" />
                          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                            Slot {index + 1}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Box Pricing & Bundle Savings */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Standard Value:</span>
                  <span className="text-slate-400 line-through font-semibold">$22.50</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold">Bundle Deal (Save 20%):</span>
                  <span className="font-heading font-extrabold text-lg text-pink-600">${BOX_PRICE.toFixed(2)}</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-pink-200/60">
                  ✨ Includes holographic gift box, ribbons, and sweet stickers!
                </div>
              </div>

              {/* Add Custom Box to Cart Button */}
              <button
                disabled={selectedFlavors.length === 0}
                onClick={handleAddBoxToCart}
                className={`w-full py-4 rounded-2xl font-heading font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  boxAdded
                    ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                    : selectedFlavors.length > 0
                    ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 hover:opacity-95 text-white shadow-pink-500/25 active:scale-95'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {boxAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Custom Box Added to Bag! 🎉</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>
                      {selectedFlavors.length === 0
                        ? 'Select 1 to 3 Candies Above'
                        : isBoxFull
                        ? `Add Completed Box to Cart ($${BOX_PRICE.toFixed(2)})`
                        : `Add Box (${selectedFlavors.length}/3 Candies)`}
                    </span>
                  </>
                )}
              </button>

              {selectedFlavors.length > 0 && selectedFlavors.length < MAX_SLOTS && (
                <p className="text-center text-[11px] text-pink-600 font-semibold mt-2">
                  Tip: You can still add {MAX_SLOTS - selectedFlavors.length} more flavor(s) without extra charge!
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Flavor Selection Cards (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-heading font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
              <span>Choose Your Flavors</span>
              <span className="text-xs font-normal text-slate-500">(Click to select or deselect)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BOX_FLAVORS.map((flavor) => {
                const isSelected = selectedFlavors.some(f => f.id === flavor.id);
                const isFull = selectedFlavors.length >= MAX_SLOTS && !isSelected;

                return (
                  <div
                    key={flavor.id}
                    onClick={() => !isFull && handleToggleFlavor(flavor)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
                      isSelected
                        ? 'bg-white border-pink-500 shadow-md ring-2 ring-pink-400 scale-[1.02]'
                        : isFull
                        ? 'bg-slate-50/50 border-slate-200 opacity-60 cursor-not-allowed'
                        : 'bg-white border-pink-100 hover:border-pink-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-2xl flex-shrink-0">
                        {flavor.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-heading font-bold text-sm text-slate-800 truncate">
                            {flavor.name}
                          </h4>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {flavor.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          {flavor.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-pink-600">
                        {isSelected ? 'Selected' : 'Available for box'}
                      </span>
                      <button
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-pink-500 text-white'
                            : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                        }`}
                      >
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
