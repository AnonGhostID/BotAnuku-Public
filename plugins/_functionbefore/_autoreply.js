import { pickRandom } from '../../lib/scrape.js'

const bot = [
    'ada apa bro?',
    'apa sih',
    'apa sayang',
    'jangan ngagetin dong',
    'iya',
    'kenapa dah',
    'bodo amat',
    'gua tandain muka lu',
    'emangnya kenapa?',
    'nggak usah ribet',
    'nggak penting',
    'sok tau lu ya',
    'waduh, lagi-lagi',
    'kamu lucu deh',
    'mau gaul ya?',
    'bisa dibilang gitu',
    'terus terang aja',
    'nggak ngerti aku',
    'mending diam aja',
    'buat apa nanya mulu',
    'nggak suka gue',
    'gila kamu',
    'udah, udah',
    'jangan ganggu gue',
    'gatau deh',
    'kenapa gitu terus?',
    'iya deh',
    'lagi sibuk',
    'makan dulu ah',
    'jangan marah ya',
    'biasa aja',
    'nggak bisa diomongin',
    'kasih gue aja yang ngurus',
    'beneran nih?',
    'gue lagi males',
    'tergantung situasi',
    'nggak masalah',
    'nggak usah panjang lebar',
    'itu urusan lo',
    'nggak pake mikir',
    'gak usah ngatur',
    'gue yang bingung',
    'yaudah, gitu aja',
    'gue yang kesal',
    'nggak usah banyak omong',
    'emangnya lo siapa?',
    'sabar ya',
    'bukan urusan gue',
    'mending tidur aja',
    'wkwkwk',
    'gitu aja repot',
    'entahlah',
    'malas mikir',
    'udah ngantuk',
    'bukan, ini patrick',
    'lu itu gak diajak',
    'gua mulu ajg',
    'ya halo',
    'knp mniezt',
    'kgn gw yaaaaa',
    'ya ada apa',
    'menahan emosi',
    'males',
    'ada yang bisa dibantu ?',
    'lagi tes sinyal ya ?',
    'selalu disampingmu',
    'selalu bersamamu',
    'aku meremehkanmu',
    'terserah kamu deh',
    'puas banget hari ini',
    'bibir cuma untuk senyum',
    'sibuk nih lagi banyak kerjaan',
    'jangan berisik ya saya lagi istirahat',
    'cinta itu buta tapi aku punya oli lampu',
    'kejar setinggi bintang, walau tak dapat jadi langit juga',
    'aku ini robot tidak bisa berkata-kata',
    'kenapa sih manggil2 mulu, kangen?',
    'jangan terlalu sering bertanya, kita bukan pacar',
    'aku ini hanya bot jangan paksa aku memahami manusia sepenuhnya',
    'jangan lupa minum air putih ya',
    'hadehhh lu gabut apa gmn sih?',
    'lu jomblo ya anjg main bot mulu',
    'waktunya bayar wifi',
    'yahaha ngemlag',
    'kuota mu sekarat',
    'kesepian itu ujian tapi jangan keterusan, ngabuburit aja biar ga mikirin kesepian',
    'diskonan lagi dong belanja online',
    'apasih, gw cape dipanggil2 mulu',
    'ngabuburit skuyyyyy',
    'hai sayangkuuu',
    'hai cintakuuu',
    'apa coba',
    'hehehehe km kangen yaaaa',
    'gausah marah, saya juga ga ada niat salahin kamu kok']

	// const ping = [
	// 	'pakai prefix',
	// 	'command yg betul',
	// 	'gak btul',
	// 	'contoh : .ping',
	// 	'pake / coba',
	// 	'apa coba',
	// 	'Kecepatan Repon = Kecepatan Cahaya',
	// 	'yahaha ngemlag',
	// 	'pakai titik\n\n.ping gitu',
	// 	'waktunya bayar wifi',
	// 	'kuota mu sekarat',
	// 	'Ping : 0 miliseconds',
	// 	'sudah coba matikan dan hidupkan kembali?',
	// 	'mungkin restart router juga bisa membantu',
	// 	'cek koneksi internet kamu',
	// 	'ada gangguan jaringan di daerah kamu',
	// 	'coba gunakan perangkat lain',
	// 	'terkadang server kami memerlukan waktu tambahan untuk merespon',
	// 	'kesalahan dalam mengetik command dapat memengaruhi hasil respon',
	// 	'udah cek internet nya?',
	// 	'latency nya berapa?',
	// 	'gak bisa ngomong apa-apa, lagi fokus main game',
	// 	'Hm? oh iya ping',
	// 	'pastikan koneksi stabil dulu ya',
	// 	'kenapa ping sih yang dipanggil terus :(',
	// 	'pong~ pong~ pong~',
	// 	'Ping atau Pong lain kali aja yuk',
	// 	'Delay nya berapa?',
	// 	'Server sibuk nih, Maaf yaaa']
  
    // const p = [
    //   'Astaghfirullah, tolong yg sopan ya sodaraku' ]
  
    // const cok = [
    //   'Astaghfirullah, gaboleh ngomong kasar' ]

  const p = [
    'SOPAN DIKIT GOBLOOOK' ]

  const cok = [
    'COK DEWE!',
    'kasar bgt jancok', ]

    
    
    const h = [
      'Halo kak!',
      'Halo juga',
      'Halo sayang',
      'Iya Halo',
      'Halo juga sayang',
      'Iya kenapa?',
      'Iya ada apa?',
      'apasih manggil2 doang drtd pantek!'
    ]
    
    const anjg = [
      'lo anjeng',
      'kasar bgt jancok',
      'lo tolol',]
      
      const kntl = [
    'LO KONTOL!🖕🏻',
    'KONTOL DEWE!🖕🏻',
    'kasar amat si bang😔',
    'iya kntl gw gede😳' ]
    
    const bacot = [
      'BACOT DEWE!' ]
      
      // const bacot = [
        //   'Astaghfirullah, tolong dijaga lisannya' ]
        
        const haha = [
          'ye tawa lu pantek' ]
          
          const mksh = [
            'iya, sama-sama kak', ]
            
            const salam = [
              'Waalaikumsalam', ]
              
              
  const dam = [
    'apa sayang?',
    'kenapa sayang?',
    'kangen ya hihi'
  ]
              
export async function before(m) {
  // if (!m.isGroup) return !1
  
  if (m.text.toLowerCase() == 'adam') await this.sendMessage(m.chat, { text: pickRandom(dam) }, { quoted: m });
  if (m.text.toLowerCase() == 'dam') await this.sendMessage(m.chat, { text: pickRandom(dam) }, { quoted: m });
  
  
  
  if (m.text.toLowerCase() == 'assalamualaikum' ) await this.sendMessage(m.chat, { text: pickRandom(salam) }, { quoted: m });
  if (m.text.toLowerCase() == 'asalamualaikum' ) await this.sendMessage(m.chat, { text: pickRandom(salam) }, { quoted: m });
  if (m.text.toLowerCase() == 'assalammualaikum' ) await this.sendMessage(m.chat, { text: pickRandom(salam) }, { quoted: m });
  if (m.text.toLowerCase() == 'terima kasih' ) await this.sendMessage(m.chat, { text: pickRandom(mksh) }, { quoted: m });
  // if (m.text.toLowerCase().includes('makasih')) await this.sendMessage(m.chat, { text: pickRandom(mksh) }, { quoted: m });
  // if (m.text.toLowerCase() == 'makasih' ) await this.sendMessage(m.chat, { text: pickRandom(mksh) }, { quoted: m });
  // if (m.text.toLowerCase().includes('makasi')) await this.sendMessage(m.chat, { text: pickRandom(mksh) }, { quoted: m });
  // if (m.text.toLowerCase() == 'makasi' ) await this.sendMessage(m.chat, { text: pickRandom(mksh) }, { quoted: m });
  /*****************************************************************************************************************/
  if (m.text.toLowerCase().includes('anjing')) await this.sendMessage(m.chat, { text: pickRandom(anjg) }, { quoted: m });
  if (m.text.toLowerCase().includes('ajg')) await this.sendMessage(m.chat, { text: pickRandom(anjg) }, { quoted: m });
  if (m.text.toLowerCase() == 'hai' ) await this.sendMessage(m.chat, { text: pickRandom(h) }, { quoted: m });
  if (m.text.toLowerCase() == 'halo' ) await this.sendMessage(m.chat, { text: pickRandom(h) }, { quoted: m });
  // if (m.text.toLowerCase().includes('wkwk')) await this.sendMessage(m.chat, { text: pickRandom(haha) }, { quoted: m });
  if (m.text.toLowerCase().includes('hahaha')) await this.sendMessage(m.chat, { text: pickRandom(haha) }, { quoted: m });
  // /*****************************************************************************************************************/
  let messageSent = false;

  if ((/\bcok\b/i.test(m.text) || m.text.toLowerCase().includes('jancok')) && !messageSent) {
  await this.sendMessage(m.chat, { text: pickRandom(cok) }, { quoted: m });
  messageSent = true;
}

  if (m.text.toLowerCase().includes('bacot')) await this.sendMessage(m. chat, { text: pickRandom(bacot) }, { quoted: m });
  if (m.text.toLowerCase().includes('kontol')) await this.sendMessage(m.chat, { text: pickRandom(kntl) }, { quoted: m });
  if (m.text.toLowerCase().includes('kntl')) await this.sendMessage(m.chat, { text: pickRandom(kntl) }, { quoted: m });
  if (m.text.toLowerCase().includes('tolol')) await this.sendMessage(m.chat, { text: pickRandom(kntl) }, { quoted: m });
 /*****************************************************************************************************************/
	if (m.text.toLowerCase() == 'bot' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
  if (m.text.toLowerCase() == 'woi' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
  if (m.text.toLowerCase() == 'woe' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
  if (m.text.toLowerCase() == 'min' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
  if (m.text.toLowerCase() == 'syg' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
  if (m.text.toLowerCase() == 'sayang' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
  if (m.text.toLowerCase() == 'sayangg' ) await this.sendMessage(m.chat, { text: pickRandom(bot) }, { quoted: m });
/******************************************************************************************************************/
  if (m.text.toLowerCase() == 'p') await this.sendMessage(m.chat, { text: pickRandom(p) }, { quoted: m });
/******************************************************************************************************************/
  if (m.text.toLowerCase() == 'menu') await this.sendMessage(m.chat, { text: `command yg betul, menunya di .menu - PAKE TITIK. sebelum menu` }, { quoted: m });
  if (m.text.toLowerCase() == 'stiker') await this.sendMessage(m.chat, { text: `bikin stikernya pake perintah .stiker - PAKE TITIK!` }, { quoted: m });
  if (m.text.toLowerCase() == 'sticker') await this.sendMessage(m.chat, { text: `bikin stikernya pake perintah .sticker - PAKE TITIK!` }, { quoted: m });
	return !0
}


// const bot = ['ada apa bro ?','apa sih','apa sayang','jangan ngagetin dong','iya','kenapa dah','bodo amat','gua tandain muka lu','bukan, ini patrick','lu itu gak diajak','gua mulu ajg','menahan emosi','males','ada yang bisa dibantu ?','lagi tes sinyal ya ?','selalu disampingmu','selalu bersamamu','gini amat','tutor dek','ajarin puh','tingki wingky dipsy lala puh sepuhh','kerja bagus','titid','oi','halo rahmad','Dihina karena merasa miskin... ingat..!!! Gula ngga dia ada kenapa gitu manis apa tapi kopi ada... ya kan...!!!\nMikir...!!!','kamu tidur aja susah, apalagi bahagia','hah','surga itu di bawah telapak kaki ibu, terus kalo ibu nendang kita, apakah itu tendangan dari surga?','ga jelas kek rizki','agak bingung','mending tidur','kukira takdir ternyata cuma mampir','ada yang tidak beres']
// const ping = ['pakai prefix','command yg betul','gak btul','contoh : .ping','pake titik coba','apa coba','Kecepatan Repon = Kecepatan Cahaya','yahaha ngemlag','pakai titik\n\n.ping gitu','waktunya bayar wifi','kuota mu sekarat','Ping : 0 miliseconds','adu .testspeed ?']

// export async function before(m) {
// 	if (!m.isGroup) return !1
// 	if (m.text.toLowerCase() == 'bot') await this.reply(m.chat, bot.getRandom())
// 	if (m.text.toLowerCase() == 'ping') await this.reply(m.chat, ping.getRandom())
// 	return !0
// }