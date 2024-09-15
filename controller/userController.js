const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
// Input validation and sanitization middleware
exports.registerUser = [

    // Validate and sanitize fields
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').optional().isIn(['farmer', 'consumer', 'retailer']).withMessage('Role must be either "farmer", "consumer", or "retailer"'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, role } = req.body;

        try {
            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Create new user instance
            user = new User({ name, email, password, role });

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user to the database
            await user.save();

            // Create and sign JWT token
            const payload = { user: { id: user.id, role: user.role } };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
                if (err) {
                    console.error('JWT signing error:', err.message);
                    return res.status(500).send('Server error');
                }
                res.status(201).json({ token });
            });
        } catch (err) {
            console.error('Server error:', err.message);
            res.status(500).send('Server error');
        }
    }
];
//login user validation
exports.loginUser = [
    // Validate and sanitize fields
    body('email').isEmail().withMessage('Email is invalid').normalizeEmail(),
    body('user_password').notEmpty().withMessage('Password is required'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, user_password } = req.body;
        console.log("user password", req.body);

        try {
            // Find the user by email
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }
            console.log("current debugging", user);
            console.log("current debugging password:", user_password);
            console.log("current debugging", user.password);
            // Check the password
            const isMatch = await bcrypt.compare(user_password, user.password);
            console.log("current debugging", isMatch);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Create and sign JWT token
            const payload = { user: { id: user.id, role: user.role } };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
                if (err) {
                    console.error('JWT signing error:', err.message);
                    return res.status(500).send('Server error');
                }
                res.status(200).json({ token });
            });
        } catch (err) {
            console.error('Server error:', err.message);
            res.status(500).send('Server error');
        }
    }
];
