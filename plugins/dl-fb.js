const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "fb",
    alias: ["facebook"],
    desc: "Download Facebook videos (HD only)",
    category: "downloader",
    react: "🎞️",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("📌 Please provide a Facebook video link.");
        if (!q.includes("facebook.com")) return reply("❌ Invalid Facebook link.");

        reply("🔍 Fetching HD video, please wait...");

        const apiUrl = `https://api-aswin-sparky.koyeb.app/api/downloader/fbdl?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data || !data.data.high) {
            return reply("❌ Failed to fetch Facebook video. Try another link.");
        }

        const { title, thumbnail, high } = data.data;

        const caption = `🎬 *Facebook Video Downloader*\n\n📖 *Title:* ${title}\n\n🔰 *By SHABAN-MD*`;

        await conn.sendMessage(from, {
            video: { url: high },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });

    } catch (e) {
        console.error("Facebook HD Downloader Error:", e);
        reply(`❌ Error occurred: ${e.message}`);
    }
});