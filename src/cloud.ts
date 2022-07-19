import { Client } from './client'

export interface CloudOptions {
  appId: string
  appKey: string
  masterKey: string
  prefix?: string
  debug?: boolean
}

export class Cloud {
  readonly client: Client
  readonly prefix: string

  constructor({ appId, appKey, masterKey, prefix, debug }: CloudOptions) {
    this.client = new Client({ appId, appKey, masterKey })
    this.prefix = prefix || 'lux_'

    if (this.debug || debug) {
      this.client.debug()
    }
  }

  dataset(identifier: string) {
    return this.client.dataset(`${this.prefix}${identifier}`)
  }

  private get debug() {
    return process.env.DEBUG === 'axios'
  }
}
