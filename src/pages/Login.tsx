import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-violet-500 focus:ring-violet-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 text-violet-600 focus:ring-violet-500 bg-gray-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-violet-500 hover:text-violet-400">Forgot password?</a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-500 transition-colors duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-violet-500 hover:text-violet-400">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login