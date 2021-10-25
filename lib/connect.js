const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')

const leo = new WAConnection()
exports.leo = leo

exports.connect = async() => {
    leo.version = [2, 2119, 6]
    console.log(chalk.keyword("blue")('◦ Conectando ◦'))
    let auth = './TheChoute.json'
    leo.logger.level = 'warn'
    leo.on("qr", () => {
       console.log(chalk.keyword("red")('Escanea el codigo de mas arriba'))
    })
    fs.existsSync(auth) && leo.loadAuthInfo(auth)
    leo.on('connecting', () => {
        console.log(chalk.whiteBright("⌛"), chalk.keyword("red")(" "), chalk.keyword("aqua")("Escanea el codigo a continuacion"))
    })
    await leo.connect({ timeoutMs: 30 * 1000 })
    return leo
}