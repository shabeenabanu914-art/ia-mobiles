# IA Mobiles - Frontend

A professional mobile phone resale platform built with React, Vite, and Tailwind CSS 3.

## 🚀 Features

- **Home Page**: Hero section, featured products, and why choose us
- **Sell Phone**: Multi-step form to sell your mobile phone
- **Buy Phone**: Browse and filter available phones
- **Price Estimate**: Get instant price for your phone
- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Clean and professional interface with Tailwind CSS

## 📋 Pages

1. **Home** - Landing page with featured products and features
2. **Sell Phone** - 3-step process to submit phone details, upload images, and provide contact info
3. **Buy Phone** - Browse phones with advanced filtering (brand, price, condition)
4. **Price Estimate** - Get instant valuation for your phone

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool (fast development and production builds)
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## 🎨 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer component
│   ├── HeroSection.jsx     # Hero banner
│   └── ProductCard.jsx     # Product display card
├── pages/
│   ├── Home.jsx            # Home page
│   ├── SellPhone.jsx       # Sell phone form
│   ├── BuyPhone.jsx        # Browse phones
│   └── PriceEstimate.jsx   # Price calculator
├── App.jsx                 # Main app with routing
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎯 Key Components

### Navbar
- Responsive navigation with mobile menu
- Logo and navigation links
- Sign-in button

### Home Page
- Hero section with search and CTA buttons
- Why choose us features
- Featured products showcase

### Sell Phone Page
- 3-step multi-step form
- Step 1: Phone details
- Step 2: Upload images
- Step 3: Contact information
- Progress indicator with steps

### Buy Phone Page
- Product grid with filtering
- Sidebar filters (brand, price, condition)
- Sorting options
- Product cards with buy button

### Price Estimate
- Form to input phone details
- Instant price calculation
- Price range display
- FAQ section

## 🎨 Customization

### Colors
Modify Tailwind colors in `tailwind.config.js`:
```js
colors: {
  primary: "#1e40af",
  secondary: "#f59e0b",
}
```

### Fonts
Change fonts in `src/index.css` or `tailwind.config.js`

### Backend Integration
Replace mock functions with API calls to your backend:
```js
// Example API call
const response = await axios.post('/api/phones/estimate', phoneData)
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔄 Future Enhancements

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Review and ratings
- [ ] Admin dashboard
- [ ] Real-time notifications
- [ ] Chat support

## 📞 Support

For any questions or issues, please contact: support@iamobiles.com

## 📄 License

This project is licensed under the MIT License.
