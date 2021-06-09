const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "bdfd",
    cooldown: 7,
    aliases: [""],
    run: async(client, message) => {
            var devs = client.config.devs;
            var lang2 = await db.fetch(`langguild_${message.guild.id}`);
            var prefix = await db.fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = client.config.prefix;
            if (lang2 == "arabic") {
                let pages = [`**
    ${client.emotes.list}\`${prefix}bdfd-1\` <:blue_arrow:810832471175462932> server كود
    ${client.emotes.list}\`${prefix}bdfd-2\` <:blue_arrow:810832471175462932> كود هيلب
    ${client.emotes.list}\`${prefix}bdfd-3\` <:blue_arrow:810832471175462932> كود افتار
    ${client.emotes.list}\`${prefix}bdfd-4\` <:blue_arrow:810832471175462932> kill كود
    ${client.emotes.list}\`${prefix}bdfd-5\` <:blue_arrow:810832471175462932> مطور kill كود
    ${client.emotes.list}\`${prefix}bdfd-6\` <:blue_arrow:810832471175462932> كود هيلب برياكشن
    ${client.emotes.list}\`${prefix}bdfd-7\` <:blue_arrow:810832471175462932> كود حق الرابط
    ${client.emotes.list}\`${prefix}bdfd-10\` <:blue_arrow:810832471175462932> 🏳️‍🌈كود نسبة ‍ال**`, `**
    ${client.emotes.list}\`${prefix}bdfd-11\` <:blue_arrow:810832471175462932> مطور برياكشن botinfo كود
    ${client.emotes.list}\`${prefix}bdfd-12\` <:blue_arrow:810832471175462932> كود رقصت التابوت برياكشن_
    ${client.emotes.list}\`${prefix}bdfd-13\` <:blue_arrow:810832471175462932> كود فتح التكت بامبيد
    ${client.emotes.list}\`${prefix}bdfd-14\` <:blue_arrow:810832471175462932> كود قفل التكت
    ${client.emotes.list}\`${prefix}bdfd-15\` <:blue_arrow:810832471175462932> كود ساي بدون امبد
    ${client.emotes.list}\`${prefix}bdfd-16\` <:blue_arrow:810832471175462932> كود يضهر لك الايتم شوب للباتل رويال فورت نايت
    ${client.emotes.list}\`${prefix}bdfd-17\` <:blue_arrow:810832471175462932> كود كف
    ${client.emotes.list}\`${prefix}bdfd-18\` <:blue_arrow:810832471175462932> كود تصويت**`, `**
    ${client.emotes.list}\`${prefix}bdfd-19\` <:blue_arrow:810832471175462932> كود ساي امبيد
    ${client.emotes.list}\`${prefix}bdfd-20\` <:blue_arrow:810832471175462932> user كود
    ${client.emotes.list}\`${prefix}bdfd-21\` <:blue_arrow:810832471175462932> كود قتل
    ${client.emotes.list}\`${prefix}bdfd-22\` <:blue_arrow:810832471175462932> afk كود
    ${client.emotes.list}\`${prefix}bdfd-23\` <:blue_arrow:810832471175462932> كود خط بامبيد
    ${client.emotes.list}\`${prefix}bdfd-24\` <:blue_arrow:810832471175462932> كود معلومات السيرفر مثل البرو بوت
    ${client.emotes.list}\`${prefix}bdfd-25\` <:blue_arrow:810832471175462932> كود ريبورت يجيك فلخاص
    ${client.emotes.list}\`${prefix}bdfd-26\` <:blue_arrow:810832471175462932> كود كت تويت**`, `**
    ${client.emotes.list}\`${prefix}bdfd-27\` <:blue_arrow:810832471175462932> كود  لبدء القيف اواي
    ${client.emotes.list}\`${prefix}bdfd-28\` <:blue_arrow:810832471175462932> كود انهاء القيف اواي
    ${client.emotes.list}\`${prefix}bdfd-29\` <:blue_arrow:810832471175462932> كـود هيلـب يـجيك فـي الـخاص
    ${client.emotes.list}\`${prefix}bdfd-30\` <:blue_arrow:810832471175462932> كود مـعلومـات الـبوت
    ${client.emotes.list}\`${prefix}bdfd-31\` <:blue_arrow:810832471175462932> كـود بحـث في اليوتيوب
    ${client.emotes.list}\`${prefix}bdfd-32\` <:blue_arrow:810832471175462932> كود تغيير اسم التيكت**`, `**
    ${client.emotes.list}\`${prefix}bdfd-33\` <:blue_arrow:810832471175462932> كود مسح شات مع رياكشن وكول داون للامر
    ${client.emotes.list}\`${prefix}bdfd-34\` <:blue_arrow:810832471175462932> كود باند
    ${client.emotes.list}\`${prefix}bdfd-35\` <:blue_arrow:810832471175462932> كود ميوت مطور مع امبد 
    ${client.emotes.list}\`${prefix}bdfd-36\` <:blue_arrow:810832471175462932> كود باند برياكشن مع امبيد
    ${client.emotes.list}\`${prefix}bdfd-37\` <:blue_arrow:810832471175462932> كود ريبورت لصاحب البوت
    ${client.emotes.list}\`${prefix}bdfd-38\` <:blue_arrow:810832471175462932> كود خروج البوت من السيرفر
    ${client.emotes.list}\`${prefix}bdfd-39\` <:blue_arrow:810832471175462932> كود مسح
    ${client.emotes.list}\`${prefix}bdfd-40\` <:blue_arrow:810832471175462932> كود فتح الشات
    ${client.emotes.list}\`${prefix}bdfd-41\` <:blue_arrow:810832471175462932> كود اغلاق الشات
    ${client.emotes.list}\`${prefix}bdfd-42\` <:blue_arrow:810832471175462932> كود حذف روم بالاسم**`];
                let page = 1;

                let embed = new MessageEmbed()
                    .setColor("#2F3136")
                    .setFooter(`Page ${page} / ${pages.length}`)
                    .setDescription(pages[page - 1]);
                let embed2 = new MessageEmbed()
                    .setColor("#2F3136")
                    .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);
                message.lineReply(embed2).then(m => {
                    m.edit({ embed: embed }).then(msg => {
                        msg.react("<:red_arrow:835239081331654737>").then(r => {
                            msg.react("<:blue_arrow:810832471175462932>");

                            const backwardsFilter = (reaction, user) =>
                                reaction.emoji.id === "835239081331654737" &&
                                user.id === message.author.id;
                            const forwardsFilter = (reaction, user) =>
                                reaction.emoji.id === "810832471175462932" &&
                                user.id === message.author.id;

                            const backwards = msg.createReactionCollector(backwardsFilter, {
                                time: 2000000
                            });
                            const forwards = msg.createReactionCollector(forwardsFilter, {
                                time: 2000000
                            });

                            backwards.on("collect", r => {
                                if (page === 1) return;
                                let user = message.author.id;
                                page--;
                                embed.setAuthor("bdfd", "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png");
                                embed.setDescription(pages[page - 1]);
                                embed.setFooter(`Page ${page} / ${pages.length}`);
                                embed.timestamp()
                                msg.edit({ embed: embed });
                                r.users.remove(user);
                            });
                            forwards.on("collect", r => {
                                if (page === pages.length) return;
                                let user = message.author.id;

                                page++;
                                embed.setAuthor("bdfd", "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png");
                                embed.setDescription(pages[page - 1]);
                                embed.setFooter(`Page ${page} / ${pages.length}`);
                                embed.timestamp()
                                msg.edit({ embed: embed });
                                r.users.remove(user);
                            });
                        });
                    });
                });
            } else if (lang2 == "english") {
                let pages = [`**
    ${client.emotes.list}\`${prefix}bdfd-1\` <:blue_arrow:810832471175462932> server code
    ${client.emotes.list}\`${prefix}bdfd-2\` <:blue_arrow:810832471175462932> help code
    ${client.emotes.list}\`${prefix}bdfd-3\` <:blue_arrow:810832471175462932> avatar code
    ${client.emotes.list}\`${prefix}bdfd-4\` <:blue_arrow:810832471175462932> anther kill code
    ${client.emotes.list}\`${prefix}bdfd-5\` <:blue_arrow:810832471175462932> kill code
    ${client.emotes.list}\`${prefix}bdfd-6\` <:blue_arrow:810832471175462932> help code with rections
    ${client.emotes.list}\`${prefix}bdfd-7\` <:blue_arrow:810832471175462932> link code
    ${client.emotes.list}\`${prefix}bdfd-10\` <:blue_arrow:810832471175462932> gay code**`, `**
    ${client.emotes.list}\`${prefix}bdfd-11\` <:blue_arrow:810832471175462932> bot info code
    ${client.emotes.list}\`${prefix}bdfd-12\` <:blue_arrow:810832471175462932> dead code
    ${client.emotes.list}\`${prefix}bdfd-13\` <:blue_arrow:810832471175462932> open ticket
    ${client.emotes.list}\`${prefix}bdfd-14\` <:blue_arrow:810832471175462932> close ticket
    ${client.emotes.list}\`${prefix}bdfd-15\` <:blue_arrow:810832471175462932> say code
    ${client.emotes.list}\`${prefix}bdfd-16\` <:blue_arrow:810832471175462932> fortnite code
    ${client.emotes.list}\`${prefix}bdfd-17\` <:blue_arrow:810832471175462932> slap code
    ${client.emotes.list}\`${prefix}bdfd-18\` <:blue_arrow:810832471175462932> vote code**`, `**
    ${client.emotes.list}\`${prefix}bdfd-19\` <:blue_arrow:810832471175462932> embed say code
    ${client.emotes.list}\`${prefix}bdfd-20\` <:blue_arrow:810832471175462932> user code
    ${client.emotes.list}\`${prefix}bdfd-21\` <:blue_arrow:810832471175462932> kill code
    ${client.emotes.list}\`${prefix}bdfd-22\` <:blue_arrow:810832471175462932> afk code
    ${client.emotes.list}\`${prefix}bdfd-23\` <:blue_arrow:810832471175462932> embed line code
    ${client.emotes.list}\`${prefix}bdfd-24\` <:blue_arrow:810832471175462932> server info code
    ${client.emotes.list}\`${prefix}bdfd-25\` <:blue_arrow:810832471175462932> report code
    ${client.emotes.list}\`${prefix}bdfd-26\` <:blue_arrow:810832471175462932> cut tweet code**`, `**
    ${client.emotes.list}\`${prefix}bdfd-27\` <:blue_arrow:810832471175462932> giveaway starter
    ${client.emotes.list}\`${prefix}bdfd-28\` <:blue_arrow:810832471175462932> giveaway ender
    ${client.emotes.list}\`${prefix}bdfd-29\` <:blue_arrow:810832471175462932> dm help codee
    ${client.emotes.list}\`${prefix}bdfd-30\` <:blue_arrow:810832471175462932> bot info code
    ${client.emotes.list}\`${prefix}bdfd-31\` <:blue_arrow:810832471175462932> youtube serch
    ${client.emotes.list}\`${prefix}bdfd-32\` <:blue_arrow:810832471175462932> rename ticket code**`, `**
    ${client.emotes.list}\`${prefix}bdfd-33\` <:blue_arrow:810832471175462932> super clear code
    ${client.emotes.list}\`${prefix}bdfd-34\` <:blue_arrow:810832471175462932> ban code
    ${client.emotes.list}\`${prefix}bdfd-35\` <:blue_arrow:810832471175462932> mute code 
    ${client.emotes.list}\`${prefix}bdfd-36\` <:blue_arrow:810832471175462932> ban code
    ${client.emotes.list}\`${prefix}bdfd-37\` <:blue_arrow:810832471175462932> report code dm
    ${client.emotes.list}\`${prefix}bdfd-38\` <:blue_arrow:810832471175462932> bot out code
    ${client.emotes.list}\`${prefix}bdfd-39\` <:blue_arrow:810832471175462932> clear code
    ${client.emotes.list}\`${prefix}bdfd-40\` <:blue_arrow:810832471175462932> unlock code
    ${client.emotes.list}\`${prefix}bdfd-41\` <:blue_arrow:810832471175462932> lock code
    ${client.emotes.list}\`${prefix}bdfd-42\` <:blue_arrow:810832471175462932> delete room**`];
                let page = 1;

                let embed = new MessageEmbed()
                    .setColor("#2F3136")
                    .setFooter(`Page ${page} / ${pages.length}`)
                    .setDescription(pages[page - 1]);
                let embed2 = new MessageEmbed()
                    .setColor("#2F3136")
                    .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);

                message.lineReply(embed2).then(m => {
                    m.edit({ embed: embed }).then(msg => {
                        msg.react("<:red_arrow:835239081331654737>").then(r => {
                            msg.react("<:blue_arrow:810832471175462932>");

                            const backwardsFilter = (reaction, user) =>
                                reaction.emoji.id === "835239081331654737" &&
                                user.id === message.author.id;
                            const forwardsFilter = (reaction, user) =>
                                reaction.emoji.id === "810832471175462932" &&
                                user.id === message.author.id;

                            const backwards = msg.createReactionCollector(backwardsFilter, {
                                time: 2000000
                            });
                            const forwards = msg.createReactionCollector(forwardsFilter, {
                                time: 2000000
                            });

                            backwards.on("collect", r => {
                                if (page === 1) return;
                                let user = message.author.id;
                                page--;
                                embed.setAuthor("bdfd", "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png");
                                embed.setDescription(pages[page - 1]);
                                embed.setFooter(`Page ${page} / ${pages.length}`);
                                embed.timestamp()
                                msg.edit({ embed: embed });
                                r.users.remove(user);
                            });
                            forwards.on("collect", r => {
                                if (page === pages.length) return;
                                let user = message.author.id;

                                page++;
                                embed.setAuthor("bdfd", "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png");
                                embed.setDescription(pages[page - 1]);
                                embed.setFooter(`Page ${page} / ${pages.length}`);
                                embed.timestamp()
                                msg.edit({ embed: embed });
                                r.users.remove(user);
                            });
                        });
                    });
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
