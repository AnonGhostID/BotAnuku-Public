import { apiData } from "../../api/apiKeys.js"

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} username*\n\nExample :\n${usedPrefix + command} username`
	if ((text.includes('http://') || text.includes('https://'))) throw `Gunakan *USERNAME*!`
	try {
        await m.react('⏳')
        let apiKey = apiData('beta');
		let anu = await fetch(`https://api.betabotz.eu.org/api/stalk/ig?username=${text}&apikey=${apiKey}`)
      	let json = await anu.json()
    

        let caption = `     乂  *I G - S T A L K  乂*\n\n`
        caption += `◦  *Name* : ${json.result.fullName}\n`
        caption += `◦  *Username* : ${json.result.username}\n`
        caption += `◦  *Posts* : ${json.result.postsCount}\n`
        caption += `◦  *Followers* : ${json.result.followers}\n`
        caption += `◦  *Followings* : ${json.result.following}\n`
        caption += `◦  *Bio* : ${json.result.bio}\n`
        // caption += `	◦  *Private* : ${json.result.private}\n`
        // caption += `	◦  *Is Verified?* : ${json2.is_verified ? '✅' : '❌'}\n`
        
        await m.react('✅')

        await conn.sendMessage(m.chat, { image: { url: json.result.photoUrl }, caption: caption }, { quoted: m })
	} catch (e) {
		console.log(e)
        await m.react('❌')
		m.reply(`Invalid username!.`)
	}
}

handler.menudownload = ['igstalk <url>']
handler.tagsdownload = ['entertainment']
handler.command = /^(igstalk)$/i

handler.premium = false
handler.limit = true

export default handler