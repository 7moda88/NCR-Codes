const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "djs-v12-admin",
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
            ${client.emotes.list}\`${prefix}djs-v12-admin-1\` ▶ كود مسح الشات
            ${client.emotes.list}\`${prefix}djs-v12-admin-2\` ▶ كود رول
            ${client.emotes.list}\`${prefix}djs-v12-admin-3\` ▶  مانع دخول توكنات
            ${client.emotes.list}\`${prefix}djs-v12-admin-4\` ▶ كود باند
            ${client.emotes.list}\`${prefix}djs-v12-admin-5\` ▶ كود طرد
            ${client.emotes.list}\`${prefix}djs-v12-admin-6\` ▶ كود ميوت
            ${client.emotes.list}\`${prefix}djs-v12-admin-7\` ▶ كود فتح و قفل
            ${client.emotes.list}\`${prefix}djs-v12-admin-8\` ▶ كود تغير اسم الروم
            ${client.emotes.list}\`${prefix}djs-v12-admin-9\` ▶ كود ان ميوت
            ${client.emotes.list}\`${prefix}djs-v12-admin-10\` ▶ Not Ex
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-11\` ▶ كود منع الروابط
            ${client.emotes.list}\`${prefix}djs-v12-admin-12\` ▶ كود فك البان
            ${client.emotes.list}\`${prefix}djs-v12-admin-13\` ▶ كود مانع دخول البوتات
            ${client.emotes.list}\`${prefix}djs-v12-admin-14\` ▶ كود صنع كيتوجري 
            ${client.emotes.list}\`${prefix}djs-v12-admin-15\` ▶ كود اخفاء الشات واظهاره
            ${client.emotes.list}\`${prefix}djs-v12-admin-16\` ▶ طود ايفال
            ${client.emotes.list}\`${prefix}djs-v12-admin-17\` ▶ كود منع السبام
            ${client.emotes.list}\`${prefix}djs-v12-admin-18\` ▶ كود منع أنفايتات الدسكورد بميوت ميوت
            ${client.emotes.list}\`${prefix}djs-v12-admin-19\` ▶ كود منع السب
            ${client.emotes.list}\`${prefix}djs-v12-admin-20\` ▶ كود صنع روم صوتي
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-21\` ▶ كود صنع روم كتابي
            ${client.emotes.list}\`${prefix}djs-v12-admin-22\` ▶ كود مسح جميع الرتب و الرومات
            ${client.emotes.list}\`${prefix}djs-v12-admin-23\` ▶ كود انذار
            ${client.emotes.list}\`${prefix}djs-v12-admin-24\` ▶ كود بلاك لست
            ${client.emotes.list}\`${prefix}djs-v12-admin-25\` ▶ كود تغير بادئة 
            ${client.emotes.list}\`${prefix}djs-v12-admin-26\` ▶ كود تغير لغة البوت
            ${client.emotes.list}\`${prefix}djs-v12-admin-27\` ▶ كود يوريك السيرفرات الي دخلها البوت و يوريك الأنفايت كود حجهم
            ${client.emotes.list}\`${prefix}djs-v12-admin-28\` ▶ كود يعطيك أذكار أسلاميه
            ${client.emotes.list}\`${prefix}djs-v12-admin-29\` ▶ كود يصنع أيمال عشواءي
            ${client.emotes.list}\`${prefix}djs-v12-admin-30\` ▶ كود هيلب نسخة endo
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-31\` ▶ كود صنع ألوان مطور فشخ
            ${client.emotes.list}\`${prefix}djs-v12-admin-32\` ▶ كود رقم عشواءي
            ${client.emotes.list}\`${prefix}djs-v12-admin-33\` ▶ كود صنع رد تلقاءي بأمر و حذفه ب أمر
            ${client.emotes.list}\`${prefix}djs-v12-admin-34\` ▶ كود صنع الوان
            ${client.emotes.list}\`${prefix}djs-v12-admin-35\` ▶ كود say ب embed
            ${client.emotes.list}\`${prefix}djs-v12-admin-36\` ▶ كود ساي
            ${client.emotes.list}\`${prefix}djs-v12-admin-37\` ▶ كود لوق بسيط
            ${client.emotes.list}\`${prefix}djs-v12-admin-38\` ▶ كود بان مع الاسباب
            ${client.emotes.list}\`${prefix}djs-v12-admin-39\` ▶ كود يوقف البوت ب أمر
            ${client.emotes.list}\`${prefix}djs-v12-admin-40\` ▶ كود رسترت البوت
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-41\` ▶ كود أضافة أيموجي ب أمر مطور فشخ
            ${client.emotes.list}\`${prefix}djs-v12-admin-42\` ▶ كود يتحم في ال slowmode أسطوري
            ${client.emotes.list}\`${prefix}djs-v12-admin-43\` ▶ كود رتبة مؤقته
            ${client.emotes.list}\`${prefix}djs-v12-admin-44\` ▶ كود لستت الوان
            ${client.emotes.list}\`${prefix}djs-v12-admin-45\` ▶ كود ميوزك تشغيل فقط
            ${client.emotes.list}\`${prefix}djs-v12-admin-46\` ▶ كود اذا حد منشن شخص يمسحها علشان ما يعرف من الي منشن 😂
            ${client.emotes.list}\`${prefix}djs-v12-admin-47\` ▶ كود رد تلقاءي فيه حركه رهيبه
          **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
            embed.setTitle("**discord.js v12 Codes**");
            embed.setImage(
              "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
              "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
            ${client.emotes.list}\`${prefix}djs-v12-admin-1\` ▶ clear code
            ${client.emotes.list}\`${prefix}djs-v12-admin-2\` ▶ role code
            ${client.emotes.list}\`${prefix}djs-v12-admin-3\` ▶ antitokens code
            ${client.emotes.list}\`${prefix}djs-v12-admin-4\` ▶ ban code
            ${client.emotes.list}\`${prefix}djs-v12-admin-5\` ▶ kick code
            ${client.emotes.list}\`${prefix}djs-v12-admin-6\` ▶ mute code
            ${client.emotes.list}\`${prefix}djs-v12-admin-7\` ▶ lock & unlock code
            ${client.emotes.list}\`${prefix}djs-v12-admin-8\` ▶ rename channel code
            ${client.emotes.list}\`${prefix}djs-v12-admin-9\` ▶ super unmute code
            ${client.emotes.list}\`${prefix}djs-v12-admin-10\` ▶ Not Ex
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-11\` ▶ anti links code
            ${client.emotes.list}\`${prefix}djs-v12-admin-12\` ▶ unban code
            ${client.emotes.list}\`${prefix}djs-v12-admin-13\` ▶ antibots code
            ${client.emotes.list}\`${prefix}djs-v12-admin-14\` ▶ Create Category code
            ${client.emotes.list}\`${prefix}djs-v12-admin-15\` ▶ Hide and Show rooms code
            ${client.emotes.list}\`${prefix}djs-v12-admin-16\` ▶ Eval code
            ${client.emotes.list}\`${prefix}djs-v12-admin-17\` ▶ Anti-spam Code
            ${client.emotes.list}\`${prefix}djs-v12-admin-18\` ▶ Anti Discord Invites
            ${client.emotes.list}\`${prefix}djs-v12-admin-19\` ▶ Anti Swer Code
            ${client.emotes.list}\`${prefix}djs-v12-admin-20\` ▶ Create a Voice Channel With Command
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-21\` ▶ Create a Text Channel With a Command
            ${client.emotes.list}\`${prefix}djs-v12-admin-22\` ▶ delete all channels and roles
            ${client.emotes.list}\`${prefix}djs-v12-admin-23\` ▶ Warn code
            ${client.emotes.list}\`${prefix}djs-v12-admin-24\` ▶ Blacklist code
            ${client.emotes.list}\`${prefix}djs-v12-admin-25\` ▶ Prefix changer code
            ${client.emotes.list}\`${prefix}djs-v12-admin-26\` ▶ Language changer code
            ${client.emotes.list}\`${prefix}djs-v12-admin-27\` ▶ A code that gives you the servers info to the bot to enter into
            ${client.emotes.list}\`${prefix}djs-v12-admin-28\` ▶ Code gives you Islamic supplications
            ${client.emotes.list}\`${prefix}djs-v12-admin-29\` ▶ Random Email Code
            ${client.emotes.list}\`${prefix}djs-v12-admin-30\` ▶ endo help code
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-31\` ▶ ultra color code maker
            ${client.emotes.list}\`${prefix}djs-v12-admin-32\` ▶ random num code
            ${client.emotes.list}\`${prefix}djs-v12-admin-33\` ▶ Code making an automatic response with a command and deleting it with a command
            ${client.emotes.list}\`${prefix}djs-v12-admin-34\` ▶ Color Code Maker
            ${client.emotes.list}\`${prefix}djs-v12-admin-35\` ▶ embed say code
            ${client.emotes.list}\`${prefix}djs-v12-admin-36\` ▶ say code
            ${client.emotes.list}\`${prefix}djs-v12-admin-37\` ▶ Simple log code
            ${client.emotes.list}\`${prefix}djs-v12-admin-38\` ▶ Ban code with Reasons
            ${client.emotes.list}\`${prefix}djs-v12-admin-39\` ▶ code Stop The Bot With a cmd
            ${client.emotes.list}\`${prefix}djs-v12-admin-40\` ▶ Code Restarts The Bot
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-admin-41\` ▶ ultra add emoji code
            ${client.emotes.list}\`${prefix}djs-v12-admin-42\` ▶ slowmood changer code
            ${client.emotes.list}\`${prefix}djs-v12-admin-43\` ▶ temp role code
            ${client.emotes.list}\`${prefix}djs-v12-admin-44\` ▶ color list code
            ${client.emotes.list}\`${prefix}djs-v12-admin-45\` ▶ play command
            ${client.emotes.list}\`${prefix}djs-v12-admin-46\` ▶ if sameone mention sameone the bot will delete it for now one know who mention
            ${client.emotes.list}\`${prefix}djs-v12-admin-47\` ▶ auto responce with a nice trik
          **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
        )
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("00e8ff")
        .setColor("00e8ff")
        .setImage(
          "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
        )
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
            embed.setTitle("**discord.js v12 Codes**");
            embed.setImage(
              "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
              "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
