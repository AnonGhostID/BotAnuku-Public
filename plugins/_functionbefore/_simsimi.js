import db from '../../lib/database.js'
import fetch from 'node-fetch'

export async function before(m, { isAdmin, isBotAdmin }) {
	if (m.isGroup && m.text) {
		let chat = db.data.chats[m.chat]
		let res = ['‎','x','z','X','Z','/','i','!','#','$','%','+','£','¢','€','¥','^','°','=','¶','∆','×','÷','π','√','✓','©','®',':',';','?','&','.','-','/'].some(word => m.text.startsWith(word))
		if (chat.simi && m.text.length > 3 && m.text.length < 125 && !res) {
			let user = db.data.users[m.sender]
			if (user.banned) return !0
			
			let body = new URLSearchParams()
			body.append('text', m.text)
			body.append('lc', 'id')
			
			let anu = await fetch(`https://api.simsimi.vn/v2/simtalk`, {
				method: 'POST',
				body,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			let json = await anu.json()
			m.reply(json.message)
		}
	}
	return !0
}