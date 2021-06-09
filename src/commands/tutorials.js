const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "tutorials",
    cooldown: 7,
    aliases: [""],
    run: async(client, message) => {
            var devs = client.config.devs;
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            var args = message.content.split(" ");
            if (args[1] === "js" || "javascript") {
                if (lang2 == "english") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`Videos ${client.emotes.success}`)
                        .setColor("YELLOW")
                        .setDescription(
                            " **[#0](https://www.youtube.com/watch?v=v5wTqv7y_QM)\n[#1](https://www.youtube.com/watch?v=cum9l66X5Kk&t=7s)** "
                        )
                        .setFooter(`Request By: ${message.author.tag}`)
                        .setTimestamp()
                    );
                } else if (lang2 == "arabic") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`فيديوه ${client.emotes.success}`)
                        .setColor("YELLOW")
                        .setDescription(
                            " **[#0](https://www.youtube.com/watch?v=v5wTqv7y_QM)\n[#1](https://www.youtube.com/watch?v=cum9l66X5Kk&t=7s)** "
                        )
                        .setFooter(`Request By: ${message.author.tag}`)
                        .setTimestamp()
                    );
                } else {
                    return message.lineReply(
                        new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
                        )
                    );
                }
            } else {
                if (lang2 == "english") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`Error ${client.emotes.error}`)
                        .setColor("RED")
                        .setDescription(
                            `**${client.emotes.error} | Oly \`js\` Is Avelble**`
                        )
                        .setFooter(`Request By: ${message.author.tag}`)
                        .setTimestamp()
                    );
                } else if (lang2 == "arabic") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`Error ${client.emotes.error}`)
                        .setColor("RED")
                        .setDescription(`**${client.emotes.error} | فقط ال \`js\` متاح**`)
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
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc