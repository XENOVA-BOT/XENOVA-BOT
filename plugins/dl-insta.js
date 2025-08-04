const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "insta",
    alias: ["ig", "Instagram", "igdl"],
    desc: "Download media using Delirius API",
    category: "downloader",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("📌 Please provide a valid media link.");
        
        reply("⏳ Processing your request...");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/igstories?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !Array.isArray(data.data)) return reply("❌ Failed to fetch media.");

        // Prefer video if available, else image
        const media = data.data.find(m => m.type === "video") || data.data.find(m => m.type === "image");

        if (!media || !media.url) return reply("❌ No valid media found in the response.");

        const caption = `🎬 *Downloaded Media*\n\n🌐 *Type:* ${media.type}\n📁 *Extension:* ${media.ext || 'unknown'}\n🔗 *Source:* SHABAN-MD`;

        const sendOptions = {
            caption,
            contextInfo: { mentionedJid: [m.sender] }
        };

        if (media.type === "video") {
            await conn.sendMessage(from, { video: { url: media.url }, ...sendOptions }, { quoted: mek });
        } else if (media.type === "image") {
            await conn.sendMessage(from, { image: { url: media.url }, ...sendOptions }, { quoted: mek });
        } else {
            reply("⚠️ Unsupported media type.");
        }

    } catch (e) {
        console.error("Error in updated downloader command:", e);
        reply(`🚫 An error occurred:\n${e.message}`);
    }
});