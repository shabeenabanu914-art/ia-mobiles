import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Smartphone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Smartphone className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">IA Mobiles</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-blue-600 transition">
              Sell Phone
            </Link>
            <Link to="/buy" className="text-gray-700 hover:text-blue-600 transition">
              Buy Phone
            </Link>
            <Link to="/price-estimate" className="text-gray-700 hover:text-blue-600 transition">
              Price Estimate
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link to="/sell" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Sell Phone
            </Link>
            <Link to="/buy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Buy Phone
            </Link>
            <Link to="/price-estimate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Price Estimate
            </Link>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-2">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
