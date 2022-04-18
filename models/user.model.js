const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  role: { type: String, required: true },
  googleId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  location: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post', default: [] }],
});

module.exports = mongoose.model('User', userSchema);
