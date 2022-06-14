const { getTalker } = require('../utils/utils');

const HTTP_OK_STATUS = 200;

exports.get = async (_req, res) => {
  const talkers = await getTalker();
  
  res.status(HTTP_OK_STATUS).json(talkers);
};

exports.getById = async (req, res) => {
  const { index } = req;
  const talkers = await getTalker();
  
  res.status(HTTP_OK_STATUS).json(talkers[index]);
};
