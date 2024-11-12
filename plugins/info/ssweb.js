import axios from 'axios'
import { isUrl } from '../../lib/func.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) throw `Example : ${usedPrefix + command} https://google.com`
	if (!isUrl(args[0])) throw `url invalid, please input a valid url. Try with add http:// or https://`
	await conn.sendFile(m.chat, `https://api.screenshotmachine.com/?key=f74eca&url=${args[0]}&dimension=1920x1080&type=png`, '', `_Screenshot using ${pauthor}_`.trim(), m)
	// await conn.sendFile(m.chat, `https://widipe.com/sshp?url=${args[0]}`, '', `_Screenshot by ${pauthor}_`.trim(), m)
}

handler.help = ['ssweb <url>','sshp <url>']
handler.tags = ['information']
handler.command = /^(ss(web|hp)?)$/i

handler.premium = true
handler.limit = true

export default handler