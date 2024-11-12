let handler = async (m, { text, command, usedPrefix }) => {
	if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
	m.reply(`"${[
		'Mungkin',
		'Tidak juga',
		'Tidak keduanya',
		'Kurasa tidak',
		'Ya',
		'Betul',
		'Gatau Bingung',
		'Gatau ah, cape'
	].getRandom()}."`)
}

handler.menufun = ['kerang', 'kerangajaib'].map(v => v + ' <teks>')
handler.tagsfun = ['kerang']

handler.command = /^((kulit)?kerang(ajaib)?)$/i

export default handler
