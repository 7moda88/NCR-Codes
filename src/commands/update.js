const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "update",
    cooldown: 7,
    aliases: [""],
    run: async(client, message, args) => {
            var devs = client.config.devs;
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (lang2 == "english") {
                message.lineReply(
                    new MessageEmbed()
                    .setTitle(`Done ${client.emotes.success}`)
                    .setColor("RED")
                    .setDescription(`[Click Here](https://discord.convert-codes.tk/)`)
                    .setFooter(`Request By: ${message.author.tag}`)
                    .setTimestamp()
                );
            } else if (lang2 == "arabic") {
                message.lineReply(
                    new MessageEmbed()
                    .setTitle(`تم ${client.emotes.success}`)
                    .setColor("RED")
                    .setDescription(`[اضغط](https://discord.convert-codes.tk/)`)
                    .setFooter(`Request By: ${message.author.tag}`)
                    .setTimestamp()
                );
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