import { SCOWAccount } from './account.js'
import { SCOWUser } from './user.js'

export class SCOW {
  user
  account

  constructor(public address: string) {
    this.user = new SCOWUser(this)
    this.account = new SCOWAccount(this)
  }
}
