import React, { useState } from 'react';
import { Candy, Send, Sparkles, Heart, CheckCircle2, MessageCircle, Share2, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden pt-20 pb-12 mt-20">
      {/* Decorative gradient glow on top border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Email Newsletter Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-16 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 shadow-2xl overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                Sweet Perks Club
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                Unlock 15% Off Your First Candy Haul!
              </h3>
              <p className="text-pink-100 text-sm sm:text-base max-w-md">
                Join our VIP Sweet Squad for secret drop announcements, seasonal tasting boxes, and exclusive member discounts.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-sm">Welcome to the Club! 🎉</h4>
                    <p className="text-xs text-pink-100">Use code <span className="font-bold underline">KATTOO</span> at checkout for FREE DELIVERY.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3.5 rounded-2xl bg-white/90 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-2xl bg-white text-pink-600 hover:bg-pink-50 font-heading font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Claim 15%</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Links & Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white">
                <Candy className="w-6 h-6" />
              </div>
              <span className="font-heading text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                NBL CANDY
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Crafting joy through artisan confections. We believe everyday moments deserve a burst of colorful, guilt-free sweetness.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Social chat" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-200 mb-3 uppercase tracking-wider">
              Confections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#products" className="hover:text-pink-400 transition-colors">Sour Belts & Ribbons</a></li>
              <li><a href="#products" className="hover:text-pink-400 transition-colors">Cosmic Fruit Gummies</a></li>
              <li><a href="#products" className="hover:text-pink-400 transition-colors">Ruby Chocolate Bites</a></li>
              <li><a href="#products" className="hover:text-pink-400 transition-colors">Vegan Marshmallows</a></li>
              <li><a href="#box-builder" className="hover:text-pink-400 transition-colors">Custom Mix-and-Match</a></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-200 mb-3 uppercase tracking-wider">
              Experience
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#box-builder" className="hover:text-pink-400 transition-colors">Build-a-Box</a></li>
              <li><a href="#perks" className="hover:text-pink-400 transition-colors">Corporate Gifting</a></li>
              <li><a href="#perks" className="hover:text-pink-400 transition-colors">Wholesale Program</a></li>
              <li><a href="#reviews" className="hover:text-pink-400 transition-colors">Sweet Wall of Love</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sustainability & Packaging</a></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-200 mb-3 uppercase tracking-wider">
              Assistance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Order Status & Tracking</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping & Melting FAQ</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Happiness Guarantee</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Ingredients & Allergens</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contact Sugar Concierge</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NBL CANDY Confections Inc. All sweet rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
