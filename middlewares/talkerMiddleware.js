const { getTalker } = require('../utils/utils');
const { TALKER_NOT_FOUND } = require('../utils');

exports.allTalkers = async (_req, res, next) => {
  const talkers = await getTalker();

  if (!talkers) {
    res.status(200).send([]);
    return;
  }

  next();
};

exports.talkersById = async (req, _res, next) => {
  const id = Number(req.params.id);
  const talkers = await getTalker();
  const hasID = talkers.some((talker) => talker.id === id);

  if (!hasID) {
    next(TALKER_NOT_FOUND);
    return;
  }

  const index = talkers.findIndex((talker) => talker.id === id);

  req.index = index;

  next();
};