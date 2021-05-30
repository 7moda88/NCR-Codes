const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "bdfd-admin",
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
    ${client.emotes.list}\`${prefix}bdfd-admin-1\` ▶ كود مسح شات مع رياكشن وكول داون للامر
    ${client.emotes.list}\`${prefix}bdfd-admin-2\` ▶ كود باند
    ${client.emotes.list}\`${prefix}bdfd-admin-3\` ▶ كود ميوت مطور مع امبد 
    ${client.emotes.list}\`${prefix}bdfd-admin-4\` ▶ كود باند برياكشن مع امبيد
    ${client.emotes.list}\`${prefix}bdfd-admin-5\` ▶ كود ريبورت لصاحب البوت
    ${client.emotes.list}\`${prefix}bdfd-admin-6\` ▶ كود خروج البوت من السيرفر
    ${client.emotes.list}\`${prefix}bdfd-admin-7\` ▶ كود مسح
    ${client.emotes.list}\`${prefix}bdfd-admin-8\` ▶ كود فتح الشات
    ${client.emotes.list}\`${prefix}bdfd-admin-9\` ▶ كود اغلاق الشات
    ${client.emotes.list}\`${prefix}bdfd-admin-10\` ▶ كود حذف روم بالاسم
    **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/805068312366940160/809859567856386088/ezgif.com-resize.webp"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png"
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
            embed.setTitle("**bdfd Codes**");
            embed.setImage(
              "https://cdn.discordapp.com/attachments/805068312366940160/809859567856386088/ezgif.com-resize.webp"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png"
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
              "https://cdn.discordapp.com/attachments/805068312366940160/809859567856386088/ezgif.com-resize.webp"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png"
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
    ${client.emotes.list}\`${prefix}bdfd-admin-1\` ▶ super clear code
    ${client.emotes.list}\`${prefix}bdfd-admin-2\` ▶ ban code
    ${client.emotes.list}\`${prefix}bdfd-admin-3\` ▶ mute code 
    ${client.emotes.list}\`${prefix}bdfd-admin-4\` ▶ ban code
    ${client.emotes.list}\`${prefix}bdfd-admin-5\` ▶ report code dm
    ${client.emotes.list}\`${prefix}bdfd-admin-6\` ▶ bot out code
    ${client.emotes.list}\`${prefix}bdfd-admin-7\` ▶ clear code
    ${client.emotes.list}\`${prefix}bdfd-admin-8\` ▶ unlock code
    ${client.emotes.list}\`${prefix}bdfd-admin-9\` ▶ lock code
    ${client.emotes.list}\`${prefix}bdfd-admin-10\` ▶ delete room
    **`
      ];
      let page = 1;
      let embed = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/805068312366940160/809859567856386088/ezgif.com-resize.webp"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png"
        )
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setDescription(`**${client.emotes.loding} Processing data...**`);

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
            embed.setTitle("**bdfd Codes**");
            embed.setImage(
              "https://cdn.discordapp.com/attachments/805068312366940160/809859567856386088/ezgif.com-resize.webp"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809859882660397057/BPaLpeUvfmoqAtxKbzOZP8uJgRN9ANvUMY5GYeQAyMzsKOOB9OSu88xaH7y-jFzDfVk.png"
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
