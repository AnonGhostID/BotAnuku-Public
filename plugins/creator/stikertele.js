import { createSticker } from 'wa-sticker-formatter';
import fs from 'fs';
import fetch from 'node-fetch';
import { apiData } from '../../api/apiKeys.js';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let packname = "Bot Anuku";
    let author = "by: @tnadam";
    let apiKey = apiData('lolhuman');
    text = text ? text : m.quoted?.text ? m.quoted.text : m.quoted?.caption ? m.quoted.caption : m.quoted?.description ? m.quoted.description : '';
    if (!text) throw `Example : ${usedPrefix + command} *link_sticker_telegram*`;
    try {
        m.reply(`Harap Tunggu. . . `);
        let anu = await fetch(`https://api.lolhuman.xyz/api/telestick?apikey=${apiKey}&url=${text}`);
        let json = await anu.json();
        await conn.reply(m.chat, `_Untuk menghindari spam, stiker akan dikirimkan ke chat pribadi._\n\n*Judul Stiker: ${json.result.title}* \n*Author: ${json.result.name}*`, m);

        if (json.result.sticker) {
            for (let i = 0; i < json.result.sticker.length; i++) {
              let item = json.result.sticker[i];
              let stiker = await createSticker(item, { pack: packname, author: author });
              await conn.sendFile(m.sender, stiker, 'atet.webp', '');
            }
        }
          
    } catch (e) {
        console.log(e);
        await conn.sendFile(m.chat, fs.readFileSync(`./media/sticker/bronya.webp`), 'atet.webp', '', m);
    }
};

handler.help = ['stickertele', 'telesticker']
handler.tags = ['creator']
handler.command = /^((stickertele)|(telesticker))$/i

handler.limit = true

export default handler
