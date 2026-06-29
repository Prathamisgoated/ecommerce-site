import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import "./ProductDetails.css";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  async function fetchProduct() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setProduct(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="product-details loading">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details loading">
        <h2>Product not found.</h2>
      </div>
    );
  }

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <div className="product-details">

      <div className="details-container">

        <div className="details-image">

          <img
            src={product.image}
            alt={product.name}
          />

          {product.badge && (
            <span className="details-badge">
              {product.badge}
            </span>
          )}

        </div>

        <div className="details-info">

          <p className="details-brand">
            {product.brand}
          </p>

          <h1>{product.name}</h1>

          <div className="details-rating">

            <span>
              ⭐ {product.rating}
            </span>

            <span>
              ({product.reviews} Reviews)
            </span>

          </div>

          <div className="details-price">

            <span className="current-price">
              ₹{Number(product.price).toLocaleString()}
            </span>

            {product.originalPrice && (
              <span className="old-price">
                ₹{Number(product.originalPrice).toLocaleString()}
              </span>
            )}

            {discount > 0 && (
              <span className="discount">
                {discount}% OFF
              </span>
            )}

          </div>

          <div className="stock-section">

            {product.stock > 5 && (
              <p className="stock-green">
                ✅ In Stock ({product.stock} left)
              </p>
            )}

            {product.stock > 0 &&
              product.stock <= 5 && (
                <p className="stock-orange">
                  ⚠ Only {product.stock} left
                </p>
              )}

            {product.stock === 0 && (
              <p className="stock-red">
                ❌ Out of Stock
              </p>
            )}

          </div>

          <p className="description">
            {product.description}
          </p>
                    <div className="details-actions">

            <button
              className="add-cart-btn"
              disabled={product.stock === 0}
              onClick={() => onAddToCart(product)}
            >
              {product.stock === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </button>

          </div>

          <div className="delivery-box">

            <h3>Delivery Information</h3>

            <ul>
              <li>🚚 Free delivery on orders above ₹999</li>
              <li>🔄 7 Days Easy Return</li>
              <li>💳 Cash on Delivery Available</li>
              <li>🔒 100% Secure Payments</li>
            </ul>

          </div>

          <div className="product-meta">

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Product ID:</strong> #{product.id}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;