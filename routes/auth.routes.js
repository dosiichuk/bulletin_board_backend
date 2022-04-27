const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/', authController.getUser);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log('success', req.user);
    res.redirect('/');
  }
);

router.get('/auth.logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
