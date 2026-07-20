import React, { useState } from 'react'
import { Upload, Check } from 'lucide-react'

export default function SellPhone() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    condition: '',
    storage: '',
    color: '',
    age: '',
    issues: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Your phone details have been submitted. We will contact you soon.')
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Sell Your Mobile Phone</h1>
          <p className="text-gray-600">Complete these simple steps to get your instant price quote</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                s <= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {s < step ? <Check className="w-6 h-6" /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Phone Details */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Phone Details</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Mobile Brand *</label>
                  <select 
                    name="brand" 
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                  >
                    <option value="">Select Brand</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Google">Google</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Model Name *</label>
                  <input 
                    type="text"
                    name="model"
                    placeholder="e.g., iPhone 14 Pro"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Condition *</label>
                  <select 
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                  >
                    <option value="">Select Condition</option>
                    <option value="Excellent">Excellent (Like New)</option>
                    <option value="Good">Good (Minor Scratches)</option>
                    <option value="Fair">Fair (Visible Damage)</option>
                    <option value="Poor">Poor (Heavy Damage)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Storage *</label>
                  <select 
                    name="storage"
                    value={formData.storage}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                  >
                    <option value="">Select Storage</option>
                    <option value="64GB">64 GB</option>
                    <option value="128GB">128 GB</option>
                    <option value="256GB">256 GB</option>
                    <option value="512GB">512 GB</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Color</label>
                  <input 
                    type="text"
                    name="color"
                    placeholder="e.g., Black"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Age (in months)</label>
                  <input 
                    type="number"
                    name="age"
                    placeholder="e.g., 12"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Any Issues or Damage?</label>
                <textarea 
                  name="issues"
                  placeholder="Describe any issues, screen condition, battery health, etc."
                  value={formData.issues}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600 resize-none"
                  rows="4"
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 2: Upload Images */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upload Phone Images</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {['Front View', 'Back View', 'Side View', 'Screen Display'].map((view, idx) => (
                  <div key={idx} className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-600 transition cursor-pointer">
                    <Upload className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="font-semibold text-gray-700 mb-1">{view}</p>
                    <p className="text-xs text-gray-500 mb-4">Click to upload</p>
                    <input type="file" className="hidden" />
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-6">
                ℹ️ Upload clear images for better valuation. Minimum 2 images required.
              </p>
            </div>
          )}

          {/* Step 3: Personal Details */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Contact Details</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input 
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <input 
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Address</label>
                <textarea 
                  name="address"
                  placeholder="City, State, Country"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-600 resize-none"
                  rows="3"
                ></textarea>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700">
                  ℹ️ <strong>Your estimated price: ₹45,000 - ₹55,000</strong><br/>
                  We'll contact you shortly with the final quote.
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button 
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
              >
                Previous
              </button>
            )}
            
            {step < 3 ? (
              <button 
                type="button"
                onClick={handleNext}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition"
              >
                Next
              </button>
            ) : (
              <button 
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition"
              >
                Submit & Get Quote
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
