
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

const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const conn = require("./lib/connect")
const wa = require("./lib/wa")
const { color } = require("./lib/color");
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./lib/functions");
const { isFiltered, addFilter } = require('./lib/Addfilter')
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Leon'
var public = config.public

//Redes Sociales
const gpwha = '_Luego Pongo El Link Del Grupo_' 

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
├ *Mensaje* : Admin nuevo
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
  const meNumber = leo.user.jidi
  const isGroup = from.endsWith('@g.us')
  const sender = choute.key.fromMe ? leo.user.jid : isGroup ? choute.participant : choute.key.remoteJid
  const senderNumber = sender.split("@")[0]
  const groupMetadata = isGroup ? await leo.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
  const isAdmin = groupAdmins.includes(sender) || false
  const botAdmin = groupAdmins.includes(leo.user.jid)
  const q = args.join(' ')
  const soyYo = leo.user.jid
  const botNumber = leo.user.jid.split("@")[0]
  const itsMe = senderNumber == botNumber
  const ownerNumber = ['18299897014@s.whatsapp.net']
  const isAntiLink = isGroup ? antilink.includes(from) : false

  
  
  
  const jid = sender
  const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
  const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
  
  const isWelkom = isGroup ? welkom.includes(from) : false
  const isRegister = checkRegisteredUser(sender)
  const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
  const mentions = (teks, memberr, id) => {
    (id == null || id == undefined || id == false) ? leo.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : leo.sendMessage(from, teks.trim(), extendedText, {quoted: choute, contextInfo: {"mentionedJid": memberr}})
    }
    const usedCommandRecently = new Set()

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
        ownerB: '[𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐁𝐨𝐭 \nEscribe: ~creador \nPara contactar con el ',
        admin: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐬𝐨𝐥𝐨 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.',
        Badmin: '𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨',
        usrReg: `𝐍𝐨 𝐞𝐬𝐭𝐚𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 \n _𝐏𝐚𝐫𝐚 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞 𝐮𝐭𝐢𝐥𝐢𝐳𝐚_*${prefix}reg*`
      }
    }
/*  
  if (!isRegister) return reply(baby.only.usrReg)
  if (!isGroup) return reply(baby.only.group)
  if (!isAdmin) return reply(baby.only.admin)
  if (!botAdmin) return reply(baby.only.Badmin)  

*/

switch (command) {
//REGISTRO
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
            addRegisteredUser(sender, nombre, edad, time )
            try {
            exec(`magick './src/reg.jpg' -gravity west -fill '#00FF00' -font './src/font-gue.ttf' -size 1280x710 -pointsize 90 -interline-spacing 7.5 -annotate +460-45 '${nombre}' -pointsize 50 -annotate +460+200  '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'regsm.jpg'`)
            leo.sendMessage(from, fs.readFileSync('./regsm.jpg'), MessageType.image, { quoted: choute, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
           } catch {
            reply(`⠀⠀⠀⠀⠀REGISTRO EXITOSO
            ☐ Nombre: ${nombre}
            ☐ Edad: ${edad}
            ☐ Numero: wa.me/${sender.split("@")[0]}
            ☐ Hora: ${time}`)
            }
            addFilter(from)
            break

case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
            if (!isRegister) return reply(baby.only.usrReg)
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)  
            if (args.length < 1) return reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
            if ((args[0]) === 'on') {
            if (isWelkom) return reply('El mensaje de *Bienvenida* ya esta activa')
            welkom.push(from)
            fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
            reply(`La función de bienvenida se activo en el grupo *${groupMetadata.subject}*`)
            } else if ((args[0]) === 'off') {
            if (!isWelkom) return reply('Bienvenida ya esta desactivada')
            welkom.splice(from, 1)
            fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
            reply(`La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
            } else {
            reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
            }
            break



case 'promote':
case 'promover':
case 'rol':
            if (!isRegister) return reply(baby.only.usrReg)
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)  
            if (choute.message.extendedTextMessage === undefined || choute.message.extendedTextMessage === null) return reply('✳️ Mencione o responde al mensaje del usuario para promoverlo a administrador')
            mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
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
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)  
            if (choute.message.extendedTextMessage === undefined || choute.message.extendedTextMessage === null) return reply('Menciona o responde al mensaje del usuario para degradarlo')
            mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
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
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            await wa.hideTag(from, args.join(" "))
            break

case 'agregar':
case 'añadir':
case 'add':
            if (!isRegister) return reply(baby.only.usrReg)
            if (!isGroup) return reply(baby.only.group)
            if (!botAdmin) return reply(baby.only.Badmin)
            if (args.length < 1) return reply('Y el numero?')
            if (args[0].startsWith('99')) return reply('Debes de utilizar el prefijo del pais.')
            try {
            num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
            leo.groupAdd(from, [num])
            } catch (e) {
            console.log('Error :', e)
            return leo.sendMessage(from, 'Modo privado dice:v', MessageType.text)
            }
            break

case 'grupo':
                addFilter(from)
                if (!isGroup) return await reply(mess.only.group)
                if (!isAdmin) return await reply(mess.only.admin)
                if (!botAdmin) return await reply(mess.only.Badmin)
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
            infom = await leo.messageInfo(from, choute.message.extendedTextMessage.contextInfo.stanzaId)
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
            if (!isGroup) return reply(baby.only.group)
            adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
            no = 0
            for (let admon of groupAdmins) {
            no += 1
            adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
            }
            mentions(adm, groupAdmins, true)
            break

case 'soporte':
case 'support':
            if (!isRegister) return reply(userB(prefix))
            dylux = `📌 *Grupo soporte del Bot*\n\n${gpwha}`
            reply(dylux) 
            break

case 'link':
case 'enlace':
            if (!isRegister) return reply(baby.only.usrReg)
            addFilter(from)
            var link = await wa.getGroupInvitationCode(from)
            await wa.sendFakeStatus(from, link, "El lik de este grupo es")
            break


case 'chiste':
            if (!isRegister) return reply(baby.only.usrReg)
            respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
            answer = respuesta[Math.floor(Math.random() * respuesta.length)]
            if (!q) return reply('Y la pregunta?')
            reply(answer)
            addFilter(from)
            break

case 'infobot':		  
            if (!isRegister) return reply(babyss.only.usrReg)	
            leo.sendMessage(from, fs.readFileSync('./media/infobot.jpg') , MessageType.image, {quoted: choute, caption: `*𝐈𝐍𝐅𝐎𝐁𝐎𝐓*
            \n *𝐍𝐚𝐯𝐞𝐠𝐚𝐝𝐨𝐫*: _${leo.browserDescription[1]}_
            \n *𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫:* _${leo.browserDescription[0]}_
            \n *𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* _${leo.browserDescription[2]}_
            \n *𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝:* _${process.uptime()}_
            \n *𝐒𝐢𝐬𝐭𝐞𝐦𝐚 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐯𝐨:* _${leo.user.phone.device_manufacturer}_
            \n *𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:* _${leo.user.phone.wa_version}_
            \n *𝐂𝐫𝐞𝐚𝐝𝐨𝐫/𝐎𝐰𝐧𝐞𝐫:* _wa.me/18299897014_
            \n *𝐍𝐢𝐯𝐞𝐥 𝐝𝐞 𝐁𝐚𝐭𝐞𝐫𝐢𝐚:* 
            break

case 'owner':
case 'creador':
            await wa.sendContact(from, '18299897014', "𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊")
            break

case 'menu':
case 'help':
case 'menusimple':   		  
            if (!isRegister) return reply(babyss.only.usrReg)	
            leo.sendMessage(from, fs.readFileSync('./media/imagenes/menu.jpg') , MessageType.image, {quoted: choute, caption: `Hola *${pushname}* \n *_NO HAY MENU_*`})
            break

}
        


  
} catch (e) {
        
console.log(e)}

})
