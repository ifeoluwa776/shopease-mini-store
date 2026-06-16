import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#f1f3f6", minHeight: "100vh", padding: "32px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Retail-Style Flash Sale Banner */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "24px", border: "1px solid #e5e7eb", marginBottom: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
          <h1 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: 0, textTransform: "uppercase" }}>
            Top Deals & Flash Sales
          </h1>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "4px 0 0 0" }}>
            Handpicked premium essentials for school and daily life.
          </p>
        </div>

        {/* Dynamic Multi-Column Row Wrap Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "16px"
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
