import { getClient } from '../protos/index.js'
import { SCOW } from './index.js'
import { asyncClientCall } from '@ddadaal/tsgrpc-client'
import { Invoke } from './common.js'
import { JobChargeLimitServiceClient } from '../protos/generated/server/job_charge_limit.js'

export class SCOWJobChargeLimit {
  client
  invoke: Invoke<SCOWJobChargeLimit['client']>

  constructor(public scow: SCOW) {
    this.client = getClient(JobChargeLimitServiceClient, scow.address)
    this.invoke = <never>asyncClientCall.bind(null, this.client)
  }
}
