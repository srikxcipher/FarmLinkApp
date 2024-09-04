// handles the endpoint request to register an User
const express = require('express');
const { registerUser } = require('../controller/userController');
const router = express.Router();

// Register a new user
router.post('/register', registerUser);

module.exports = router;
