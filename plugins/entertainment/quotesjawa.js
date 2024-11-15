// import { delay } from '../../lib/func.js
import { apiData } from '../../api/apiKeys.js'


let handler = async (m, { conn, usedPrefix, command }) => {
	try {
        let apiKey = apiData('botcahx')
		let res = await fetch(`https://api.botcahx.eu.org/api/random/quotesjawa?apikey=${apiKey}`)
		let json = await res.json()
		m.reply(json.quotes)
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.help = ['quotesjawa']
handler.tags = ['information']
handler.command = /^(quotesjawa)$/i

handler.limit = true

export default handler