const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "djs",
    cooldown: 7,
    aliases: [""],
    run: async(client, message, args) => {
            var devs = client.config.devs;
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            let genral = new MessageEmbed()
                .setColor("#2F3136")
                .setTitle("**Discord.js Commands**")
                .setURL(
                    `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
                )
                .setFooter(client.user.username)
                .setTimestamp()
                .addFields({
                    name: `\`${prefix}djs-v11\``,
                    value: `أكواد ديسكورد v11`,
                    inline: true
                }, {
                    name: `\`${prefix}djs-v12\``,
                    value: `أكواد ديسكورد v12`,
                    inline: true
                }, {
                    name: `\`${prefix}djs-cmd-handler\``,
                    value: ` اكواد الكوماند هندلر`,
                    inline: true
                })
            let genral2 = new MessageEmbed()
                .setColor("#2F3136")
                .setTitle("**Discord.js Commands**")
                .setURL(
                    `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
                )
                .setFooter(client.user.username)
                .setTimestamp()
                .addFields({
                    name: `\`${prefix}djs-v11\``,
                    value: `Discord.js v11`,
                    inline: true
                }, {
                    name: `\`${prefix}djs-v12\``,
                    value: `Discord.js v12`,
                    inline: true
                }, {
                    name: `\`${prefix}djs-cmd-handler\``,
                    value: `Discord.js Handler`,
                    inline: true
                })
            if (lang2 == "arabic") {
                message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setTitle(`**${client.emotes.loding} جاري معالجة البيانات...**`)
                    )
                    .then(m => {
                        setTimeout(() => {
                            m.edit({ embed: genral });
                        }, 1000);
                    });
            } else if (lang2 == "english") {
                message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setTitle(`**${client.emotes.loding} Processing data...**`)
                    )
                    .then(m => {
                        setTimeout(() => {
                            m.edit({ embed: genral2 });
                        }, 1000);
                    });
            } else {
                return message.channel.send(
                    new MessageEmbed()
                    .setColor("RED")
                    .setDescription(
                        `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
                    )
                );
            } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
