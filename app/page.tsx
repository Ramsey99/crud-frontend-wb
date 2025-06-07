"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import { products as allProducts } from "@/lib/products";

const products = [
  { id: 1, title: "Running Shoes", price: 99, image: "/shoe.jpg" },
  { id: 2, title: "Wireless Headphones", price: 129, image: "/headphone.png" },
  { id: 3, title: "Backpack", price: 129, image: "/backpack.jpg" },
  { id: 4, title: "Smartwatch", price: 249, image: "/watch.jpg" },
  { id: 5, title: "Sunglasses", price: 149, image: "/sunglass.jpg" },
  { id: 6, title: "Digital Camera", price: 499, image: "/camera.jpg" },
  { id: 7, title: "T-shirt", price: 29, image: "/tshirt.png" },
  { id: 8, title: "Smartphone", price: 699, image: "/smartphone.png" },
];

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const priceParam = searchParams.get("price");

    if (categoryParam) setCategory(categoryParam);
    if (priceParam) setMaxPrice(Number(priceParam));
  }, [searchParams]);

  useEffect(() => {
    const query = new URLSearchParams();
    if (category !== "All") query.set("category", category);
    if (maxPrice !== 1000) query.set("price", String(maxPrice));
    router.replace(`/?${query.toString()}`);
  }, [category, maxPrice]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <main className="flex flex-col md:flex-row p-6 gap-6 bg-[#f7faff]">
        <Sidebar
          selectedCategory={category}
          onCategoryChange={setCategory}
          maxPrice={maxPrice}
          onPriceChange={setMaxPrice}
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            Product Listing
          </h2>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ))}

  <div className="sm:col-span-2 lg:col-span-1">
    <FeaturedProductCard />
  </div>
</div>

          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
