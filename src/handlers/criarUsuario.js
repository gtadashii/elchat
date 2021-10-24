'use strict';
const dayjs = require('dayjs');
const { hash } = require('bcryptjs');
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.USERS_TABLE })
const db = new AWS.DynamoDB();

module.exports.handler = async (event) => {
  const { id, username, password, email, birthdate } = event.body;
  const passwordHash = await hash(password, 8);
  const user = {
    id,
    username,
    password: passwordHash,
    email,
    birthdate: dayjs(birthdate).format()
  };

  const params = {
    TableName: process.env.USERS_TABLE,
    Item: user
  };

  db.putItem(params, (err) => {
    if (err) {
      response = {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        }
      }
    } else {
      const responseBody = {
        message: "Usuário cadastrado com sucesso."
      };
      response = {
        statusCode: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(responseBody, null, 2),
      }
    }
  })

  return response;
};
