const fs = require('fs/promises');
const path = require('path');

const talkerDir = path.join(__dirname, '..', 'talker.json');

const getTalker = async () => {
  const talkers = await fs.readFile(talkerDir, 'utf8');
  const talkersParsed = JSON.parse(talkers);

  return talkersParsed;
};

const putTalker = async (newTalker) => fs.writeFile(talkerDir, JSON.stringify(newTalker));

module.exports = { getTalker, putTalker };
