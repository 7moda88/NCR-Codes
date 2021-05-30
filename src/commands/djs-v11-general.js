const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "djs-v11-general",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    if (lang2 == "english") {
      //       let pages = [
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-1\` ▶ avatar code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-2\` ▶ bot info code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-3\` ▶ credits and profile code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-4\` ▶ server info code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-5\` ▶ say and embed say code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-6\` ▶ ping code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-7\` ▶ giveaway code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-8\` ▶ roles code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-9\` ▶ temp voice channel code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-10\` ▶ user code
      //             **`,
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-11\` ▶ auto respose maker
      //       ${client.emotes.list}\`${prefix}djs-v11-general-12\` ▶ role code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-13\` ▶ bots count code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-14\` ▶ random auto recpose code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-15\` ▶ help with rection code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-16\` ▶ voice online code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-17\` ▶ bot info code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-18\` ▶ bot invite code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-19\` ▶ xo game code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-20\` ▶ simple music code
      //       **`,
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-21\` ▶ colors code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-22\` ▶ color Select code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-23\` ▶ short cut code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-24\` ▶ ticket code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-25\` ▶ fast game code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-26\` ▶ when you type any think in bot dm he is make a fack type
      //       ${client.emotes.list}\`${prefix}djs-v11-general-27\` ▶ Fruits Game Code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-28\` ▶ the blue whale game code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-29\` ▶ embed welcome code
      //       ${client.emotes.list}\`${prefix}djs-v11-general-30\` ▶ dm welcome code
      //              **`,
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-31\` ▶ code makes your bot stay in a voice channel
      //       ${client.emotes.list}\`${prefix}djs-v11-general-32\` ▶ show you how many invites you have
      //       ${client.emotes.list}\`${prefix}djs-v11-general-33\` ▶ code show Who entered the server and who invited him?
      //       ${client.emotes.list}\`${prefix}djs-v11-general-34\` ▶ auto change status
      //       ${client.emotes.list}\`${prefix}djs-v11-general-35\` ▶ super suggest code

      //       **`
      //       ];
      //       let page = 1;

      //       let embed = new MessageEmbed()
      //         .setColor("00e8ff")
      //         .setColor("00e8ff")
      //         .setImage(
      //           "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      //         )
      //         .setThumbnail(
      //           "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
      //         )
      //         .setFooter(`Page ${page} of ${pages.length}`)
      //         .setDescription(pages[page - 1]);
      //       let embed2 = new MessageEmbed()
      //         .setColor("00e8ff")
      //         .setColor("00e8ff")
      //         .setDescription(`**${client.emotes.loding} Processing data ...**`);

      //       message.channel.send(embed2).then(m => {
      //         m.delete();
      //       });
      //       message.channel.send(embed).then(msg => {
      //         msg.react("<:red_arrow:835239081331654737>").then(r => {
      //           msg.react("<:blue_arrow:810832471175462932>");

      //           const backwardsFilter = (reaction, user) =>
      //             reaction.emoji.id === "835239081331654737" &&
      //             user.id === message.author.id;
      //           const forwardsFilter = (reaction, user) =>
      //             reaction.emoji.id === "810832471175462932" &&
      //             user.id === message.author.id;

      //           const backwards = msg.createReactionCollector(backwardsFilter, {
      //             time: 2000000
      //           });
      //           const forwards = msg.createReactionCollector(forwardsFilter, {
      //             time: 2000000
      //           });

      //           backwards.on("collect", r => {
      //             if (page === 1) return;
      //             let user = message.author.id;
      //             page--;
      //             embed.setTitle("**discord.js v11 Codes**");
      //             embed.setImage(
      //               "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      //             );
      //             embed.setThumbnail(
      //               "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
      //             );
      //             embed.setDescription(pages[page - 1]);
      //             embed.setFooter(`Page ${page} of ${pages.length}`);
      //             msg.edit(embed);
      //             r.users.remove(user);
      //           });
      //           forwards.on("collect", r => {
      //             if (page === pages.length) return;
      //             let user = message.author.id;

      //             page++;
      //             embed.setDescription(pages[page - 1]);
      //             embed.setImage(
      //               "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      //             );
      //             embed.setThumbnail(
      //               "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
      //             );
      //             embed.setFooter(`Page ${page} of ${pages.length}`);
      //             msg.edit(embed);
      //             r.users.remove(user);
      //           });
      //         });
      //       });
      message.react(client.emotes.error);
    } else if (lang2 == "arabic") {
      //       let pages = [
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-1\` ▶ كود اافاتار
      //       ${client.emotes.list}\`${prefix}djs-v11-general-2\` ▶ كود معلومات البوت
      //       ${client.emotes.list}\`${prefix}djs-v11-general-3\` ▶ كود كريدت و بروفايل
      //       ${client.emotes.list}\`${prefix}djs-v11-general-4\` ▶ كود معلومات السيرفر
      //       ${client.emotes.list}\`${prefix}djs-v11-general-5\` ▶ كود ساي و ساي ب امبد
      //       ${client.emotes.list}\`${prefix}djs-v11-general-6\` ▶ كود بنج
      //       ${client.emotes.list}\`${prefix}djs-v11-general-7\` ▶ كود جيف اواي
      //       ${client.emotes.list}\`${prefix}djs-v11-general-8\` ▶ كود يوريك كل الرولات الي في السيرفر
      //       ${client.emotes.list}\`${prefix}djs-v11-general-9\` ▶ كود روم صوتي مؤقت زي البروبوت
      //       ${client.emotes.list}\`${prefix}djs-v11-general-10\` ▶ كود يوزر
      //       **`,
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-11\` ▶ كود صنع رد تلقاءي
      //       ${client.emotes.list}\`${prefix}djs-v11-general-12\` ▶ كود رول
      //       ${client.emotes.list}\`${prefix}djs-v11-general-13\` ▶ كود يوريك عدد البوتات
      //       ${client.emotes.list}\`${prefix}djs-v11-general-14\` ▶ كود رد تلقاءي بردود عشواءيه
      //       ${client.emotes.list}\`${prefix}djs-v11-general-15\` ▶ كود هيلب ب رياكشن
      //       ${client.emotes.list}\`${prefix}djs-v11-general-16\` ▶ كود فويس اونلاين
      //       ${client.emotes.list}\`${prefix}djs-v11-general-17\` ▶ كود عدد الاعضاء و عدد البوتات
      //       ${client.emotes.list}\`${prefix}djs-v11-general-18\` ▶ كود انفايت البوت
      //       ${client.emotes.list}\`${prefix}djs-v11-general-19\` ▶ كود لعبة اكس اوه
      //       ${client.emotes.list}\`${prefix}djs-v11-general-20\` ▶ كود ميوزك عادي
      //       **`,
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-21\` ▶ كود قاءمة الوانالوان
      //       ${client.emotes.list}\`${prefix}djs-v11-general-22\` ▶ كود اختيار الالوان
      //       ${client.emotes.list}\`${prefix}djs-v11-general-23\` ▶ كود اختصار روابط
      //       ${client.emotes.list}\`${prefix}djs-v11-general-24\` ▶ كود تكت عادي
      //       ${client.emotes.list}\`${prefix}djs-v11-general-25\` ▶ كود لعبة اسرع
      //       ${client.emotes.list}\`${prefix}djs-v11-general-26\` ▶ كود لما تكتب في خاص البوت يعمل كأنه يكتبلك
      //       ${client.emotes.list}\`${prefix}djs-v11-general-27\` ▶ كود لعبة فواكه
      //       ${client.emotes.list}\`${prefix}djs-v11-general-28\` ▶ كود لعبة الوت الازرق
      //       ${client.emotes.list}\`${prefix}djs-v11-general-29\` ▶ كود ويلكم ب امبد
      //       ${client.emotes.list}\`${prefix}djs-v11-general-30\` ▶ كود ويلكم في الخاص
      //       **`,
      //         `**
      //       ${client.emotes.list}\`${prefix}djs-v11-general-31\` ▶ كود يثبت البوت 24 ساعه في الروم
      //       ${client.emotes.list}\`${prefix}djs-v11-general-32\` ▶ كود يوريك عدد الأنفايتس بتاعتك
      //       ${client.emotes.list}\`${prefix}djs-v11-general-33\` ▶ كود يوريك مين دخل السيرفر و مين دعاه
      //       ${client.emotes.list}\`${prefix}djs-v11-general-34\` ▶ كود حالة متغيره
      //       ${client.emotes.list}\`${prefix}djs-v11-general-35\` ▶ كود أقترحات طلقاءي
      //       **`
      //       ];
      //       let page = 1;

      //       let embed = new MessageEmbed()
      //         .setColor("00e8ff")
      //         .setColor("00e8ff")
      //         .setImage(
      //           "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      //         )
      //         .setThumbnail(
      //           "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
      //         )
      //         .setFooter(`Page ${page} of ${pages.length}`)
      //         .setDescription(pages[page - 1]);
      //       let embed2 = new MessageEmbed()
      //         .setColor("00e8ff")
      //         .setColor("00e8ff")
      //         .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);

      //       message.channel.send(embed2).then(m => {
      //         m.delete();
      //       });
      //       message.channel.send(embed).then(msg => {
      //         msg.react("◀");
      //         msg.react("▶").then(r => {
      //           const backwardsFilter = (reaction, user) =>
      //             reaction.emoji.name === "◀" && user.id === message.author.id;
      //           const forwardsFilter = (reaction, user) =>
      //             reaction.emoji.name === "▶" && user.id === message.author.id;

      //           const backwards = msg.createReactionCollector(backwardsFilter, {
      //             time: 2000000
      //           });
      //           const forwards = msg.createReactionCollector(forwardsFilter, {
      //             time: 2000000
      //           });

      //           backwards.on("collect", r => {
      //             if (page === 1) return;
      //             let user = message.author.id;
      //             page--;
      //             embed.setTitle("**discord.js v11 Codes**");
      //             embed.setImage(
      //               "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      //             );
      //             embed.setThumbnail(
      //               "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
      //             );
      //             embed.setDescription(pages[page - 1]);
      //             embed.setFooter(`Page ${page} of ${pages.length}`);
      //             msg.edit(embed);
      //             r.users.remove(user);
      //           });
      //           forwards.on("collect", r => {
      //             if (page === pages.length) return;
      //             let user = message.author.id;
      //             page++;
      //             embed.setDescription(pages[page - 1]);
      //             embed.setImage(
      //               "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      //             );
      //             embed.setThumbnail(
      //               "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
      //             );
      //             embed.setFooter(`Page ${page} of ${pages.length}`);
      //             msg.edit(embed);
      //             r.users.remove(user);
      //           });
      //         });
      //       });
      message.react(client.emotes.error);
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
