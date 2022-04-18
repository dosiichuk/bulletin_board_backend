const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.createOne = async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    await newUser.save();
    res.json({ message: 'ok', data: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
