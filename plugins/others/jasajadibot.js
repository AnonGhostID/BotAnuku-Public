import db from '../../lib/database.js'

let handler = async (m, { conn, command }) => {
	let txt = db.data.datas.teksjadibot || `❤‍🩹 *[ Chat Dengan Creator ]*
wa.me/6281238030439

╔╣ *PREMIUM USER*
║ • Infinity Limit
║ • Full Akses Private Chat
╚══╣ *Harga :* Rp.10.000 / bulan

╔╣ *SEWA BOT*
║ • Dapat Premium
║ • Bebas Invit ke 1 Grup
╚══╣ *Harga :* Rp.15.000 / bulan

╔╣ *JASA RUN BOT*
║ • Nebeng Run SC Via RDP
║ • SC wajib *plugin*, bukan case
╚══╣ *Harga :* Rp.20.000 / bulan

╔╣ *JADI BOT*
║ • Jadi Bot Anuku, Always ON
║ • Custom Namabot, Owner, rules, dll.
║ • Bisa Req Tampilan atau Fitur
╚══╣ *Harga :* Rp.25.000 / bulan

- Pembayaran via *OVO / GoPay / Blu (BCA Digital)*
  *( tidak ada opsi lain )*
  ke nomor 082336660226
- Whatsapp Multi Device
- Run via RDP (Always ON)
- Request Fitur? *Chat Link Creator di atas.*`
	//m.reply(txt)
	conn.relayMessage(m.chat,  {
		requestPaymentMessage: {
			currencyCodeIso4217: 'IDR',
			amount1000: 25000 * 1000,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: txt,
					contextInfo: {
						mentionedJid: [m.sender],
						externalAdReply: {
							showAdAttribution: true
						}
					}
				}
			}
		}
	}, {})
}

handler.menugroup = ['jadibot']
handler.tagsgroup = ['group']
handler.command = /^(jadibot)$/i

export default handler