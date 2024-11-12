import fetch from 'node-fetch'
import Humanoid from 'humanoid-js'
import { apiData } from '../../api/apiKeys.js'


let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} twitter_url*\n\nExample :\n${usedPrefix + command} https://twitter.com/Ciput_rii/status/1636595287488856065`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		await m.react('⏳')
			let humanoid = new Humanoid();
			let apiKey = apiData('beta');
			let anu = await humanoid.get(`https://api.betabotz.eu.org/api/download/twitter2?url=${text}&apikey=${apiKey}`)
			let responseText = anu.body
			let json
			console.log(responseText)
		try {
			json = JSON.parse(responseText)
		} catch (error) {
			throw new Error('Invalid JSON response from the API')
		}
		let txt = `*Downloaded with BotAnuku*\n\n`
			txt += `⭔ Caption : ${json.result.text}\n`

		for (let i = 0; i < json.result.mediaURLs.length; i++) {
			let item = json.result.mediaURLs[i]
			let mediaType = await getMediaType(item)
			await m.react('✅')
	
			if (mediaType.startsWith('video/')) {
				if (i === 0) {
					await conn.sendMessage(m.chat, { video: { url: item }, caption: txt }, { quoted: m })
				} else {
					await conn.sendMessage(m.chat, { video: { url: item } })
				}
			} else if (mediaType.startsWith('image/')) {
				if (i === 0) {
					await conn.sendMessage(m.chat, { image: { url: item }, caption: txt }, { quoted: m })
				} else {
					await conn.sendMessage(m.chat, { image: { url: item } })
				}
			} else {
				console.log(`Unknown media type for ${item}: ${mediaType}`)
			}
		}
		async function getMediaType(url) {
			let res = await fetch(url)
			let contentType = res.headers.get('Content-Type')
			return contentType || ''
		}
	} catch (e) {
		console.log(e)
		await m.react('❌')
		m.reply(`Invalid Twitter url / link tidak valid. Periksa Link Videonya!`)
	}
}



handler.menudownload = ['twitterdl <url>']
handler.tagsdownload = ['search']
handler.command = /^((tw|twitter)dl)$/i

handler.premium = false
handler.limit = true

export default handler