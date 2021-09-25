'use strict';
const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs')

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const mensagem = {
    id: id,
    idConversa: uuidv4(),
    idRemetente: uuidv4(),
    idDestinatario: uuidv4(),
    mensagem: "Olá, tudo bem?",
    horarioEnvio: dayjs().format('DD/MM/YYYY HH:MM:SS')
  }
  return {
    statusCode: 200,
    body: JSON.stringify(mensagem, null, 2),
  };
};
