'use strict';
const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs')

module.exports.handler = async (event) => {
  const mensagens = [{
    id: uuidv4(),
    idConversa: uuidv4(),
    idRemetente: uuidv4(),
    idDestinatario: uuidv4(),
    mensagem: "Olá, tudo bem?",
    horarioEnvio: dayjs().format('DD/MM/YYYY HH:MM:SS')
  },
  {
    id: uuidv4(),
    idConversa: uuidv4(),
    idRemetente: uuidv4(),
    idDestinatario: uuidv4(),
    mensagem: "Tudo bem e você?",
    horarioEnvio: dayjs().format('DD/MM/YYYY HH:MM:SS')
  }]
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(mensagens, null, 2),
  };
};
