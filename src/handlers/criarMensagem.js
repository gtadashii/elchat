'use strict';
const dayjs = require('dayjs');
const { v4: uuidv4 } = require('uuid');

const { document } = require('../utils/dynamoDbClient');

module.exports.handler = async (event) => {
  const { chat, sender, message } = JSON.parse(event.body);
  const id = uuidv4();
  const date = dayjs().format('DD/MM/YYYY');

  const conversationsResponse = await document.query({
    TableName: "conversationsTable",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": chat
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

  const newMessage = {
    id,
    sender,
    message,
    date
  };

  messages.push(newMessage);

  await document.update({
    TableName: "conversationsTable",
    Key: {
      "id": chat
    },
    UpdateExpression: "set messages = :messages",
    ExpressionAttributeValues: {
      ":messages": messages
    }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newMessage),
    headers: {
      "Content-Type": "application/json"
    }
  }

};
