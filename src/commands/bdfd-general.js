const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "bdfd-general",
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
    ${client.emotes.list}\`${prefix}bdfd-general-1\` ▶ server كود
    ${client.emotes.list}\`${prefix}bdfd-general-2\` ▶ كود هيلب
    ${client.emotes.list}\`${prefix}bdfd-general-3\` ▶ كود افتار
    ${client.emotes.list}\`${prefix}bdfd-general-4\` ▶ kill كود
    ${client.emotes.list}\`${prefix}bdfd-general-5\` ▶ مطور kill كود
    ${client.emotes.list}\`${prefix}bdfd-general-6\` ▶ كود هيلب برياكشن
    ${client.emotes.list}\`${prefix}bdfd-general-7\` ▶ كود حق الرابط
    ${client.emotes.list}\`${prefix}bdfd-general-10\` ▶ 🏳️‍🌈كود نسبة ‍ال
        **`,
        `**
    ${client.emotes.list}\`${prefix}bdfd-general-11\` ▶ مطور برياكشن botinfo كود
    ${client.emotes.list}\`${prefix}bdfd-general-12\` ▶ كود رقصت التابوت برياكشن_
    ${client.emotes.list}\`${prefix}bdfd-general-13\` ▶ كود فتح التكت بامبيد
    ${client.emotes.list}\`${prefix}bdfd-general-14\` ▶ كود قفل التكت
    ${client.emotes.list}\`${prefix}bdfd-general-15\` ▶ كود ساي بدون امبد
    ${client.emotes.list}\`${prefix}bdfd-general-16\` ▶ كود يضهر لك الايتم شوب للباتل رويال فورت نايت
    ${client.emotes.list}\`${prefix}bdfd-general-17\` ▶ كود كف
    ${client.emotes.list}\`${prefix}bdfd-general-18\` ▶ كود تصويت
        **`,
        `**
    ${client.emotes.list}\`${prefix}bdfd-general-19\` ▶ كود ساي امبيد
    ${client.emotes.list}\`${prefix}bdfd-general-20\` ▶ user كود
    ${client.emotes.list}\`${prefix}bdfd-general-21\` ▶ كود قتل
    ${client.emotes.list}\`${prefix}bdfd-general-22\` ▶ afk كود
    ${client.emotes.list}\`${prefix}bdfd-general-23\` ▶ كود خط بامبيد
    ${client.emotes.list}\`${prefix}bdfd-general-24\` ▶ كود معلومات السيرفر مثل البرو بوت
    ${client.emotes.list}\`${prefix}bdfd-general-25\` ▶ كود ريبورت يجيك فلخاص
    ${client.emotes.list}\`${prefix}bdfd-general-26\` ▶ كود كت تويت
        **`,
        `**
    ${client.emotes.list}\`${prefix}bdfd-general-27\` ▶ كود  لبدء القيف اواي
    ${client.emotes.list}\`${prefix}bdfd-general-28\` ▶ كود انهاء القيف اواي
    ${client.emotes.list}\`${prefix}bdfd-general-29\` ▶ كـود هيلـب يـجيك فـي الـخاص
    ${client.emotes.list}\`${prefix}bdfd-general-30\` ▶ كود مـعلومـات الـبوت
    ${client.emotes.list}\`${prefix}bdfd-general-31\` ▶ كـود بحـث في اليوتيوب
    ${client.emotes.list}\`${prefix}bdfd-general-32\` ▶ كود تغيير اسم التيكت
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
    ${client.emotes.list}\`${prefix}bdfd-general-1\` ▶ server code
    ${client.emotes.list}\`${prefix}bdfd-general-2\` ▶ help code
    ${client.emotes.list}\`${prefix}bdfd-general-3\` ▶ avatar code
    ${client.emotes.list}\`${prefix}bdfd-general-4\` ▶ anther kill code
    ${client.emotes.list}\`${prefix}bdfd-general-5\` ▶ kill code
    ${client.emotes.list}\`${prefix}bdfd-general-6\` ▶ help code with rections
    ${client.emotes.list}\`${prefix}bdfd-general-7\` ▶ link code
    ${client.emotes.list}\`${prefix}bdfd-general-10\` ▶ gay code
        **`,
        `**
    ${client.emotes.list}\`${prefix}bdfd-general-11\` ▶ bot info code
    ${client.emotes.list}\`${prefix}bdfd-general-12\` ▶ dead code
    ${client.emotes.list}\`${prefix}bdfd-general-13\` ▶ open ticket
    ${client.emotes.list}\`${prefix}bdfd-general-14\` ▶ close ticket
    ${client.emotes.list}\`${prefix}bdfd-general-15\` ▶ say code
    ${client.emotes.list}\`${prefix}bdfd-general-16\` ▶ fortnite code
    ${client.emotes.list}\`${prefix}bdfd-general-17\` ▶ slap code
    ${client.emotes.list}\`${prefix}bdfd-general-18\` ▶ vote code
        **`,
        `**
    ${client.emotes.list}\`${prefix}bdfd-general-19\` ▶ embed say code
    ${client.emotes.list}\`${prefix}bdfd-general-20\` ▶ user code
    ${client.emotes.list}\`${prefix}bdfd-general-21\` ▶ kill code
    ${client.emotes.list}\`${prefix}bdfd-general-22\` ▶ afk code
    ${client.emotes.list}\`${prefix}bdfd-general-23\` ▶ embed line code
    ${client.emotes.list}\`${prefix}bdfd-general-24\` ▶ server info code
    ${client.emotes.list}\`${prefix}bdfd-general-25\` ▶ report code
    ${client.emotes.list}\`${prefix}bdfd-general-26\` ▶ cut tweet code
        **`,
        `**
    ${client.emotes.list}\`${prefix}bdfd-general-27\` ▶ giveaway starter
    ${client.emotes.list}\`${prefix}bdfd-general-28\` ▶ giveaway ender
    ${client.emotes.list}\`${prefix}bdfd-general-29\` ▶ dm help codee
    ${client.emotes.list}\`${prefix}bdfd-general-30\` ▶ bot info code
    ${client.emotes.list}\`${prefix}bdfd-general-31\` ▶ youtube serch
    ${client.emotes.list}\`${prefix}bdfd-general-32\` ▶ rename ticket code
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
