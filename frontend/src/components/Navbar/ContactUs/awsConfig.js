// awsConfig.js
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIASCNR72RXFLNRIXUA',
  secretAccessKey: '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',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;
