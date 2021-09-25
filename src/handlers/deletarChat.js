'use strict';

module.exports.handler = async (event) => {
  const body = {
    message: "Chat deletedo com sucesso"
  };
  return {
    statusCode: 204,
    body: JSON.stringify(body, null, 2),
  };
};
