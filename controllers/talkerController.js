const { getTalker, putTalker } = require('../utils/utils');

const HTTP_OK_STATUS = 200;
let id = 4;

exports.get = async (_req, res) => {
  const talkers = await getTalker();
  
  res.status(HTTP_OK_STATUS).json(talkers);
};

exports.getById = async (req, res) => {
  const { index } = req;
  const talkers = await getTalker();
  
  res.status(HTTP_OK_STATUS).json(talkers[index]);
};

exports.post = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await getTalker();
  
  id += 1;
  
  const newTalker = { name, age, id, talk };
  
  talkers.push(newTalker);
  
  await putTalker(talkers);
  
  res.status(201).json(newTalker);
};

exports.put = async (req, res) => {
  const { index } = req;
  const talkers = await getTalker();

  talkers[index] = { ...talkers[index], ...req.body };

  await putTalker(talkers);

  res.status(HTTP_OK_STATUS).json(talkers[index]);
};
