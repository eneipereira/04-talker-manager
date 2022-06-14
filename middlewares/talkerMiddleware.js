const { getTalker } = require('../utils/utils');

exports.allTalkers = async (_req, res, next) => {
  const talkers = await getTalker();

  if (!talkers) {
    res.status(200).send([]);
    return;
  }

  next();
};
