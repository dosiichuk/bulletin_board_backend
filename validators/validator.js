const validator = require('validator');

exports.validateBody = (body) => {
  const contentIsValid = validator.isLength(body.content, { min: 5 });
  const summaryIsValid = validator.isLength(body.summary, { min: 5 });
  const emailIsValid = validator.isEmail(body.email);
  return contentIsValid && summaryIsValid && emailIsValid;
};
