import { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../services/wishlistServices";
import "./wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  async function loadWishlist() {
    try {
      const data = await getWishlist();
      setWishlist(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(productId) {
    try {
      await removeFromWishlist(productId);

      setWishlist((prev) =>
        prev.filter((item) => item.product_id !== productId)
      );
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return (
      <div className="wishlist-container">
        <h2>Loading wishlist...</h2>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-container">
        <h1>❤️ My Wishlist</h1>
        <p>Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>❤️ My Wishlist</h1>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div className="wishlist-card" key={item.id}>
            <img
              src={item.products.image}
              alt={item.products.name}
            />

            <h3>{item.products.name}</h3>

            <p className="price">
              ₹{item.products.price.toLocaleString()}
            </p>

            <button
              className="remove-btn"
              onClick={() => handleRemove(item.product_id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;