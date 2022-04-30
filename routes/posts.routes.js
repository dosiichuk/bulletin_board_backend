const express = require('express');

const router = express.Router();
const PostController = require('../controllers/posts.controller');
const fileUpload = require('../middleware/fileUpload');
const { authorize } = require('../middleware/auth');

router.route('/posts').get(PostController.getAll);

router.route('/posts/:id').get(PostController.getOneById);

router
  .route('/posts')
  .post(authorize, fileUpload.single('photo'), PostController.createOne);

router
  .route('/posts/:id')
  .put(authorize, fileUpload.single('photo'), PostController.updateOne);

router.route('/posts/:id').delete(authorize, PostController.deletOne);

//additional routes for testing
router.route('/posts/user/:user').get(PostController.getByUser);

module.exports = router;
