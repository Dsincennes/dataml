// awsConfig.js
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIASCNR72RXAHEOBUTY',
  secretAccessKey: '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',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;