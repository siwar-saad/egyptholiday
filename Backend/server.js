const express = require("express");
const cors = require("cors");
require('dotenv').config();

const packageRoutes = require("./routes/packages");
const subscriberRoutes = require("./routes/subscribers");
const authRoutes = require("./routes/auth");
const initializeDatabase = require("./data/initDb");

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize database
initializeDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Static files for images
app.use("/images", express.static("public/images"));

// Routes
app.use("/api/auth", authRoutes);  // For /api/auth/signup, /api/auth/login, etc.
app.use("/api", subscriberRoutes);  // For /api/subscribe
app.use("/api/packages", packageRoutes);  // For /api/packages

// Search endpoint for Home page
app.get("/api/search", (req, res) => {
  const { from, to, checkIn, checkOut, adults, children } = req.query;
  
  if (!to) {
    return res.status(400).json({ error: "Destination is required" });
  }
  
  const destinations = require("./data/destinations");
  const searchTerm = to.toLowerCase().trim();
  
  // Find matching destination
  let destination = null;
  for (const [key, value] of Object.entries(destinations)) {
    if (value.name.toLowerCase().includes(searchTerm) || 
        key.includes(searchTerm) ||
        searchTerm.includes(key)) {
      destination = value;
      break;
    }
  }
  
  if (!destination) {
    return res.status(404).json({ 
      error: "Destination not found. Available: Sharm El Sheikh, Hurghada, Dahab, Marsa Alam, Ain Sokhna, Siwa, Luxor, Aswan, Cairo, Alexandria, Fayoum, Sahel" 
    });
  }
  
  // Calculate nights
  let nights = 1;
  if (checkIn && checkOut) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) || 1;
  }
  
  res.json({
    destination: destination,
    searchParams: {
      from: from || "Egypt",
      to: destination.name,
      checkIn: checkIn,
      checkOut: checkOut,
      nights: nights,
      adults: parseInt(adults) || 1,
      children: parseInt(children) || 0
    }
  });
});

// Get all destinations list for dropdown
app.get("/api/destinations-list", (req, res) => {
  const destinations = require("./data/destinations");
  const list = Object.entries(destinations).map(([key, value]) => ({
    id: value.id,
    name: value.name,
    region: value.region,
    image: value.image
  }));
  res.json(list);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`\n📋 Available endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/health`);
  console.log(`   POST http://localhost:${PORT}/api/auth/signup`);
  console.log(`   POST http://localhost:${PORT}/api/auth/login`);
  console.log(`   POST http://localhost:${PORT}/api/auth/forgot-password`);
  console.log(`   POST http://localhost:${PORT}/api/auth/reset-password`);
  console.log(`   POST http://localhost:${PORT}/api/subscribe`);
  console.log(`   GET  http://localhost:${PORT}/api/packages`);
  console.log(`   GET  http://localhost:${PORT}/api/search?to=sharm`);
  console.log(`\n✨ Ready to accept requests!\n`);
});

