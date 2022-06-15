const crypto = require('crypto');

exports.postLogin = (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  
  res.status(200).json({ token });
};