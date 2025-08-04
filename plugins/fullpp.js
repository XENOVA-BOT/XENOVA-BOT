const { cmd } = require('../command');
const Jimp = require('jimp');

cmd({
    pattern: "fullpp",
    react: "🖼️",
    desc: "Set full image as bot's profile picture",
    category: "tools",
    filename: __filename
},
async (conn, mek, m) => {
    try {
        // ✅ Check: only allow bot itself to use this command
        const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net';
        if (m.sender !== botNumber) {
            return m.reply('❌ *Sirf bot apne aap ke liye hi is command ko chala sakta hai.*');
        }

        const quoted = m.quoted;
        if (!quoted || !quoted.mtype || !quoted.mtype.includes('image')) {
            return m.reply('⚠️ *Kisi image par reply karein.*');
        }

        m.reply('⏳ *Image process ho rahi hai, please wait...*');

        const media = await conn.downloadMediaMessage(quoted);
        const image = await Jimp.read(media);

        const size = 640; // WhatsApp DP resolution
        const bg = image.clone().cover(size, size).blur(10);  // blurred background
        const fg = image.clone().contain(size, size);         // original image in center

        bg.composite(fg, 0, 0); // Merge foreground over background

        const buffer = await bg.getBufferAsync(Jimp.MIME_JPEG);

        await conn.updateProfilePicture(botNumber, buffer);

        m.reply('✅ *Bot ki profile picture full DP format mein set kar di gayi! SHABAN-MD*');
    } catch (err) {
        console.error(err);
        m.reply(`❌ *Error:* ${err.message}`);
    }
});