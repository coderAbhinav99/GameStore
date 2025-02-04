import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                />
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-violet-500" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-400">support@gearx.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-violet-500" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-violet-500" />
                <div>
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p className="text-gray-400">123 Gaming Street<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact