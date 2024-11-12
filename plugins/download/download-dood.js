import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} Doodstream URL*\n\nExample :\n${usedPrefix + command} https://doods.pro/d/ipq10obktxh5`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		await m.react('⏳')
		let anu = await fetch(`https://api.pake.tk/dood?url=${text}`)
		let json = await anu.json()
		let link = json.data.direct_link
		if (!link) throw 'Media tidak ditemukan'
		await conn.sendMessage(m.chat, { video: { url: `https://dd-cdn.pakai.eu.org/download?url=${link}` } }, { quoted: m })
        await m.react('✅')

	} catch (e) {
		console.log(e)
		m.reply(`Invalid Doodstream URL / link tidak valid. Periksa Link Videonya!`)
	}
	
}

handler.menudownload = ['Dood Downloader: doodl <url>']
handler.tagsdownload = ['search']
handler.command = /^((doodl|ddl))$/i

handler.premium = false
handler.limit = true

export default handler
