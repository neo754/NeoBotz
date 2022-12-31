
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let krtu = `☰⃟⟣⟔ Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ ⟓⟢⃟
┇⃟⟣⟜ *Nama:* 
┇⃟⟣⟜ *Umur:* 
┇⃟⟣⟜ *Alamat:*
┇⃟⟣⟜ *Hobi:*
┇⃟⟣⟜ *Pasangan:*
┖┈┈┈╼╸╸╸╴╴╴ ╳
`
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, adReply) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

