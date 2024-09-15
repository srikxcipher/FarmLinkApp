const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// CORS configuration
const corsOptions = {
  origin: '*', // Replace with your allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Allow credentials (e.g., cookies) to be sent
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Init Middleware
app.use(express.json());


// Define Routes

app.use('/api/users', require('./routes/userRoutes'));

// app.use('/api/test', require('./routes/testRoutes')); // just a test route for debugging
app.use('/api/products', require('./routes/productRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
