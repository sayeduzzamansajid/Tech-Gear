const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage file path
const DATA_FILE = path.join(__dirname, 'data', 'products.json');

// Ensure data directory exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize products data if file doesn't exist
const initializeData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    const initialProducts = [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        description: "The latest flagship smartphone from Apple with A17 Pro chip, titanium design, and advanced camera system. Features a 6.7-inch Super Retina XDR display, 48MP main camera, and all-day battery life.",
        price: 1199,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
        specs: {
          display: "6.7-inch Super Retina XDR",
          processor: "A17 Pro",
          storage: "256GB",
          camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
          battery: "Up to 29 hours video playback"
        }
      },
      {
        id: 2,
        name: "MacBook Pro 16-inch",
        description: "Powerful laptop for professionals with M3 Pro chip, stunning Liquid Retina XDR display, and exceptional battery life. Perfect for video editing, coding, and creative work.",
        price: 2499,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
        specs: {
          display: "16.2-inch Liquid Retina XDR",
          processor: "M3 Pro",
          memory: "18GB Unified Memory",
          storage: "512GB SSD",
          battery: "Up to 22 hours"
        }
      },
      {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        description: "Industry-leading noise cancellation headphones with exceptional sound quality. Features 30-hour battery life, quick charge, and premium comfort for all-day wear.",
        price: 399,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        specs: {
          noiseCancellation: "Industry-leading",
          battery: "30 hours",
          quickCharge: "3 minutes = 3 hours",
          connectivity: "Bluetooth 5.2, NFC"
        }
      },
      {
        id: 4,
        name: "Samsung Galaxy Watch 6",
        description: "Advanced smartwatch with comprehensive health tracking, sleep monitoring, and fitness features. Features a bright AMOLED display and 40-hour battery life.",
        price: 299,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        specs: {
          display: "1.5-inch Super AMOLED",
          battery: "40 hours",
          health: "Heart rate, SpO2, Sleep tracking",
          compatibility: "Android & iOS"
        }
      },
      {
        id: 5,
        name: "iPad Pro 12.9-inch",
        description: "The most powerful iPad ever with M2 chip, stunning 12.9-inch Liquid Retina XDR display, and Apple Pencil support. Perfect for artists, designers, and professionals.",
        price: 1099,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        specs: {
          display: "12.9-inch Liquid Retina XDR",
          processor: "M2",
          storage: "128GB",
          camera: "12MP Wide + 10MP Ultra Wide",
          pencil: "Apple Pencil compatible"
        }
      },
      {
        id: 6,
        name: "DJI Mini 4 Pro Drone",
        description: "Compact yet powerful drone with 4K video recording, obstacle sensing, and intelligent flight modes. Perfect for aerial photography and videography.",
        price: 899,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
        specs: {
          camera: "4K/60fps video",
          flightTime: "34 minutes",
          range: "20km",
          weight: "Under 250g"
        }
      },
      {
        id: 7,
        name: "Logitech MX Master 3S",
        description: "Premium wireless mouse designed for productivity. Features MagSpeed scrolling, multi-device connectivity, and precision tracking on any surface.",
        price: 99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
        specs: {
          dpi: "8000 DPI",
          battery: "70 days",
          connectivity: "Bluetooth & USB receiver",
          devices: "Up to 3 devices"
        }
      },
      {
        id: 8,
        name: "Nintendo Switch OLED",
        description: "Enhanced Nintendo Switch with vibrant 7-inch OLED screen, improved audio, and 64GB internal storage. Perfect for gaming on the go or at home.",
        price: 349,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500",
        specs: {
          display: "7-inch OLED",
          storage: "64GB",
          battery: "4.5-9 hours",
          modes: "TV, Tabletop, Handheld"
        }
      }
    ];
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialProducts, null, 2));
  }
};

// Initialize data on server start
initializeData();

// Helper function to read products
const readProducts = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write products
const writeProducts = (products) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
};

// GET /items - Fetch all products
app.get('/items', (req, res) => {
  try {
    const products = readProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /items/:id - Fetch single product
app.get('/items/:id', (req, res) => {
  try {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// POST /items - Add new product
app.post('/items', (req, res) => {
  try {
    const { name, description, price, image, specs } = req.body;
    
    // Validation
    if (!name || !description || !price || !image) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const products = readProducts();
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name,
      description,
      price: parseFloat(price),
      image,
      specs: specs || {}
    };
    
    products.push(newProduct);
    writeProducts(products);
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
