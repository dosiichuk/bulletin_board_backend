const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A title for the post is required.'],
    trim: true,
    minLength: [5, 'The title length cannot be shorter than 5 characters'],
    maxLength: [35, 'The title length cannot be longer than 35 characters'],
  },
  summary: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, 'The summary length cannot be shorter than 5 characters'],
    maxLength: [150, 'The title length cannot be longer than 150 characters'],
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, 'The content length cannot be shorter than 5 characters'],
    maxLength: [
      1150,
      'The content length cannot be longer than 1150 characters',
    ],
  },
  price: {
    type: Number,
    validate: {
      message: 'Price cannot be negative',
      validator: function (value) {
        return value > 0;
      },
    },
  },
  publishedDate: { type: String, required: true, default: Date.now },
  updatedDate: { type: String, default: Date.now },
  location: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  photo: { type: String },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['published', 'draft', 'deleted'],
      message: 'Status should be either "published" or "draft" or "deleted"',
    },
  },
});

module.exports = mongoose.model('Post', postSchema);
