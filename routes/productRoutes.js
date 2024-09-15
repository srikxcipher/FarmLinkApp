const express = require('express');
const cors = require('cors');
const { addProduct,getProducts } = require('../controllers/productController');
const auth = require('../middleware/auth');
const router = express.Router();
router.use(cors());
// Add a new product
router.post('/add', auth, addProduct);
// Get all products
router.get('/retrieve', getProducts);

module.exports = router;

