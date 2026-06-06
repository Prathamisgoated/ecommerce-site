import React from "react";
import "./Hero.css";

const Hero = ({ onShopNow }) => {
  return (
    <section className="hero">
      {/* Background Graphic Elements */}
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="sw-container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Spring / Summer 2026
          </div>

          <h1 className="hero-title">
            Define Your <span className="gradient-text">Vibe</span>
            <br />
            Elevate Your <span className="title-highlight">Style</span>
          </h1>

          <p className="hero-subtitle">
            Discover curated premium fashion and lifestyle essentials. High-quality pieces delivered straight to your door across India.
          </p>

          <div className="hero-cta">
            <button className="btn-primary-global" onClick={onShopNow}>
              Shop Collection
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-ghost">
              <span className="play-icon">▶</span>
              View Lookbook
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">50K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">1.2K+</span>
              <span className="stat-label">Premium Goods</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="stat-label">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
              alt="Fashion Model"
              className="hero-img"
            />
            {/* Floating Cards */}
            <div className="floating-card card-top">
              <div className="fc-icon-wrap">🔥</div>
              <div>
                <div className="fc-title">Trending Now</div>
                <div className="fc-sub">+320 sold today</div>
              </div>
            </div>
            <div className="floating-card card-bottom">
              <div className="fc-icon-wrap fc-teal">⚡</div>
              <div>
                <div className="fc-title">Flash Delivery</div>
                <div className="fc-sub">Next-day in Metro cities</div>
              </div>
            </div>
            <div className="hero-decor-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
