const Ticket = require('../models/Ticket');
const User = require('../models/User');

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = async (req, res) => {
  // req.user.id comes from the 'protect' middleware we wrote earlier
  const tickets = await Ticket.find({ user: req.user.id });
  res.status(200).json(tickets);
};

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error('Please add a product and description');
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  });

  res.status(201).json(ticket);
};

module.exports = { getTickets, createTicket };