"use client";

import { useCart } from "@/context/CartContext";
import { Trash } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-600">
        <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
        <p>Add some products to get started.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-blue-700 font-medium">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.title, Number(e.target.value))
                }
                className="w-16 border px-2 py-1 rounded"
              />
              <button onClick={() => removeFromCart(item.title)}>
                <Trash className="text-red-500 hover:text-red-700 w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right text-lg font-semibold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
