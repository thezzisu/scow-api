import { getClient } from '../protos/index.js'
import { SCOW } from './index.js'
import { asyncClientCall } from '@ddadaal/tsgrpc-client'
import { Invoke } from './common.js'
import { AccountServiceClient } from '../protos/generated/server/account.js'

export class SCOWAccount {
  client
  invoke: Invoke<SCOWAccount['client']>

  constructor(public scow: SCOW) {
    this.client = getClient(AccountServiceClient, scow.address)
    this.invoke = <never>asyncClientCall.bind(null, this.client)
  }
}
