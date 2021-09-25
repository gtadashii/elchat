'use strict';

module.exports.handler = async (event) => {
  const body = {
    message: "Logado com sucesso"
  };
  return {
    statusCode: 200,
    body: JSON.stringify(body, null, 2),
  };
};
