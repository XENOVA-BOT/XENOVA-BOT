const config = require('../config');
const { cmd } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('../lib/functions');

cmd({
    pattern: "add",
    alias: ["aja"],
    react: "➕",
    desc: "Adds a user to the group.",
    category: "group",
    filename: __filename,
    use: '<number>',
},           
async (conn, mek, m, { from, args, q, isGroup, senderNumber, botNumber, reply }) => {
    try {
        if (!isGroup) return reply("❌ This command can only be used in groups.");

        const botNumberJid = conn.user.id.split(":")[0] + "@s.whatsapp.net";
        const groupMetadata = await conn.groupMetadata(from);
        const groupParticipants = groupMetadata.participants.map(p => p.id);
        const groupAdmins = groupMetadata.participants.filter(p => p.admin !== null).map(p => p.id);
        const isBotAdmins = groupAdmins.includes(botNumberJid);
        const botOwner = conn.user.id.split(":")[0];

        if (senderNumber !== botOwner) {
            return reply("❌ Only the bot owner can use this command.");
        }

        if (!isBotAdmins) return reply("❌ I need to be an admin to add users.");
        if (!q || isNaN(q)) return reply("❌ Please provide a valid phone number to add.");

        const userToAdd = `${q}@s.whatsapp.net`;

        // Pehle check karo user already group mein hai ya nahi
        const isAlreadyInGroup = groupParticipants.includes(userToAdd);

        if (isAlreadyInGroup) {
            return reply(`ℹ️ User is already in the group.`);
        }

        // Ab try karo add karne ka
        let response = await conn.groupParticipantsUpdate(from, [userToAdd], "add");

        if (response && response[0]) {
            const status = response[0].status;
            if (status === 200 || status === 409) {
                // Humne already check kar liya ke user group mein nahi tha
                return reply(`✅ User *${q}* has been added to the group.`);
            } else if (status === 403) {
                return reply("❌ Cannot add user. They might have privacy settings that prevent group invites.");
            } else {
                return reply(`✅ User has been added to the group`);
            }
        } else {
            return reply("❌ Unexpected error while adding user.");
        }

    } catch (e) {
        console.error("Error adding user:", e);
        reply("❌ An error occurred while adding the user. Please try again.");
    }
});