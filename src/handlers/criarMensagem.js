'use strict';

module.exports.handler = async (event) => {
  const body = {
    message: "Mensagem enviada com sucesso"
  };
  return {
    statusCode: 201,
    body: JSON.stringify(body, null, 2),
  };
};
