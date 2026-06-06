import React from "react";
import "./CategoryShowcase.css";

const categories = [
  {
    title: "Streetwear",
    image: "https://images.unsplash.com/photo-1772521222853-949a4af568e8?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "brand"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&h=800&fit=crop",
    color: "coral"
  },
  {
    title: "Footwear",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=800&fit=crop",
    color: "teal"
  }
];

const CategoryShowcase = () => {
  return (
    <section className="showcase-section">
      <div className="sw-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Shop by Category</h2>
          <button className="btn-view-all">View All Collections →</button>
        </div>

        <div className="showcase-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="showcase-card">
              <div className="showcase-img-wrap">
                <img src={cat.image} alt={cat.title} className="showcase-img" loading="lazy" />
                <div className={`showcase-overlay overlay-${cat.color}`}></div>
              </div>
              <div className="showcase-content">
                <h3 className="showcase-name">{cat.title}</h3>
                <button className="btn-explore">Explore <span className="arrow">↗</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
