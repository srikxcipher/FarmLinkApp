//handles adding of product by farmers
const Product = require('../models/productModel');

const { body, validationResult } = require('express-validator');

// Input validation middleware
exports.addProduct = [
    // Validate and sanitize fields
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('description').optional().isString().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number').custom(value => {
        if (value < 0) {
            throw new Error('Price must be a non-negative number');
        }
        return true;
    }),
    body('quantity').isInt({ min: 0 }).withMessage('Quantity must be a non-negative integer'),

    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, price, quantity } = req.body;
        console.log(req.user);


        try {
            // Ensure user is authenticated
            if (!req.user) {
                return res.status(401).json({ msg: 'User not authenticated' });
            }


            // Create a new product
            const newProduct = new Product({
                farmer: req.user,
                name,
                description,
                price,
                quantity,
            });

            // Save the product to the database
            const product = await newProduct.save();

            // Respond with the created product
            res.status(201).json(product);
        } catch (err) {
            console.error('Error adding product:', err.message);
            res.status(500).send('Server error');
        }
    }
    //
    // Retrieve all products

];
exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find().populate('farmer', 'name');
      res.status(200).json(products);
    } catch (err) {
      console.error('Error retrieving products:', err.message);
      res.status(500).send('Server error');
    }
  };
  
  