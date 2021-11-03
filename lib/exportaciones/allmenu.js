const allmenu =`
Hola @{pushname} este es el menu completo del bot. 
Hora actual: 
┌────「 *NIVEL ACTUAL* 」─
🎓 *Nombre:* ${pushname} 
🎓 *XP* ${getLevelingXp(sender)}
🎓 *Nivel* ${getLevel1} ➫ ${getLevelingLevel(sender)}
🎓 *Rango:* ${rango}
└──────────────────────
┌────「 *INFO DEL BOT*」─
🎓 *𝙽𝚘𝚖𝚋𝚛𝚎 :* BabyBechoso
🎓 *𝙲𝚛𝚎𝚊𝚍𝚘𝚛 :* wa.me/18299897014
🎓 *𝙾𝚂 :* ${leo.user.phone.device_manufacturer}
🎓 *𝚅𝚎𝚛𝚜𝚒𝚘𝚗 :* ${leo.browserDescription[2]}
🎓 *𝚃𝚘𝚝𝚊𝚕 𝚍𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:* XX
🎓 *𝚅𝚎𝚛𝚜𝚒𝚘𝚗 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 :* ${leo.user.phone.wa_version}
🎓 *𝙽𝚊𝚟𝚎𝚐𝚊𝚍𝚘𝚛 :* ${leo.browserDescription[1]}
🎓 *𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛:* ${leo.browserDescription[0]}
└────────────────────
┌────「 *INFO CREADOR* 」─
🎓 *Nombre:* 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 
🎓 *Instagram:* ${instachoute}
🎓 *Github:* ${gitchoute}
🎓 *YouTube:* ${ytchoute}
🎓 *YouTube:* ${prefix}creador
└────────────────────
┌────「 *SOLO ADMIN* 」─
🎓 *Welcome:* Activar/Desactivar 
🎓 *Antilink:* Antilink _❌_
🎓 *Promote:* Dar admin
🎓 *Demote:* Retirar admin
🎓 *Hidetag:* Mencion oculta
🎓 *Todos:* Lista de miembros
🎓 *Kick:* Eliminar miembros
🎓 *Agregar:* Unir usuario al gp
🎓 *Grupo:* Abril/Cerrar
🎓 *Newname:* Cambiar nombre 
🎓 *Newdes:* Cambiar descripcion
└────────────────────
┌────「 *PUBLICOS* 」─
🎓 *Prefijo:* ${prefix}
🎓 *Creador:* Creador del Bot
🎓 *Infocreador:* Redes
🎓 *Infobot:* Estado del bot
🎓 *Reglas:* Reglas del bot
🎓 *Vistos:* Quienes veron el msg
🎓 *Play:* Descargar audio/musica mp3 _❌_
🎓 *Sticker* Crear sticker _❌_
🎓 *gifs:* Crear stierk en movimiento _❌_ 
🎓 *Sjpg:* Convertir de Sticker a imagen _❌_
🎓 *Sgif:* Convertir de Sticker a Gif _❌_
🎓 *Top5:* Top5 (Lo que gustes agregar) _❌_
🎓 *Ttp:* _❌_
🎓 *Voz:* Texto a audio _❌_
🎓 *Soporte:* Grupo Del Bot
🎓 *Games:* Juegos 
🎓 *Chistes a:* El bot te cuenta "chiste"
└────────────────────────

┌────「 *JUEGOS* 」─
🎮 Vor: vor
👾 Adivinanzas
🎮 Dados
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」`

module.exports = {
    allmenu
}