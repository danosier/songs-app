import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const client = process.env.IS_LOCAL ? new DynamoDBClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
}) : new DynamoDBClient({});
export const DOC_CLIENT = DynamoDBDocumentClient.from(client)

export const TABLE_NAME = 'song-table'