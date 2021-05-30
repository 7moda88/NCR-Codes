const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "dpy-admin",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    if (lang2 == "arabic") {
      let pages = [
        `**
    ${client.emotes.list}\`${prefix}dpy-admin-1\` ▶ كود قفل و فتح الشات
    ${client.emotes.list}\`${prefix}dpy-admin-2\` ▶ كود ساي
    ${client.emotes.list}\`${prefix}dpy-admin-3\` ▶ كود مسح الشات (بعدد)
    ${client.emotes.list}\`${prefix}dpy-admin-4\` ▶ كود اخفاء و اظهار الشات
    ${client.emotes.list}\`${prefix}dpy-admin-5\` ▶ كود تغير اسم العضو
    ${client.emotes.list}\`${prefix}dpy-admin-6\` ▶ كود باند
    ${client.emotes.list}\`${prefix}dpy-admin-7\` ▶ كود طرد
    ${client.emotes.list}\`${prefix}dpy-admin-8\` ▶ كود تغير البرفكس
    ${client.emotes.list}\`${prefix}dpy-admin-9\` ▶ كود يخلي البوت 24 ساعه في الروم
    ${client.emotes.list}\`${prefix}dpy-admin-10\` ▶ كود فك البان
    **`,
        `**
    ${client.emotes.list}\`${prefix}dpy-admin-11\` ▶ كل ما  تتبعت رساله في اي سيرفر البوت ياخدها وبعتها علي السيرفر بتاعك
    ${client.emotes.list}\`${prefix}dpy-admin-12\` ▶ كود ميوت
    ${client.emotes.list}\`${prefix}dpy-admin-13\` ▶ كود فك ميوت
    **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/756687656645034067/810174095005581362/ezgif.com-resize.gif"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
        )
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);

      message.channel.send(embed2).then(m => {
        m.delete();
      });
      message.channel.send(embed).then(msg => {
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
            embed.setTitle("**dpy Codes**");
            embed.setImage(
              "https://cdn.discordapp.com/attachments/756687656645034067/810174095005581362/ezgif.com-resize.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed);
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;

            page++;
            embed.setDescription(pages[page - 1]);
            embed.setImage(
              "https://cdn.discordapp.com/attachments/756687656645034067/810174095005581362/ezgif.com-resize.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed);
            r.users.remove(user);
          });
        });
      });
    } else if (lang2 == "english") {
      let pages = [
        `**
    ${client.emotes.list}\`${prefix}dpy-admin-1\` ▶ lock & unlock code
    ${client.emotes.list}\`${prefix}dpy-admin-2\` ▶ say code
    ${client.emotes.list}\`${prefix}dpy-admin-3\` ▶ clear code
    ${client.emotes.list}\`${prefix}dpy-admin-4\` ▶ hide & show code
    ${client.emotes.list}\`${prefix}dpy-admin-5\` ▶ setnickname code
    ${client.emotes.list}\`${prefix}dpy-admin-6\` ▶ ban code
    ${client.emotes.list}\`${prefix}dpy-admin-7\` ▶ kick code
    ${client.emotes.list}\`${prefix}dpy-admin-8\` ▶ prefix changer
    ${client.emotes.list}\`${prefix}dpy-admin-9\` ▶ code makes bot stay in voice channel 24/7
    ${client.emotes.list}\`${prefix}dpy-admin-10\` ▶ unban code
        **`,
        `**
    ${client.emotes.list}\`${prefix}dpy-admin-11\` ▶ Whenever you send a message on any server, the bot takes it and send it to your server
    ${client.emotes.list}\`${prefix}dpy-admin-12\` ▶ Mute Code
    ${client.emotes.list}\`${prefix}dpy-admin-12\` ▶ Unmute Code
    **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/756687656645034067/810174095005581362/ezgif.com-resize.gif"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
        )
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setDescription(`**${client.emotes.loding} Processing data ...**`);

      message.channel.send(embed2).then(m => {
        m.delete();
      });
      message.channel.send(embed).then(msg => {
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
            embed.setTitle("**dpy Codes**");
            embed.setImage(
              "https://cdn.discordapp.com/attachments/756687656645034067/810174095005581362/ezgif.com-resize.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed);
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;

            page++;
            embed.setDescription(pages[page - 1]);
            embed.setImage(
              "https://cdn.discordapp.com/attachments/756687656645034067/810174095005581362/ezgif.com-resize.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed);
            r.users.remove(user);
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
