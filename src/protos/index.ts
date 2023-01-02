import { ChannelCredentials, ClientOptions } from '@grpc/grpc-js'
import { UserServiceClient } from './generated/server/user.js'

interface IClientConstructor<T> {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): T
}

export function getClient<T>(
  client: IClientConstructor<T>,
  address: string
): T {
  return new client(address, ChannelCredentials.createInsecure())
}
