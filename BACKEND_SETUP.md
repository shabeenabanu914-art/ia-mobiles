# IA Mobiles Backend - Installation & Setup Guide

## 📋 Backend Architecture Overview

This guide covers setting up a complete backend for the IA Mobiles platform using Node.js, Express, and MongoDB.

---

## 🛠️ Tech Stack (Recommended)

- **Runtime**: Node.js (v16 or higher)
- **Framework**: Express.js
- **Database**: MongoDB (Cloud: MongoDB Atlas or Local)
- **Authentication**: JWT (JSON Web Tokens)
- **Email**: Nodemailer
- **File Upload**: Multer
- **Validation**: Joi
- **Environment**: Dotenv

---

## 📦 Step 1: Install Node.js

### Windows/Mac/Linux
Download and install from: https://nodejs.org/

**Verify installation:**
```bash
node --version
npm --version
```

Should show version numbers (e.g., v18.0.0, 9.0.0)

---

## 🚀 Step 2: Create Backend Project

### Create project folder
```bash
mkdir ia-mobiles-backend
cd ia-mobiles-backend
```

### Initialize npm project
```bash
npm init -y
```

This creates `package.json`

---

## 📥 Step 3: Install Required Packages

```bash
npm install express mongoose cors dotenv multer joi bcryptjs jsonwebtoken nodemailer axios
```

### What each package does:

| Package | Purpose |
|---------|---------|
| **express** | Web framework for creating API |
| **mongoose** | MongoDB database connection |
| **cors** | Allow requests from frontend |
| **dotenv** | Manage environment variables |
| **multer** | Handle file uploads (images) |
| **joi** | Validate form data |
| **bcryptjs** | Hash passwords securely |
| **jsonwebtoken** | Create user authentication tokens |
| **nodemailer** | Send emails to users |
| **axios** | Make HTTP requests |

### Install dev dependencies (optional but recommended)
```bash
npm install --save-dev nodemon
```

`nodemon` automatically restarts server when you save changes (better for development)

---

## ⚙️ Step 4: Create Project Structure

Create these folders and files:

```
ia-mobiles-backend/
├── config/
│   └── database.js          # MongoDB connection
├── models/
│   ├── User.js              # User schema
│   ├── Phone.js             # Phone listing schema
│   ├── Order.js             # Order schema
│   └── PriceEstimate.js     # Price quote schema
├── routes/
│   ├── auth.js              # Login, Register routes
│   ├── phones.js            # Sell, Buy, List phones
│   ├── orders.js            # Order management
│   └── priceEstimate.js     # Price calculation
├── controllers/
│   ├── authController.js    # Auth logic
│   ├── phoneController.js   # Phone logic
│   ├── orderController.js   # Order logic
│   └── priceController.js   # Price logic
├── middleware/
│   ├── auth.js              # JWT verification
│   └── upload.js            # File upload handling
├── utils/
│   ├── email.js             # Email sending
│   └── validation.js        # Data validation
├── .env                     # Environment variables (DO NOT COMMIT)
├── .gitignore               # Git ignore file
├── package.json             # Dependencies
└── server.js                # Main server file
```

### Create all folders:
```bash
mkdir config models routes controllers middleware utils
```

---

## 🔧 Step 5: Setup Environment Variables

Create `.env` file in root directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ia-mobiles
# OR for local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/ia-mobiles

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_12345
JWT_EXPIRE=7d

# Email (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_SERVICE=gmail

# File Upload
MAX_FILE_SIZE=5000000
UPLOAD_PATH=./uploads

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# API Base URL
API_URL=http://localhost:5000
```

---

## 📚 Step 6: Create Main Server File

Create `server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✓ MongoDB Connected'))
  .catch(err => console.log('✗ MongoDB Error:', err));

// Routes (we'll create these next)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/phones', require('./routes/phones'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/price-estimate', require('./routes/priceEstimate'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
```

---

## 📦 Step 7: Create Database Models

### `models/User.js`
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  profileImage: { type: String },
  role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

### `models/Phone.js`
```javascript
const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  condition: { type: String, enum: ['Excellent', 'Good', 'Fair', 'Poor'], required: true },
  storage: { type: String, required: true },
  color: { type: String },
  age: { type: Number }, // in months
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ type: String }],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['available', 'sold', 'listed'], default: 'available' },
  issues: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Phone', phoneSchema);
```

### `models/Order.js`
```javascript
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  phone: { type: mongoose.Schema.Types.ObjectId, ref: 'Phone', required: true },
  price: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  deliveryStatus: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  shippingAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
```

### `models/PriceEstimate.js`
```javascript
const mongoose = require('mongoose');

const priceEstimateSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  condition: { type: String, required: true },
  storage: { type: String },
  age: { type: Number },
  estimatedPrice: { type: Number, required: true },
  minPrice: { type: Number },
  maxPrice: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  validUntil: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PriceEstimate', priceEstimateSchema);
```

---

## 🔐 Step 8: Create Authentication Routes

Create `routes/auth.js`:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({ name, email, phone, password });
    await user.save();

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

---

## 📱 Step 9: Create Phone Routes

Create `routes/phones.js`:

```javascript
const express = require('express');
const Phone = require('../models/Phone');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all phones
router.get('/', async (req, res) => {
  try {
    const phones = await Phone.find({ status: 'available' }).populate('seller', 'name');
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create phone listing
router.post('/create', auth, async (req, res) => {
  try {
    const { brand, model, condition, storage, color, price, description, issues } = req.body;

    const phone = new Phone({
      brand,
      model,
      condition,
      storage,
      color,
      price,
      description,
      issues,
      seller: req.user.id
    });

    await phone.save();
    res.status(201).json({ message: 'Phone listed successfully', phone });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get phone by ID
router.get('/:id', async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id).populate('seller');
    if (!phone) return res.status(404).json({ message: 'Phone not found' });
    res.json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

---

## 💰 Step 10: Create Price Estimate Routes

Create `routes/priceEstimate.js`:

```javascript
const express = require('express');
const PriceEstimate = require('../models/PriceEstimate');
const router = express.Router();

// Price calculation logic
const calculatePrice = (brand, condition, age) => {
  let basePrice = 50000; // Default base price

  // Brand multiplier
  const brandMultiplier = {
    'iPhone': 1.2,
    'Samsung': 0.9,
    'OnePlus': 0.85,
    'Google': 0.95,
    'Xiaomi': 0.7
  };

  // Condition multiplier
  const conditionMultiplier = {
    'Excellent': 0.9,
    'Good': 0.7,
    'Fair': 0.5,
    'Poor': 0.3
  };

  let price = basePrice * (brandMultiplier[brand] || 0.8) * (conditionMultiplier[condition] || 0.5);

  // Age depreciation (5% per month)
  if (age) {
    price = price * Math.pow(0.95, age);
  }

  return Math.round(price);
};

// Get price estimate
router.post('/calculate', async (req, res) => {
  try {
    const { brand, model, condition, age } = req.body;

    const estimatedPrice = calculatePrice(brand, condition, age);
    const minPrice = estimatedPrice - 5000;
    const maxPrice = estimatedPrice + 5000;
    const validUntil = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const estimate = new PriceEstimate({
      brand,
      model,
      condition,
      age,
      estimatedPrice,
      minPrice,
      maxPrice,
      validUntil
    });

    await estimate.save();

    res.json({
      success: true,
      estimatedPrice,
      minPrice,
      maxPrice,
      validUntil
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

---

## 🛡️ Step 11: Create Authentication Middleware

Create `middleware/auth.js`:

```javascript
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
```

---

## 📄 Step 12: Update package.json Scripts

Edit `package.json` and add scripts section:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🚀 Step 13: Run the Backend

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

Expected output:
```
✓ MongoDB Connected
✓ Server running on http://localhost:5000
```

---

## 🗄️ Step 14: Setup MongoDB

### Option A: MongoDB Atlas (Cloud) - Recommended for beginners

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free account)
3. Create a cluster
4. Get connection string
5. Add to `.env` as `MONGODB_URI`

### Option B: Local MongoDB

1. Download from https://www.mongodb.com/try/download/community
2. Install on your computer
3. Start MongoDB service
4. Use connection string: `mongodb://localhost:27017/ia-mobiles`

---

## 🔗 Step 15: Connect Frontend to Backend

In your React frontend, update API calls:

### Example in `SellPhone.jsx`:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      'http://localhost:5000/api/phones/create',
      formData,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    console.log('Success:', response.data);
  } catch (error) {
    console.log('Error:', error);
  }
};
```

---

## 📝 API Endpoints Reference

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| POST | `/api/auth/register` | Create new account | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/phones` | List all phones | No |
| POST | `/api/phones/create` | Create phone listing | Yes |
| GET | `/api/phones/:id` | Get phone details | No |
| POST | `/api/price-estimate/calculate` | Get price quote | No |

---

## ✅ Installation Checklist

- [ ] Install Node.js v16+
- [ ] Create project folder
- [ ] Run `npm init -y`
- [ ] Install all packages with `npm install`
- [ ] Create `.env` file with variables
- [ ] Create folder structure
- [ ] Create `server.js`
- [ ] Create all models in `models/`
- [ ] Create all routes in `routes/`
- [ ] Create middleware in `middleware/`
- [ ] Setup MongoDB (Atlas or Local)
- [ ] Add scripts to `package.json`
- [ ] Run `npm run dev` to start

---

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module 'express'"
**Solution:** Run `npm install`

### Issue: "MongoDB connection failed"
**Solution:** Check MongoDB URI in `.env`, ensure MongoDB is running

### Issue: "JWT secret is undefined"
**Solution:** Add `JWT_SECRET` to `.env` file

### Issue: "Port 5000 already in use"
**Solution:** Change PORT in `.env` to 5001 or kill process using port 5000

---

## 📚 Learn More

- Express Docs: https://expressjs.com/
- MongoDB Docs: https://docs.mongodb.com/
- Mongoose Docs: https://mongoosejs.com/
- JWT: https://jwt.io/

---

## 🎓 Next Steps

1. **Add payment integration** (Stripe, Razorpay)
2. **Setup email notifications** (Nodemailer)
3. **Add image upload** (Multer, Cloud storage)
4. **Implement admin panel**
5. **Add order tracking**
6. **Setup automated price calculation**

**Happy coding! 🚀**
