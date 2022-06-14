const { BAD_REQUEST } = require('../utils');

const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = status === 500 ? BAD_REQUEST : err.message;

  res.status(status).json({ message });
};

module.exports = errorHandler;