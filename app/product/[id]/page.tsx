'use client';
import { useParams } from 'next/navigation';
import { products } from '@/lib/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 font-semibold my-2">₹{product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

          <div className="flex items-center gap-4 mb-4">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue={1}
              className="w-16 border px-2 py-1 rounded"
            />
          </div>

          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
