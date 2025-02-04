import React from 'react';
import { Award, Shield, Truck } from 'lucide-react';

function About() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About GearX</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're passionate about providing gamers with the highest quality gaming peripherals.
            Our mission is to enhance your gaming experience with cutting-edge technology and superior design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <Award className="w-12 h-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-400">Only the finest materials and most advanced technology make it into our products.</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <Shield className="w-12 h-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">2-Year Warranty</h3>
            <p className="text-gray-400">We stand behind our products with an industry-leading warranty.</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <Truck className="w-12 h-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Fast Shipping</h3>
            <p className="text-gray-400">Free express shipping on all orders over $100.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 mb-4">
            Founded in 2020, GearX was born from a simple idea: gaming peripherals should be both beautiful and functional.
            We started with a single gaming mouse design and have since expanded to offer a full range of premium gaming peripherals.
          </p>
          <p className="text-gray-400">
            Today, we're proud to serve gamers worldwide with products that combine cutting-edge technology, ergonomic design,
            and stunning aesthetics. Our team of engineers and designers work tirelessly to push the boundaries of what's possible
            in gaming gear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About