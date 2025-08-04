const { cmd } = require("../command");
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");

const SAFETY = {
  MAX_JIDS: 20,
  BASE_DELAY: 2000,
  EXTRA_DELAY: 4000,
};

cmd({
  pattern: "forward",
  alias: ["fwd"],
  desc: "Forward quoted media (including big documents/videos) to multiple groups safely",
  category: "owner",
  filename: __filename,
}, async (client, message, match, { isOwner }) => {
  try {
    if (!isOwner) return message.reply("*📛 Owner Only Command*");
    if (!message.quoted) return message.reply("*📌 Reply to a media/document message*");

    // Process JIDs input
    let jidInput = "";
    if (typeof match === "string") jidInput = match.trim();
    else if (Array.isArray(match)) jidInput = match.join(" ").trim();
    else if (match && typeof match === "object") jidInput = match.text || "";

    const rawJids = jidInput.split(/[\s,]+/).map(j => j.trim()).filter(j => j.length > 0);
    const validJids = rawJids
      .map(jid => {
        jid = jid.replace(/\s/g, "");
        if (!jid.endsWith("@g.us")) jid += "@g.us";
        return jid.match(/^[0-9]+(-[0-9]+)?@g\.us$/) ? jid : null;
      })
      .filter(jid => jid !== null)
      .slice(0, SAFETY.MAX_JIDS);

    if (validJids.length === 0) {
      return message.reply(
        "❌ No valid group JIDs found.\n\n📝 Example:\n.fwd 1203xxx@g.us 9230xxx-1583xxx"
      );
    }

    const mtype = message.quoted.mtype;
    const mime = message.quoted.mimetype || "application/octet-stream";
    const filename = message.quoted.fileName || "file";
    const caption = message.quoted.text || "";

    // Supported media types for forwarding
    const supportedTypes = [
      "imageMessage",
      "videoMessage",
      "audioMessage",
      "documentMessage",
      "stickerMessage",
    ];

    if (!supportedTypes.includes(mtype)) {
      return message.reply("❌ Unsupported message type. Please reply to an image, video, audio, sticker, or document.");
    }

    // Streaming download
    const streamType = mtype.replace("Message", "");
    const stream = await downloadContentFromMessage(message.quoted, streamType);

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    let messageContent = {};

    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          mimetype: mime,
          caption,
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          mimetype: mime,
          caption,
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: mime,
          ptt: message.quoted.ptt || false,
        };
        break;
      case "stickerMessage":
        messageContent = {
          sticker: buffer,
          mimetype: mime,
        };
        break;
      case "documentMessage":
        messageContent = {
          document: buffer,
          mimetype: mime,
          fileName: filename,
          caption,
        };
        break;
    }

    let successCount = 0;
    const failedJids = [];

    for (const [index, jid] of validJids.entries()) {
      try {
        await client.sendMessage(jid, messageContent);
        successCount++;

        if ((index + 1) % 10 === 0) {
          await message.reply(`📤 Sent to ${index + 1}/${validJids.length} groups...`);
        }

        const delayTime = (index + 1) % 10 === 0 ? SAFETY.EXTRA_DELAY : SAFETY.BASE_DELAY;
        await new Promise((res) => setTimeout(res, delayTime));
      } catch (err) {
        failedJids.push(jid.replace("@g.us", ""));
        console.error(`❌ Failed to send to ${jid}:`, err.message);
        await new Promise((res) => setTimeout(res, SAFETY.BASE_DELAY));
      }
    }

    let report = `✅ *Forward Complete*\n\n📦 Success: ${successCount}/${validJids.length}`;
    if (failedJids.length > 0) {
      report += `\n❌ Failed (${failedJids.length}): ${failedJids.slice(0, 5).join(", ")}`;
      if (failedJids.length > 5) report += ` +${failedJids.length - 5} more`;
    }
    if (rawJids.length > SAFETY.MAX_JIDS) {
      report += `\n⚠️ Note: Limited to first ${SAFETY.MAX_JIDS} groups`;
    }

    await message.reply(report);
  } catch (error) {
    console.error("⚠️ Forward Error:", error);
    await message.reply(
      `❌ Error: ${error.message.substring(0, 100)}\nCheck:\n• Group access\n• File validity\n• Bot status`
    );
  }
});