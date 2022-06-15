const { getTalker } = require('../utils/utils');
const { TALKER_NOT_FOUND, TOKEN_NOT_FOUND, TOKEN_INVALID,
NAME_REQUIRED, MIN_NAME_LENGTH, AGE_REQUIRED,
MIN_AGE_REQUIRED, TALK_REQUIRED, WATCHED_AT_REQUIRED,
WATCHED_AT_FORMAT_INVALID, RATE_REQUIRED, RATE_RANGE,
} = require('../utils');

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
  const index = talkers.findIndex((talker) => talker.id === id);

  if (index === -1) {
    next(TALKER_NOT_FOUND);
    return;
  }

  req.index = index;

  next();
};

exports.tokenAuth = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    next(TOKEN_NOT_FOUND);
    return;
  }

  if (authorization.length !== 16) {
    next(TOKEN_INVALID);
    return;
  }

  next();
};

const checkName = (req, _res, next) => {
  const { name } = req.body;
  
  if (!name || name === '') {
    next(NAME_REQUIRED);
    return;
  }

  if (name.length < 3) {
    next(MIN_NAME_LENGTH);
    return;
  }

  next();
};

const checkAge = (req, _res, next) => {
  const { age } = req.body;

  if (age === undefined || parseInt(age, 10) !== age) {
    next(AGE_REQUIRED);
    return;  
  }
  
  if (age < 18) {
    next(MIN_AGE_REQUIRED);
    return;  
  }

  next();
};

const checkTalk = (req, _res, next) => {
  const { talk } = req.body;

  if (!talk) {
    next(TALK_REQUIRED);
    return;
  }
  
  next();
};

const checkWatchedAt = (req, _res, next) => {
  const { watchedAt } = req.body.talk;
  const regex = /^([0]?[1-9]|[1-2][0-9]|[3][0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)([1-2][0-9]{3})$/;
  
  if (!watchedAt) {
    next(WATCHED_AT_REQUIRED);
    return;
  }

  if (!regex.test(watchedAt)) {
    next(WATCHED_AT_FORMAT_INVALID);
    return;
  }
  
  next();
};

const checkRate = (req, _res, next) => {
  const { rate } = req.body.talk;

  if (rate === undefined) {
    next(RATE_REQUIRED);
    return;
  }

  if ((rate < 1 || rate > 5) || parseInt(rate, 10) !== rate) {
    next(RATE_RANGE);
    return;
  }

  next();
};

exports.newTalker = [checkName, checkAge, checkTalk, checkWatchedAt, checkRate]; 
