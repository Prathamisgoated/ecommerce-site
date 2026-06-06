import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CategoryShowcase from "./components/CategoryShowcase";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import Reviews from "./components/Reviews";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import products from "./components/products";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
    // auto-hide handled in Toast component or we can just let it stay for a bit
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      setCartItems((prev) => {
        const existing = prev.find((i) => i.id === product.id);
        if (existing) {
          return prev.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return [...prev, { ...product, qty: 1 }];
      });
      showToast(`${product.name} added to bag!`);
    },
    [showToast]
  );

  const handleUpdateQty = useCallback((id, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const scrollToShop = () => {
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />
      <Hero onShopNow={scrollToShop} />
      <Marquee />
      <Features />
      <CategoryShowcase />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <Reviews />
      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onHide={hideToast}
      />
    </div>
  );
}

export default App;
