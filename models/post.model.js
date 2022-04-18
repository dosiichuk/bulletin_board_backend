const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number },
  publishedDate: { type: String, required: true, default: Date.now },
  updatedDate: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  photo: { type: String },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
