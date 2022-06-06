import { Client } from './client'

export class Cloud {
  readonly client: Client
  readonly prefix: string

  constructor({ appId, appKey, masterKey, prefix, debug }) {
    this.client = new Client({ appId, appKey, masterKey })
    this.prefix = prefix || 'mcd_'

    if (this.debugOn() || debug) {
      this.client.debug()
    }
  }

  dataset(identifier: string) {
    return this.client.dataset(`${this.prefix}${identifier}`)
  }

  private debugOn() {
    return process.env.DEBUG === 'axios'
  }
}
