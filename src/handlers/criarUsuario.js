'use strict';
const dayjs = require('dayjs');
const { hash } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const { document } = require('../utils/dynamoDbClient');

module.exports.handler = async (event) => {
  const { username, password, email, birthdate } = JSON.parse(event.body);
  const passwordHash = await hash(password, 8);
  const id = uuidv4();
  const user = {
    id,
    username,
    password: passwordHash,
    email,
    birthdate: dayjs(birthdate).format('DD/MM/YYYY')
  };

  await document.put({
    TableName: "usersTable",
    Item: user
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Usuário criado com sucesso'
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }
};
