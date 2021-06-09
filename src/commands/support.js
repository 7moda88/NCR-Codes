const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "support",
    cooldown: 7,
    aliases: ["invite"],
    run: async(client, message) => {
            var devs = client.config.devs;
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (lang2 == "arabic") {
                let btn = new MessageButton()
                    .setLabel('رابط سيرفر سبورت!')
                    .setStyle('url')
                    .setURL('https://discord.gg/r6jqjHYHEC');
                let btn2 = new MessageButton()
                    .setLabel('رابط اضافة بوت!')
                    .setStyle('url')
                    .setURL('https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands');
                let btn3 = new MessageButton()
                    .setLabel('رابط صفحة تصويت!')
                    .setStyle('url')
                    .setURL('https://top.gg/bot/780558820640423966/vote');
                let btn4 = new MessageButton()
                    .setLabel('رابط موقع البوت!')
                    .setStyle('url')
                    .setURL('http://www.ncr-codes.ml/');
                let row = new MessageActionRow()
                    .addComponent(btn)
                    .addComponent(btn2)
                    .addComponent(btn3)
                    .addComponent(btn4);
                return message.channel.send("**روابط مساعدة البوت!!.**", { component: row });
            } else if (lang2 == "english") {
                let btn = new MessageButton()
                    .setLabel('Support Server!')
                    .setStyle('url')
                    .setURL('https://discord.gg/r6jqjHYHEC');
                let btn2 = new MessageButton()
                    .setLabel('Bot Invite!')
                    .setStyle('url')
                    .setURL('https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands');
                let btn3 = new MessageButton()
                    .setLabel('Top.gg!')
                    .setStyle('url')
                    .setURL('https://top.gg/bot/780558820640423966/vote');
                  let btn4 = new MessageButton()
                    .setLabel('Bot Website!')
                    .setStyle('url')
                    .setURL('http://www.ncr-codes.ml/');
                let row = new MessageActionRow()
                    .addComponent(btn)
                    .addComponent(btn2)
                    .addComponent(btn3)
                    .addComponent(btn4);
                return message.channel.send("**Bot Support Links!!.**", { component: row });
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
