'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

type Props = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
      <Link href={`/product/${id}`}>
        <div>
          <img src={image} alt={title} className="w-full h-40 object-contain mb-4" />
          <h3 className="font-semibold">{title}</h3>
          <p className="text-black font-medium mb-2">${price}</p>
        </div>
      </Link>

      <button
        onClick={() => addToCart({ title, price, image, quantity: 1 })}
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
