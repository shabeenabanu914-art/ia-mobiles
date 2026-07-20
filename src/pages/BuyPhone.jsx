import React, { useState } from 'react'
import { Sliders, MapPin } from 'lucide-react'
import ProductCard from '../components/ProductCard'

export default function BuyPhone() {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedCondition, setSelectedCondition] = useState('')

  const phones = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      brand: 'Apple',
      price: '₹79,999',
      image: '📱',
      condition: 'Excellent'
    },
    {
      id: 2,
      name: 'Samsung S23 Ultra',
      brand: 'Samsung',
      price: '₹74,999',
      image: '📱',
      condition: 'Good'
    },
    {
      id: 3,
      name: 'OnePlus 11',
      brand: 'OnePlus',
      price: '₹49,999',
      image: '📱',
      condition: 'Excellent'
    },
    {
      id: 4,
      name: 'Google Pixel 7',
      brand: 'Google',
      price: '₹59,999',
      image: '📱',
      condition: 'Good'
    },
    {
      id: 5,
      name: 'Xiaomi 12 Pro',
      brand: 'Xiaomi',
      price: '₹39,999',
      image: '📱',
      condition: 'Fair'
    },
    {
      id: 6,
      name: 'iPhone 13',
      brand: 'Apple',
      price: '₹59,999',
      image: '📱',
      condition: 'Good'
    },
    {
      id: 7,
      name: 'Samsung A53',
      brand: 'Samsung',
      price: '₹34,999',
      image: '📱',
      condition: 'Excellent'
    },
    {
      id: 8,
      name: 'Vivo X70',
      brand: 'Vivo',
      price: '₹44,999',
      image: '📱',
      condition: 'Good'
    },
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Buy Used Mobile Phones</h1>
          <p className="text-gray-600">Browse our collection of certified refurbished phones</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sliders className="w-5 h-5" />
                Filters
              </h3>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="font-semibold text-sm mb-2 block">Brand</label>
                <div className="space-y-2">
                  {['All', 'Apple', 'Samsung', 'OnePlus', 'Google', 'Xiaomi', 'Vivo'].map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="brand"
                        value={brand}
                        checked={selectedBrand === brand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="font-semibold text-sm mb-2 block">Price Range</label>
                <div className="space-y-2">
                  {[
                    { label: 'All Prices', value: 'all' },
                    { label: 'Under ₹40,000', value: 'under40' },
                    { label: '₹40,000 - ₹60,000', value: '40-60' },
                    { label: '₹60,000 - ₹80,000', value: '60-80' },
                    { label: 'Above ₹80,000', value: 'above80' }
                  ].map(price => (
                    <label key={price.value} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio"
                        name="price"
                        value={price.value}
                        checked={selectedPrice === price.value}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div className="mb-6">
                <label className="font-semibold text-sm mb-2 block">Condition</label>
                <div className="space-y-2">
                  {['All', 'Excellent', 'Good', 'Fair'].map(condition => (
                    <label key={condition} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox"
                        value={condition}
                        checked={selectedCondition.includes(condition)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="pt-6 border-t">
                <label className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Delivery Location
                </label>
                <input 
                  type="text"
                  placeholder="Enter your city"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600 mt-2"
                />
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {phones.length} phones</p>
              <select className="border rounded-lg px-4 py-2 outline-none focus:border-blue-600">
                <option>Sort by: Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phones.map(phone => (
                <ProductCard key={phone.id} phone={phone} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
