const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true 
  },
  totalPrice: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'completed', 'shipped', 'cancelled'], 
    default: 'pending' 
  },
  orderDate: { 
    type: Date, 
    default: Date.now 
  },
  paymentInfo: {
    method: { type: String }, // e.g., 'credit card', 'PayPal'
    status: { type: String }  // e.g., 'paid', 'pending'
  }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
