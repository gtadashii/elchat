'use strict';

module.exports.handler = async (event) => {
  console.log('Evento', event);
  const body = {
    message: "Logado com sucesso"
  };
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body, null, 2),
  };
};
