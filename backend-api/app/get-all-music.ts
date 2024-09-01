import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import { ScanCommand } from '@aws-sdk/lib-dynamodb'
import { DOC_CLIENT, TABLE_NAME } from './utils'

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const scanCommandOutput = await DOC_CLIENT.send(new ScanCommand({
        TableName: TABLE_NAME
    }))

    return {
        statusCode: 200,
        body: JSON.stringify(scanCommandOutput.Items)
    }
}