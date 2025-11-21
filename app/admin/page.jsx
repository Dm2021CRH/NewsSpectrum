// app/admin/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e. preventDefault();
    
    if (username === "admin" && password === "NewsSpectrum2025!") {
      // Simple client-side "login" – in real life you’d use proper sessions/JWT
      localStorage.setItem("adminAuthenticated", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "grid", 
      placeItems: "center",
      background: "#f4f6f9" 
    }}>
      <div style={{
        background: "white",
        padding: "3rem",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "420px"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>News Spectrum Admin</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: ".5rem", fontWeight: "600" }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: ".5rem", fontWeight: "600" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: ".9rem",
              background: "#0066ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
