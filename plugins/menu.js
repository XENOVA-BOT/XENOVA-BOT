const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({  
    pattern: "menu",  
    desc: "menu the bot",  
    category: "menu",  
    react: "⚡",  
    filename: __filename  
},   
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {  
    try {  
        let dec = `💎〔 *${config.BOT_NAME}* 〕💎  
┃★╭──────────────  
┃★│ Owner : *${config.OWNER_NAME}*  
┃★│ Baileys : *Multi Device*  
┃★│ Type : *NodeJs*  
┃★│ Platform : *Heroku*  
┃★│ Mode : *[${config.MODE}]*  
┃★│ Prifix : *[${config.PREFIX}]*  
┃★│ Version : *5.0.0 Bᴇᴛᴀ*  
┃★╰──────────────  
╰━━━━━━━━━━━━━━━┈⊷  
╭━━〔 *Menu List* 〕━━┈⊷  
┃◈╭─────────────·๏  
┃◈┃📿 • Surahmenu  
┃◈┃🕌 • Prayertime  
┃◈┃🤖 • Aimenu  
┃◈┃🧚 • Animenu  
┃◈┃💫 • Reactions  
┃◈┃🔁 • Convertmenu  
┃◈┃🎭 • Funmenu  
┃◈┃📥 • Dlmenu  
┃◈┃📋 • List  
┃◈┃🏠 • Mainmenu  
┃◈┃👥 • Groupmenu  
┃◈┃📦 • Allmenu  
┃◈┃👑 • Ownermenu  
┃◈┃⚙️ • Othermenu  
┃◈┃💫 • Reactions  
┃◈└───────────┈⊷  
╰──────────────┈⊷  
> ${config.DESCRIPTION}`;  
  
        await conn.sendMessage(  
            from,  
            {  
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },  
                caption: dec,  
                contextInfo: {  
                    mentionedJid: [m.sender],  
                    forwardingScore: 999,  
                    isForwarded: true,  
                    forwardedNewsletterMessageInfo: {  
                        newsletterJid: '',  
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',  
                        serverMessageId: 143  
                    }  
                }  
            },  
            { quoted: mek }  
        );  
  
    } catch (e) {  
        console.log(e);  
        reply(`${e}`);  
    }  
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `╭━━〔 *Reactions Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃😈 • bully @tag
┃◈┃🤗 • cuddle @tag
┃◈┃😭 • cry @tag
┃◈┃🤗 • hug @tag
┃◈┃🐺 • awoo @tag
┃◈┃💋 • kiss @tag
┃◈┃👅 • lick @tag
┃◈┃👏 • pat @tag
┃◈┃😏 • smug @tag
┃◈┃🔨 • bonk @tag
┃◈┃🗑️ • yeet @tag
┃◈┃😊 • blush @tag
┃◈┃😁 • smile @tag
┃◈┃👋 • wave @tag
┃◈┃✋ • highfive @tag
┃◈┃🤝 • handhold @tag
┃◈┃🍽️ • nom @tag
┃◈┃🦷 • bite @tag
┃◈┃🫂 • glomp @tag
┃◈┃👋🏻 • slap @tag
┃◈┃🔪 • kill @tag
┃◈┃😄 • happy @tag
┃◈┃😉 • wink @tag
┃◈┃👉 • poke @tag
┃◈┃💃 • dance @tag
┃◈┃😬 • cringe @tag
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• 💎 facebook
┃◈┃• 🌀 facebook2
┃◈┃• 💡 likee
┃◈┃• 🔍 tiktoksearch
┃◈┃• 📲 tiktok
┃◈┃• 🐦 twitter
┃◈┃• 📸 Instagram
┃◈┃• 👻 snapchat
┃◈┃• 🎬 capcut
┃◈┃• 🎵 ringtone
┃◈┃• 📥 apk
┃◈┃• 🖼️ img
┃◈┃• 📌 pinterestdl
┃◈┃• 🔎 spotifysearch
┃◈┃• 📡 spotifydl
┃◈┃• 🎧 play
┃◈┃• 🎶 play3
┃◈┃• 📹 video
┃◈┃• 🎼 mp3
┃◈┃• 🎥 mp4
┃◈┃• 🔎 yts
┃◈┃• 📂 mediafire
┃◈┃• 📂 gdrive 
┃◈┃• 🔍 ssweb
┃◈┃• 🐶 dog  
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃🔗 • grouplink
┃◈┃🔗 • jid
┃◈┃💣 • kickall
┃◈┃💣 • removecountry +662
┃◈┃👑 • kickadmins
┃◈┃➕ • add
┃◈┃➖ • remove
┃◈┃🦵 • kick
┃◈┃🔼 • promote 
┃◈┃🔽 • demote
┃◈┃♻️ • revoke
┃◈┃👋 • left
┃◈┃📄 • ginfo
┃◈┃🗑️ • delete 
┃◈┃✏️ • upgname
┃◈┃📝 • upgdesc
┃◈┃🔊 • groupunmute
┃◈┃🔇 • mute
┃◈┃🔈 • unmute
┃◈┃🔒 • lockgc
┃◈┃🔓 • unlockgc
┃◈┃🧾 • invite
┃◈┃🏷️ • tag
┃◈┃📢 • tagall
┃◈┃📢 • broadcast
┃◈┃❤️ • ship
┃◈┃🧾 • shapar
┃◈┃🫣 • compatibility
┃◈┃🤔 • roast
┃◈┃🥰 • compliment
┃◈┃😍 • lovetest
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃💻 • hack
┃◈┃🤣 • joke
┃◈┃❤️ • heart
┃◈┃😄 • happy
┃◈┃😠 • angry
┃◈┃😢 • sad
┃◈┃😳 • shy
┃◈┃🌙 • moon
┃◈┃😕 • confused
┃◈┃🔥 • hot
┃◈┃🏃 • nikal
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃⏰ • time
┃◈┃📅 • date
┃◈┃🔢 • count
┃◈┃🪙 • coinflip
┃◈┃🎨 • rcolor
┃◈┃🎲 • roll
┃◈┃📚 • fact
┃◈┃📖 • define
┃◈┃📰 • news
┃◈┃🎬 • movie
┃◈┃☁️ • weather
┃◈┃🌐 • wikipedia
┃◈┃🔍 • githubstalk
┃◈┃🎵 • tiktokstalk
┃◈┃💻 • webinfo
┃◈┃🔍 • yts
┃◈┃🔐 • gpass
┃◈┃🎞️ • movie
┃◈┃🕌 • praytime
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
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
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃👑 • owner
┃◈┃📤 • forward
┃◈┃📦 • repo
┃◈┃📜 • script
┃◈┃🗂️ • sc
┃◈┃📁 • srepo
┃◈┃📋 • menu
┃◈┃🗃️ • allmenu
┃◈┃📑 • list
┃◈┃🚫 • block
┃◈┃✅ • unblock
┃◈┃♻️ • restart
┃◈┃🛑 • shutdown
┃◈┃🤝 • pair
┃◈┃🔗 • getpair
┃◈┃🤖 • clonebot
┃◈┃📶 • siminfo
┃◈┃📶 • siminfo2
┃◈┃📝 • report
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃🖼️ • sticker
┃◈┃🌐 • fetch
┃◈┃🎞️ • gif
┃◈┃😆 • emix 🤩,😀
┃◈┃🆒 • fancy
┃◈┃✨ • remini
┃◈┃🪄 • enhance
┃◈┃🧼 • removebg
┃◈┃🖼️ • hd
┃◈┃🔊 • tts
┃◈┃🌍 • trt
┃◈┃🔈 • tts2
┃◈┃🎙️ • tts3
┃◈┃🔥 • attp
┃◈┃🔗 • url
┃◈┃😊 • emoji
┃◈┃🎨 • fancy
┃◈┃📷 • fullpp
┃◈┃📁 • gitclone
┃◈┃📄 • topdf
┃◈┃🖼️ • randomwall
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({  
    pattern: "animenu",  
    desc: "menu the bot",  
    category: "menu",  
    react: "🧚",  
    filename: __filename  
},   
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {  
    try {  
        let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷  
┃◈╭─────────────·๏  
┃◈┃😈 • fack  
┃◈┃🐺 • awoo  
┃◈┃👧 • garl  
┃◈┃💖 • waifu  
┃◈┃🐱 • neko  
┃◈┃✨ • megnumin  
┃◈┃😽 • neko  
┃◈┃🧹 • maid  
┃◈┃👶 • loli  
┃◈┃👩‍🎤 • animegirl  
┃◈┃👧 • animegirl1  
┃◈┃👧 • animegirl2  
┃◈┃👧 • animegirl3  
┃◈┃👧 • animegirl4  
┃◈┃👧 • animegirl5  
┃◈┃🎌 • anime  
┃◈┃🎌 • anime1  
┃◈┃🎌 • anime1  
┃◈┃🎌 • anime2  
┃◈┃🎌 • anime3  
┃◈┃🎌 • anime4  
┃◈┃🎌 • anime5  
┃◈└───────────┈⊷  
╰──────────────┈⊷  
> ${config.DESCRIPTION}`;  
  
        await conn.sendMessage(  
            from,  
            {  
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },  
                caption: dec,  
                contextInfo: {  
                    mentionedJid: [m.sender],  
                    forwardingScore: 999,  
                    isForwarded: true,  
                    forwardedNewsletterMessageInfo: {  
                        newsletterJid: '',  
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',  
                        serverMessageId: 143  
                    }  
                }  
            },  
            { quoted: mek }  
        );  
  
    } catch (e) {  
        console.log(e);  
        reply(`${e}`);  
    }  
});

// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃🧠 • ai
┃◈┃💬 • chatgpt
┃◈┃💭 • chatgpt2
┃◈┃🤖 • bot
┃◈┃🖼️ • aiimage1 
┃◈┃🖼️ • aiimage2
┃◈┃🖼️ • aiimage3
┃◈┃🌌 • flux
┃◈┃🎨 • sdiffusion
┃◈┃🧬 • stability
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cidt8r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mᴜʜᴀᴍᴍᴀᴅ Aʜᴍᴇᴅ 𝕏 Aʙᴅᴜʟ Rᴀғᴀʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
