## Frontend Local Development

1. cd frontend
2. npm install (install front end dependencies)
3. npm start (Start React app)

## Update website

1. cd frontend
2. npm run build
3. Login to AWS, S3 Service, find appropriate bucket, upload all contents inside build folder.

## Access Contact us & Directorship Database

1. Login to AWS > DynamoDB service > Tables > SpecificTable > Explore Table Items

## Access Website signup users

1. Login to AWS
2. Cognito Service
3. User Pools
4. DataMLUserPool

### Notes

- React routing, used react-router-dom and react-router-hash-link to move around between pages
- CircleCI for CI/CD, set up a script that auto updates webapp to S3 in AWS. (See .circleci/config.yml)