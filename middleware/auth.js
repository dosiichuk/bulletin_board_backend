exports.authorize = (req, res, next) => {
  if (!req.user) {
    console.log('unauthorized request');
    res.redirect('/');
  } else {
    console.log('authorized');
    next();
  }
};
