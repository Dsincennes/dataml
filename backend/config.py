import boto3 
from botocore.exceptions import ClientError
import json


def get_secret():

    secret_name = "OAuthSecret"
    region_name = "us-east-1"

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        raise e

    # Decrypts secret using the associated KMS key.

    secret = json.loads(get_secret_value_response['SecretString'])
    return secret['client_secret']


config = {
    'oauth_secret': get_secret()
}