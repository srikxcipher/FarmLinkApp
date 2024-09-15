
const ProductSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true, min: 0 }, // Ensure price is non-negative
  quantity: { type: Number, required: true, min: 0 }, // Ensure quantity is non-negative
  dateAdded: { type: Date, default: Date.now },
});

// Indexes
ProductSchema.index({ farmer: 1 });
ProductSchema.index({ name: 1 });

// Instance Method to Check Stock
ProductSchema.methods.isInStock = function () {
  return this.quantity > 0;
};

module.exports = mongoose.model('Product', ProductSchema);

