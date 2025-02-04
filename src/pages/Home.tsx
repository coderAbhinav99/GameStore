import React from 'react';
import { MousePointer2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function Home() {
  const products = [
    {
      id: 1,
      name: "Quantum X Gaming Mouse",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=80",
      description: "Ultra-precise gaming mouse with 25K DPI sensor"
    },
    {
      id: 2,
      name: "Stealth Pro Wireless",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80",
      description: "Wireless gaming mouse with 100hr battery life"
    },
    {
      id: 3,
      name: "Precision Elite RGB",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?auto=format&fit=crop&w=1000&q=80",
      description: "RGB gaming mouse with customizable profiles"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-violet-900/50 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Premium Gaming Gear
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Elevate your gaming experience with our premium selection of high-performance peripherals
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#products" className="rounded-md bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-300">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section id="products" className="py-16 px-4 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home