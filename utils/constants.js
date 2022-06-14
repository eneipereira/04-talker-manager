const BAD_REQUEST = {
  status: 500,
  message: 'Alguma coisa deu errado! Atualize a página ou tente novamente mais tarde',
};

const TALKER_NOT_FOUND = { status: 404, message: 'Pessoa palestrante não encontrada' };

module.exports = {
  BAD_REQUEST,
  TALKER_NOT_FOUND,
};