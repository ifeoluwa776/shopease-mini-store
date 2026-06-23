import React from "react";
import { products } from "../data/products"; // Ensure it has exactly two dots (../)
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#f1f1f2", minHeight: "100vh", padding: "16px", fontFamily: "Roboto, system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Jumia Style Sales Banner */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "4px", padding: "24px", marginBottom: "16px", border: "1px solid #e5e7eb", display: "flex", justifyContent: "between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ flex: "1", minWidth: "250px" }}>
            <span style={{ fontSize: "10px", fontWeight: "bold", color: "#ffffff", backgroundColor: "#f68b1e", padding: "2px 6px", borderRadius: "2px" }}>
              OFFICIAL STORE
            </span>
            <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#282828", margin: "12px 0 4px 0" }}>
              ShopEase Flash Sales & Mega Deals!
            </h1>
            <p style={{ fontSize: "13px", color: "#75757a", margin: 0 }}>
              Free shipping on thousands of local essentials. Best prices guaranteed.
            </p>
          </div>
          <div style={{ backgroundColor: "#f68b1e", color: "#ffffff", fontWeight: "900", padding: "12px 24px", borderRadius: "4px", fontSize: "16px", textTransform: "uppercase" }}>
            Up to 50% OFF
          </div>
        </div>

        {/* Product Grid Area Container */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "4px", padding: "16px", border: "1px solid #e5e7eb" }}>
          <div style={{ borderBottom: "1px solid #f1f1f2", paddingBottom: "12px", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#282828", textTransform: "uppercase", margin: 0 }}>
              Top Deals For You
            </h2>
          </div>

          {/* Hardcoded Flex/Grid Layout that doesn't need Tailwind */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "start" }}>
            {products.map((product) => (
              <div key={product.id} style={{ width: "calc(25% - 12px)", minWidth: "240px", flexGrow: "1" }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

