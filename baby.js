// - - - - - 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 - - - - -\\
  //   Creditos:                      \\
 //            Thechoute               \\
////////////// 𝕿𝖍𝖊 𝕮𝖍𝖔𝖚𝖙𝖊  \\\\\\\\\\\\\\\
const { 
    WAConnection,
    MessageType,
    Presence, 
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    ChatModification,
    waChatKey,
    WA_DEFAULT_EPHEMERAL,
    mentionedJid,
    prepareMessageFromContent, 
    Browsers,
    processTime
    } = require("@adiwajshing/baileys")
  const crypto = require("crypto-js");        
  const CryptoJS = require("crypto-js");
  const fs = require('fs');
  const prefix = '.'
  const moment = require("moment-timezone");
  const yts = require('yt-search')
  const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
  const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
  const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
  const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
  const conn = require("./lib/connect")
  const wa = require("./lib/wa")
  const { color } = require("./lib/color");
  const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./lib/functions");
  const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
  const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
  //const {convertSticker} = require("./lib/swm.js")
  const {y2mateA, y2mateV} = require('./lib/y2mate.js')
  const { isFiltered, addFilter } = require('./lib/Addfilter')
  const config = JSON.parse(fs.readFileSync("./config.json"))
  const owner = config.owner
  const mods = config.mods
  const fake = 'Leon'
  var public = config.public
  
  //Redes Sociales
  const { gpwha, ytchoute, gitchoute, instachoute, whachoute,} = require ('./lib/redes')
  const { reglas } = require ('./lib/reglas')
  //const {infocreador} = require ('./lib/exportaciones/infocreador')
  
  // - - 𝑬𝑿𝑷𝑶𝑹𝑻𝑨𝑪𝑰𝑶𝑵𝑬𝑺
  //const { menu } = require ('./lib/menus/menu')
  const { cgrupos } = require ('./lib/menus/cg')
  const {bechoso} = require ('./lib/exportaciones/bechoso')
  const { bot } = require ('./lib/exportaciones/bot')
  //const { infobot } = require ('./lib/exportaciones/infobot')
  const { vor } = require ('./lib/exportaciones/vor')
  const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z } = require ('./lib/exportaciones/verdad')
  const {R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, } = require ('./lib/exportaciones/retos')
  //ᴘᴀʀᴀ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ʙᴏᴛᴏɴᴇꜱ
  const { cadmin, juegos, cmiembros, owners} = require ('./lib/botones')
  const { linkgp } = require ('./lib/exportaciones/linkgp')
  const { cowner } = require ('./lib/exportaciones/owner')
  //Connet
  conn.connect()
  const leo = conn.leo
  /* 𝕱𝖚𝖓𝖈𝖎𝖔𝖓𝖊𝖘 | 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 | 𝕿𝖍𝖊𝕮𝖍𝖔𝖚𝖙𝖊*/
  //𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖔
  const getRegisteredRandomId = () => {
      return _registered[Math.floor(Math.random() * _registered.length)].id
      }
      const addRegisteredUser = (userid, sender, age, time, serials) => {
      const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
      _registered.push(obj)
      fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
      }
      const checkRegisteredUser = (sender) => {
      let status = false
      Object.keys(_registered).forEach((i) => {
      if (_registered[i].id === sender) {
      status = true
      }
      })
          return status
      }
  //Fin de Funcion del Registro\\
  
  leo.on('group-participants-update', async (anu) => {
      const _welcom = JSON.parse(fs.readFileSync('./src/welkom.json'))
          if (!_welcom.includes(anu.jid)) return
          try {
              const mdata = await leo.groupMetadata(anu.jid)
              console.log(anu)
              if (anu.action == 'add') {
                  num = anu.participants[0]
                  try {
                      ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                  } catch {
                      ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                  }
                  teks = `Hola @${num.split('@')[0]}\nBienvenido/a al Grupo *${mdata.subject}*
  *_LEE LAS REGLAS DEL GRUPO_*
  Canal del creador del bot:
  youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg`
                  
                  let buff = await getBuffer(ppimg)
                  leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
                  } else if (anu.action == 'promote') {
                  num = anu.participants[0]
                  try {
                      ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                  } catch {
                      ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                  }
                  teks = `≡ *NUEVO ADMIN*
  ┌──────────────
  ├ *Nombre* : @${num.split('@')[0]}
  ├ *Número* : ${num.replace('@s.whatsapp.net', '')}
  ├ *Mensaje* : Admin nuevo.
  └──────────────`
                  let buff = await getBuffer(ppimg)
                  leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
                  } else if (anu.action == 'demote') {
                  num = anu.participants[0]
                  try {
                      ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                  } catch {
                      ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                  }
                  teks = `≡ *ADMIN DEGRADADO*
  ┌──────────────
  ├
  ├ *Nombre* : @${num.split('@')[0]}
  ├ *Número* : ${num.replace('@s.whatsapp.net', '')}
  ├ *Mensaje* : Un admin menos.
  └──────────────`
                  let buff = await getBuffer(ppimg)
                  leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
              } else if (anu.action == 'remove') {
                  num = anu.participants[0]
                  try {
                      ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
                  } catch {
                      ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                  }
                  teks = `Adios @${num.split('@')[0]} no se te extrañara :D`
                  let buff = await getBuffer(ppimg)
                  leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
              }
          } catch (e) {
              console.log('Error : %s', color(e, 'red'))
          }
      })
  // Funcion de eliminar   
      const kick = function (from, orangnya) {
          for (let i of orangnya) {
            leo.groupRemove(from, [i]);
          }
        }
  
  
  leo.on('chat-update', async (choute) => {
      try {	  
      if (!choute.hasNewMessage) return
      if (!choute.messages) return
      if (choute.key && choute.key.remoteJid == 'status@broadcast') return
      
      choute = choute.messages.all()[0]
      if (!choute.message) return
      global.blocked
      choute.message = (Object.keys(choute.message)[0] === 'ephemeralMessage') ? choute.message.ephemeralMessage.message : choute.message
      const from = choute.key.remoteJid
      const type = Object.keys(choute.message)[0]        
      const quoted = type == 'extendedTextMessage' && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
      const typeQuoted = Object.keys(quoted)[0]
      const content = JSON.stringify(choute.message)
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
      const body = choute.message.conversation || choute.message[type].caption || choute.message[type].text || ""
      chats = (type === 'conversation') ? choute.message.conversation : (type === 'extendedTextMessage') ? choute.message.extendedTextMessage.text : ''
      budy = (type === 'conversation' && choute.message.conversation.startsWith(prefix)) ? choute.message.conversation : (type == 'imageMessage') && choute.message.imageMessage.caption.startsWith(prefix) ? choute.message.imageMessage.caption : (type == 'videoMessage') && choute.message.videoMessage.caption.startsWith(prefix) ? choute.message.videoMessage.caption : (type == 'extendedTextMessage') && choute.message.extendedTextMessage.text.startsWith(prefix) ? choute.message.extendedTextMessage.text : ''
      const reply = (teks) => {	
          leo.sendMessage(from, teks, text, {sendEphemeral: true, quoted: choute})
          }
  
      if (prefix != "") {
      if (!body.startsWith(prefix)) {
      cmd = false
      comm = ""
      } else {
      cmd = true
      comm = body.slice(1).trim().split(" ").shift().toLowerCase()
      }
      } else {
      cmd = false
      comm = body.trim().split(" ").shift().toLowerCase()
      }
  
  
  const command = comm
    const crypto = require('crypto')
    const arg = chats.slice(command.length + 2, chats.length)
    const args = budy.trim().split(/ +/).slice(1)
    const isCmd = budy.startsWith(prefix)
    const q = args.join(' ')
    const soyYo = leo.user.jid
    const botNumber = leo.user.jid.split("@")[0]
    const ownerNumber = ['18299897014@s.whatsapp.net']
    const isGroup = from.endsWith('@g.us')
    const sender = choute.key.fromMe ? leo.user.jid : isGroup ? choute.participant : choute.key.remoteJid
    const senderNumber = sender.split("@")[0]
              const jid = sender
    const meNumber = leo.user.jidi
    const itsMe = ownerNumber == botNumber
    const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
    const groupMetadata = isGroup ? await leo.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
    const isAdmin = groupAdmins.includes(sender) || false
    const botAdmin = groupAdmins.includes(leo.user.jid)
    const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
    const isBan = cekBannedUser(sender, ban)
    const isRegister = checkRegisteredUser(sender)
    const isWelkom = isGroup ? welkom.includes(from) : false
    const isAntiLink = isGroup ? antilink.includes(from) : false
    const getLevel1 = getLevelingLevel(sender)
    const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? leo.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : leo.sendMessage(from, teks.trim(), extendedText, {quoted: choute, contextInfo: {"mentionedJid": memberr}})
      }
      const usedCommandRecently = new Set()
      
  
  const nivelActual = getLevelingLevel(sender)
              var rango = 'Aspirante'
              if (nivelActual == 10) {
                  rango = '*Aprendiz*'
              } else if (nivelActual == 20) {
                  rango = '*Novato*'
              } else if (nivelActual == 30) {
                  rango = '*Promesa*'
          } else if (nivelActual == 30) {
                  rango = '*Profesional*'
              } else if (nivelActual == 100) {
                  rango = '*Veterano*'
              } else if (nivelActual == 150) {
                  rango = '*Elite*'
              } else if (nivelActual > 200) {
                  rango = '*Elite Global🗡*'
              }
  
  
      const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
      leo.sendMessage(from, hasil, type, options).catch(e => {
      fetch(link).then((hasil) => {
      leo.sendMessage(from, hasil, type, options).catch(e => {
      leo.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error al descargar el archivo_')
        console.log(e)
      })
      })
      })
      })
      }
  
  
  const moment = require('moment-timezone')
  const jm = moment.tz('America/Santo_Domingo').format('HH:mm:ss')
  //BOTONES
  const boton = (para, contenido, footer, botones = [], choute = {}) => {
      const buttonMessage = {
      contentText: contenido,
      footerText: footer,
      buttons: botones,
      headerType: 1
      }
      leo.sendMessage(para, buttonMessage, MessageType.buttonsMessage, choute)
      }
  
  
  
  
  const infobot  = `*INFOBOT*
  *Creador* 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 
  *Nombre del bot:* 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔
  *Navegador:* ${leo.browserDescription[1]}
  *Servidor:* ${leo.browserDescription[0]}
  *Version:* ${leo.browserDescription[2]}
  *Velocidad:* ${process.uptime()}
  *Sistema operativo:* ${leo.user.phone.device_manufacturer}
  *Version de WhatsApp:* ${leo.user.phone.wa_version}
  *Numero del dueño:* wa.me/18299897014
  *Nivel de Bateria:* 
  *Tiempo de actividadd:*`
  
  const chui = 
  `┌────「 *Baby Bechoso* 」─
  🎓 *Nombre:* _${pushname}_
  🎓 *Nivel:* ${getLevel1}
  🎓 *XP:* ${getLevelingXp(sender)}
  🎓 *Hora:* ${jm}
  └────────────
  Si quieres saber como tener este bot, subcribete al canal pronto el creador subira como ponerlo; 
  _https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg_
  ┌────「 *INFO DEL BOT*」─
  🎓 *𝙽𝚘𝚖𝚋𝚛𝚎 :* BabyBechoso
  🎓 *𝙲𝚛𝚎𝚊𝚍𝚘𝚛 :* wa.me/18299897014
  🎓 *𝙾𝚂 :* ${leo.user.phone.device_manufacturer}
  🎓 *𝚅𝚎𝚛𝚜𝚒𝚘𝚗 :* ${leo.browserDescription[2]}
  🎓 *𝚃𝚘𝚝𝚊𝚕 𝚍𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:* XX
  🎓 *𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 :* ${leo.user.phone.wa_version}
  🎓 *𝙽𝚊𝚟𝚎𝚐𝚊𝚍𝚘𝚛 :* ${leo.browserDescription[1]}
  🎓 *𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛:* ${leo.browserDescription[0]}
  └────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
  `
  
  const infocreador = `
  ┌────「 *INFO CREADOR* 」─
  🎓 *Nombre:* 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 
  🎓 *Instagram:* ${instachoute}
  🎓 *Github:* ${gitchoute}
  🎓 *YouTube:* ${ytchoute}
  🎓 *YouTube:* ${prefix}creador
  └────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」`
  
  const nivel = `
  ┌────「 *NIVEL ACTUAL* 」─
  🎓 *Nombre:* ${pushname} 
  🎓 *XP* ${getLevelingXp(sender)}
  🎓 *Nivel* ${getLevel1} ➫ ${getLevelingLevel(sender)}
  🎓 *Rango:* ${rango}
  └────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
  `
  
      ///Baby
    baby = {
      wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
      success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
      ferr: 'Intentalo de nuevo mas tarde',
      error: {
      stick: 'Mmmmm',
      Iv: 'Mmmmm'
      },
      only: {
          group: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.',
          benned: '𝐄𝐫𝐞𝐬 𝐮𝐧 𝐮𝐬𝐚𝐫𝐢𝐨 𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭.',
          ownerG: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.',
          ownerB: '[𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐁𝐨𝐭 \nEscribe: .creador \nPara contactar con el ',
          admin: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐬𝐨𝐥𝐨 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.',
          Badmin: '𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨',
          usrReg: `𝐍𝐨 𝐞𝐬𝐭𝐚𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 \n 𝐏𝐚𝐫𝐚 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞 𝐮𝐭𝐢𝐥𝐢𝐳𝐚 *${prefix}reg*`
        }
      }
  /*  
    if (!isRegister) return reply(baby.only.usrReg)
    if (!isGroup) return reply(baby.only.group)
    if (!isAdmin) return reply(baby.only.admin)
    if (!botAdmin) return reply(baby.only.Badmin)
    if (isBan) return reply (baby.only.benned)  
  
  */
//ᴘᴀʀᴀ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ʙᴏᴛᴏɴᴇꜱ
//ᴘᴀʀᴀ ᴀᴅᴍɪɴᴇꜱ ᴅᴇʟ ɢʀᴜᴘᴏ  
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`admin`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${cadmin}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}
//ᴘᴀʀᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴍɪᴇᴍʙʀᴏꜱ
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`miembros`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${cmiembros}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}
//ᴍᴇɴᴜ ᴅᴇ ꜱᴛɪᴄᴋᴇʀ
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`sticker`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${csticker}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}
//ᴊᴜᴇɢᴏꜱ
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`juegos`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${juegos}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}
//OWner
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`owner`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${cowner}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}
//ᴄʀᴇᴅɪᴛᴏꜱ
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`creador`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
await wa.sendContact(from, '18299897014', "𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊")
addFilter(from)
addLevelingLevel(sender, 5)	}}
//LINK DE GP DE WS
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`whatsApp`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${linkgp}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}

//Como tener el bot
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`bot`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `${bot}`})
addFilter(from)
addLevelingLevel(sender, 5)	}}



  switch (command) {
  case 'reg':   
              if (isRegister) return reply('*Tu Ya Estas Registrado, o No Lo Recuerdas?*')
              if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix}reg *Nombre|Edad* con el *|* que los divide.`)
              const nombre = q.substring(0, q.indexOf('|') - 0)
              const edad = q.substring(q.lastIndexOf('|') + 1)
              const momento = require('moment-timezone')
              const time = momento.tz('America/Santo_Domingo').format('HH:mm:ss')
              if(isNaN(edad)) return await reply('*La edad es numero no letras*')
              if (nombre.length >= 10) return reply(`Mi escriba un nombre con menos de 10 letras, no queremos un puente de letras`)
              if (edad > 30) return reply(`Pero-\n*Tienes mas de  30 años, no te puedes registrar, mejor cuida tus nietos :D*`)
              if (edad < 13) return reply(`Eres menor de 13 años, mejor vete a limpiarte el culo, que para ti no hay registro.\n*Si me das algo puedo hacer la vista gorda :D*`)
              try {
                  ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                  } 
                  catch {
                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                  }
                  veri = sender                                                
              addRegisteredUser(sender, pushname, nombre, edad, time )
                  capt = `
  
  ┌────「 *REGISTRADO* 」─
  🎓 𝐔𝐒𝐄𝐑: _${pushname}_
  🎓 𝐍𝐎𝐌𝐁𝐑𝐄: _${nombre}_
  🎓 𝐄𝐃𝐀𝐃: _${edad}_
  🎓 𝐍𝐔𝐌𝐄𝐑𝐎: wa.me/${sender.split("@")[0]}
  🎓 𝐇𝐎𝐑𝐀: _${time}_
  └────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
  Verificación completa usa *${prefix}menu* para ver el Menu`
                  
                  daftarimg = await getBuffer(ppimg)
                  leo.sendMessage(from, daftarimg, image, {quoted: choute, caption: capt})
                  break                        
                       
              
  
  case 'welcome':
  case 'bv':
  case 'bienvenidas':
  case 'bienvenida':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (args.length < 1) return reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              if ((args[0]) === 'on') {
              if (isWelkom) return reply('La bienvenida ya esta activa en este grupo')
              welkom.push(from)
              fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
              reply(`Bienvenida activada exitosamente para *${groupMetadata.subject}*`)
              } else if ((args[0]) === 'off') {
              if (!isWelkom) return reply('Bienvenida ya esta desactivada')
              welkom.splice(from, 1)
              fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
              reply(`La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
              } else {
              reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              }
              break
  
  case 'antilink':
  case 'antigp':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)  
              if (!isGroup) return reply(baby.only.group)
              if (args.length < 1) return reply(`✳️ *ANTILINK *\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              if ((args[0]) === 'on') {
              if (isAntiLink) return reply('✳️ Antilink ya está activo')
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(`✅ Se activo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
              } else if ((args[0]) === 'off') {
              if (!isAntiLink) return reply('✳️ Antilink ya está desactivado')
              antilinksplice(from, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(`Se desactivo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
              } else {
              reply(`*ANTIGRUPOS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              }
              break
                      
  
  case 'promote':
  case 'promover':
  case 'rol':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (!botAdmin) return reply(baby.only.Badmin)  
              if (choute.message.extendedTextmessage === undefined || choute.message.extendedTextmessage === null) return reply('✳️ Mencione o responde al mensaje del usuario para promoverlo a administrador')
              mentioned = choute.message.extendedTextmessage.contextInfo.mentionedJid
              if (mentioned.length > 1) {
              teks = 'Ahora sos admin :D:\n'
              for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
              }
              leo.groupMakeAdmin(from, mentioned)
              mentions(teks, mentioned, true)
                                                  
              } else {
              mentions(`@${mentioned[0].split('@')[0]} Felicitaciones eres admin del grupo *${groupMetadata.subject}*`, mentioned, true)
              leo.groupMakeAdmin(from, mentioned)
              }
              break
  
  case 'demote':
  case 'degradar':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (!botAdmin) return reply(baby.only.Badmin)  
              if (choute.message.extendedTextmessage === undefined || choute.message.extendedTextmessage === null) return reply('Menciona o responde al mensaje del usuario para degradarlo')
              mentioned = choute.message.extendedTextmessage.contextInfo.mentionedJid
              if (mentioned.length > 1) {
              teks = 'Ya no eres admin del grupo :\n'
              for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
              }
              mentions(teks, mentioned, true)
              leo.groupDemoteAdmin(from, mentioned)
              } else {
              mentions(`@${mentioned[0].split('@')[0]} Ya no eres mas admin del grupo`, mentioned, true)
              leo.groupDemoteAdmin(from, mentioned)
              }
              break
  
  case 'hidetag':
  case 'mencion':
      
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              await wa.hideTag(from, args.join(" "))
              break
  
  case 'miembros':
  case 'todos':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)    
              leo.updatePresence(from, Presence.composing)
              members_id = []
              teks = (args.length > 1) ? body.slice(8).trim(): ''
              teks += ` *𝐓𝐨𝐭𝐚𝐥* : ${groupMembers.length}\n`
              for (let mem of groupMembers) {
              teks += `╠ @${mem.jid.split('@')[0]}\n`
              members_id.push(mem.jid)
              }
              mentions('*𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒  𝐃𝐄𝐋  𝐆𝐑𝐔𝐏𝐎*\n╔════ 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔\n╠ ● '+teks+'╠═══════ *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* ════════\n╚══════', members_id, true)
              addFilter(from)
              break
  
  case 'kick':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (!botAdmin) return reply(baby.only.Badmin)
              if(!q)return reply(`Pero animal mencioname a quien debo eliminar.\n\n Ejemplo : ${prefix + command} @tag`)
              y = q.split('@')[1] + '@s.whatsapp.net'
              leo.groupRemove(from, [y])
              reply(`Al toque elimino a la rata de mierda`)
              break 
              
  
  case 'agregar':
  case 'añadir':
  case 'add':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!botAdmin) return reply(baby.only.Badmin)
              if (args.length < 1) return reply('Y el numero?')
              if (args[0].startsWith('99')) return reply('Debes de utilizar el prefijo del pais.')
              try {
              num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
              leo.groupAdd(from, [num])
              } catch (e) {
              console.log('Error :', e)
              return leo.sendMessagee(from, 'Modo privado dice:v', messageType.text)
              }
              break
  
  case 'ban':
              if (!isOwner) return reply(baby.only.ownerB)
              //if (!itsMe) return reply(baby.only.ownerB)
              mentioned = choute.message.extendedTextmessage.contextInfo.mentionedJid
              if (mentioned.length !== 0){
              for (let i = 0; i < mentioned.length; i++){
              addBanned(mentioned[0], args[1], ban)
              }
              mentions(`@${mentioned[0].split('@')[0]} Estas baneado no podes usar el bot :D`, mentioned, true)
              } else if (isQuotedMsg) {
              if (quotedMsg.sender.match('18299897014')) return reply(`🤨`)
              addBanned(quotedMsg.sender, args[1], ban)
              mentions(`@${mentioned[0].split('@')[0]} Estas baneado no podes usar el bot :D`, mentioned, true)
              } else if (!isNaN(args[1])) {
              addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
              mentions(`@${mentioned[0].split('@')[0]} Estas baneado no podes usar el bot :D`, mentioned, true)
              }
              break
  
  case 'unban':
              if (!isOwner) return reply(baby.only.ownerB)
              if (!itsMe) return reply(baby.only.owner)
              mentioned = choute.message.extendedTextmessage.contextInfo.mentionedJid
              if (mentioned.length !== 0){
              for (let i = 0; i < mentioned.length; i++){
              unBanned(mentioned[i], ban)
              }
              mentions(`@${mentioned[0].split('@')[0]} Haz sido desbaneado, ia podes volver a usar el bot`, mentioned, true)
              }if (isQuotedMsg) {
              unBanned(quotedMsg.sender, ban)
              mentions(`@${mentioned[0].split('@')[0]} Haz sido desbaneado, ia podes volver a usar el bot`, mentioned, true)
              } else if (!isNaN(args[0])) {
              unBanned(args[0] + '@s.whatsapp.net', ban)
              mentions(`@${mentioned[0].split('@')[0]} Haz sido desbaneado, ia podes volver a usar el bot`, mentioned, true)
              }
              break
  
  case 'grupo':
              addFilter(from)
              if (!isGroup) return await reply(baby.only.group)
              if (!isAdmin) return await reply(baby.only.admin)
              if (!botAdmin) return await reply(baby.only.Badmin)
              if (args[0] === 'abrir') {
              leo.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
              wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
              })
              } else if (args[0] === 'cerrar') {
              leo.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
              wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
              })
              } else {
              await reply(`Example: ${prefix}${command} open/close`)
              }
              break
  
  case 'nuevonombre':
  case 'changename':
              addFilter(from)
              if (!isGroup) return await reply(baby.only.group)
              if (!isAdmin) return await reply(baby.only.admin)
              if (!botAdmin) return await reply(baby.only.Badmin)
              if (!isRegister) return reply(baby.only.usrReg)
              var newName = args.join(" ")
              leo.groupUpdateSubject(from, newName).then(() => {
              wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES " + newName, "GROUP SETTING")
              })
              break
  
  case 'nuevadescripcion':        
  case 'changedescripcion':
              addFilter(from)
              if (!isGroup) return await reply(baby.only.group)
              if (!isAdmin) return await reply(baby.only.admin)
              if (!botAdmin) return await reply(baby.only.Badmin)
              var newDesc = args.join(" ")
              leo.groupUpdateDescription(from, newDesc).then(() => {
              wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES  " + newDesc, "GROUP SETTING")
              })
              break
  
  
  case 'visto':
  case 'sider':
              if (!isRegister) return reply(baby.only.usrReg)
              if (!isGroup) return reply(baby.only.group)
              infom = await leo.messageInfo(from, choute.message.extendedTextmessage.contextInfo.stanzaId)
              tagg = []
              teks = `*𝐄𝐬𝐭𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐯𝐢𝐬𝐭𝐨 𝐩𝐨𝐫:*\n\n`
              for(let i of infom.reads){
              teks += '@' + i.jid.split('@')[0] + '\n'
              teks += `𝐇𝐨𝐫𝐚: ` + moment(`${i.t}` * 1000).tz('America/Santo_Domingo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
              tagg.push(i.jid)
              }
              mentions(teks, tagg, true)
              break
  
  case 'listadmins':
  case 'listadmin':
  case 'adminlist':
  case 'adminslist': 
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
              no = 0
              for (let admon of groupAdmins) {
              no += 1
              adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
              }
              mentions(adm, groupAdmins, true)
              break
  
  /*case 'play':
  case 'ymp3':	
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              if (!q) return reply('*Que audio quieres descargar?.....*')
              let plist = await yts(q)
              sendFileFromUrl(plist.all[0].image, image, {quoted: choute, caption: '_*Si no ves la lista de descarga de tu audio, prueba usando el comando play2*_'})
              
              let play2v = leo.preparemessageFromContent(from,{
                      "listmessage": {
                                "title": "🌬 *DESCARGAS DE AUDIO!!*",
                                "description": `\n✍🏻Informacion de su Audio.\n\n*°Subido hace* ${plist.all[0].ago}\n\n*°Vistas :* ${plist.all[0].views}\n\n*°Duracion :* ${plist.all[0].timestamp}\n\n*°Canal :* ${plist.all[0].author.name}\n\n*°Link del Canal :* ${plist.all[0].author.url}`,
                                "buttonText": "SELECCIONA UN FORMATO DE DESCARGA",
                                "listType": "SINGLE_SELECT",
                                "sections": [
                                  { "title": `[ ${plist.all[0].title} ]`,
                                    "rows": [
                                      {
                                        "title": '🎧Descarga el Audio Original',
                                        "description": '- Audio en mp3 sin modificacion de duracion -',
                                        "rowId": `${plist.all[0].title}@list`
                                      },
                                      {
                                        "title": '🎙Descarga el Audio Original en Nota de Voz',
                                        "description": '- Audio en nota de voz sin modificacion de duracion -',
                                        "rowId": `${plist.all[0].title}@list1`
                                      },
                                      {
                                        "title": '🎧Descarga el Audio Original con duracion cambiada',
                                        "description": '- Audio en mp3 con modificacion de duracion -',
                                        "rowId": `${plist.all[0].title}@list2`
                                      },
                                      {
                                        "title": '🎙Descarga el Audio Original en Nota de Voz con duracion cambiada',
                                        "description": '- Audio en nota de voz con modificacion de duracion -',
                                        "rowId": `${plist.all[0].title}@list3`
                                      }
                                    ]
                                  },
                                  {
                                      "title": `[ Audio con Efecto ]`,
                                      "rows": [
                                        {
                                          "title": '💎Descarga el Audio Con efecto SlowMotion',
                                          "description": '- Audio en nota de voz con efecto SlowMotion -',
                                          "rowId": `${plist.all[0].title}@list4`
                                        }
                                      ]    
                                  }
                                ]
                              }
                    }, {quoted: choute})
                    leo.relayWAmessage(play2v)
              
              break*/
  case 'soporte':
  case 'support':
              if (!isRegister) return reply(userB(prefix))
              dylux = `*Grupo soporte del Bot*\n\n${gpwha}`
              reply(dylux) 
              break
  
  case 'link':
  case 'enlace':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              addFilter(from)
              var link = await wa.getGroupInvitationCode(from)
              await wa.sendFakeStatus(from, link, "El lik de este grupo es")
              break
  
  case 'chiste':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
              answer = respuesta[Math.floor(Math.random() * respuesta.length)]
              if (!q) return reply('Señor homosexual, pongale algo despues del comando y gracias.')
              reply(answer)
              addFilter(from)
              break
  
  case 'owner':
  case 'creador':
              await wa.sendContact(from, '18299897014', "𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊")
              break
              
  
  case 'grupos':
      case 'menus':
              if (!isRegister) return reply(baby.only.usrReg)	
              if (isBan) return reply (baby.only.benned)
              leo.sendMessagee(from, fs.readFileSync('./media/imagenes/menu.jpg') , messageType.image, {quoted: choute, caption: `${cgrupos}`})
              break
  
  case 'vor':
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessagee(from, fs.readFileSync('./media/imagenes/vor.jpg') , messageType.image, {quoted: choute, caption: `${vor}`})
              break
  
  case 'v':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              respuesta = [`${A}`,`${B}`,`${C}`, `${D}`,`${E}`,`${F}`,`${G}`,`${H}`,`${I}`,`${J}`,`${K}`,`${L}`,`${M}`,`${N}`,`${Ñ}`,`${O}`,`${P}`,`${Q}`,`${R}`,`${S}`,`${T}`,`${U}`,`${V}`,`${W}`,`${X}`,`${Y}`,`${Z}`]
              answer = respuesta[Math.floor(Math.random() * respuesta.length)]
              if (!q) return reply('Nomessirve te falto ponerle espacio y la r')
              reply(answer)
              addFilter(from)
              break
  case 'r':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              respuesta = [ `${R1}`, `${R2}`, `${R3}`, `${R4}`, `${R5}`, `${R6}`, `${R7}`, `${R8}`, `${R9}`, `${R10}`, `${R11}`, `${R12}`, `${R13}`, `${R14}`, `${R15}`, `${R16}`, `${R17}`, `${R18}`, `${R19}`, `${R20}`, `${R21}`, `${R22}`, `${R23}`, `${R24}`, `${R25}`]
              answer = respuesta[Math.floor(Math.random() * respuesta.length)]
              if (!q) return reply('Nomessirve te falto ponerle espacio y la v')
              reply(answer)
              addFilter(from)
              break
  
  case 'infobot':		  
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessagee(from, fs.readFileSync('./media/infobot.jpg') , messageType.image, {quoted: choute, caption: `${infobot}`})
              break
  
  case 'infocreador':
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessagee(from, fs.readFileSync('./media/imagenes/creador.jpg') , messageType.image, {quoted: choute, caption: `${infocreador}`})
              break
  
  
  case 'menuofc':
              if (!isRegister) return reply(baby.only.usrReg)	
              if (isBan) return reply (baby.only.benned)	
              leo.sendMessagee(from, fs.readFileSync('./media/imagenes/menu.jpg') , messageType.image, {quoted: choute, caption: `${menuofc}`})
              break
              
  case 'reglas':
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessagee(from, fs.readFileSync('./media/imagenes/menu.jpg') , messageType.image, {quoted: choute, caption: `${reglas}`})
              break
  
  case 'prueba':
               
              boton(from, fs.readFileSync('./media/imagenes/menu.jpg'), 'Hola', `${pushname}`, [{buttonId: 'b1', buttonText: {displayText: 'Click Aqui'}, type: 1}])           
              break
  
  case 'level':
  case 'nivel':
              const lvup =  `${nivel}` 
              leo.sendMessagee(from, lvup, messageType.text, {quoted: choute} )
              break
  
  case 'audio':
              addFilter(from)
              aud = fs.readFileSync('./audio/audio.mp3') 
              leo.sendMessagee(from, aud, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
              break
  
  case 'desbechoso':
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessagee(from, fs.readFileSync('./media/imagenes/menu.jpg') , messageType.image, {quoted: choute, caption: `${bechoso}`})
              break
  case 'top5':
  addFilter(from)
  if (!isGroup) return reply('Top5 en un chat? Te gusta la pija cierto. Este comando es solo para grupos.')
  member = []
  top5 = args.join(' ')
  const p1 = groupMembers
  const p2 = groupMembers
  const p3 = groupMembers
  const p4 = groupMembers
  const p5 = groupMembers
  const o1 = p1[Math.floor(Math.random() * p1.length)]
  const o2 = p2[Math.floor(Math.random() * p2.length)]
  const o3 = p3[Math.floor(Math.random() * p3.length)]
  const o4 = p4[Math.floor(Math.random() * p4.length)]
  const o5 = p5[Math.floor(Math.random() * p5.length)]
  teks = `
  *Atencion estos son los 5*\n\n *Primer puesto para* @${o1.jid.split('@')[0]}\n\n*Segundo puesto para*@${o2.jid.split('@')[0]}\n\n*Tercer puesto para*@${o3.jid.split('@')[0]}\n\n*Cuarto puesto para* @${o4.jid.split('@')[0]}\n\n*Quinto puesto para* @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
  member.push(o1.jid)
  member.push(o2.jid)
  member.push(o3.jid)
  member.push(o4.jid)
  member.push(o5.jid)
  mentions(teks, member, true)
  break
  
  
  
  //ᴏᴡɴᴇʀ / ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ / ɴᴜᴍᴇʀᴏ ᴅᴇʟ ʙᴏᴛ
  case 'apagar':
  case 'off':
              if (!isOwner) return reply('XD No puedes usar este comando')
              reply('Deja me apago al toque mi king')
              setTimeout( () => {
              leo.close() }, 3000)
              break

case 'menu':
let lista = leo.prepareMessageFromContent(from,{
"listMessage": {
"title": `Holaa ${pushname}`,
"description": `${chui}`,
"buttonText": "Click Aqui",
"listType": "SINGLE_SELECT",
"sections": [
{ "title": `Memu de Grupos`,
"rows": [
{
"title": 'Menu solo para admin 👑',
"rowId": `admin`
},
{
"title": 'Menu para miembros 🫂',
"rowId": `miembros`
}
]
},
{
"title": `Menu de Juegos / Entretenimiento`,
"rows": [
{
"title": 'Lista de juegos',
"rowId": `juegos`
},
{
"title": 'Grupos de WhatsApp',
"rowId": `whatsApp`
}
]    
}
]
}
}, {quoted: choute})
leo.relayWAMessage(lista)          
break
  }
          
  
  
    
  } catch (e) {
          
  console.log(e)}
  
  })
