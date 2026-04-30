const express = require("express");
const cors = require("cors");
const packageRoutes = require("./routes/packages");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Egypt Holiday API is running" });
});

// Routes
app.use("/api/packages", packageRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});