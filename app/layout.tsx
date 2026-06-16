import React from "react";
import Providers from "../context/providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "ShopEase Mini Store",
  description: "Capstone Project e-commerce platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-slate-50 text-slate-900 antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <Navbar />
          {/* Main content expands to push footer down */}
          <main className="flex-1 pb-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
