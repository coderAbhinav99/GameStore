import React from 'react';
import { Settings, ShoppingBag, Heart, CreditCard } from 'lucide-react';

function Account() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-4">
                <button className="w-full flex items-center space-x-3 text-white hover:text-violet-500 transition-colors">
                  <Settings className="h-5 w-5" />
                  <span>Account Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-white hover:text-violet-500 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Orders</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-white hover:text-violet-500 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-white hover:text-violet-500 transition-colors">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Methods</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300">Address</label>
                  <textarea
                    id="address"
                    rows={3}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-500 transition-colors duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-8 bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Orders</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Order #12345</p>
                      <p className="text-gray-400 text-sm">March 15, 2024</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">Delivered</span>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Order #12344</p>
                      <p className="text-gray-400 text-sm">March 10, 2024</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;