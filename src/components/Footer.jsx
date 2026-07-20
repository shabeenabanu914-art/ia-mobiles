import React from 'react'
import { Smartphone, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">IA Mobiles</h3>
            </div>
            <p className="text-sm">Your trusted platform to buy and sell mobile phones with best prices.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Sell Phone</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Buy Phone</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@iamobiles.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                1-800-IA-PHONE
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">&copy; 2024 IA Mobiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
