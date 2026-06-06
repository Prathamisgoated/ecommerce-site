import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
      <div className="product-stars">
        {[...Array(full)].map((_, i) => <span key={i} className="star-filled">★</span>)}
        {half && <span className="star-half">★</span>}
        {[...Array(5 - full - (half ? 1 : 0))].map((_, i) => (
          <span key={i} className="star-empty">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="product-card group">
      <div className="card-image-wrap">
        <img src={product.image} alt={product.name} className="card-img" loading="lazy" />
        
        {/* Badges */}
        <div className="card-badges">
          {product.badge && (
            <span className={`badge badge-${product.badge.toLowerCase().replace(" ", "-")}`}>
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="badge badge-discount">-{discount}%</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          className={`wish-btn ${wished ? "wished" : ""}`}
          onClick={() => setWished(!wished)}
          title={wished ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={wished ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Quick View */}
        <div className="card-overlay">
          <button className="quick-view-btn">
            Quick View
          </button>
        </div>
      </div>

      <div className="card-info">
        <div className="card-cat-wrap">
          <span className="card-category">{product.category}</span>
          <div className="card-rating">
            <span className="rating-val">★ {product.rating}</span>
            <span className="rating-count">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="card-name">{product.name}</h3>

        <div className="card-bottom">
          <div className="card-pricing">
            <span className="price-current">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>

          <button
            className={`btn-add-cart ${added ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? (
              <span className="add-status">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            ) : (
              <span className="add-status">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
