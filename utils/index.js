const { getTalker, putTalker } = require('./utils');
const { BAD_REQUEST, TALKER_NOT_FOUND, EMAIL_REQUIRED,
EMAIL_FORMAT_INVALID, PASSWORD_REQUIRED, MIN_PASSWORD_LENGTH } = require('./constants');

module.exports = {
getTalker,
putTalker,
BAD_REQUEST,
TALKER_NOT_FOUND,
EMAIL_REQUIRED,
EMAIL_FORMAT_INVALID,
PASSWORD_REQUIRED,
MIN_PASSWORD_LENGTH,
};
