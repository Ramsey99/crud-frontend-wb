"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white p-4 rounded shadow">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-lg font-semibold text-blue-700 mb-2">
          ${product.price}
        </p>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-6">
          Category: {product.category}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <label className="font-medium">Quantity:</label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 border px-2 py-1 rounded"
          />
        </div>

        <button
          onClick={() => addToCart({ ...product, quantity })}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>

        <div className="mt-8">
          <h3 className="text-md font-semibold mb-2">Reviews</h3>
          <p className="text-sm text-gray-500 italic">No reviews yet.</p>
        </div>
      </div>
    </div>
  );
}
