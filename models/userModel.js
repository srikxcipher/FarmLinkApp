const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['farmer', 'consumer', 'retailer'], required: true },
  date: { type: Date, default: Date.now },
});

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (this.isNew) return next();
  // !this.isModified('password')
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
  
    next();
  } catch (err) {
    next(err);
  }
});
// Compare password method
UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error('Error comparing passwords');
  }
};
module.exports = mongoose.model('User', UserSchema);