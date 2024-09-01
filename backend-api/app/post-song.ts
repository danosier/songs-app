import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'
import { v4 } from 'uuid'
import { DOC_CLIENT, TABLE_NAME } from './utils'
import { PutCommand } from '@aws-sdk/lib-dynamodb'
import { SONG_SCHEMA } from './song-schema'

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

    let eventBody: unknown | undefined
    try {
        if (event.body !== null) {
            eventBody = JSON.parse(event.body)
        }
        else {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'body of request was empty'
                }),
            }
        }
    }
    catch (e: unknown) {
        if (e instanceof Error) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: e.message,
                }),
            }
        }

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'something has gone terribly awry',
            }),
        }
    }

    const parsed = SONG_SCHEMA.safeParse(eventBody)
    if (!parsed.success) {
        console.log(parsed.error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: parsed.error
            })
        }
    }

    const song = parsed.data
    song.uuid = v4()

    const putCommand: PutCommand = new PutCommand({
        TableName: TABLE_NAME,
        Item: song
    })

    const response = await DOC_CLIENT.send(putCommand)
    console.log(response)
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}