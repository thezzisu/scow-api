import { SCOWAccount } from './account.js'
import { SCOWJobChargeLimit } from './jobChargeLimit.js'
import { SCOWTenant } from './tenant.js'
import { SCOWUser } from './user.js'

export class SCOW {
  user
  account
  tenant
  jobChargeLimit

  constructor(public address: string) {
    this.user = new SCOWUser(this)
    this.account = new SCOWAccount(this)
    this.tenant = new SCOWTenant(this)
    this.jobChargeLimit = new SCOWJobChargeLimit(this)
  }
}
