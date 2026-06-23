'use client';
import React from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { id, title, price, image, category, rating, inStock } = product;
  const fakeOriginalPrice = price * 1.35;

  return (
    <div style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e5e7eb", display: "flex", flexDirection: "column", height: "100%", position: "relative", boxSizing: "border-box" }}>
      
      {/* Category Ribbon */}
      <span style={{ position: "absolute", top: "8px", left: "8px", zIndex: "10", fontSize: "9px", fontWeight: "bold", textTransform: "uppercase", backgroundColor: "#ffffff", color: "#75757a", padding: "2px 6px", borderRadius: "2px", border: "1px solid #e5e7eb" }}>
        {category}
      </span>

      {/* Pure Local Image Container Block */}
      <div style={{ 
        width: "100%", 
        aspectRatio: "1/1", 
        backgroundColor: "#ffffff", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden", 
        borderBottom: "1px solid #f1f1f2",
        position: "relative",
        padding: "12px",
        boxSizing: "border-box"
      }}>
        <img 
          src={image} 
          alt={title}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />

        {!inStock && (
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
            <span style={{ fontSize: "11px", fontWeight: "bold", color: "#d93838", backgroundColor: "#fde8e8", border: "1px solid #f8b4b4", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
              OUT OF STOCK
            </span>
          </div>
        )}
      </div>

      {/* Info Container */}
      <div style={{ padding: "12px", display: "flex", flexDirection: "column", flexGrow: "1", textAlign: "left" }}>
        <Link href={`/product/${id}`} style={{ textDecoration: "none", color: "#282828" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "normal", lineHeight: "1.3", margin: "0 0 8px 0", height: "36px", overflow: "hidden" }}>
            {title}
          </h3>
        </Link>

        {/* Pricing Layout */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "4px" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold", color: "#282828" }}>
            ${price.toFixed(2)}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#75757a", marginTop: "2px" }}>
            <span style={{ textDecoration: "line-through" }}>${fakeOriginalPrice.toFixed(2)}</span>
            <span style={{ color: "#f68b1e", backgroundColor: "#ffe8d6", padding: "0 4px", borderRadius: "2px", fontWeight: "bold" }}>-25%</span>
          </div>
        </div>

        {/* Rating Block */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "8px" }}>
          <span style={{ color: "#f68b1e", fontSize: "12px" }}>★</span>
          <span style={{ fontSize: "11px", color: "#75757a", fontWeight: "500" }}>{rating} / 5</span>
        </div>

        {/* Action Button */}
        <div style={{ marginTop: "auto", paddingTop: "12px" }}>
          <Link 
            href={`./product/${id}`}
            style={{ display: "block", width: "100%", textAlign: "center", fontSize: "12px", fontWeight: "bold", color: "#ffffff", backgroundColor: "#f68b1e", padding: "8px 0", borderRadius: "4px", textDecoration: "none", textTransform: "uppercase" }}
          >
            Buy Now
          </Link>
        </div>
      </div>

    </div>
  );
}







