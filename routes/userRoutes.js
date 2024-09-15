const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { registerUser,loginUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/profile');
const User = require('../models/userModel');

const router = express.Router();
// Enable CORS for this specific router
router.use(cors());
// Test route to check if routing is working
router.get('/test', (req, res) => {
    res.send('Test route is working!');
  });