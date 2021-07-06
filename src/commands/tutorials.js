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
                            `**[#0](https://www.youtube.com/watch?v=Y7gMRuVax18)
                            [#1](https://www.youtube.com/watch?v=0fQ_PeC9xOk)
                            [#2](https://www.youtube.com/watch?v=fFXdR7-dAI0)
                            [#3](https://www.youtube.com/watch?v=FUrVIVdBnr0)
                            [#4](https://www.youtube.com/watch?v=gkBORe2b8qo)
                            [#5](https://www.youtube.com/watch?v=ETNT_Q8T1OE)
                            [#6](https://www.youtube.com/watch?v=ut5LaKmH3lE)
                            [#7](https://www.youtube.com/watch?v=T8nNgsL18U8)
                            [#8](https://www.youtube.com/watch?v=pi8u9PaSM9w)
                            [#9](https://www.youtube.com/watch?v=xhre9wNFlLI)
                            [#10](https://www.youtube.com/watch?v=l1cQGsYqR68)
                            [#11](https://www.youtube.com/watch?v=2Z9ma0uOWa4)
                            [#12](https://www.youtube.com/watch?v=KMxbPJONTRY)
                            [#13](https://www.youtube.com/watch?v=3mFLFOOsOoM)
                            [#14](https://www.youtube.com/watch?v=WaVmeLlZBxw)
                            [#15](https://www.youtube.com/watch?v=MBNu51OilW4)
                            [#16](https://www.youtube.com/watch?v=qNXOykoWfNs)
                            [#17](https://www.youtube.com/watch?v=5soa2m_jPX8)
                            [#18](https://www.youtube.com/watch?v=SG0AkQnNFZ8)
                            [#19](https://www.youtube.com/watch?v=yDQnQq03Yxo)
                            [#20](https://www.youtube.com/watch?v=CZLAFhBNiPU)
                            [#21](https://www.youtube.com/watch?v=BzJFPTfEumo)
                            [#22](https://www.youtube.com/watch?v=Apn56me5HQY)
                            [#23](https://www.youtube.com/watch?v=8XQsXt5y2tw)
                            [#24](https://www.youtube.com/watch?v=Jw4wM4VbF98)
                            [#25](https://www.youtube.com/watch?v=m0v2HLqPPsM)
                            [#26](https://www.youtube.com/watch?v=jthuD_wy0og)**`
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
                            `**[#0](https://www.youtube.com/watch?v=Y7gMRuVax18)
                            [#1](https://www.youtube.com/watch?v=0fQ_PeC9xOk)
                            [#2](https://www.youtube.com/watch?v=fFXdR7-dAI0)
                            [#3](https://www.youtube.com/watch?v=FUrVIVdBnr0)
                            [#4](https://www.youtube.com/watch?v=gkBORe2b8qo)
                            [#5](https://www.youtube.com/watch?v=ETNT_Q8T1OE)
                            [#6](https://www.youtube.com/watch?v=ut5LaKmH3lE)
                            [#7](https://www.youtube.com/watch?v=T8nNgsL18U8)
                            [#8](https://www.youtube.com/watch?v=pi8u9PaSM9w)
                            [#9](https://www.youtube.com/watch?v=xhre9wNFlLI)
                            [#10](https://www.youtube.com/watch?v=l1cQGsYqR68)
                            [#11](https://www.youtube.com/watch?v=2Z9ma0uOWa4)
                            [#12](https://www.youtube.com/watch?v=KMxbPJONTRY)
                            [#13](https://www.youtube.com/watch?v=3mFLFOOsOoM)
                            [#14](https://www.youtube.com/watch?v=WaVmeLlZBxw)
                            [#15](https://www.youtube.com/watch?v=MBNu51OilW4)
                            [#16](https://www.youtube.com/watch?v=qNXOykoWfNs)
                            [#17](https://www.youtube.com/watch?v=5soa2m_jPX8)
                            [#18](https://www.youtube.com/watch?v=SG0AkQnNFZ8)
                            [#19](https://www.youtube.com/watch?v=yDQnQq03Yxo)
                            [#20](https://www.youtube.com/watch?v=CZLAFhBNiPU)
                            [#21](https://www.youtube.com/watch?v=BzJFPTfEumo)
                            [#22](https://www.youtube.com/watch?v=Apn56me5HQY)
                            [#23](https://www.youtube.com/watch?v=8XQsXt5y2tw)
                            [#24](https://www.youtube.com/watch?v=Jw4wM4VbF98)
                            [#25](https://www.youtube.com/watch?v=m0v2HLqPPsM)
                            [#26](https://www.youtube.com/watch?v=jthuD_wy0og)**`
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
            } else if (args[1] === "quick" || "quick.db") {
                if (lang2 == "english") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`Videos ${client.emotes.success}`)
                        .setColor("YELLOW")
                        .setDescription(
                            `**[#0](https://www.youtube.com/watch?v=OKLocmicMoc)
                            [#1](https://www.youtube.com/watch?v=pwr-FTVmBl0)
                            [#2](https://www.youtube.com/watch?v=va8z2L-Gh4E)
                            [#3](https://www.youtube.com/watch?v=5Nfl0eUamlc)**`
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
                            `**[#0](https://www.youtube.com/watch?v=OKLocmicMoc)
                            [#1](https://www.youtube.com/watch?v=pwr-FTVmBl0)
                            [#2](https://www.youtube.com/watch?v=va8z2L-Gh4E)
                            [#3](https://www.youtube.com/watch?v=5Nfl0eUamlc)**`
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
            } else if (args[1] === "py" || "python") {
                if (lang2 == "english") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`Videos ${client.emotes.success}`)
                        .setColor("YELLOW")
                        .setDescription(
                            `**[#0](https://www.youtube.com/watch?v=aWr4KD7YzJo)
                            [#1](https://www.youtube.com/watch?v=AYmCseFw5cs)
                            [#2](https://www.youtube.com/watch?v=JXDzWrc46Ls)
                            [#3](https://www.youtube.com/watch?v=7XS92R-Qmq4)
                            [#4](https://www.youtube.com/watch?v=V-5AGfl9rks)
                            [#5](https://www.youtube.com/watch?v=sfZGQMA1f0c)**`
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
                            `**[#0](https://www.youtube.com/watch?v=aWr4KD7YzJo)
                            [#1](https://www.youtube.com/watch?v=AYmCseFw5cs)
                            [#2](https://www.youtube.com/watch?v=JXDzWrc46Ls)
                            [#3](https://www.youtube.com/watch?v=7XS92R-Qmq4)
                            [#4](https://www.youtube.com/watch?v=V-5AGfl9rks)
                            [#5](https://www.youtube.com/watch?v=sfZGQMA1f0c)**`
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
                            `**${client.emotes.error} | Oly \`js\`, \`quick.db\`, \`py\` Is Avelble**`
                        )
                        .setFooter(`Request By: ${message.author.tag}`)
                        .setTimestamp()
                    );
                } else if (lang2 == "arabic") {
                    message.lineReply(
                        new MessageEmbed()
                        .setTitle(`Error ${client.emotes.error}`)
                        .setColor("RED")
                        .setDescription(`**${client.emotes.error} | فقط ال \`js\`, \`quick.db\`, \`py\` متاح**`)
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
