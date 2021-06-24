/*
     message
        .lineReply(
          new MessageEmbed()
            .setColor("#2F3136")
            .setTitle(`**${client.emotes.loding} Processing data...**`)
        )
        .then(m => {
          setTimeout(() => {
            let btn = new MessageButton()
              .setLabel("Music Bot")
              .setStyle("red")
              .setID("musicBotMaker");
            let row = new MessageActionRow().addComponent(btn);
            m.delete();
            message.channel.send(
              "**<:craftingtable:849534405903253565> | Please chose the bot you wont to create**",
              { component: row }
            );
          }, 1000);
        });
*/

const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const mongo = require("../db/mongo");
const musicTokensSchema = require("../db/schema/music-tokens-schema");
const chalk = require("chalk");

module.exports = {
    name: "create",
    description: "",
    cooldown: 10,
    aliases: ["create", "make"],
    run: async(client, message, args) => {
            message.channel.send(`<:craftingtable:849534405903253565> **| This command is temporarily disabled!**`)
            return message.react('<:craftingtable:849534405903253565>')
            message.delete();
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (lang2 == "english") {
                if (!args[0]) {
                    return message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(
                            `**${client.emotes.error} | Please specify the bot you wont**`
                        )
                    );
                }
                if (args[0] && !args[0].startsWith("music")) {
                    return message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(
                            `${client.emotes.error} | Available bots: **music**`
                        )
                    );
                }
                if (args[0] && args[0].startsWith("music")) {
                    if (args[0] && !args[1]) {
                        return message.lineReply(
                            new MessageEmbed()
                            .setColor("#2F3136")
                            .setDescription(
                                `**${client.emotes.error} | Please specify the bot token**`
                            )
                        );
                    }
                }
                if (args[0] && args[1] && !args[2]) {
                    return message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(
                            `**${client.emotes.error} | Please specify the bot prefix**`
                        )
                    );
                }
                if (args[0] && args[1] && args[2]) {
                    const connectToMongoDB = async() => {
                        await mongo().then(async mongosse => {
                            try {
                                let data;
                                data = await musicTokensSchema.findOne({
                                    userId: message.author.id
                                });
                                if (data) {
                                    console.log(
                                        chalk.red.bold(data.toJSON().userId) +
                                        chalk.green.bold(" Updated Hes Music Data")
                                    );
                                    await musicTokensSchema.updateOne({
                                        token: data.toJSON().token
                                    }, {
                                        token: args[1]
                                    });
                                    await musicTokensSchema.updateOne({
                                        prefix: data.toJSON().prefix
                                    }, {
                                        prefix: args[2]
                                    });
                                } else {
                                    console.log(
                                        chalk.red.bold(message.author.id) +
                                        chalk.green.bold(" Created Hes Music Data")
                                    );
                                    const musicTokens = {
                                        userId: message.author.id,
                                        token: args[1],
                                        prefix: args[2]
                                    };
                                    await new musicTokensSchema(musicTokens).save();
                                }
                            } finally {
                                mongosse.connection.close();
                            }
                        });
                    };
                    connectToMongoDB();
                    message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(`**${client.emotes.success} | Your bot is online**`)
                        .addField(
                            "**be sure**", [
                                "you token can't be visible to any user except you",
                                "we are soo soory if the you stop working but you can just created anther time",
                                "please make sure when you use the command use it in a privet server soo no one can grap your tokn",
                                "and the max bots the user can create is one"
                            ],
                            true
                        )
                    );
                }
            } else if (lang2 == "arabic") {
                if (!args[0]) {
                    message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(
                            `**${client.emotes.error} | يرجى تحديد البوت المراد صناعته**`
                        )
                    );
                }
                if (args[0] && !args[0].startsWith("Music")) {
                    message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(
                            `${client.emotes.error} | البوتات المتوفره: **Music**`
                        )
                    );
                }
                if (args[0] && args[0].startsWith("Music")) {
                    if (args[0] && !args[1]) {
                        message.lineReply(
                            new MessageEmbed()
                            .setColor("#2F3136")
                            .setDescription(`**${client.emotes.error} | يرجى كتابت التوكن**`)
                        );
                    }
                }
                if (args[0] && args[1] && !args[2]) {
                    message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(`**${client.emotes.error} | يرجى كتبات البرفكس**`)
                    );
                }
                if (args[0] && args[1] && args[2]) {
                    const connectToMongoDB = async() => {
                        await mongo().then(async mongosse => {
                            try {
                                let data;
                                data = await musicTokensSchema.findOne({
                                    userId: message.author.id
                                });
                                if (data) {
                                    console.log(
                                        chalk.red.bold(data.toJSON().userId) +
                                        chalk.green.bold(" Updated Hes Music Data")
                                    );
                                    await musicTokensSchema.updateOne({
                                        token: data.toJSON().token
                                    }, {
                                        token: args[1]
                                    });
                                    await musicTokensSchema.updateOne({
                                        prefix: data.toJSON().prefix
                                    }, {
                                        prefix: args[1]
                                    });
                                } else {
                                    console.log(
                                        chalk.red.bold(message.author.id) +
                                        chalk.green.bold(" Created Hes Music Data")
                                    );
                                    const musicTokens = {
                                        userId: message.author.id,
                                        token: args[1],
                                        prefix: args[2]
                                    };
                                    await new musicTokensSchema(musicTokens).save();
                                }
                            } finally {
                                mongosse.connection.close();
                            }
                        });
                    };
                    connectToMongoDB();
                    message.lineReply(
                        new MessageEmbed()
                        .setColor("#2F3136")
                        .setDescription(`**${client.emotes.success} | تم رفع بوت بنجاح**`)
                        .addField(
                            "**تأكد ان**", [
                                "توكن بوتك في أمان و لا يمكن أخطراقه",
                                "ان توقف بوت عن العمل ف هاذه المشكله يمكن حلها عن طريق رفع البوت مره اخري",
                                "عند أستعمال الأمر يرجى ان يكون في سيرفرك الخاص بالتجارب حتى لا يأتي أحد و يسرق التوكن عندما تكتوبه انت",
                                "و الحد الأقصى للبوتات المرفوعه هوا واحد لكل مستخدم"
                            ],
                            true
                        )
                    );
                }
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
