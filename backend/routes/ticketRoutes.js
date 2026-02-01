const express = require('express');
const router = express.Router();
const { getTickets, createTicket,getTicket} = require('../controllers/ticketController');
const { protect } = require('../middleware/authMiddleware'); // Import the Bouncer

// Both routes need 'protect' because you must be logged in to see/make tickets
router.route('/').get(protect, getTickets).post(protect, createTicket);

// ADD THIS NEW LINE for Single Ticket ID

// ▼▼▼▼ THIS IS THE MISSING LINE THAT CAUSES 404 ▼▼▼▼
router.route('/:id').get(protect, getTicket)
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲


module.exports = router;