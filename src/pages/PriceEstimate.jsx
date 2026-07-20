import React, { useState } from 'react'
import { TrendingUp } from 'lucide-react'

export default function PriceEstimate() {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [condition, setCondition] = useState('')
  const [estimatedPrice, setEstimatedPrice] = useState(null)

  const handleGetPrice = (e) => {
    e.preventDefault()
    if (brand && model && condition) {
      // Mock price calculation
      const basePrice = 50000
      const conditionMultiplier = {
        'Excellent': 0.9,
        'Good': 0.7,
        'Fair': 0.5,
        'Poor': 0.3
      }
      
      const price = Math.round(basePrice * conditionMultiplier[condition])
      setEstimatedPrice({
        min: price - 5000,
        max: price + 5000,
        average: price
      })
    }
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Get Your Phone's Instant Price</h1>
          <p className="text-gray-600">Find out what your mobile phone is worth in just a few clicks</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleGetPrice}>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Select Mobile Brand *</label>
                <select 
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600 text-gray-700"
                >
                  <option value="">Choose Brand</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Samsung">Samsung</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Google">Google Pixel</option>
                  <option value="Xiaomi">Xiaomi</option>
                  <option value="Vivo">Vivo</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Realme">Realme</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Mobile Model *</label>
                <input 
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g., iPhone 14 Pro Max"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Phone Condition *</label>
                <select 
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600 text-gray-700"
                >
                  <option value="">Select Condition</option>
                  <option value="Excellent">Excellent (Like New, No Damage)</option>
                  <option value="Good">Good (Minor Scratches)</option>
                  <option value="Fair">Fair (Visible Damage)</option>
                  <option value="Poor">Poor (Heavy Damage)</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Storage</label>
                  <select className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600 text-gray-700">
                    <option value="">Select Storage</option>
                    <option value="64GB">64 GB</option>
                    <option value="128GB">128 GB</option>
                    <option value="256GB">256 GB</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Age (Months)</label>
                  <input 
                    type="number"
                    placeholder="e.g., 12"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Get Price Estimate
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>✓ Instant Pricing:</strong> Get your phone's current market value<br/>
                <strong>✓ No Hidden Charges:</strong> Transparent pricing<br/>
                <strong>✓ Lock Your Price:</strong> Valid for 7 days
              </p>
            </div>
          </div>

          {/* Result */}
          <div>
            {estimatedPrice ? (
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Your Phone's Value</h2>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
                  <p className="text-sm opacity-90 mb-2">Estimated Price Range</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">₹{estimatedPrice.average.toLocaleString()}</span>
                  </div>
                  <p className="text-sm opacity-80 mt-2">
                    Range: ₹{estimatedPrice.min.toLocaleString()} - ₹{estimatedPrice.max.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span className="text-sm">Price valid for 7 days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span className="text-sm">Free pickup from your location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span className="text-sm">Instant payment after evaluation</span>
                  </div>
                </div>

                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Proceed to Sell
                </button>

                <p className="text-xs opacity-75 mt-4 text-center">
                  Final price may vary based on device condition
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No Price Calculated Yet</h3>
                <p className="text-gray-600">Fill in the form on the left to get your phone's instant market value</p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-blue-600 mb-2">How is the price calculated?</h4>
              <p className="text-gray-600 text-sm">We consider brand, model, age, condition, storage, and current market demand to provide accurate pricing.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-2">How long is the price valid?</h4>
              <p className="text-gray-600 text-sm">Your quoted price is valid for 7 days. After that, you'll need to get a new quote.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-2">What happens if the final price differs?</h4>
              <p className="text-gray-600 text-sm">Our trained experts inspect your phone. If they find additional damage, we'll negotiate the final price with you.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-2">Is there any hidden charges?</h4>
              <p className="text-gray-600 text-sm">No! We guarantee transparent pricing. No hidden charges or deductions. What you see is what you get.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
