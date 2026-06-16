"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="py-10 text-center">Product not found.</div>;
  }

   return (
  <div className="bg-gray-50 min-h-screen">
    <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10 items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[450px] object-cover"
        />
      </div>

      <div>
        <p className="text-sm uppercase text-gray-500">{product.category}</p>

        <h1 className="text-4xl font-bold mt-2">{product.title}</h1>

        <p className="text-yellow-600 mt-3">★ {product.rating}</p>

        <p className="mt-2">
  {product.inStock ? (
    <span className="text-green-600 font-medium">
      In Stock
    </span>
  ) : (
    <span className="text-red-600 font-medium">
      Out of Stock
    </span>
  )}
</p>

<button
  disabled={!product.inStock}
  onClick={() => addToCart(product)}
  className={`mt-6 px-6 py-3 rounded-xl text-white transition ${
    product.inStock
      ? "bg-black hover:bg-gray-800"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  {product.inStock ? "Add to Cart" : "Out of Stock"}
</button>

        <p className="text-gray-600 mt-5 leading-7">{product.description}</p>

        <p className="text-3xl font-bold mt-6">${product.price}</p>

        <button
          disabled={!product.inStock}
          onClick={() => addToCart(product)}
          className={`mt-6 px-6 py-3 rounded-xl text-white transition ${
            product.inStock
              ? "bg-black hover:bg-gray-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}