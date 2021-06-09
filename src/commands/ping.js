const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "ping",
    cooldown: 7,
    aliases: ["ping"],
    run: async(client, message) => {
            var states = "🟢 Excellent";
            var states2 = "🟢 Excellent";
            var ncr = message;
            var msg = `${Date.now() - ncr.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = "🟢 Good";
            if (Number(msg) > 170) states = "🟡 Not Bad";
            if (Number(msg) > 350) states = "🔴 Soo Bad";
            if (Number(api) > 70) states2 = "🟢 Good";
            if (Number(api) > 170) states2 = "🟡 Not Bad";
            if (Number(api) > 350) states2 = "🔴 Soo Bad";
            if (ncr.author.bot) return;
            ncr.lineReply(
                new MessageEmbed()
                .setColor("#2F3136")
                .setAuthor(ncr.author.username, ncr.author.avatarURL())
                .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)
                .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
                .setTimestamp()
                .setFooter(`Request By ${ncr.author.tag}`)
            ); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTscs
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc