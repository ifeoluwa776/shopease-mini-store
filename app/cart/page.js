'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ backgroundColor: "#f1f1f2", minHeight: "100vh", padding: "48px 16px", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto", backgroundColor: "#ffffff", padding: "32px", borderRadius: "4px", border: "1px solid #e5e7eb", textAlign: "center" }}>
          <span style={{ fontSize: "48px" }}>🛒</span>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: "16px 0 8px 0" }}>Your Cart is Empty</h2>
          <Link href="/" style={{ display: "inline-block", marginTop: "16px", fontSize: "12px", fontWeight: "bold", color: "#ffffff", backgroundColor: "#f68b1e", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", textTransform: "uppercase" }}>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f1f1f2", minHeight: "100vh", padding: "24px 16px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ fontSize: "16px", fontWeight: "bold", uppercase: "true", color: "#282828", marginBottom: "16px" }}>SHOPPING CART</h1>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {/* Items Column */}
          <div style={{ flex: "2", minWidth: "320px" }}>
            <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "4px", border: "1px solid #e5e7eb" }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "16px", paddingBottom: "16px", marginBottom: "16px", borderBottom: "1px solid #f1f1f2", alignItems: "center" }}>
                  <img src={item.image} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "contain", border: "1px solid #e5e7eb", padding: "4px", borderRadius: "4px" }} />
                  <div style={{ flexGrow: "1" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                      <h3 style={{ fontSize: "14px", margin: 0, fontWeight: "500" }}>{item.title} (x{item.quantity})</h3>
                      <span style={{ fontSize: "14px", fontWeight: "bold" }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", color: "#f68b1e", fontSize: "11px", fontWeight: "bold", cursor: "pointer", padding: 0, marginTop: "12px" }}>
                      REMOVE ITEM
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={clearCart} style={{ marginTop: "12px", background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "4px", padding: "8px 16px", fontSize: "11px", fontWeight: "bold", color: "#75757a", cursor: "pointer" }}>
              CLEAR CART
            </button>
          </div>

          {/* Summary Panel */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "4px", border: "1px solid #e5e7eb", height: "fit-content" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "bold", color: "#75757a", borderBottom: "1px solid #f1f1f2", paddingBottom: "8px", margin: "0 0 16px 0" }}>SUMMARY</h2>
              <div style={{ display: "flex", justifyContents: "between", justifyContent: "space-between", fontSize: "14px", margin: "12px 0" }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: "bold" }}>${getCartTotal().toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", paddingBottom: "16px", borderBottom: "1px solid #f1f1f2" }}>
                <span>Shipping</span>
                <span style={{ color: "#2e7d32", fontWeight: "bold", fontSize: "11px" }}>FREE</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" }}>
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>Total</span>
                <span style={{ fontSize: "20px", fontWeight: "900", color: "#f68b1e" }}>${getCartTotal().toFixed(2)}</span>
              </div>
              <button style={{ width: "100%", padding: "14px 0", border: "none", borderRadius: "4px", backgroundColor: "#f68b1e", color: "#ffffff", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

