const { DynamoDB } = require('aws-sdk');

const document = new DynamoDB.DocumentClient();

module.exports = {
  document
};