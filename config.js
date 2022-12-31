import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

/*Oᴡɴᴇʀ number*/
global.owner = [
  ['6285710677726'],
  ['6285710677726', '️OWNER - NEOZHX', true]
]
global.mods = ['6285710677726']
global.prems = ['6285710677726']
global.girlfren = ['6285710677726']

/*Website*/
global.APIs = {
 amel : 'https://melcanz.com',
 bg : 'http://bochil.ddns.net',
 bsbt : 'https://rest-beni.herokuapp.com',
 bx : 'https://bx-hunter.herokuapp.com',
 dhnjing : 'https://dhnjing.xyz',
 dzx : 'https://api.dhamzxploit.my.id',
 erdwepe : 'https://erdwpe-api.herokuapp.com',
 fdci : 'https://api.fdci.se',
 hardianto : 'https://hardianto.xyz',
 jonaz : 'https://jonaz-api-v2.herokuapp.com',
 LeysCoder : 'https://leyscoders-api.herokuapp.com',
 lolhuman : 'https://api.lolhuman.xyz',
 neoxr : 'https://api.neoxr.my.id',
 nrtm : 'https://nurutomo.herokuapp.com',
 nzcha : 'http://nzcha-apii.herokuapp.com',
 pencarikode : 'https://pencarikode.xyz',
 violetics : 'https://violetics.pw',
 xcdr : 'https://api-xcoders.site',
 xteam : 'https://api.xteam.xyz',
 zahir : 'https://zahirr-web.herokuapp.com',
 zekais : 'http://zekais-api.herokuapp.com',
 zeks : 'https://api.zeks.xyz',
 zenz : 'https://zenzapis.xyz'
}

/*Apikey*/
global.APIKeys = {
 'https://api.neoxr.my.id' : '5VC9rvNx',
 'https://api.lolhuman.xyz' : '327a6596e4c4baa20c756132',
 'https://api.xteam.xyz' : 'HIRO',
 'https://api.zeks.xyz' : 'apivinz',
 'https://hardianto-chan.herokuapp.com' : 'hardianto',
 'https://hardianto.xyz' : 'hardianto',
 'https://leyscoders-api.herokuapp.com' : 'MIMINGANZ',
 'https://melcanz.com' : 'manHkmst',
 'https://pencarikode.xyz' : 'pais',
 'https://rest-beni.herokuapp.com' : 'benniismaelapikey',
 'https://violetics.pw' : 'beta',
 'https://api-xcoders.site' : '7iyNa0qA',
 'https://zahirr-web.herokuapp.com' : 'zahirgans',
 'https://zekais-api.herokuapp.com' : 'zekais',
 'https://zenzapis.xyz' : 'f9fccfcff1'
}

/*Lolhuman*/
global.lolkey = '327a6596e4c4baa20c756132'
/*Xteam*/
global.xteamkey = 'HIRO'
/*Xcoders*/
global.xckey = '7iyNa0qA'

/*List Key
-Lolhuman-
'327a6596e4c4baa20c756132'
'bukanitucuy14315195'
'85faf717d0545d14074659ad'
'ed78c137a46873c5b8e5fe3b'

-XTEAM-
'5bd33b276d41d6b4'
'NezukoTachibana281207'
'HIRO'

-Neoxr-
'5VC9rvNx'
*/

/*Number*/
global.nomorbot = '6281213187664'
global.nomorown = '6285710677726'
global.namebot = 'NeoBotz'
global.nameown = '「 Oᴡɴᴇʀ 」'

/*Watermark*/
global.wm = '                「 NeoBotz あ⁩ 」'
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ NeoBotz'
global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`
global.titlebot = `⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`

/*Thumbnail*/
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

/*Link*/
global.sig = 'https://www.instagram.com/neohihin21'
global.sgh = 'https://www.github.com/neo754'
global.sgc = '-'
global.sdc = '-'
global.snh = 'https://www.tiktok.com/@neohihin21'
global.sfb = '-/'
global.syt = '-'

/*Nsfw*/
global.optsnsfw = true
global.premnsfw = true

/*Type*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

/*Fake*/
global.fsizedoc = '9'.repeat(9)
global.fpagedoc = '9'.repeat(3)

/* Fake adReplyS*/
global.adReplyS = {
		fileLength: '999', seconds: '999',
			contextInfo: {
				forwardingScore: '999',
				externalAdReply: {
						showAdAttribution: true,
						title: '👋 Halo ᴋᴀᴋ :3 ',
						body: 'WhatsApp Bot',
						mediaUrl: '-',
						description: 'KAHFI XD',
						previewType: 'PHOTO',
						thumbnail: await fs.readFileSync('./thumbnail.jpg'),
						sourceUrl: 'https://github.com/',
				}
			}
		}
  /* Fake adReply */
		global.adReply = {
		fileLength: '999', seconds: '999',
			contextInfo: {
				forwardingScore: '999',
				externalAdReply: {
						body: 'WhatsApp Bot',
						containsAutoReply: true,
						mediaType: 1,
						mediaUrl: '-',
						renderLargerThumbnail: true,
						showAdAttribution: true,
						sourceId: 'Neozhx',
						sourceType: 'PDF',
						previewType: 'PDF',
						sourceUrl: '-',
						thumbnail: await fs.readFileSync('./thumbnail.jpg'),
						thumbnailUrl: 'https://cerdasin.netlify.app/img/thumbnail.jpg',
						title: '👋 Halo ᴋᴀᴋ :3 '
				}
			}
		}
  /* Fake IG */
		global.fakeig = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: 'https://www.instagram.com',
						mediaType: "VIDEO",
						description: "Follow: " + 'https://www.instagram.com/neohihin21',
						title: '👋 Halo ᴋᴀᴋ :3 ',
						body: 'WhatsApp Bot',
						thumbnailUrl: await fs.readFileSync('./thumbnail.jpg'),
						sourceUrl: '-'
					}
				}
			}
  /* Fake FB */
			global.fakefb = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: 'https://www.facebook.com',
						mediaType: "VIDEO",
						description: "Follow: " + 'https://www.instagram.com/neohihin21',
						title: '👋 Halo ᴋᴀᴋ :3 ',
						body: 'WhatsApp Bot',
						thumbnailUrl: await fs.readFileSync('./thumbnail.jpg'),
						sourceUrl: '-'
					}
				}
			}
  /* Fake TT */
			global.faketik = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: 'https://www.tiktok.com',
						mediaType: "VIDEO",
						description: "Follow: " + 'https://www.instagram.com/neohihin21',
						title: '👋 Halo ᴋᴀᴋ :3 ',
						body: 'WhatsApp Bot',
						thumbnailUrl: await fs.readFileSync('./thumbnail.jpg'),
						sourceUrl: '-'
					}
				}
			}
  /* Fake YT */
			global.fakeyt = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: 'https://www.youtube.com/@MaxxyBotz',
						mediaType: "VIDEO",
						description: "Follow: " + 'https://www.instagram.com/kahfiofc',
						title: '👋 Halo ᴋᴀᴋ :3 ',
						body: 'WhatsApp Bot',
						thumbnailUrl: await fs.readFileSync('./thumbnail.jpg'),
						sourceUrl: '-'
					}
				}
			}
  /* Hiasan */
		global.dmenut = '❏═┅─『'
		global.dmenub = '│•'
		global.dmenub2 = '│•'
		global.dmenuf = '╰–━═━––━═━–⳹'
		global.dashmenu = '☰ *D A S B O A R D* ☰'
		global.htki = '❏═┅─『'
		global.htka = '』─┅═❏'
		
  /* Thumbnail */
		global.hwaifu = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hbeach = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.thumbnailUrl = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hoppai = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hloli = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hyuri = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hneko = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hLokun = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.hbunny = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.thumbs = ['https://cerdasin.netlify.app/img/thumbnail.jpg']
		global.thumb = 'https://cerdasin.netlify.app/img/thumbnail.jpg'
		global.imagebot = 'https://cerdasin.netlify.app/img/thumbnail.jpg'
		global.thumbdoc = 'https://cerdasin.netlify.app/img/thumbnail.jpg'
		global.logo = 'https://cerdasin.netlify.app/img/thumbnail.jpg'
		
  /* Begin */
		global.ucapan = 'Morning'
		global.ephemeral = '86400'
		
  /* Global Random */
		global.doc = 'text/rtf'
		global.fakes = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				pollCreationMessage: {
					name: '👋 Halo ᴋᴀᴋ :3 '
				}
			}
		}
		global.knimg = 'https://cerdasin.netlify.app/img/thumbnail.jpg'
		
/*Watermark*/
global.lopr = '🅟'
global.lolm = 'Ⓛ'
global.cmenut = '❏═┅─『'
global.cmenuh = '』─┅═❏'
global.cmenub = '│•'
global.cmenuf = '╰–━═━––━═━–⳹'
global.pmenus = '〆'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.htjava = '⫹⫺'
global.emojis = '🔖'
global.packname = '𝗠𝗮𝗱𝗲 𝗕𝘆'
global.stickpack = packname
global.author = 'NEOZHX乂'
global.stickauth = author + '\nwa.me/' + nomorbot
global.multiplier = 69

/*Pesan*/
global.eror = '*E R R O R*'
global.wait = '*W A I T*'
global.render = '*R E N D E R*'
global.webs = 'https://instagram/neohihin21'
global.gcwangsaf = '⫹⫺ _*BELUM ADA :v*_'

/*Donasi*/
global.saweria = 'https://saweria.com/Hihin'
global.dana = '085710677726'
global.pulsa = '085710677726'
global.trakteer = '-'
global.paypal = '-'
global.gopay = '-'
global.pdana = '085380166282'
global.povo = '-'
global.pgopay = '-'
global.ppulsa = '085710677726'
global.ppulsa2 = '085710677726'
global.psaweria = 'https://saweria.com/Hihin'

/*Emoji*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      Fox: '🦊',
      agility: '🤸‍♂️',
      anggur: '🍇',
      apel: '🍎',
      aqua: '🥤',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      batu: '🧱',
      berlian: '💎',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      botol: '🍾',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      centaur: '🎠',
      chicken: '🐓',
      coal: '⚱️',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      eleksirb: '🧪',
      elephant: '🐘',
      emasbatang: '🪙',
      emasbiasa: '🥇',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      foodpet: '🍱',
      fox: '🦊',
      gardenboc: '🗳️',
      gardenboxs: '📦',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      griffin: '🦒',
      health: '❤️',
      healtmonster: '❤‍🔥',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      jeruk: '🍊',
      kaleng: '🥫',
      kardus: '📦',
      kayu: '🪵',
      ketake: '💿',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      koinexpg: '👛',
      kucing: '🐈',
      kuda: '🐎',
      kyubi: '🦊',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      makanancentaur: '🥗',
      makanangriffin: '🥙',
      makanankyubi: '🍗',
      makanannaga: '🍖',
      makananpet: '🥩',
      makananphonix: '🧀',
      mana: '🪄',
      mangga: '🥭',
      money: '💵',
      mythic: '🗳️',
      mythic: '🪄',
      naga: '🐉',
      pancingan: '🎣',
      pet: '🎁',
      petFood: '🍖',
      phonix: '🦅',
      pickaxe: '⛏️',
      pisang: '🍌',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      rubah: '🦊',
      sampah: '🗑️',
      serigala: '🐺',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      tiketcoin: '🎟️',
      trash: '🗑',
      umpan: '🪱',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
 }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright('Update config.js'))
  import(`${file}?update=${Date.now()}`)
})
