import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 rounded-full bg-gray-900/50 backdrop-blur-sm text-white hover:bg-violet-500 transition-colors duration-300">
            <Heart className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-violet-400 font-bold">${product.price}</span>
            <button className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-500 transition-colors duration-300">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;