import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import BoxBuilder from './components/BoxBuilder';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'sour-belts',
      name: 'Electric Neon Sour Belts',
      price: 6.50,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=300&q=80',
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (title) => {
    setToast({ title, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        }
      ];
    });

    showToast(product.name);
  };

  const handleAddCustomBox = (customBox) => {
    setCartItems((prevItems) => [...prevItems, customBox]);
    showToast(customBox.name);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-rose-100/70 via-red-50/50 to-rose-100/80 selection:bg-rose-200 selection:text-rose-700">
      {/* Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenCustomBox={() => {
            const el = document.getElementById('box-builder');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onAddToCart={handleAddToCart}
        />

        <Marquee />

        <ProductGrid onAddToCart={handleAddToCart} />

        <BoxBuilder onAddCustomBox={handleAddCustomBox} />

        <Testimonials onAddToCart={handleAddToCart} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Notification Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
