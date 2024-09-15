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
// Register a new user
router.post('/register', registerUser);
//adding login route 
router.post('/login', loginUser);
//adding a route to display user information on login dashboard
router.get('/profileinfo',authenticateToken, async (req, res) => {
    try {
      // Assuming you use JWT and have a way to extract user ID from the token
      const userId = req.user.id; // This requires middleware to extract user ID from the token
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      res.json({
        name: user.name,
        email: user.email,
        //phone: user.phone, // Make sure you have a phone field in your schema
        //address: user.address // Make sure you have an address field in your schema
      });
    } catch (err) {
      console.error('Server error:', err.message);
      res.status(500).send('Server error');
    }
  });