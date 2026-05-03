const express = require("express");
const router = express.Router();

// Store bookings in memory (use database in production)
let bookings = [];
let bookingId = 1;

// GET all bookings
router.get("/", (req, res) => {
  res.status(200).json({
    count: bookings.length,
    bookings: bookings
  });
});

// GET single booking by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === id);
  
  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }
  
  res.status(200).json(booking);
});

// POST create new booking
router.post("/", (req, res) => {
  const {
    searchParams,
    selectedHotel,
    selectedActivities,
    totalPrice
  } = req.body;
  
  // Validate required fields
  if (!searchParams || !selectedHotel || !totalPrice) {
    return res.status(400).json({ 
      error: "Missing required booking information" 
    });
  }
  
  const newBooking = {
    id: bookingId++,
    bookingReference: `EHT${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "pending",
    searchParams: {
      from: searchParams.from,
      to: searchParams.to,
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      nights: searchParams.nights,
      adults: searchParams.adults,
      children: searchParams.children
    },
    hotel: {
      id: selectedHotel.id,
      name: selectedHotel.name,
      category: selectedHotel.category
    },
    activities: selectedActivities?.map(a => ({
      id: a.id,
      name: a.name,
      price: a.price
    })) || [],
    totalPrice: totalPrice,
    deposit: totalPrice * 0.3, // 30% deposit
    balanceDue: totalPrice * 0.7
  };
  
  bookings.push(newBooking);
  
  res.status(201).json({
    message: "Booking created successfully",
    booking: newBooking
  });
});

// PUT update booking status
router.put("/:id/status", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  
  const booking = bookings.find(b => b.id === id);
  
  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }
  
  const validStatuses = ["pending", "confirmed", "cancelled", "completed"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }
  
  booking.status = status;
  booking.updatedAt = new Date().toISOString();
  
  res.status(200).json({
    message: "Booking status updated",
    booking: booking
  });
});

// DELETE cancel booking
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bookingIndex = bookings.findIndex(b => b.id === id);
  
  if (bookingIndex === -1) {
    return res.status(404).json({ error: "Booking not found" });
  }
  
  bookings.splice(bookingIndex, 1);
  
  res.status(200).json({ 
    message: "Booking cancelled successfully" 
  });
});

module.exports = router;