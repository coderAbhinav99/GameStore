import React from 'react';
import ProductCard from '../components/ProductCard';

function Products() {
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
    },
    {
      id: 4,
      name: "Ergonomic Pro",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=1000&q=80",
      description: "Ergonomic design for maximum comfort"
    },
    {
      id: 5,
      name: "Lightspeed Gaming Mouse",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80",
      description: "Ultra-fast wireless gaming mouse"
    },
    {
      id: 6,
      name: "Pro Gaming Mouse",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1000&q=80",
      description: "Professional grade gaming mouse"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products