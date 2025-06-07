import { Star } from 'lucide-react';

export default function FeaturedProductCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-start h-full">
      <img
        src="/smartphone.png"
        alt="Smartphone"
        className="w-full md:w-60 lg:w-64 h-auto object-contain"
      />

      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">Smartphone</h3>
        <p className="text-xl md:text-2xl font-semibold text-black mb-2">$699</p>

        <div className="flex items-center gap-1 text-yellow-400 mb-3">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-blue-700 stroke-blue-700" />
          ))}
          <Star className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
        </div>

        <p className="text-base md:text-lg text-black mb-4">
          Lorem ipsum dolor amet, consectetur eiusmod.
        </p>

        <p className="text-base md:text-lg text-black">Category</p>
        <p className="text-black text-base md:text-lg font-medium mb-4">Electronics</p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm md:text-base lg:text-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
