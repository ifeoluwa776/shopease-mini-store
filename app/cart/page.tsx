"use client";

import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();
  const shippingFee = cart.length > 0 ? 15.00 : 0.00;
  const grandTotal = total + shippingFee;

  // Matching helper to show identical product graphics in the cart row
  const getProductEmoji = (id: number) => {
    if (id === 1) return "🎧";
    if (id === 2) return "👟";
    if (id === 3) return "⌚";
    return "🎒";
  };

  return (
    <div style={{ backgroundColor: "#f1f3f6", minHeight: "100vh", padding: "32px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "24px" }}>
          Shopping Cart <span style={{ fontSize: "14px", fontWeight: "400", color: "#6b7280" }}>({cart.length} items)</span>
        </h1>

        {cart.length === 0 ? (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "48px", border: "1px solid #e5e7eb", textAlign: "center" }}>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "16px" }}>Your shopping cart is empty!</p>
            <a href="/" style={{ display: "inline-block", backgroundColor: "#f68b1e", color: "#ffffff", textDecoration: "none", padding: "12px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: "600" }}>
              Continue Shopping
            </a>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row", gap: "24px", flexWrap: "wrap", alignItems: "flex-start" }}>
            
            {/* Left Box Container: Item Catalog Rows */}
            <div style={{ flex: "2", minWidth: "320px", backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
              <div style={{ padding: "16px", borderBottom: "1px solid #f3f4f6", fontWeight: "600", color: "#374151" }}>Items Details</div>
              
              <div style={{ display: "flex", flexDirection: "column" }}>
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", borderBottom: index === cart.length - 1 ? "none" : "1px solid #f3f4f6" }}>
                    
                    {/* Fixed Sizing Frame matching the clean main layout */}
                    <div style={{ 
                      width: "80px", 
                      height: "80px", 
                      flexShrink: 0, 
                      border: "1px solid #e5e7eb", 
                      borderRadius: "6px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      backgroundColor: "#f9fafb",
                      fontSize: "40px",
                      userSelect: "none"
                    }}>
                      {getProductEmoji(item.id)}
                    </div>

                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 4px 0" }}>{item.title}</h3>
                      <p style={{ fontSize: "12px", color: "#16a34a", margin: 0, fontWeight: "500" }}>In Stock</p>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "16px", fontWeight: "700", color: "#111827", display: "block" }}>${item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: "none", border: "none", color: "#f68b1e", fontSize: "12px", fontWeight: "600", cursor: "pointer", marginTop: "4px", padding: 0 }}
                      >
                        REMOVE
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Block Summary Frame */}
            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #e5e7eb", padding: "24px" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 16px 0", borderBottom: "1px solid #f3f4f6", paddingBottom: "8px" }}>
                Order Summary
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#4b5563", borderBottom: "1px solid #f3f4f6", paddingBottom: "16px", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: "600", color: "#111827" }}>${total.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Shipping Fee</span>
                  <span style={{ color: "#16a34a", fontWeight: "600" }}>${shippingFee.toFixed(2)}</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "24px" }}>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#374151" }}>Total Balance</span>
                <span style={{ fontSize: "22px", fontWeight: "800", color: "#111827" }}>${grandTotal.toFixed(2)}</span>
              </div>

              <button style={{ width: "100%", backgroundColor: "#f68b1e", color: "#ffffff", border: "none", borderRadius: "6px", padding: "14px 0", fontSize: "14px", fontWeight: "700", cursor: "pointer", textTransform: "uppercase" }}>
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
