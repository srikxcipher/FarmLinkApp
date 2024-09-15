const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { registerUser,loginUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/profile');
const User = require('../models/userModel');

const router = express.Router();