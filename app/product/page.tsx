"use client";

import React, { use } from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div style={{ padding: "48px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
        <h2>Product not found</h2>
        <a href="/" style={{ color: "#f68b1e", fontWeight: "600", textDecoration: "none" }}>Back to homepage</a>
      </div>
    );
  }

  const getProductEmoji = (id: number) => {
    if (id === 1) return "🎧";
    if (id === 2) return "👟";
    if (id === 3) return "⌚";
    return "🎒";
  };

  return (
    <div style={{ backgroundColor: "#f1f3f6", minHeight: "100vh", padding: "32px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        backgroundColor: "#ffffff", 
        borderRadius: "8px", 
        border: "1px solid #e5e7eb", 
        padding: "32px", 
        display: "flex", 
        gap: "32px", 
        flexWrap: "wrap",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
      }}>
        
        {/* Vector Container Box */}
        <div style={{ 
          width: "280px", 
          height: "280px", 
          backgroundColor: "#f9fafb", 
          border: "1px solid #e5e7eb", 
          borderRadius: "8px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          fontSize: "120px", 
          margin: "0 auto",
          userSelect: "none"
        }}>
          {getProductEmoji(product.id)}
        </div>

        {/* Info Column */}
        <div style={{ flex: "1", minWidth: "280px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#f68b1e", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {product.category}
            </span>
            <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "4px 0 8px 0", lineHeight: "1.2" }}>
              {product.title}
            </h1>
            <p style={{ fontSize: "13px", color: "#f68b1e", margin: "0 0 16px 0", fontWeight: "600" }}>
              ⭐ {product.rating} / 5.0 Rating
            </p>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 24px 0" }}>
              {product.description}
            </p>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "20px" }}>
              <span style={{ fontSize: "28px", fontWeight: "800", color: "#111827" }}>${product.price.toFixed(2)}</span>
              <span style={{ fontSize: "14px", color: "#9ca3af", textDecoration: "line-through" }}>${(product.price * 1.2).toFixed(2)}</span>
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              style={{ 
                width: "100%", 
                backgroundColor: product.inStock ? "#f68b1e" : "#d1d5db", 
                color: "#ffffff", 
                border: "none", 
                borderRadius: "6px", 
                padding: "14px 0", 
                fontSize: "14px", 
                fontWeight: "700", 
                cursor: product.inStock ? "pointer" : "not-allowed",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              {product.inStock ? "Add to Shopping Cart" : "Item Sold Out"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
