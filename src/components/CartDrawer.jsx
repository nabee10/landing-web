import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [hasFreeShippingCode, setHasFreeShippingCode] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 35.0;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const eligibleSubtotal = subtotal - discountAmount;
  const isFreeShipping = eligibleSubtotal >= FREE_SHIPPING_THRESHOLD || eligibleSubtotal === 0 || hasFreeShippingCode;
  const shippingFee = (cartItems.length === 0 || isFreeShipping) ? 0 : 4.99;
  const orderTotal = eligibleSubtotal + shippingFee;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - eligibleSubtotal);
  const progressPercent = hasFreeShippingCode ? 100 : Math.min(100, (eligibleSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'KATTOO' || cleanCode === 'KATTTOOO') {
      setHasFreeShippingCode(true);
      setPromoSuccess('🎉 Code KATTOO applied: FREE DELIVERY unlocked!');
    } else if (cleanCode === 'SUGAR15' || cleanCode === 'SWEET15') {
      setDiscountPercent(15);
      setPromoSuccess('15% Sweet Discount applied! 🎉');
    } else {
      setPromoError('Invalid code. Try "KATTOO" for free delivery');
    }
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  const handleResetCheckout = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col rounded-l-3xl overflow-hidden border-l border-pink-100">
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 border-b border-pink-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-800">Your Sweet Bag</h3>
                <p className="text-xs text-slate-500">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} handcrafted item(s)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-pink-50/70 p-4 border-b border-pink-100/60">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5 text-slate-700">
              <span className="flex items-center gap-1">
                {isFreeShipping ? '🎉 You unlocked FREE Shipping!' : `🍬 Add $${amountToFreeShipping.toFixed(2)} more for FREE Delivery!`}
              </span>
              <span className="text-pink-600 font-bold">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2.5 bg-pink-200/60 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Checkout Celebration Modal State */}
          {checkoutComplete ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg animate-bounce-subtle">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-slate-900">Sweet Order Confirmed! 🍬</h4>
              <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
                Thank you! Our master confectioners are carefully packing your artisanal candies in chilled, eco-friendly pastel boxes.
              </p>
              <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100 w-full text-xs text-slate-600 space-y-1">
                <div className="flex justify-between">
                  <span>Order Number:</span>
                  <span className="font-bold text-slate-800">#SC-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span className="font-bold text-emerald-600">2-3 Sweet Business Days</span>
                </div>
              </div>
              <button
                onClick={handleResetCheckout}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:shadow-lg transition-all"
              >
                Continue Sweet Adventures
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart State */
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-pink-50 flex items-center justify-center text-5xl mb-4 border border-pink-100">
                🍭
              </div>
              <h4 className="font-heading text-xl font-bold text-slate-800 mb-1">Your bag is currently empty!</h4>
              <p className="text-xs text-slate-500 max-w-xs mb-6">
                Treat yourself or a friend to gourmet sour belts, cosmic gummies, and artisanal marshmallows.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold shadow-md shadow-pink-500/25 transition-transform active:scale-95"
              >
                Browse Our Candies
              </button>
            </div>
          ) : (
            /* Items List */
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3.5"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-pink-50 flex-shrink-0 border border-pink-100 flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl">{item.icon || '🍬'}</span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-sm text-slate-800 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-pink-600 font-bold mt-0.5">
                        ${item.price.toFixed(2)} {item.flavors && <span className="text-slate-400 font-normal">({item.flavors.length} flavors)</span>}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-pink-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-700 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-pink-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Total for this line */}
                    <div className="text-right flex-shrink-0 font-bold text-sm text-slate-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo code area */}
              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/70">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (use KATTOO for Free Delivery)"
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-400 uppercase tracking-wider"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-900 text-white transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {promoError && <p className="text-[11px] text-red-500 font-semibold mt-1">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-600 font-semibold mt-1">{promoSuccess}</p>}
              </div>

              {/* Summary & Checkout Footer */}
              <div className="p-5 border-t border-slate-200/80 bg-white space-y-3">
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-pink-600 font-semibold">
                      <span>Sweet Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Standard Express Shipping</span>
                    <span className="font-semibold">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-600 font-bold uppercase tracking-wider text-[11px]">Free</span>
                      ) : (
                        `$${shippingFee.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-100">
                    <span>Total</span>
                    <span className="text-pink-600 text-lg font-heading">${orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-heading font-bold text-base shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 group transition-all active:scale-[0.98]"
                >
                  <span>Proceed to Sweet Checkout</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 256-Bit SSL Encrypted
                  </span>
                  <span>•</span>
                  <span>30-Day Happiness Guarantee</span>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
