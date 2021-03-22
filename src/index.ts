// System Imports
import fs from 'fs'
import path from 'path'

// Module Imports
import { Twt, EPGStation } from "@/client";
import { Config } from "@/types/config";
import { Program } from "@/types/epgstation";

// Program
const program: Program = {
    now: new Date(),
    channel: process.env.CHANNELNAME ? process.env.CHANNELNAME : null,
    name: process.env.NAME ? process.env.NAME : null,
    description: process.env.DESCRIPTION ? process.env.DESCRIPTION : null,
    programId: process.env.PROGRAMID ? Number(process.env.PROGRAMID): null,
    recordedId: process.env.RECORDEDID ? Number(process.env.RECORDEDID) : null,
    date: process.env.STARTAT ? new Date(Number(process.env.STARTAT)).toLocaleDateString("japanese", { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' }) : null,
    startAt: process.env.STARTAT ? new Date(Number(process.env.STARTAT)).toLocaleTimeString("japanese") : null,
    endAt: process.env.ENDAT ? new Date(Number(process.env.ENDAT)).toLocaleTimeString("japanese") : null,
    recPath: process.env.RECPATH ? process.env.RECPATH : null
}

// Config
let config: Config; try { config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8")) } catch (e) { console.error("config.json not found!"); process.exit() }

// Clients
const epgs = new EPGStation(config.egpstation)
const twt = new Twt(config.twitter);

// CLI
(async () => {
    if (process.argv[2] === 'start') {
        // 録画開始時
        twt.tweet(program.name + ' ' + program.startAt + '～' + program.endAt + '［' + program.channel + '］')
    }
    else if (process.argv[2] === 'end') {
        // 録画終了時
        let text = program.name + ' ' + program.startAt + '～' + program.endAt + '［' + program.channel + '］'
        const recordedId = program.recordedId
        if(!recordedId) process.exit()
        const drop = await epgs.checkDrop(recordedId)
        // 実行結果がnullの場合
        if(drop.errorCnt == null) {
            text += "!===== Cannot load recorded file! =====!```" 
        }
        else if (drop.errorCnt != 0) {
            // 映像PIDのd値（ドロップ値）が0でない場合≒ドロップがある場合は詳細を投稿（メンション付き）
            text += "!===== This MEPG-TS has dropped frame! =====!\n"
            text += 'Error: ' + drop.errorCnt + '\nDrop: ' + drop.dropCnt + '\nScrmbling: ' + drop.scramblingCnt
        } else {
            // 映像PIDのd値が0の場合はドロップがないのでその旨を投稿
            text += "!===== This MPEG-TS has no drop =====!```"
        }
        twt.tweet(text)
    }
    else if (process.argv[2] === 'reserve') {
        // 録画予約時
        twt.tweet(program.name + ' ' + program.date + ' ' + program.startAt + '～' + program.endAt + '［' + program.channel + '］\n' + program.description)
    }
})()