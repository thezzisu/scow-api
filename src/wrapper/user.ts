import { UserServiceClient } from '../protos/generated/server/user.js'
import { getClient } from '../protos/index.js'
import { SCOW } from './index.js'
import { asyncClientCall } from '@ddadaal/tsgrpc-client'

type Shifted<T extends any[]> = T extends [any, ...infer U] ? U : never

export class SCOWUser {
  client
  invoke: <TKey extends keyof SCOWUser['client']>(
    ...args: Shifted<
      Parameters<typeof asyncClientCall<SCOWUser['client'], TKey>>
    >
  ) => ReturnType<typeof asyncClientCall<SCOWUser['client'], TKey>>

  constructor(public scow: SCOW) {
    this.client = getClient(UserServiceClient, scow.address)
    this.invoke = <never>asyncClientCall.bind(null, this.client)
  }
}
