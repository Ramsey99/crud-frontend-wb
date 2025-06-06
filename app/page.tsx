'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const products = [
  { title: 'Wireless Headphones', price: 499, image: '/img1.jpg' },
  { title: 'Smart Watch', price: 999, image: '/img2.jpg' },
  { title: 'Book: React Basics', price: 299, image: '/img3.jpg' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col sm:flex-row p-4 gap-4">
        <Sidebar />
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
