# Tech-Gear

A modern, production-ready gadget shop web application built with Next.js 15 (App Router) and Express.js. This project demonstrates a full-stack application with authentication, product management, and a beautiful user interface.

## 🚀 Features

### Public Pages
- **Landing Page** (`/`) - Beautiful homepage with 7 meaningful sections:
  - Hero Section
  - Featured Gadgets
  - Categories
  - Why Choose Tech-Gear
  - Best Sellers
  - Customer Reviews
  - Newsletter / CTA

- **Product Listing** (`/items`) - Browse all available products with card-based layout
- **Product Details** (`/items/[id]`) - View detailed information about individual products

### Authentication
- **Login Page** (`/login`) - Mock authentication system
- **Protected Routes** - Middleware-based route protection
- **Cookie-based Auth** - Secure authentication state management

### Protected Features
- **Add Product** (`/add-item`) - Create new products (requires authentication)
- **Toast Notifications** - Success feedback on product creation

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **JavaScript** - Modern ES6+ JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Server Components** - Optimized rendering

### Backend
- **Express.js** - RESTful API server
- **JSON File Storage** - Simple data persistence
- **CORS** - Cross-origin resource sharing

### Authentication
- **Mock Authentication** - Hardcoded credentials for demo
- **Next.js Cookies** - Server-side cookie management
- **Middleware** - Route protection

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Tech-Gear
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend server

In one terminal, start the Express.js server:

```bash
npm run server
```

The backend will run on `http://localhost:3001`

### 4. Start the Next.js development server

In another terminal, start the frontend:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

### 5. Open your browser

Navigate to `http://localhost:3000` to see the application.

## 🔐 Authentication

### Demo Credentials

- **Email:** `admin@techgear.com`
- **Password:** `123456`

These credentials are hardcoded for demonstration purposes. After successful login, you'll be redirected to the products page and can access protected routes like `/add-item`.

## 📁 Project Structure

```
Tech-Gear/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── items/            # Product pages
│   │   └── [id]/        # Dynamic product detail page
│   ├── login/            # Login page
│   ├── add-item/         # Protected add product page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/            # Reusable React components
│   ├── sections/         # Landing page sections
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── ProductCard.tsx   # Product card component
├── lib/                  # Utility functions
│   ├── api.ts           # API client functions
│   ├── auth.ts          # Server-side auth utilities
│   └── auth-client.ts   # Client-side auth utilities
├── server/               # Express.js backend
│   ├── index.js         # Main server file
│   └── data/            # JSON data storage (auto-generated)
├── middleware.ts         # Next.js middleware for route protection
└── package.json         # Dependencies and scripts
```

## 🛣️ Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with 7 sections |
| `/login` | Public | Login page with mock authentication |
| `/items` | Public | Product listing page |
| `/items/[id]` | Public | Individual product details |
| `/add-item` | Protected | Add new product (requires login) |

## 🔌 API Endpoints

The Express.js server provides the following REST API endpoints:

### GET `/items`
Fetch all products

**Response:**
```json
[
  {
    "id": 1,
    "name": "iPhone 15 Pro Max",
    "description": "...",
    "price": 1199,
    "image": "https://...",
    "specs": {...}
  }
]
```

### GET `/items/:id`
Fetch a single product by ID

**Response:**
```json
{
  "id": 1,
  "name": "iPhone 15 Pro Max",
  "description": "...",
  "price": 1199,
  "image": "https://...",
  "specs": {...}
}
```

### POST `/items`
Create a new product (no authentication required on backend for demo)

**Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 999.99,
  "image": "https://example.com/image.jpg",
  "specs": {
    "display": "6.7 inch",
    "processor": "A17 Pro"
  }
}
```

## 🎨 Key Features Implementation

### Route Protection
- Middleware-based protection for `/add-item`
- Automatic redirect to `/login` for unauthenticated users
- Cookie-based session management

### Server Components
- Product listing uses server components for optimal performance
- Data fetching happens on the server

### Error Handling
- 404 page for non-existent products
- Error states for API failures
- Loading states for better UX

### Responsive Design
- Mobile-first approach
- Tailwind CSS for responsive layouts
- Works seamlessly on all device sizes

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL` to your backend URL
4. Deploy!

### Backend

The Express.js server can be deployed to:
- **Heroku**
- **Railway**
- **Render**
- **DigitalOcean**
- Any Node.js hosting platform

**Note:** Make sure to update `NEXT_PUBLIC_API_URL` in your frontend environment variables to point to your deployed backend URL.

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

For production, update this to your deployed backend URL.

## 🧪 Development

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run server` - Start Express.js backend server
- `npm run build` - Build Next.js for production
- `npm run start` - Start Next.js production server
- `npm run lint` - Run ESLint

### Running Both Servers

You need to run both servers simultaneously:

**Terminal 1:**
```bash
npm run server
```

**Terminal 2:**
```bash
npm run dev
```

## 🎯 Future Enhancements

- [ ] NextAuth.js integration for real authentication
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Shopping cart functionality
- [ ] User profiles and order history
- [ ] Payment integration
- [ ] Product search and filtering
- [ ] Admin dashboard
- [ ] Image upload functionality

## 📄 License

This project is created for assessment/demo purposes.

## 👤 Author

Built as a production-ready demo project for assessment.

## 🔗 Links

- **Live Site:** [Add your Vercel deployment URL]
- **GitHub Repository:** [Add your GitHub repo URL]

---

**Note:** This is a demo project. For production use, implement proper authentication, database, and security measures.
