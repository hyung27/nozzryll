let handler = async(m, { conn, command }) => {
	try {
		let fimg = await fetch(`https://api.lolhuman.xyz/api/random/${command}?apikey=${api.lol}`)
		await conn.sendMsg(m.chat, { image: fimgb, caption: `Random Image` }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.menuanime = handler.command = ["art","awoo","bts","cecan","cogan","elaina","exo","elf","estetic","kanna","loli","neko","waifu","shota","husbu","sagiri","shinobu","megumin","wallnime","quotesimage"]
handler.tagsanime = ["randompic"]
handler.premium = false
handler.limit = true

export default handler
