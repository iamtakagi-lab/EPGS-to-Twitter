import Twitter from 'twitter'
import { TwitterSeting } from '../types/setting'

export class Twt {
  private client: any

  constructor({ ck, cs, at, ats }: TwitterSeting) {
    this.client = new Twitter({
      consumer_key: ck,
      consumer_secret: cs,
      access_token_key: at,
      access_token_secret: ats,
    })
  }

  async tweet(text: string) {
    await this.client.post('statuses/update', { status: text })
  }
}
