const BAD_REQUEST = {
  status: 500,
  message: 'Alguma coisa deu errado! Atualize a página ou tente novamente mais tarde',
};

const TALKER_NOT_FOUND = { status: 404, message: 'Pessoa palestrante não encontrada' };

const EMAIL_REQUIRED = { status: 400, message: 'O campo "email" é obrigatório' };

const EMAIL_FORMAT_INVALID = {
  status: 400, message: 'O "email" deve ter o formato "email@email.com"',
};

const PASSWORD_REQUIRED = { status: 400, message: 'O campo "password" é obrigatório' };

const MIN_PASSWORD_LENGTH = {
  status: 400, message: 'O "password" deve ter pelo menos 6 caracteres',
};

module.exports = {
  BAD_REQUEST,
  TALKER_NOT_FOUND,
  EMAIL_REQUIRED,
  EMAIL_FORMAT_INVALID,
  PASSWORD_REQUIRED,
  MIN_PASSWORD_LENGTH,
};