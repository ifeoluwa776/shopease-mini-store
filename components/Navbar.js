'use client';
import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getCartCount } = useCart();

  return (
    <header style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50, fontFamily: "sans-serif" }}>
      {/* Top Ribbon */}
      <div style={{ backgroundColor: "#f68b1e", color: "#ffffff", fontSize: "11px", padding: "6px 16px", textAlign: "center", fontWeight: "500" }}>
        ⚡ Welcome to ShopEase! Fast Delivery & Quality Local Student Hub Solutions ⚡
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", height: "64px", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", fontSize: "22px", fontWeight: "900", color: "#282828", letterSpacing: "-0.5px" }}>
          Shop<span style={{ color: "#f68b1e" }}>Ease</span>
        </Link>
        
        {/* Actions */}
        <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/" style={{ fontSize: "13px", fontWeight: "bold", color: "#333", textDecoration: "none", textTransform: "uppercase" }}>
            Catalog
          </Link>
          
          <Link href="/cart" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "bold", color: "#333", textDecoration: "none", backgroundColor: "#fff8f2", padding: "6px 12px", borderRadius: "4px", border: "1px solid #ffe8d6" }}>
            <span>🛒</span>
            <span>Cart</span>
            <span style={{ backgroundColor: "#f68b1e", color: "#ffffff", fontSize: "10px", fontWeight: "900", padding: "2px 6px", borderRadius: "3px", minWidth: "14px", textAlign: "center" }}>
              {getCartCount()}
            </span>
          </Link>
        </nav>

      </div>
    </header>
  );
}

