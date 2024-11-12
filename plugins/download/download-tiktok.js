import fetch from 'node-fetch'
import { apiData } from '../../api/apiKeys.js'
import db from '../../lib/database.js'
let apiKey = apiData('fgmods'); 


let handler = async(m, { conn, text, usedPrefix, command }) => {

    const promotion = [
        ['Jangan lupa tuk donasi ya kak, agar dapat menikmati fitur premium!', '\nhttps://saweria.co/botanuku\n'],
        ['OWNER', `https://wa.me/${db.data.datas.rowner[0]?.[0]}`, 'cta_url\n'],
        ['SCRIPT', 'https://github.com/AnonGhostID/BotAnuku-Public', 'cta_url\n'],
        // ['💬 Chat Bot', `https://wa.me/${conn.user.jid.split('@')[0]}`, 'cta_url\n'],
    ]

    if (!text) throw `*Usage : ${usedPrefix + command} tiktok_url_video*\n\nExample :\n${usedPrefix + command} https://www.tiktok.com/@leaneaux/video/7260084182632779013`
    if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
    if (!text.includes('.tiktok.com/')) throw `Invalid URL, please input a valid TikTok URL.`
        try {
            await m.react('⏳');
            let anu = await fetch(`https://api.fgmods.xyz/api/downloader/tiktok?url=${text}&apikey=${apiKey}`);
            let json = await anu.json();

        if (!json.result) {
            throw new Error("vnotfound");
        }

        if (json.result.images) {
            throw new Error("ttslide");
        }

        function formatSize(size) {
            const units = ['B', 'KB', 'MB', 'GB', 'TB']
            let i = 0
            while (size >= 1024 && i < units.length - 1) {
                size /= 1024
                i++
            }
            return `${size.toFixed(2)} ${units[i]}`
        }
        
        let authorName = json.result.author.nickname;
        if (authorName === "unnamed") {
            authorName = "Tanpa Nama";
        }
        

        let postedAt = new Date(json.result.create_time * 1000); // Convert seconds to milliseconds
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        let formattedPostedAt = postedAt.toLocaleDateString(undefined, options) + ' ' + postedAt.toLocaleTimeString();

        let txt = `*Downloaded with BotAnuku*\n`
        txt += `⭔ Caption : ${json.result.title.replace(/#[^\s]+/g, '')}\n`
        txt += `⭔ Name : ${authorName}\n`
        txt += `⭔ Username : ${json.result.author.unique_id}\n`
        txt += `⭔ Viewers : ${json.result.play_count} views\n`
        txt += `⭔ Like : ${json.result.digg_count} likes\n`
        txt += `⭔ Comment : ${json.result.comment_count} comments\n`
        txt += `⭔ Posted At : ${formattedPostedAt}\n`
        txt += `⭔ Size : ${formatSize(json.result.size)}\n\n`
        txt += `* *Tersedia fitur download kualitas HD!*\nGunakan ${usedPrefix}tiktokhd\n`
        await m.react('✅')
        await conn.sendMessage(m.chat, { video: { url: json.result.play }, caption: txt }, { quoted: m })

        if (Math.random() < 0.3) { // 50% chance to send the promotion message
            let promoMessage = promotion.map(p => `${p[0]}: ${p[1]}`).join('\n')
            m.reply(promoMessage)
        }
    } catch (e) {
        console.log(e)
        if (e.message === "ttslide") {
            await m.react('❌')
            m.reply(`Untuk tiktok slide gunakan ${usedPrefix}tiktokslide`)
        } else if (e.message === "vnotfound") {
            await m.react('❌') // handle invalid response error 
            m.reply(`Videonya gaada anjrit periksa linknya lagi ya!`)
        } else {
            await m.react('❌')
            m.reply(`API Error, report owner! `)
        }
    }
}

handler.menudownload = ['tiktokdl <url> (Tiktok Downloader)']
handler.tagsdownload = ['search']
handler.command = /^((tt|tiktok)dl)$/i

handler.premium = false
handler.limit = true

export default handler
