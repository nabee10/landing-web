import React from 'react';
import { ShoppingBag, CheckCircle, ArrowRight, X } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle max-w-sm">
      <div className="glass-panel bg-white/95 border-2 border-pink-300 rounded-2xl p-4 shadow-2xl flex items-center gap-3 text-slate-800">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <CheckCircle className="w-5 h-5 text-emerald-200" />
        </div>

        <div className="flex-1 min-w-0 pr-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-pink-600">
            Added to Sweet Bag!
          </div>
          <div className="font-heading font-bold text-xs truncate text-slate-900">
            {toast.title}
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenCart();
          }}
          className="px-3 py-1.5 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold text-xs flex items-center gap-1 transition-colors flex-shrink-0"
        >
          <span>View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 p-1"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
