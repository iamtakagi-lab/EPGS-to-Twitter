// System
import fs from 'fs'
import path from 'path'

// date-fns
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

// Module
import { Twt, EPGStation } from '@/client'
import { Config } from '@/types/config'
import { Program } from '@/types/epgstation'

// Program
const program: Program = {
  channel: process.env.CHANNELNAME ? process.env.CHANNELNAME : null,
  name: process.env.NAME ? process.env.NAME : null,
  description: process.env.DESCRIPTION ? process.env.DESCRIPTION : null,
  programId: process.env.PROGRAMID ? Number(process.env.PROGRAMID) : null,
  recordedId: process.env.RECORDEDID ? Number(process.env.RECORDEDID) : null,
  date: process.env.STARTAT ? format(new Date(Number(process.env.STARTAT)), 'yyyy/MM/dd (E) HH:mm', { locale: ja })
    : null,
  startAt: process.env.STARTAT
    ? format(new Date(Number(process.env.STARTAT)), 'yyyy/MM/dd (E) HH:mm', { locale: ja })
    : null,
  endAt: process.env.ENDAT
    ? format(new Date(Number(process.env.ENDAT)), 'yyyy/MM/dd (E) HH:mm', { locale: ja })
    : null,
  recPath: process.env.RECPATH ? process.env.RECPATH : null,
}

// Config
let config: Config
try {
  config = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8')
  )
} catch (e) {
  console.error('config.json not found!')
  process.exit()
}

// Clients
const epgs = new EPGStation(config.epgstation)
const twt = new Twt(config.twitter)

// CLI
;(async () => {
  if (process.argv[2] === 'start') {
    // 録画開始時
    twt.tweet(
      `📺 録画開始しました\r\n${program.name} ${program.startAt} ～ ${program.endAt}［${program.channel}]`
    )
  } else if (process.argv[2] === 'finish') {
    // 録画終了時
    let text = `📺 録画終了しました\r\n${program.name} ${program.startAt} ～ ${program.endAt}［${program.channel}]`
    twt.tweet(text)
  } else if (process.argv[2] === 'reserve') {
    // 録画予約
    twt.tweet(
      `📺 新規録画予約しました\r\n${program.name} ${program.startAt} ～ ${program.endAt} [${program.channel}]`
    )
  }
})();