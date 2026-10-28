import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Menu, X, Candy, Heart } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPromo, setCopiedPromo] = useState(false);

  const handleCopyPromo = () => {
    navigator.clipboard.writeText('KATTOO');
    setCopiedPromo(true);
    setTimeout(() => {
      setCopiedPromo(false);
    }, 2000);
  };

  const navLinks = [
    { name: 'Shop Bestsellers', href: '#products' },
    { name: 'Gift Bundles', href: '#box-builder' },
    { name: 'Why NBL Candy', href: '#perks' },
    { name: 'Sweet Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top micro banner with Click-to-Copy */}
      <div className="bg-gradient-to-r from-rose-500 via-red-400 to-rose-400 py-1.5 px-4 text-center text-xs sm:text-sm font-medium text-white shadow-sm flex items-center justify-center gap-2 select-none">
        <Sparkles className="w-3.5 h-3.5 animate-spin-slow inline" />
        <span>
          Use code{' '}
          <button
            onClick={handleCopyPromo}
            type="button"
            title="Click to copy promo code"
            className="font-bold tracking-wider bg-white/25 hover:bg-white/40 active:scale-95 px-2.5 py-0.5 rounded-full text-white cursor-pointer transition-all duration-200 inline-flex items-center gap-1 shadow-xs border border-white/30"
          >
            {copiedPromo ? (
              <span className="text-emerald-200 font-extrabold flex items-center gap-0.5 animate-pulse">
                COPIED! ✓
              </span>
            ) : (
              <span>KATTOO</span>
            )}
          </button>{' '}
          for FREE DELIVERY on all orders!
        </span>
        <span className="hidden sm:inline">🐾 Exclusive NBL Candy Perk</span>
      </div>

      {/* Main glass navigation bar */}
      <nav className="glass-panel backdrop-blur-md bg-white/85 border-b border-rose-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 p-0.5 shadow-md shadow-pink-500/20 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Candy className="w-6 h-6 text-pink-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                NBL CANDY
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-pink-400 -mt-1">
                Artisanal Confectionery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Smooth Hover Effect */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-rose-600 px-3.5 py-1.5 rounded-full hover:bg-rose-100/70 active:scale-95 transition-all duration-200 relative group flex items-center"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Right Action Icons & Cart */}
          <div className="flex items-center gap-3">
            <a
              href="#box-builder"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100/80 hover:bg-pink-200 transition-colors duration-200 border border-pink-200 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Custom Box
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-md shadow-pink-500/25 hover:shadow-lg hover:shadow-pink-500/35 active:scale-95 transition-all duration-200"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-bold">Cart</span>
              <span className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1 text-xs font-black text-pink-600 bg-white rounded-full shadow-inner transition-transform duration-300 ${cartCount > 0 ? 'scale-110' : 'scale-100'}`}>
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-pink-50 text-slate-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-pink-100 px-4 pt-3 pb-5 space-y-2 bg-white/95 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#box-builder"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-md"
              >
                <Sparkles className="w-4 h-4" /> Build a Custom Box (Save 15%)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
