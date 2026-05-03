const express = require("express");
const router = express.Router();
const destinations = require("../data/destinations");

// GET /api/packages - Get all packages (for Packages page)
router.get("/", (req, res) => {
  const search = req.query.search || "";
  
  let packages = Object.entries(destinations).map(([key, value]) => ({
    id: value.id,
    title: value.name,
    image: value.image,
    description: value.description,
    region: value.region,
    hotelCount: value.hotels.length,
    activityCount: value.activities.length
  }));
  
  if (search) {
    packages = packages.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json({
    success: true,
    count: packages.length,
    packages: packages
  });
});

// GET /api/packages/:id - Get single package details
router.get("/:id", (req, res) => {
  const id = req.params.id;
  
  let foundDestination = null;
  for (const [key, value] of Object.entries(destinations)) {
    if (value.id === id || key === id) {
      foundDestination = value;
      break;
    }
  }
  
  if (!foundDestination) {
    return res.status(404).json({ success: false, error: "Package not found" });
  }
  
  res.json({
    success: true,
    package: foundDestination
  });
});

module.exports = router;