const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const dateFormat = ("dateformat");
const ms = require("ms");

module.exports = {
    name: "test-djs-v12",
    cooldown: 3,
    aliases: [""],
    run: async(client, message, args) => {
            console.log(1)
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (lang2 == "arabic" || lang2 == "english") {
                if (args[0] == '1') {
                    message.delete({ timeout: 0 })
                    if (!message.channel.guild) return message.reply(`> ** This Command For Servers Only**`);
                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
                    if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
                    let args = message.content.split(" ").slice(2);
                    let messagecount = parseInt(args);
                    if (args > 100) return message.channel.send(
                        new MessageEmbed()
                        .setDescription(`\`\`\`js
i cant delete more than 100 messages
\`\`\``)).then(messages => messages.delete({ timeout: 5000 }));
                    if (!messagecount) messagecount = '100';
                    message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(messages => {
                        message.channel.send(
                            new MessageEmbed()
                            .setDescription(`\`\`\`js
${messages.size} messages cleared
\`\`\``)
                        ).then(messages =>
                            messages.delete({ timeout: 5000 }));
                    });
                } else if (args[0] == '2') {
                    var mention = message.mentions.members.first() || client.users.cache.get(args[2]) || client.users.cache.find(u => u.username == args[2]);
                    var user = message.guild.member(mention);
                    var role = message.guild.roles.cache.find(r => r.name == args[3]) || message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[2]);
                    if (message.author.bot) return;
                    if (args[1] === "add") {
                        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
                        if (!user) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
                        if (!role) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
                        user.roles.add(role).then(() => {
                            return message.channel.send(`> \`-\` **<@!${user.id}> has get <@&${role.id}> role**`)
                        })
                    } else if (args[1] === "remove") {
                        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
                        user.roles.remove(role).then(() => {
                            return message.channel.send(`> \`-\` **<@!${message.author.id}> has removed <@&${role.id}> role from <@!${user.id}>**`)
                        })
                    } else if (args[1] === "all") {
                        message.guild.members.cache.forEach(m => {
                            const user = message.guild.member(m)
                            user.roles.add(role)
                        })
                        return message.channel.send(`> \`-\` **All server members has get <@&${role.id}>**`);
                    }
                } else if (args[0] == '3') {
                    message.channel.send(`bad reading`);
                } else if (args[0] == '4') {
                    var member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
                    var trueUser = message.guild.member(member);
                    var reason = message.content.split(' ').slice(4).join(' ') || 'undefined';
                    var time = args[2] || '1y';
                    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + " **I Can't Bannd Any Member In This Server Becuse I Don't Have `BAN_MEMBERS` Permission!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
                    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + " **You Need `BAN_MEMBERS` Permission To Use This Command!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
                    if (!trueUser) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID Same One!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
                    if (!reason) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("❌" + " **Please Type Reason!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
                    trueUser.ban({ reason: reason }).then(() => {
                        message.channel.send(new MessageEmbed().setColor("GREEN").setDescription("✅" + ` **<@!${trueUser.user.id}> banned from the server ! :airplane: by:<@${message.author.id}> **`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
                        setTimeout(() => {
                            message.guild.fetchBans().then(bans => {
                                if (bans.size == 0) return;
                                bans.forEach(ban => {
                                    if (ban.user.id == trueUser.user.id) {
                                        message.guild.members.unban(ban.user.id);
                                    } else console.log(ban.user.id + " => " + trueUser.user.id)
                                });
                            });
                        }, ms(time))
                    })
                } else if (args[0] == '5') {
                    const ncr = message;
                    if (!ncr.guild.member(ncr.author).hasPermission("KICK_MEMBERS"))
                        return ncr.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
                    if (!ncr.guild.member(client.user).hasPermission("KICK_MEMBERS"))
                        return ncr.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
                    const user = ncr.mentions.users.first();
                    if (user) {
                        const member = ncr.guild.member(user);
                        if (member) {
                            member
                                .kick('Optional reason that will display in the audit logs')
                                .then(() => {
                                    const embed = new MessageEmbed()
                                        .setColor("00e8ff")
                                        .setTitle(`Successfully kicked ${user.tag}`)
                                    ncr.channel.send(embed);

                                })
                                .catch(err => {
                                    ncr.reply(`🙄 - I couldn't kick that user. Please check my permissions and role position.`);
                                    console.error(err);
                                });
                        } else {
                            ncr.reply("**🙄 - I can't find this member**");
                        }
                    } else {
                        const embed = new MessageEmbed()
                            .setColor("00e8ff")
                            .setTitle(`**Command: kick**`)
                            .setDescription(
                                `Kicks a member.

**Usage:**
#kick (user) (reason)

**Examples:**
#kick ${ncr.author}`)
                        ncr.channel.send(embed);
                    }
                } else if (args[0] == '6') {
                    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
                        new MessageEmbed().setColor("RED")
                        .setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**")
                        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
                    )
                    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(
                        new MessageEmbed().setColor("RED")
                        .setDescription("❌" + " **I Can't Mute Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**")
                        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
                    )
                    let member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
                    var user = message.guild.member(member)
                    if (!user) return message.channel.send(
                        new MessageEmbed().setColor("RED")
                        .setDescription("❌" + " **Please Mention/ID Same One!**")
                        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
                    )
                    if (user.id === message.author.id) return message.reply(
                        new MessageEmbed().setColor("YELLOW")
                        .setDescription("⚠" + " **WTF Are You Doing ??**")
                        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
                    )
                    if (user.id === client.user.id) return message.channel.send(
                        new MessageEmbed().setColor("YELLOW")
                        .setDescription("⚠" + " **WTF Are You Doing ??**")
                        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
                    )
                    if (!message.guild.member(user).bannable) return message.reply(
                        new MessageEmbed().setColor("RED")
                        .setDescription("❌" + " **Soory I Can't Mute Same One High Than Me >_<**")
                        .setFooter(`Request By ${message.author.tag}`).setTimestamp()
                    )
                    let muteRole = message.guild.roles.cache.find(n => n.name === 'Muted')
                    if (!muteRole) {
                        message.guild.roles.create({
                            data: {
                                name: "Muted",
                            }
                        }).then(async(role) => {
                            await message.guild.channels.cache.forEach(channel => {
                                channel.overwritePermissions([{
                                    id: role.id,
                                    deny: ["SEND_MESSAGES"]
                                }]);
                            })
                        })
                    }
                    user.roles.add(muteRole)
                    var time = message.content.split(' ')[3]
                    if (!time) time = '24h'
                    message.channel.send(new MessageEmbed().setColor("GREEN").setDescription("✅" + ` **${user} Has Ben Muted By <@!${message.author.id}>, For a \`${time}\`**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    setTimeout(() => {
                        user.roles.remove(muteRole);
                    }, ms(time));
                    return;
                } else if (args[0] == '7') {
                    if (args[1] == 'lock') {
                        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
                        let channel = message.mentions.channels.first();
                        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
                        if (!channel) channel_find = message.channel
                        if (!channel_find) return;
                        channel_find.updateOverwrite(message.guild.id, {
                            SEND_MESSAGES: false
                        });
                        message.channel.send(
                            new MessageEmbed()
                            .setDescription(`\`\`\`js\n🔒 | Done Locked ${channel_find.name}\n\`\`\``)
                        );
                    } else if (args[1] == 'unlock') {
                        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
                        let channel = message.mentions.channels.first();
                        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
                        if (!channel) channel_find = message.channel;
                        if (!channel_find) return;
                        channel_find.updateOverwrite(message.guild.id, {
                            SEND_MESSAGES: true
                        });
                        message.channel.send(
                            new MessageEmbed()
                            .setDescription(`\`\`\`js\n🔓 | Done Unlocked ${channel_find.name}\n\`\`\``)
                        );
                    } else return message.channel.send('lock/unlock')
                } else if (args[0] == '8') {
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(":no_entry_sign:  الامر هاذا ل الاداره فقط ");
                    var niro = message.content.split(' ').slice(2).join(' ')
                    if (!niro) return message.channel.setName(message.channel.name)
                    message.channel.setName(niro);
                    message.reply('**:white_check_mark: تم تغير اسم الشات بنجاح**')
                } else if (args[0] == '9') {
                    const error = "❌";
                    const timeing = "⏱";
                    const success = "✅";
                    const lodeing = "🤔";
                    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new MessageEmbed().setDescription(error + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(new MessageEmbed().setDescription(error + " **I Can't Kick Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**").setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    let user = message.mentions.members.first()
                    if (!user) return message.channel.send(new MessageEmbed().setDescription(error + " **Please Mention Same One!**").setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    if (user.id === message.author.id) return message.reply(new MessageEmbed().setDescription(lodeing + " **WTF Are You Doing ??**").setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    if (!message.guild.member(user).bannable) return message.reply(new MessageEmbed().setDescription(error + " **I Can't Unmute one high than me >_<**").setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    var muteRole = message.guild.roles.cache.find(n => n.name === 'Muted')
                    if (!muteRole) return message.channel.send(new MessageEmbed().setDescription(lodeing + ` **WTF Is That ?? [ Super Error ]**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
                    user.roles.remove(muteRole)
                    message.channel.send(lodeing + " **Processing The Unmute Function**").then((m) => {
                        m.edit(success + " **Processing is complete**")
                    })
                    message.channel.send(new MessageEmbed().setDescription(success + ` **${user} Has Ben Unmuted By <@!${message.author.id}>**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
                } else if (args[0] == '10') {
                    message.channel.send('Not Ex')
                } else if (args[0] == '11') {

                } else if (args[0] == '12') {

                } else if (args[0] == '13') {

                } else if (args[0] == '14') {

                } else if (args[0] == '15') {

                } else if (args[0] == '16') {

                } else if (args[0] == '17') {

                } else if (args[0] == '18') {

                } else if (args[0] == '19') {

                } else if (args[0] == '20') {

                } else if (args[0] == '21') {

                } else if (args[0] == '22') {

                } else if (args[0] == '23') {

                } else if (args[0] == '24') {

                } else if (args[0] == '25') {

                } else if (args[0] == '26') {

                } else if (args[0] == '27') {

                } else if (args[0] == '28') {

                } else if (args[0] == '29') {

                } else if (args[0] == '30') {

                } else if (args[0] == '31') {

                } else if (args[0] == '32') {

                } else if (args[0] == '33') {

                } else if (args[0] == '34') {

                } else if (args[0] == '35') {

                } else if (args[0] == '36') {

                } else if (args[0] == '37') {

                } else if (args[0] == '38') {

                } else if (args[0] == '39') {

                } else if (args[0] == '40') {

                } else if (args[0] == '41') {

                } else if (args[0] == '42') {

                } else if (args[0] == '43') {

                } else if (args[0] == '44') {

                } else if (args[0] == '45') {

                } else if (args[0] == '46') {

                } else if (args[0] == '47') {

                } else if (args[0] == '48') {

                } else if (args[0] == '49') {

                } else if (args[0] == '50') {

                } else if (args[0] == '51') {

                } else if (args[0] == '52') {

                } else if (args[0] == '53') {

                } else if (args[0] == '54') {

                } else if (args[0] == '55') {

                } else if (args[0] == '56') {

                } else if (args[0] == '57') {

                } else if (args[0] == '58') {

                } else if (args[0] == '59') {

                } else if (args[0] == '60') {

                } else {
                    if (lang2 == 'arabic') {
                        return message.channel.send(
                            new MessageEmbed()
                            .setColor("RED")
                            .setDescription(
                                `**:x: | معرف الرمز غير معروف**`
                            )
                        );
                    } else if (lang2 == 'english') {
                        return message.channel.send(
                            new MessageEmbed()
                            .setColor("RED")
                            .setDescription(
                                `**:x: | This code id is not supported!!.**`
                            )
                        );
                    }
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