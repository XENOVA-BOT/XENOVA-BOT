const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
🔥 *${config.BOT_NAME}* 🔥
│👑 *Owner:* ${config.OWNER_NAME}
│🌀 *Baileys:* Multi Device
│💻 *Type:* NodeJs
│☁️ *Platform:* Heroku
│🌐 *Mode:* [${config.MODE}]
│⚡ *Prefix:* [${config.PREFIX}]
│🛠 *Version:* 3.0.0 Bᴇᴛᴀ
└───────────────

*🐣MENU LIST🐣*

┃◈┃ 🕋 *Quranmenu*
┃◈┃ 🕌 .surah1
┃◈┃ 🕌 .surah2
┃◈┃ 🕌 .surah3
┃◈┃ 🕌 .surah4
┃◈┃ 🕌 .surah5
┃◈┃ 🕌 .surah6
┃◈┃ 🕌 .surah7
┃◈┃ 🕌 .surah8
┃◈┃ 🕌 .surah9
┃◈┃ 🕌 .surah10
┃◈┃ 🕋 .Prayertime
_________________________
┃◈┃ 🤖 *Aimenu*
┃◈┃ 🧠 • ai
┃◈┃ 💬 • chatgpt
┃◈┃ 💭 • chatgpt2
┃◈┃ 🤖 • bot
┃◈┃ 🖼️ • aiimage1 
┃◈┃ 🖼️ • aiimage2
┃◈┃ 🖼️ • aiimage3
┃◈┃ 🌌 • flux
┃◈┃ 🎨 • sdiffusion
┃◈┃ 🧬 • stability
_________________________
┃◈┃ 🖼️ *AnimeIMGE*
┃◈┃ 😈 • fack  
┃◈┃ 🐺 • awoo  
┃◈┃ 👧 • garl  
┃◈┃ 💖 • waifu  
┃◈┃ 🐱 • neko  
┃◈┃ ✨ • megnumin  
┃◈┃ 😽 • neko  
┃◈┃ 🧹 • maid  
┃◈┃ 👶 • loli  
┃◈┃ 👩‍🎤 • animegirl  
┃◈┃ 👧 • animegirl1  
┃◈┃ 👧 • animegirl2  
┃◈┃ 👧 • animegirl3  
┃◈┃ 👧 • animegirl4  
┃◈┃ 👧 • animegirl5  
┃◈┃ 🎌 • anime  
┃◈┃ 🎌 • anime1  
┃◈┃ 🎌 • anime1  
┃◈┃ 🎌 • anime2  
┃◈┃ 🎌 • anime3  
┃◈┃ 🎌 • anime4  
┃◈┃ 🎌 • anime5  
_________________________
┃◈┃ 📡 *Reactions Menu*     
┃◈┃ 😈 • bully @tag
┃◈┃ 🤗 • cuddle @tag
┃◈┃ 😭 • cry @tag
┃◈┃ 🤗 • hug @tag
┃◈┃ 🐺 • awoo @tag
┃◈┃ 💋 • kiss @tag
┃◈┃ 👅 • lick @tag
┃◈┃ 👏 • pat @tag
┃◈┃ 😏 • smug @tag
┃◈┃ 🔨 • bonk @tag
┃◈┃ 🗑️ • yeet @tag
┃◈┃ 😊 • blush @tag
┃◈┃ 😁 • smile @tag
┃◈┃ 👋 • wave @tag
┃◈┃ ✋ • highfive @tag
┃◈┃ 🤝 • handhold @tag
┃◈┃ 🍽️ • nom @tag
┃◈┃ 🦷 • bite @tag
┃◈┃ 🫂 • glomp @tag
┃◈┃ 👋🏻 • slap @tag
┃◈┃ 🔪 • kill @tag
┃◈┃ 😄 • happy @tag
┃◈┃ 😉 • wink @tag
┃◈┃ 👉 • poke @tag
┃◈┃ 💃 • dance @tag
┃◈┃ 😬 • cringe @tag
_________________________
┃◈┃ 🔄 *Convertmenu* 
┃◈┃ 🖼️ • sticker
┃◈┃ 🌐 • fetch
┃◈┃ 🎞️ • gif
┃◈┃ 😆 • emix 🤩,😀
┃◈┃ 🆒 • fancy
┃◈┃ ✨ • remini
┃◈┃ 🪄 • enhance
┃◈┃ 🧼 • removebg
┃◈┃ 🖼️ • hd
┃◈┃ 🔊 • tts
┃◈┃ 🌍 • trt
┃◈┃ 🔈 • tts2
┃◈┃ 🎙️ • tts3
┃◈┃ 🔥 • attp
┃◈┃ 🔗 • url
┃◈┃ 😊 • emoji
┃◈┃ 🎨 • fancy
┃◈┃ 📷 • fullpp
┃◈┃ 📁 • gitclone
┃◈┃ 📄 • topdf
┃◈┃ 🖼️ • randomwall
_________________________
┃◈┃ 🎉 *Funmenu*
┃◈┃ 💻 • hack
┃◈┃ 🤣 • joke
┃◈┃ ❤️ • heart
┃◈┃ 😄 • happy
┃◈┃ 😠 • angry
┃◈┃ 😢 • sad
┃◈┃ 😳 • shy
┃◈┃ 🌙 • moon
┃◈┃ 😕 • confused
┃◈┃ 🔥 • hot
┃◈┃ 🏃 • nikal
_________________________
┃◈┃•  ⬇️ *Dlmenu*
┃◈┃•  💎 facebook
┃◈┃•  🌀 facebook2
┃◈┃•  💡 likee
┃◈┃•  🔍 tiktoksearch
┃◈┃•  📲 tiktok
┃◈┃•  🐦 twitter
┃◈┃•  📸 Instagram
┃◈┃•  👻 snapchat
┃◈┃•  🎬 capcut
┃◈┃•  🎵 ringtone
┃◈┃•  📥 apk
┃◈┃•  🖼️ img
┃◈┃•  📌 pinterestdl
┃◈┃•  🔎 spotifysearch
┃◈┃•  📡 spotifydl
┃◈┃•  🎧 play
┃◈┃•  🎶 play3
┃◈┃•  📹 video
┃◈┃•  🎼 mp3
┃◈┃•  🎥 mp4
┃◈┃•  🔎 yts
┃◈┃•  📂 mediafire
┃◈┃•  📂 gdrive 
┃◈┃•  🔍 ssweb
┃◈┃•  🐶 dog 
_________________________
┃◈┃ 👥 *Group_Command*
┃◈┃ 🔗 • grouplink
┃◈┃ 🔗 • jid
┃◈┃ 💣 • kickall
┃◈┃ 💣 • removecountry +662
┃◈┃ 👑 • kickadmins
┃◈┃ ➕ • add
┃◈┃ ➖ • remove
┃◈┃ 🦵 • kick
┃◈┃ 🔼 • promote 
┃◈┃ 🔽 • demote
┃◈┃ ♻️ • revoke
┃◈┃ 👋 • left
┃◈┃ 📄 • ginfo
┃◈┃ 🗑️ • delete 
┃◈┃ ✏️ • upgname
┃◈┃ 📝 • upgdesc
┃◈┃ 🔊 • groupunmute
┃◈┃ 🔇 • mute
┃◈┃ 🔈 • unmute
┃◈┃ 🔒 • lockgc
┃◈┃ 🔓 • unlockgc
┃◈┃ 🧾 • invite
┃◈┃ 🏷️ • tag
┃◈┃ 📢 • tagall
┃◈┃ 📢 • broadcast
┃◈┃ ❤️ • ship
┃◈┃ 🧾 • shapar
┃◈┃ 🫣 • compatibility
┃◈┃ 🤔 • roast
┃◈┃ 🥰 • compliment
┃◈┃ 😍 • lovetest
_________________________
┃◈┃ 🧩 *Othermenu*
┃◈┃ ⏰ • time
┃◈┃ 📅 • date
┃◈┃ 🔢 • count
┃◈┃ 🪙 • coinflip
┃◈┃ 🎨 • rcolor
┃◈┃ 🎲 • roll
┃◈┃ 📚 • fact
┃◈┃ 📖 • define
┃◈┃ 📰 • news
┃◈┃ 🎬 • movie
┃◈┃ ☁️ • weather
┃◈┃ 🌐 • wikipedia
┃◈┃ 🔍 • githubstalk
┃◈┃ 🎵 • tiktokstalk
┃◈┃ 💻 • webinfo
┃◈┃ 🔍 • yts
┃◈┃ 🔐 • gpass
┃◈┃ 🎞️ • movie
┃◈┃ 🕌 • praytime
_________________________
┃◈┃ 👑 *Owner Menu*
┃◈┃ 🥇 • owner
┃◈┃ 📤 • forward
┃◈┃ 📦 • repo
┃◈┃ 📜 • script
┃◈┃ 🗂️ • sc
┃◈┃ 📁 • srepo
┃◈┃ 📋 • menu
┃◈┃ 🗃️ • allmenu
┃◈┃ 📑 • list
┃◈┃ 🚫 • block
┃◈┃ ✅ • unblock
┃◈┃ ♻️ • restart
┃◈┃ 🛑 • shutdown
┃◈┃ 🤝 • pair
┃◈┃ 🔗 • getpair
┃◈┃ 🤖 • clonebot
┃◈┃ 📶 • siminfo
┃◈┃ 📶 • siminfo2
┃◈┃ 📝 • report
_________________________
┃◈┃🪀 *Main Menu*
┃◈┃📶 • ping
┃◈┃⚡ • speed
┃◈┃🏓 • pong
┃◈┃💡 • alive
┃◈┃⏱️ • runtime
┃◈┃⏳ • uptime 
┃◈┃📥 • update
┃◈┃🧩 • version
┃◈┃📤 • send
┃◈┃💾 • save
┃◈┃🪄 • vv
┃◈┃🪄 • vv6
┃◈┃📲 • sendme
┃◈┃♻️ • restart
┃◈┃⚙️ • env
┃◈┃🔧 • setting
_________________________

*${config.DESCRIPTION}*`;

        await conn.sendMessage(from, { image: { url: config.MENU_IMAGE_URL }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
