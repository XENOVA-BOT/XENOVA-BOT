const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');
const https = require("https");
const { execSync } = require("child_process");
const fs = require('fs');

function detectHostingPlatform() {
    if (process.env.RAILWAY_STATIC_URL) return 'Railway';
    if (process.env.REPL_ID) return 'Replit';
    if (process.env.HEROKU_APP_NAME || process.env.DYNO) return 'Heroku';
    if (process.env.RENDER) return 'Render';
    if (process.env.CODESPACES) return 'GitHub Codespaces';
    if (process.env.HOME?.includes('/home/container')) return 'VPS (Likely Ubuntu)';
    return os.hostname();
}

function getUptimeBar(seconds) {
    const totalBars = 10;
    const maxUptime = 24 * 60 * 60;
    const filledBars = Math.round((seconds / maxUptime) * totalBars);
    return '🟩'.repeat(filledBars) + '⬛'.repeat(totalBars - filledBars);
}

function getLinuxDistro() {
    try {
        const data = fs.readFileSync('/etc/os-release', 'utf-8');
        const nameLine = data.split('\n').find(line => line.startsWith('PRETTY_NAME='));
        return nameLine ? nameLine.split('=')[1].replace(/"/g, '') : 'Unknown Linux';
    } catch {
        return 'Unknown OS';
    }
}

function getCPUUsage() {
    const cpus = os.cpus();
    let idle = 0, total = 0;

    cpus.forEach(core => {
        for (let type in core.times) {
            total += core.times[type];
        }
        idle += core.times.idle;
    });

    const usage = 100 - Math.round((idle / total) * 100);
    return `${usage}%`;
}

function getDiskUsage() {
    try {
        const output = execSync("df -h / | awk 'NR==2 {print $3\" / \"$2}'").toString().trim();
        return output || 'Unavailable';
    } catch {
        return 'Unavailable';
    }
}

function getPublicIP() {
    return new Promise((resolve) => {
        https.get('https://api.ipify.org', (res) => {
            let ip = '';
            res.on('data', chunk => ip += chunk);
            res.on('end', () => resolve(ip));
        }).on('error', () => resolve('Unavailable'));
    });
}

cmd({
    pattern: "alive",
    alias: ["status", "uptime", "a"],
    desc: "Check if the bot is online and active",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const hostPlatform = detectHostingPlatform();
        const distro = getLinuxDistro();
        const ip = await getPublicIP();
        const ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const ramTotal = (os.totalmem() / 1024 / 1024).toFixed(2);
        const uptimeSeconds = process.uptime();
        const uptimeBar = getUptimeBar(uptimeSeconds);
        const uptimeText = runtime(uptimeSeconds);
        const cpuUsage = getCPUUsage();
        const diskUsage = getDiskUsage();

        const status = `*📡 SHABAN MD V5*

✅ *Status:* Active  
👑 *Owner:* ${config.OWNER_NAME}  
🧩 *Version:* 3.0.0  
🎯 *Mode:* ${config.MODE}  
🎛️ *Prefix:* ${config.PREFIX}

💾 *RAM:* ${ramUsed}MB / ${ramTotal}MB  
🧠 *CPU:* ${cpuUsage}  
💽 *Disk:* ${diskUsage}  
⏱️ *Uptime:* ${uptimeText}  
📊 *Bar:* ${uptimeBar}

🖥️ *Host:* ${hostPlatform}  
🐧 *OS:* ${distro}  
🌐 *IP:* ${ip}
__________________________________
${config.DESCRIPTION}`;

        await conn.sendMessage(from, {
            image: { url: "https://i.ibb.co/nqRfh0SB/shaban-md.jpg" },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363358310754973@newsletter',
                    newsletterName: 'MR-SHABAN⁴⁰',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});