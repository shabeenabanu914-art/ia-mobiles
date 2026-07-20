import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SellPhone from './pages/SellPhone'
import BuyPhone from './pages/BuyPhone'
import PriceEstimate from './pages/PriceEstimate'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sell" element={<SellPhone />} />
            <Route path="/buy" element={<BuyPhone />} />
            <Route path="/price-estimate" element={<PriceEstimate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
