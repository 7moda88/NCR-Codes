const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "djs-v11-admin",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    if (lang2 == "arabic") {
      //       let pages = [
      //         `**
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-1\` ▶ كود مسح الشات
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-2\` ▶ كود قفل و فتح الشات
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-3\` ▶ كود كيك
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-4\` ▶ كود تغير البرفكس
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-5\` ▶ كود اخفاء و اظهار الشات
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-6\` ▶ كود باند
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-7\` ▶ كود رول
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-8\` ▶ كود ميوت
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-9\` ▶ كود انذار
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-10\` ▶ كود بلاك لست
      //                 **`,
      //         `**
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-11\` ▶ كود رتبة تلقاءية
      //             **`
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
    } else if (lang2 == "english") {
      //       let pages = [
      //         `**
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-1\` ▶ clear code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-2\` ▶ lock & unlock code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-3\` ▶ kick code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-4\` ▶ prefix changer code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-5\` ▶ show and hide code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-6\` ▶ ban code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-7\` ▶ role code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-8\` ▶ mute code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-9\` ▶ warn code
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-10\` ▶ black list code
      //                 **`,
      //         `**
      //             ${client.emotes.list}\`${prefix}djs-v11-admin-11\` ▶ Auto role code
      //             **`
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
