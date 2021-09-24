'use strict';

module.exports.handler = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'Usuário criado com sucesso',
      },
      null,
      2
    ),
  };
};
