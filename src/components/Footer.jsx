import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="sw-container">
        {/* Newsletter Banner */}
        <div className="newsletter-banner">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Join the Inner Circle</h2>
            <p className="newsletter-sub">
              Sign up for early access to drops, exclusive deals, and weekly editorial content. Unsubscribe anytime.
            </p>
          </div>
          <div className="newsletter-form-wrap">
            {subscribed ? (
              <div className="subscribed-msg">
                <span className="success-icon">✓</span> 
                Welcome to ShopWave! You're officially on the list.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary-global">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-main">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <div className="logo-mark">W</div>
              <span className="logo-text">
                Shop<span>Wave</span>
              </span>
            </a>
            <p className="footer-desc">
              Setting the standard for premium fashion and lifestyle curation. Delivered to your doorstep across India.
            </p>
            <div className="social-links">
              {["Insta", "X", "TikTok", "FB"].map((s) => (
                <a key={s} href="#" className="social-link">{s}</a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div className="footer-links-wrapper">
            {[
              {
                title: "Shop",
                links: ["New Arrivals", "Best Sellers", "Streetwear", "Accessories", "Footwear", "Sale"]
              },
              {
                title: "Support",
                links: ["Track Order", "Returns Policy", "Size Guide", "FAQs", "Contact Us"]
              },
              {
                title: "Company",
                links: ["Our Story", "Careers", "Sustainability", "Terms of Service", "Privacy Policy"]
              }
            ].map((col) => (
              <div key={col.title} className="footer-links-col">
                <h4 className="footer-col-title">{col.title}</h4>
                <ul className="footer-link-list">
                  {col.links.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© 2026 ShopWave India. All rights reserved.</p>
          <div className="payment-icons">
            {["UPI", "Visa", "Mastercard", "Amex"].map((p) => (
              <span key={p} className="pay-badge">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
