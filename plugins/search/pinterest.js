import db from '../../lib/database.js'
import { pinterest } from '../../lib/scrape.js'
            
let handler = async (m, { conn, text, usedPrefix, command, isPrems }) => {
    if (!text) throw `Example : ${usedPrefix + command} spongebob`
    try {
        let anu = await pinterest(text)
        if (!anu[0]) throw Error()
        await conn.sendMsg(m.chat, { react: { text: '🔍', key: m.key } })
        let push = [];
        
        for (let x of anu.sort(() => Math.random() - 0.5)) {
            push.push([x.title || 'no_title', 'pinterest search', '', x.image, []]);
        }
        
        await conn.sendSlide(m.chat, `*Search : ${text.trim()}*`, pauthor, push, m)
    } catch (e) {
        console.log(e)
        m.reply('media tidak ditemukan')
    }
}

handler.help = ['pinterest <teks>']
handler.tags = ['searching']
handler.command = /^(pin(terest2?)?)$/i

export default handler
