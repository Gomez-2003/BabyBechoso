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


const menu = (leo, process, ) => {return
`*𝐈𝐍𝐅𝐎𝐁𝐎𝐓*
*𝐂𝐫𝐞𝐚𝐝𝐨𝐫:* _𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊_ 
*𝐍𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭:* _𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔_
*𝐍𝐚𝐯𝐞𝐠𝐚𝐝𝐨𝐫*: _${leo.browserDescription[1]}_
*𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫:* _${leo.browserDescription[0]}_
*𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* _${leo.browserDescription[2]}_
*𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝:* _${process.uptime()}_
*𝐒𝐢𝐬𝐭𝐞𝐦𝐚 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐯𝐨:* _${leo.user.phone.device_manufacturer}_
*𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:* _${leo.user.phone.wa_version}_
*𝐂𝐫𝐞𝐚𝐝𝐨𝐫/𝐎𝐰𝐧𝐞𝐫:* _wa.me/18299897014_
*𝐍𝐢𝐯𝐞𝐥 𝐝𝐞 𝐁𝐚𝐭𝐞𝐫𝐢𝐚:* 
*𝐓𝐢𝐞𝐦𝐩𝐨 𝐝𝐞 𝐀𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝*:`}
module.exports = {
    menu
}
