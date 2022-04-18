const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.getAll = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('author', [
      'role',
      'email',
      'googleId',
    ]);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getOneById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) res.status(404).json({ message: 'Not found' });
    else res.json({ data: post });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.createOne = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    await newPost.save();
    res.json({ message: 'ok', data: newPost });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateOne = async (req, res) => {
  try {
    await Post.findOneAndUpdate(
      { _id: { $eq: req.params.id } },
      { $set: { ...req.body } },
      { new: true },
      (error, doc) => {
        if (error) {
          res.status(404).json({ message: error });
        } else {
          res.status(200).json({ message: 'OK', data: { doc } });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ message: err, here: '' });
  }
};

exports.deletOne = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      await Post.deleteOne({ _id: { $eq: req.params.id } });
      res.json({ message: 'OK', data: { post } });
    } else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getByUser = async (req, res) => {
  try {
    const posts = await Post.find({
      author: req.params.userId,
    });
    if (posts) {
      res.json({ message: 'OK', data: posts });
    } else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
