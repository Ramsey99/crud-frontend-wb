import { Star } from 'lucide-react';

export default function FeaturedProductCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex gap-6 items-start h-full">
      <img
        src="/smartphone.png"
        alt="Smartphone"
        className="w-62 h-72 object-contain"
      />

      <div className="flex-1">
        <h3 className="text-4xl font-semibold mb-1">Smartphone</h3>
        <p className="text-2xl font-semibold text-black mb-1">$699</p>

        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-blue-700 stroke-blue-700" />
          ))}
          <Star className="w-6 h-6 text-blue-300" />
        </div>

        <p className="text-lg text-black mb-6">
          Lorem ipsum dolor amet, consectetur eiusmod.
        </p>
        <p className="text-lg text-black">Category </p>
        <p className="text-black text-lg font-medium">Electronics</p>

        <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 text-lg mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
