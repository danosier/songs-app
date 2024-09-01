import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({});
export const DOC_CLIENT = DynamoDBDocumentClient.from(client)

export const TABLE_NAME = 'song-table'