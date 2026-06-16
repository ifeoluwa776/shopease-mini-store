"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      fontFamily: "system-ui, sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: "#f68b1e", textDecoration: "none", tracking: "-0.5px" }}>
            ShopEase
          </a>
          <a href="/" style={{ fontSize: "14px", fontWeight: "600", color: "#4b5563", textDecoration: "none" }}>
            Home
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="/cart" style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "#374151",
            fontWeight: "600",
            fontSize: "14px",
            backgroundColor: "#fff7ed",
            padding: "8px 16px",
            borderRadius: "6px"
          }}>
            <span>Cart</span>
            <span style={{
              backgroundColor: "#f68b1e",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "700",
              padding: "2px 8px",
              borderRadius: "4px"
            }}>
              {cart.length}
            </span>
          </a>
        </div>

      </div>
    </header>
  );
}
