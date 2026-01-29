const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

const app = express();

// Middleware to accept JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



