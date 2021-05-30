const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "dpy-general",
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
          ${client.emotes.list}\`${prefix}dpy-general-1\` ▶ كود رد تلقاءي بالمنشن
          ${client.emotes.list}\`${prefix}dpy-general-2\` ▶ كود سورس
          ${client.emotes.list}\`${prefix}dpy-general-3\` ▶ كود ساي امبد
          ${client.emotes.list}\`${prefix}dpy-general-4\` ▶ كود جيف اواي
          ${client.emotes.list}\`${prefix}dpy-general-5\` ▶ كود معلومات البوت
          ${client.emotes.list}\`${prefix}dpy-general-6\` ▶ كود عدد الرتب في السيرفر
          ${client.emotes.list}\`${prefix}dpy-general-7\` ▶ كود يويرك اعلى رتبه عندها برمشن
          ${client.emotes.list}\`${prefix}dpy-general-8\` ▶ كود لعبة كت تويت
          ${client.emotes.list}\`${prefix}dpy-general-9\` ▶ كود هيلب
          ${client.emotes.list}\`${prefix}dpy-general-10\` ▶ كود بنج
          **`,
        `**
          ${client.emotes.list}\`${prefix}dpy-general-11\` ▶ كود منع السب
          ${client.emotes.list}\`${prefix}dpy-general-12\` ▶ كود ارسال رساله الى عضو
          ${client.emotes.list}\`${prefix}dpy-general-13\` ▶ كود رد تلقاءي
          ${client.emotes.list}\`${prefix}dpy-general-14\` ▶ كود هيلب غير الي فوق
          ${client.emotes.list}\`${prefix}dpy-general-15\` ▶ كود اقترحات
          ${client.emotes.list}\`${prefix}dpy-general-16\` ▶ كود بنج مطور
          ${client.emotes.list}\`${prefix}dpy-general-17\` ▶ كود لعبة هاك زي حج سام بوت
          ${client.emotes.list}\`${prefix}dpy-general-18\` ▶ كود تصويت مطور
          ${client.emotes.list}\`${prefix}dpy-general-19\` ▶ كود حالة
          ${client.emotes.list}\`${prefix}dpy-general-20\` ▶ كود افتار
          **`,
        `**
          ${client.emotes.list}\`${prefix}dpy-general-21\` ▶ كود يوزر
          ${client.emotes.list}\`${prefix}dpy-general-22\` ▶ كود نرد
          ${client.emotes.list}\`${prefix}dpy-general-23\` ▶ كود بنج مطور فشخ 😂 دا غير الي فوق 😂
          ${client.emotes.list}\`${prefix}dpy-general-24\` ▶ معلومات البوت مطور
          ${client.emotes.list}\`${prefix}dpy-general-25\` ▶ كود انفايت مطور
          ${client.emotes.list}\`${prefix}dpy-general-26\` ▶ كود ميمز
          ${client.emotes.list}\`${prefix}dpy-general-27\` ▶ كود حالة مع عدد السيرفرات
          ${client.emotes.list}\`${prefix}dpy-general-28\` ▶ كود أذا حد منشن البوت يرد عليه
          ${client.emotes.list}\`${prefix}dpy-general-29\` ▶ لعبة 8 ball
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
            embed.setTitle("**Discord.py Codes**");
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
          ${client.emotes.list}\`${prefix}dpy-general-1\` ▶ auto responde code
          ${client.emotes.list}\`${prefix}dpy-general-2\` ▶ source code
          ${client.emotes.list}\`${prefix}dpy-general-3\` ▶ embed say code
          ${client.emotes.list}\`${prefix}dpy-general-4\` ▶ giveaway code
          ${client.emotes.list}\`${prefix}dpy-general-5\` ▶ bot info code
          ${client.emotes.list}\`${prefix}dpy-general-6\` ▶ role count code
          ${client.emotes.list}\`${prefix}dpy-general-7\` ▶ high premsion code
          ${client.emotes.list}\`${prefix}dpy-general-8\` ▶ cut tweet game code
          ${client.emotes.list}\`${prefix}dpy-general-9\` ▶ help code
          ${client.emotes.list}\`${prefix}dpy-general-10\` ▶ ping code
                  **`,
        `**
          ${client.emotes.list}\`${prefix}dpy-general-11\` ▶ anti swer code
          ${client.emotes.list}\`${prefix}dpy-general-12\` ▶ send msg code
          ${client.emotes.list}\`${prefix}dpy-general-13\` ▶ auto respond code
          ${client.emotes.list}\`${prefix}dpy-general-14\` ▶ help code 2
          ${client.emotes.list}\`${prefix}dpy-general-15\` ▶ suggest code
          ${client.emotes.list}\`${prefix}dpy-general-16\` ▶ super ping code
          ${client.emotes.list}\`${prefix}dpy-general-17\` ▶ hack game code
          ${client.emotes.list}\`${prefix}dpy-general-18\` ▶ vote code
          ${client.emotes.list}\`${prefix}dpy-general-19\` ▶ status code
          ${client.emotes.list}\`${prefix}dpy-general-20\` ▶ avatar code
          **`,
        `**
          ${client.emotes.list}\`${prefix}dpy-general-21\` ▶ user
          ${client.emotes.list}\`${prefix}dpy-general-22\` ▶ roll code
          ${client.emotes.list}\`${prefix}dpy-general-23\` ▶ super ultimet ping code 😂
          ${client.emotes.list}\`${prefix}dpy-general-24\` ▶ bot info code
          ${client.emotes.list}\`${prefix}dpy-general-25\` ▶ get the invite link code
          ${client.emotes.list}\`${prefix}dpy-general-26\` ▶ memes code
          ${client.emotes.list}\`${prefix}dpy-general-27\` ▶ custom status and bot guild
          ${client.emotes.list}\`${prefix}dpy-general-28\` ▶ If someone tag bot respond to it
          ${client.emotes.list}\`${prefix}dpy-general-29\` ▶ 8 ball game
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
            embed.setTitle("**Discord.py Codes**");
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
