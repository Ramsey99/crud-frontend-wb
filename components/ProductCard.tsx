type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-blue-600 font-bold">₹{price}</p>
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}
