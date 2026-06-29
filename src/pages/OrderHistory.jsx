import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./OrderHistory.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data: orderData, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const ordersWithItems = [];

      for (const order of orderData) {
        const { data: items, error: itemError } = await supabase
          .from("order_items")
          .select("*")
          .eq("order_id", order.id);

        if (itemError) throw itemError;

        ordersWithItems.push({
          ...order,
          items,
        });
      }

      setOrders(ordersWithItems);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-orders">
        <h2>Loading your orders...</h2>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="empty-orders">
        <h1>📦 My Orders</h1>
        <h2>No Orders Yet</h2>
        <p>Your purchased products will appear here.</p>
      </div>
    );
  }

  return (
    <div className="order-history">
      <h1>📦 My Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <div className="order-top">
            <div>
              <h2 className="order-number">Order #{order.id}</h2>

              <p className="order-date">
                {new Date(order.created_at).toLocaleDateString()}
              </p>
            </div>

            <div className="order-status">
              {order.status}
            </div>
          </div>

          <div className="order-items">
            {order.items.map((item) => (
              <div className="order-item" key={item.id}>
                <img
                  src={item.product_image}
                  alt={item.product_name}
                />

                <div className="item-details">
                  <h3>{item.product_name}</h3>

                  <p>Quantity: {item.quantity}</p>

                  <p>Price: ₹{item.price}</p>

                  <p>
                    Subtotal: ₹
                    {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            Total: ₹{order.total_amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;