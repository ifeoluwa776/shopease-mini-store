import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
        © {new Date().getFullYear()} ShopEase Mini Store. Built for learning project portfolio.
      </div>
    </footer>
  );
}
