const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');

router.post('/', registerUser);     // This creates a user (Register)
router.post('/login', loginUser);   // This logs a user in

module.exports = router;