type Product = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Product) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mx-auto mb-4"
      />
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-black font-medium text-xl mb-2">${price}</p>
      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
        Add to Cart
      </button>
    </div>
  );
}
