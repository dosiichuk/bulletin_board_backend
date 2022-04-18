const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');

// router.route('/posts').get(PostController.getAll);

// router.route('/posts/:id').get(PostController.getOneById);

router.route('/users').post(UserController.createOne);

// router.route('/posts/:id').put(PostController.updateOne);

// router.route('/posts/:id').delete(PostController.deletOne);

//additional routes for testing
// router.route('/posts/user/:user').get(PostController.getByUser);

// router.route('/posts/genre/:genre').get(PostController.getByGenre);

module.exports = router;
