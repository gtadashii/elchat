'use strict';

module.exports.handler = async (event) => {
  const body = {
    message: "Chat deletedo com sucesso"
  };
  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body, null, 2),
  };
};
