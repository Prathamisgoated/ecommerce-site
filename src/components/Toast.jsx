import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, isVisible, onHide }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <div className={`toast-container ${isVisible ? "show" : ""}`}>
      <div className="toast-content">
        <div className="toast-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <p>{message}</p>
      </div>
      <button className="toast-close" onClick={onHide}>✕</button>
    </div>
  );
};

export default Toast;
