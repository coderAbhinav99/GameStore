import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-violet-500 text-2xl font-bold">GearX</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login" className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </Link>
            <button className="text-gray-300 hover:text-white relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar