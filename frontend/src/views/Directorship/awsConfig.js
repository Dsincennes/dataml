// awsConfig.js
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIASCNR72RXB6TANNMC',
  secretAccessKey: '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',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;