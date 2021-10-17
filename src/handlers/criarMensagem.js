'use strict';

module.exports.handler = async (event) => {
  const body = {
    message: "Mensagem enviada com sucesso"
  };
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body, null, 2),
  };
};
