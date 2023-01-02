import { SCOWUser } from './user.js'

export class SCOW {
  user

  constructor(public address: string) {
    this.user = new SCOWUser(this)
  }
}
