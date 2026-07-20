import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Shield, Zap, Award } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featuredPhones = [
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
  ]

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Best Prices',
      description: 'Get the most competitive prices for your mobile phones'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Transactions',
      description: '100% secure and verified transactions'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Process',
      description: 'Quick pickup and instant payment'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Phones',
      description: 'All phones are tested and certified'
    },
  ]

  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose IA Mobiles?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 text-center hover:shadow-lg rounded-lg transition">
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Phones</h2>
            <Link to="/buy" className="text-blue-600 hover:text-blue-700 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredPhones.map(phone => (
              <ProductCard key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Phone?</h2>
          <p className="text-xl mb-8 opacity-90">Get instant price quote and sell your mobile in minutes</p>
          <Link 
            to="/sell" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            Start Selling Now
          </Link>
        </div>
      </section>
    </div>
  )
}
