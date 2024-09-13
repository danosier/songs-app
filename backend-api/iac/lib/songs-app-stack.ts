
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import { AttributeType, TableV2 } from 'aws-cdk-lib/aws-dynamodb'
import { FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'
import { TABLE_NAME } from '../../app/utils'

interface FnWithAccess {
  id: string
  fn: NodejsFunction
  access: 'READ' | 'WRITE'
}

export class SongsAppStack extends Stack {
  table: TableV2
  lambdaFns: FnWithAccess[] = []

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.table = new TableV2(this, 'music', {
      tableName: TABLE_NAME,
      partitionKey: {
        name: 'uuid',
        type: AttributeType.STRING
      }
    })

    this.createLambdas()
  }

  createLambdas(): void {

    const getAllId = 'get-all-music'
    this.lambdaFns.push({
      id: getAllId,
      fn: new NodejsFunction(this, getAllId , {
        entry: 'app/get-all-music.ts'
      }),
      access: 'READ'
    })

    const postSongId = 'post-song'
    this.lambdaFns.push({
      id: postSongId,
      fn: new NodejsFunction(this, postSongId, {
        entry: 'app/post-song.ts'
      }),
      access: 'WRITE'
    })

    this.lambdaFns.forEach((fnWithAccess: FnWithAccess) => {
      if(fnWithAccess.access === 'READ') {
        this.table.grantReadData(fnWithAccess.fn)
      }
      else if(fnWithAccess.access === 'WRITE') {
        this.table.grantReadWriteData(fnWithAccess.fn)
      }

      const fnUrl = fnWithAccess.fn.addFunctionUrl({
        authType: FunctionUrlAuthType.NONE
      })

      new CfnOutput(this, `${ fnWithAccess.id }-url`, {
        value: fnUrl.url
      })
    })
  }
}
