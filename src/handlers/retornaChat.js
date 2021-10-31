'use strict';
const { document } = require('../utils/dynamoDbClient');

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;

  const response = await document.query({
    TableName: "conversationsTable",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  if (response.Items.length > 0) {

    const { id, sender, recipient, messages } = response.Items[0];

    const chat = {
      id,
      sender,
      recipient,
      messages
    };

    return {
      statusCode: 200,
      body: JSON.stringify(chat)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Nao foi encontrado nenhum chat com esse id"
      })
    }
  }
};
