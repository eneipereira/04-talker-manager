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

const TOKEN_NOT_FOUND = {
  status: 401, message: 'Token não encontrado',
};

const TOKEN_INVALID = {
  status: 401, message: 'Token inválido',
};

const NAME_REQUIRED = { status: 400, message: 'O campo "name" é obrigatório' };

const MIN_NAME_LENGTH = {
  status: 400, message: 'O "name" deve ter pelo menos 3 caracteres',
};

const AGE_REQUIRED = { status: 400, message: 'O campo "age" é obrigatório' };

const MIN_AGE_REQUIRED = {
  status: 400, message: 'A pessoa palestrante deve ser maior de idade',
};

const TALK_REQUIRED = { status: 400, message: 'O campo "talk" é obrigatório' };

const WATCHED_AT_REQUIRED = { status: 400, message: 'O campo "watchedAt" é obrigatório' };

const WATCHED_AT_FORMAT_INVALID = {
  status: 400, message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};

const RATE_REQUIRED = { status: 400, message: 'O campo "rate" é obrigatório' };

const RATE_RANGE = {
  status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5',
};

module.exports = {
  BAD_REQUEST,
  TALKER_NOT_FOUND,
  EMAIL_REQUIRED,
  EMAIL_FORMAT_INVALID,
  PASSWORD_REQUIRED,
  MIN_PASSWORD_LENGTH,
  TOKEN_NOT_FOUND,
  TOKEN_INVALID,
  NAME_REQUIRED,
  MIN_NAME_LENGTH,
  AGE_REQUIRED,
  MIN_AGE_REQUIRED,
  TALK_REQUIRED,
  WATCHED_AT_REQUIRED,
  WATCHED_AT_FORMAT_INVALID,
  RATE_REQUIRED,
  RATE_RANGE,
};