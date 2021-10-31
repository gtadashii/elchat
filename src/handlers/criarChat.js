'use strict';
const { v4: uuidv4 } = require('uuid');
const { document } = require('../utils/dynamoDbClient');

const userExist = async (id) => {
  const results = await document.query({
    TableName: "usersTable",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();
  console.log(results.Items);
  return (results.Items.length > 0) ? true : false;
};

// TODO: Criar validacao se conversa ja existe

module.exports.handler = async (event) => {
  const { sender, recipient } = JSON.parse(event.body);

  const validateSender = await userExist(sender);
  const validateRecipient = await userExist(recipient);

  if (!validateSender) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Usuário remetente não existe"
      })
    }
  }

  if (!validateRecipient) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Usuário destinatário não existe"
      })
    }
  }

  const conversation = {
    id: uuidv4(),
    sender,
    recipient,
    messages: []
  }

  await document.put({
    TableName: "conversationsTable",
    Item: conversation
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Chat iniciado com sucesso'
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }
};
