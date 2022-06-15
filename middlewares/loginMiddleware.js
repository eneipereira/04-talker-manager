const {
EMAIL_REQUIRED,
EMAIL_FORMAT_INVALID,
PASSWORD_REQUIRED,
MIN_PASSWORD_LENGTH,
} = require('../utils');

exports.loginAuth = (req, _res, next) => {
  const { email, password } = req.body;
  const regex = /\S+@\S+\.\S+/;

  if (!email) {
    next(EMAIL_REQUIRED);
  }
  if (!regex.test(email)) {
    next(EMAIL_FORMAT_INVALID);
  }
  if (!password) {
    next(PASSWORD_REQUIRED);
  }
  if (password.length < 6) {
    next(MIN_PASSWORD_LENGTH);
  }

  next();
};