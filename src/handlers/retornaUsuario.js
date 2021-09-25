'use strict';
const dayjs = require('dayjs');

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const user = {
    id: id,
    username: "Josesinho",
    email: "josesinho@email.com",
    dataNascimento: dayjs('2020-01-01').format('DD/MM/YYYY')
  }
  return {
    statusCode: 200,
    body: JSON.stringify(user, null, 2),
  };
};
