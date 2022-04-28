const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');
const { authorize } = require('../middleware/auth');

router.route('/users').post(authorize, UserController.createOne);

module.exports = router;
