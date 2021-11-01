'use strict';

const { document } = require('../utils/dynamoDbClient');

module.exports.handler = async (event) => {
  const pathParameters = event.pathParameters;

  const conversationsResponse = await document.query({
    TableName: "conversationsTable",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": pathParameters.id
    }
  }).promise();

  if (conversationsResponse.Items.length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Não foi possível encontrar a conversa informado"
      })
    }
  }

  const messages = conversationsResponse.Items[0].messages;

  return {
    statusCode: 200,
    body: JSON.stringify(messages)
  }
};
