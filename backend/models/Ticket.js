const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // Connects the ticket to a specific User
    required: true,
    ref: 'User',
  },
  product: {
    type: String,
    required: [true, 'Please select a product'],
    enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'], // Restricts input to these options
  },
  description: {
    type: String,
    required: [true, 'Please enter a description of the issue'],
  },
  status: {
    type: String,
    enum: ['new', 'open', 'closed'],
    default: 'new',
  },
}, {
  timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
});

module.exports = mongoose.model('Ticket', ticketSchema);