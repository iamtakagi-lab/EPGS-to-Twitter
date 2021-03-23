import { Drop } from '@/types/epgstation'
import axios from 'axios'
import { EPGStationSetting } from '@/types/setting'

export class EPGStation {
  private url: string
  private user: string | null
  private pass: string | null

  constructor({ host, port, user, pass }: EPGStationSetting) {
    if (!host) throw new Error('EPGStation url is not provided')
    this.url = host + ':' + port + '/api/'
    this.user = user
    this.pass = pass
  }

  private get client() {
    return axios.create({
      baseURL: this.url,
      headers: {
        ...(this.isAuthorizationEnabled
          ? {
              Authorization: this.authorizationToken,
            }
          : {}),
      },
      timeout: 5000,
    })
  }

  private get isAuthorizationEnabled() {
    return !!(this.user && this.pass)
  }

  private get authorizationToken() {
    return `Basic ${btoa(`${this.user}:${this.pass}`)}`
  }

  async getRecorded(recordedId: number) {
    const { data } = await this.client.get(`recorded/${recordedId}`)
    return data
  }

  async checkDrop(recordedId: number) : Promise<Drop | null> {
    return new Promise(async(resolve, reject) => {
      const data = await this.getRecorded(recordedId)
      try {
        resolve({
          errorCnt: data.errorCnt,
          dropCnt: data.dropCnt,
          scramblingCnt: data.scramblingCnt,
        } as Drop)
      } catch (e) {
        resolve(null)
      }
    })
  }
}
