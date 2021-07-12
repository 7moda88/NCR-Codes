const { MessageEmbed } = require("discord.js");
const check = require("is-url");
const db = require("quick.db");

module.exports = {
    name: "eval",
    description: "",
    cooldown: 10,
    aliases: [""],
    run: async(client, message, args) => {
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (message.guild.owner.user.id !== message.author.id) {
                if (lang2 == "english") {
                    return message.channel.send(
                        new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
                        )
                    );
                } else if (lang2 == "arabic") {
                    return message.channel.send(
                        new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
                        )
                    );
                } else {
                    return message.channel.send(
                        new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
                        )
                    );
                }
            } else {
                let code = args.join(" ");
                try {
                    let ev = require('util').inspect(eval(code));
                    if (ev.length > 1950) {
                        ev = ev.substr(0, 1950);
                    }
                    let token = conf.token.replace(/\./g, "\.")
                    let re = new RegExp(token, 'g')
                    ev = ev.replace(re, "*R-eD-Ac-Te-D-*");
                    if (code.includes('console')) ev = 'Provied In Console'
                    message.channel.send(
                        new MessageEmbed()
                        .setDescription(
                            `
                **:eight_spoked_asterisk: Input: :eight_spoked_asterisk:**
                \`\`\`js\n${code}\`\`\`

                **:o: Eval: :o:**
                \`\`\`js\n${ev}\`\`\`
                `)
                        .setColor("BLUE")
                    )
                } catch (err) {
                    message.channel.send(
                        new Discord.MessageEmbed()
                        .setDescription(`**:octagonal_sign: Bad Programmer :octagonal_sign:\n\n${err}**`)
                        .setColor("BLUE")
                    )
                }
            } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
