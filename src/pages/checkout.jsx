import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const Checkout = ({ cartItems, clearCart }) =>  {
  const navigate = useNavigate();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/auth");
        return;
      }

      setCheckingAuth(false);
    }

    checkAuth();
  }, [navigate]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = async () => {
  if (!cartItems.length) return;

  if (
    !form.fullName ||
    !form.phone ||
    !form.address ||
    !form.city ||
    !form.pincode
  ) {
    alert("Please fill all checkout fields.");
    return;
  }

  setPlacingOrder(true);

  try {
    // Get logged in user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Create order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        full_name: form.fullName,
        phone: form.phone,
        address: form.address,
        city: form.city,
        pincode: form.pincode,
        total_amount: total,
        status: "Pending",
        delivery_date: null,
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // Save order items
    const orderItems = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.id,
      product_name: item.name,
      price: item.price,
      quantity: item.qty,
      product_image: item.image,
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // Update stock
    for (const item of cartItems) {
  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("stock")
    .eq("id", item.id)
    .single();

  if (fetchError) throw fetchError;

  const newStock = Math.max(0, product.stock - item.qty);
const { data, error: updateError } = await supabase
  .from("products")
  .update({ stock: newStock })
  .eq("id", item.id)
  .select();

console.log("Updating Product ID:", item.id);
console.log("Old Stock:", product.stock);
console.log("New Stock:", newStock);
console.log("Updated Row:", data);

if (updateError) throw updateError;
}
    clearCart();

    navigate("/order-success");
  } catch (error) {
    console.error(error);
    alert("Failed to place order.");
  } finally {
    setPlacingOrder(false);
  }
};

  if (checkingAuth) {
    return <div style={{ padding: "2rem" }}>Checking account...</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "2rem",
          }}
        >
          <div>
            <h2>Shipping Details</h2>

            <div style={{ display: "grid", gap: "12px", marginTop: "1rem" }}>
              <input
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                style={inputStyle}
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
              />
              <textarea
                name="address"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
              />
              <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                style={inputStyle}
              />
              <input
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <h2>Order Summary</h2>

            <div style={{ marginTop: "1rem", border: "1px solid #e5e5e5", borderRadius: "12px", padding: "16px" }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ color: "#666", fontSize: "14px" }}>
                      Qty: {item.qty}
                    </div>
                  </div>
                  <div>₹{(item.price * item.qty).toLocaleString()}</div>
                </div>
              ))}

              <div style={{ paddingTop: "16px" }}>
                <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
                <p>Shipping: {shipping === 0 ? "FREE" : `₹${shipping}`}</p>
                <h2>Total: ₹{total.toLocaleString()}</h2>

                <button
                  onClick={handlePlaceOrder}
                  disabled={placingOrder}
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    padding: "14px 18px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#111",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {placingOrder ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  width: "100%",
};

export default Checkout;