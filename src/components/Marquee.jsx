import React from "react";
import "./Marquee.css";

const Marquee = () => {
  const textItems = [
    "PREMIUM QUALITY", "•",
    "NEW SEASON DROP", "•",
    "FREE DELIVERY OVER ₹999", "•",
    "CURATED ESSENTIALS", "•",
    "ELEVATE YOUR STYLE", "•",
    "100% SECURE CHECKOUT", "•"
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="marquee-group">
              {textItems.map((text, idx) => (
                <span key={idx} className={text === "•" ? "bullet" : "text"}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
