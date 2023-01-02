import { asyncClientCall } from '@ddadaal/tsgrpc-client'
import { Client } from '@grpc/grpc-js'

type Shifted<T extends any[]> = T extends [any, ...infer U] ? U : never

export type Invoke<T extends Client> = <TKey extends keyof T>(
  ...args: Shifted<Parameters<typeof asyncClientCall<T, TKey>>>
) => ReturnType<typeof asyncClientCall<T, TKey>>
