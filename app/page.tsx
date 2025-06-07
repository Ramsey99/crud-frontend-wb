import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import FeaturedProductCard from "@/components/FeaturedProductCard";

const products = [
  { title: "Running Shoes", price: 99, image: "/shoe.jpg" },
  { title: "Wireless Headphones", price: 129, image: "/headphone.png" },
  { title: "Backpack", price: 129, image: "/backpack.jpg" },
  { title: "Smartwatch", price: 249, image: "/watch.jpg" },
  { title: "Sunglasses", price: 149, image: "/sunglass.jpg" },
  { title: "Digital Camera", price: 499, image: "/camera.jpg" },
  { title: "T-shirt", price: 29, image: "/tshirt.png" },
];

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col md:flex-row p-6 gap-6 bg-[#f7faff]">
        <Sidebar />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            Product Listing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
            <div className="sm:col-span-2 lg:col-span-2">
              <FeaturedProductCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
