import React from "react";
import "./Cart.css";

const Cart = ({ isOpen, onClose, cartItems, onUpdateQty, onRemove }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const progress = Math.min((subtotal / 999) * 100, 100);

  return (
    <>
      <div className={`cart-backdrop ${isOpen ? "open" : ""}`} onClick={onClose} />

      <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <div className="cart-title-wrap">
            <h2 className="cart-title">Your Bag</h2>
            {cartItems.length > 0 && (
              <span className="cart-count-badge">{cartItems.reduce((s, i) => s + i.qty, 0)}</span>
            )}
          </div>
          <button className="cart-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {cartItems.length > 0 && (
          <div className="shipping-progress-wrap">
            <p className="shipping-msg">
              {shipping === 0 
                ? "🎉 You've unlocked free shipping!" 
                : `Add ₹${(999 - subtotal).toLocaleString()} more for free shipping`}
            </p>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🛍️</div>
              <h3>Your bag is empty</h3>
              <p>Looks like you haven't added anything yet.</p>
              <button className="btn-primary-global" onClick={onClose}>
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-img" />
                <div className="item-details">
                  <div className="item-cat">{item.category}</div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">₹{item.price.toLocaleString()}</div>
                  <div className="item-controls">
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty - 1)} disabled={item.qty <= 1}>−</button>
                      <span className="qty-val">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => onRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className={shipping === 0 ? "free" : ""}>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <button className="btn-primary-global checkout-btn">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
