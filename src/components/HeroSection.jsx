import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Sell Your Mobile Phone</h1>
          <p className="text-xl opacity-90 mb-8">Get instant price quote and sell your old phone for the best price</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            <div className="flex-1 flex items-center bg-white rounded-lg px-4 py-3">
              <Search className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="Search mobile brand or model..." 
                className="flex-1 outline-none text-gray-700"
              />
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Search
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            to="/sell"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Sell Phone
          </Link>
          <Link 
            to="/price-estimate"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition"
          >
            Get Price Estimate
          </Link>
          <Link 
            to="/buy"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
          >
            Browse Phones
          </Link>
        </div>
      </div>
    </div>
  )
}
