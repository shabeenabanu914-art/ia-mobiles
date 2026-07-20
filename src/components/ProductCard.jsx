import React from 'react'
import { Heart, ShoppingCart } from 'lucide-react'

export default function ProductCard({ phone }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group">
      {/* Image */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square flex items-center justify-center text-6xl overflow-hidden">
        {phone.image}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition shadow-md">
          <Heart className="w-5 h-5 text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs text-gray-500 font-semibold">{phone.brand}</p>
            <h3 className="font-bold text-gray-800">{phone.name}</h3>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {phone.condition}
          </span>
        </div>

        <p className="text-2xl font-bold text-blue-600 mb-4">{phone.price}</p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Buy Now
        </button>
      </div>
    </div>
  )
}
