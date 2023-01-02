import { getClient } from '../protos/index.js'
import { SCOW } from './index.js'
import { asyncClientCall } from '@ddadaal/tsgrpc-client'
import { Invoke } from './common.js'
import { TenantServiceClient } from '../protos/generated/server/tenant.js'

export class SCOWTenant {
  client
  invoke: Invoke<SCOWTenant['client']>

  constructor(public scow: SCOW) {
    this.client = getClient(TenantServiceClient, scow.address)
    this.invoke = <never>asyncClientCall.bind(null, this.client)
  }
}
