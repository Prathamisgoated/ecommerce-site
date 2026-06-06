import React from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Rohan K.",
    rating: 5,
    text: "The streetwear collection is unmatched. The oversized hoodie I bought is my new everyday wear. So comfy!",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Ananya S.",
    rating: 5,
    text: "ShopWave's premium quality really shows. Fast delivery and the packaging was beautiful. Highly recommend!",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Vikram P.",
    rating: 4,
    text: "Great selection of footwear. Ordered the AirMax Pro and they fit perfectly. Customer support is also very responsive.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  }
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="sw-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Loved by Thousands</h2>
          <p className="reviews-subtitle">Don't just take our word for it. See what our community has to say.</p>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img src={review.avatar} alt={review.name} className="review-avatar" />
                <div className="review-meta">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="review-rating">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
              <span className="review-date">{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
