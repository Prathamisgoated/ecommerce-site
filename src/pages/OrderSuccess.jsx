import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="order-success">
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <strong>ShopWave</strong>.
        </p>

        <p>
          Your order has been received and is currently being processed.
        </p>

        <div className="delivery-box">
          <h3>Estimated Delivery</h3>
          <p>Within 3–5 Business Days</p>
        </div>

        <div className="success-buttons">

          <Link to="/products">
            <button className="primary-btn">
              Continue Shopping
            </button>
          </Link>

          <Link to="/orders">
            <button className="secondary-btn">
              View My Orders
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;