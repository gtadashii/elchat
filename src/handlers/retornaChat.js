'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const chat = {
    id: id,
    idRemetente: uuidv4(),
    idDestinatario: uuidv4(),
    mensagens: []
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(chat, null, 2),
  };
};
