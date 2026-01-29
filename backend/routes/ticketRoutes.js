const express = require('express');
const router = express.Router();
const { getTickets, createTicket } = require('../controllers/ticketController');
const { protect } = require('../middleware/authMiddleware'); // Import the Bouncer

// Both routes need 'protect' because you must be logged in to see/make tickets
router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;