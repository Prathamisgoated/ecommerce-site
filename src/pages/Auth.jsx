import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin"); // signin | signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/checkout");
      }
    }

    checkSession();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setMessage("");

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        if (data?.user) {
          setMessage("Account created successfully. You can continue to checkout.");
          navigate("/checkout");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        setMessage("Signed in successfully.");
        navigate("/checkout");
      }
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "40px auto", padding: "24px" }}>
      <h1 style={{ marginBottom: "8px" }}>Welcome to ShopWave</h1>
      <p style={{ marginBottom: "24px", color: "#666" }}>
        {mode === "signin"
          ? "Sign in to continue to checkout"
          : "Create your account to continue to checkout"}
      </p>

      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <button
          onClick={() => setMode("signin")}
          style={{
            flex: 1,
            padding: "12px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: mode === "signin" ? "#111" : "#fff",
            color: mode === "signin" ? "#fff" : "#111",
          }}
        >
          Sign In
        </button>

        <button
          onClick={() => setMode("signup")}
          style={{
            flex: 1,
            padding: "12px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: mode === "signup" ? "#111" : "#fff",
            color: mode === "signup" ? "#fff" : "#111",
          }}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={{
            padding: "12px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#111",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {loading
            ? "Please wait..."
            : mode === "signin"
            ? "Sign In"
            : "Create Account"}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "14px", color: "green" }}>{message}</p>
      )}
      {errorMsg && (
        <p style={{ marginTop: "14px", color: "crimson" }}>{errorMsg}</p>
      )}
    </div>
  );
}

export default Auth;