const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const dateFormat = ("dateformat");
const ms = require("ms");

module.exports = {
    name: "test-djs",
    cooldown: 3,
    aliases: [""],
    run: async(client, message, args) => {
            console.log(1)
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (lang2 == "arabic") {
              message.channel.send(
                new MessageEmbed()
                .setColor("RED")
                .setDescription(`خطأ: يرحي تحدي اصدار ال بكج\nمثال: ${prefix}test-djs-v12 <code number on the "${prefix}djs" board>`)
              )
            } else if {
              message.channel.send(
                new MessageEmbed()
                .setColor("RED")
                .setDescription(`Error: please chose the package version\nexample: ${prefix}test-djs-v12 <code number on the "${prefix}djs" board>`)
              )
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
