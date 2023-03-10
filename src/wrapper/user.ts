import { UserServiceClient } from '../protos/generated/server/user.js'
import { getClient } from '../protos/index.js'
import { SCOW } from './index.js'
import { asyncClientCall } from '@ddadaal/tsgrpc-client'
import { Invoke } from './common.js'

export class SCOWUser {
  client
  invoke: Invoke<SCOWUser['client']>

  constructor(public scow: SCOW) {
    this.client = getClient(UserServiceClient, scow.address)
    this.invoke = <never>asyncClientCall.bind(null, this.client)
  }
}
