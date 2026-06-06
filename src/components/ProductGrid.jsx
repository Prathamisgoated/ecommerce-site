import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    else if (sortBy === "popular") result = [...result].sort((a, b) => b.reviews - a.reviews);

    return result;
  }, [products, activeCategory, sortBy, searchQuery]);

  return (
    <section className="product-section" id="shop">
      <div className="sw-container">
        {/* Header */}
        <div className="section-header">
          <div className="header-text">
            <span className="section-eyebrow">The Collection</span>
            <h2 className="section-title">Curated Essentials</h2>
            <p className="section-sub">
              Explore our handpicked selection of premium goods designed to elevate your everyday style.
            </p>
          </div>
          
          <div className="header-actions">
             <div className="filter-search">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid-controls">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="cat-count">
                  {cat === "All" ? products.length : products.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="sort-wrap">
            <span className="sort-label">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="rating">Top Rated</option>
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3>No products found</h3>
            <p>We couldn't find anything matching "{searchQuery}" in {activeCategory}.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} 
              className="btn-primary-global"
              style={{ marginTop: '20px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
