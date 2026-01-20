# Quick Start Guide

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start the Backend Server

Open Terminal 1:
```bash
npm run server
```

The backend will start on `http://localhost:3001`

### Step 3: Start the Frontend Server

Open Terminal 2:
```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

### Step 4: Open Your Browser

Navigate to `http://localhost:3000`

## 🔐 Login Credentials

- **Email:** `admin@techgear.com`
- **Password:** `123456`

## 📝 Important Notes

1. **Both servers must be running** - The frontend needs the backend API to function
2. **Backend runs on port 3001** - Make sure this port is available
3. **Frontend runs on port 3000** - Default Next.js port
4. **Data is stored in** `server/data/products.json` - Created automatically on first run

## 🎯 Testing the Application

1. **Landing Page** - Visit `/` to see the homepage
2. **Browse Products** - Visit `/items` to see all products
3. **Login** - Visit `/login` and use the demo credentials
4. **Add Product** - After logging in, visit `/add-item` to create a new product
5. **View Details** - Click "View Details" on any product card

## 🐛 Troubleshooting

### Backend not starting?
- Check if port 3001 is already in use
- Make sure Node.js is installed (v18+)

### Frontend not connecting to backend?
- Verify backend is running on port 3001
- Check browser console for CORS errors
- Ensure `NEXT_PUBLIC_API_URL` is set correctly (defaults to `http://localhost:3001`)

### Products not loading?
- Make sure backend server is running
- Check browser network tab for API calls
- Verify `server/data/products.json` exists

## 📦 Production Build

### Build Frontend:
```bash
npm run build
npm run start
```

### Deploy Backend:
The Express server can be deployed to any Node.js hosting platform. Make sure to:
- Set `PORT` environment variable
- Update `NEXT_PUBLIC_API_URL` in frontend to point to deployed backend
