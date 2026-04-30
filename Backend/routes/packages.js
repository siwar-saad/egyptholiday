const express = require("express");
const router = express.Router();
const packages = require("../data/packages");

// GET all packages + search
router.get("/", (req, res) => {
  const search = req.query.search || "";

  const filteredPackages = packages.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  res.status(200).json(filteredPackages);
});

module.exports = router;