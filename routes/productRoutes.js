// this route handles post requests by the user to add aproduct it validates an user from the token assigned to it using auth of middleware
const express = require('express');
const { addProduct } = require('../controllers/productController');
const auth = require('../middleware/auth');
const router = express.Router();

// Add a new product
router.post('/add', auth, addProduct);

module.exports = router;
