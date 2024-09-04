//handles adding of product by farmers
const Product = require('../models/productModel');

exports.addProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const newProduct = new Product({
      farmer: req.user.id,
      name,
      description,
      price,
      quantity,
    });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
