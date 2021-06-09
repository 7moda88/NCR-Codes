const { MessageEmbed } = require("discord.js");
const check = require("is-url");
const chalk = require("chalk");
const request = require("node-superfetch");
const db = require("quick.db");

module.exports = {
    name: "uptime",
    description: "",
    cooldown: 30,
    aliases: [""],
    run: async(client, message) => {
            var devs = client.config.devs;
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            let link = message.content
                .split(" ")
                .slice(1)
                .join(" ");
            if (!link) {
                if (lang2 == "english")
                    return message.lineReply(
                        new MessageEmbed()
                        .setAuthor(
                            message.author.tag,
                            message.author.avatarURL({ dynamic: true })
                        )
                        .setColor("RED")
                        .setDescription(
                            `**${client.emotes.error} | Error: Plase Type The Express URL!.**`
                        )
                    );
                if (lang2 == "arabic")
                    return message.lineReply(
                        new MessageEmbed()
                        .setAuthor(
                            message.author.tag,
                            message.author.avatarURL({ dynamic: true })
                        )
                        .setColor("RED")
                        .setDescription(
                            `**${client.emotes.error} | خطأ: يرجى كتابة رابط ال Express!.**`
                        )
                    );
            }
            if (link.endsWith())
                if (check(link) === false) {
                    if (lang2 == "english")
                        return message.lineReply(
                            new MessageEmbed()
                            .setAuthor(
                                message.author.tag,
                                message.author.avatarURL({ dynamic: true })
                            )
                            .setColor("RED")
                            .setDescription(
                                `**${client.emotes.error} | Error: This Is Not A URL!.**`
                            )
                        );
                    if (lang2 == "arabic")
                        return message.lineReply(
                            new MessageEmbed()
                            .setAuthor(
                                message.author.tag,
                                message.author.avatarURL({ dynamic: true })
                            )
                            .setColor("RED")
                            .setDescription(
                                `**${client.emotes.error} | خطـ: هذا ليس رابط Express.**`
                            )
                        );
                }
            let database = db.get("links");
            if (database) {
                let pog = database.map(l => l.url);
                if (pog.includes(link)) {
                    message.delete().catch(err => undefined);
                    if (lang2 == "english")
                        return message.lineReply(
                            new MessageEmbed()
                            .setAuthor(
                                message.author.tag,
                                message.author.avatarURL({ dynamic: true })
                            )
                            .setColor("RED")
                            .setThumbnail(client.user.avatarURL({ dynamic: true }))
                            .setDescription(
                                `**${client.emotes.error} | Error: This URL Is Arly Uptimed!.**`
                            )
                        );
                    if (lang2 == "arabic")
                        return message.lineReply(
                            new MessageEmbed()
                            .setAuthor(
                                message.author.tag,
                                message.author.avatarURL({ dynamic: true })
                            )
                            .setColor("RED")
                            .setThumbnail(client.user.avatarURL({ dynamic: true }))
                            .setDescription(
                                `**${client.emotes.error} | خطأ: لقد تم رفع هذا الرابط من قبل!.**`
                            )
                        );
                }
            }
            try {
                const { body } = await request.get(link);
                console.log(chalk.red.bold(link) + chalk.blue.bold(" Has Been Uptimed"));
            } catch (err) {
                console.log("Bad Reader");
            }
            if (lang2 == "english")
                message.lineReply(
                    new MessageEmbed()
                    .setAuthor(
                        message.author.tag,
                        message.author.avatarURL({ dynamic: true })
                    )
                    .setColor("#2F3136")
                    .setThumbnail(client.user.avatarURL({ dynamic: true }))
                    .setDescription(
                        `**${client.emotes.success} | Done: Your Project Has Been Uptimed!.**`
                    )
                );
            if (lang2 == "arabic")
                message.lineReply(
                    new MessageEmbed()
                    .setAuthor(
                        message.author.tag,
                        message.author.avatarURL({ dynamic: true })
                    )
                    .setColor("#2F3136")
                    .setDescription(
                        `**${client.emotes.success} | تم: تم رفع مشروعك بنجاح!.**`
                    )
                )
                .then(() => {
                    let data = {
                        author: message.author.id,
                        url: link
                    };
                    message.delete().catch(err => undefined);
                    db.push("links", data);
                })
                .catch(err => {
                    return;
                }); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc