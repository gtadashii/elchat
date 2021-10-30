'use strict';
const { document } = require('../utils/dynamoDbClient');

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;

  const response = await document.query({
    TableName: "usersTable",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  if (response.Items.length > 0) {
    const { id, username, email, birthdate } = response.Items[0];
    const user = {
      id,
      username,
      email,
      birthdate
    }
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Nao foi encontrado nenhum usuário"
      })
    }
  }
};
