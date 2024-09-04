const Transaction = require('./models/transactionModel');
const User = require('./models/userModel');
const Product = require('./models/productModel');

async function createTransaction(buyerId, productId, quantity) {
  try {
    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    const totalPrice = product.price * quantity;

    const transaction = new Transaction({
      buyer: buyerId,
      product: productId,
      quantity,
      totalPrice,
    });

    await transaction.save();
    console.log('Transaction created:', transaction);
  } catch (err) {
    console.error('Error creating transaction:', err.message);
  }
}
async function getTransactions() {
  try {
    const transactions = await Transaction.find()
      .populate('buyer')
      .populate('product')
      .exec();
    console.log('Transactions:', transactions);
  } catch (err) {
    console.error('Error fetching transactions:', err.message);
  }
}

