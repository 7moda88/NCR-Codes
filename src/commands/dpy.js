const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "dpy",
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
          ${client.emotes.list}\`${prefix}dpy-1\` ▶ كود رد تلقاءي بالمنشن
          ${client.emotes.list}\`${prefix}dpy-2\` ▶ كود سورس
          ${client.emotes.list}\`${prefix}dpy-3\` ▶ كود ساي امبد
          ${client.emotes.list}\`${prefix}dpy-4\` ▶ كود جيف اواي
          ${client.emotes.list}\`${prefix}dpy-5\` ▶ كود معلومات البوت
          ${client.emotes.list}\`${prefix}dpy-6\` ▶ كود عدد الرتب في السيرفر
          ${client.emotes.list}\`${prefix}dpy-7\` ▶ كود يويرك اعلى رتبه عندها برمشن
          ${client.emotes.list}\`${prefix}dpy-8\` ▶ كود لعبة كت تويت
          ${client.emotes.list}\`${prefix}dpy-9\` ▶ كود هيلب
          ${client.emotes.list}\`${prefix}dpy-10\` ▶ كود بنج**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-11\` ▶ كود منع السب
          ${client.emotes.list}\`${prefix}dpy-12\` ▶ كود ارسال رساله الى عضو
          ${client.emotes.list}\`${prefix}dpy-13\` ▶ كود رد تلقاءي
          ${client.emotes.list}\`${prefix}dpy-14\` ▶ كود هيلب غير الي فوق
          ${client.emotes.list}\`${prefix}dpy-15\` ▶ كود اقترحات
          ${client.emotes.list}\`${prefix}dpy-16\` ▶ كود بنج مطور
          ${client.emotes.list}\`${prefix}dpy-17\` ▶ كود لعبة هاك زي حج سام بوت
          ${client.emotes.list}\`${prefix}dpy-18\` ▶ كود تصويت مطور
          ${client.emotes.list}\`${prefix}dpy-19\` ▶ كود حالة
          ${client.emotes.list}\`${prefix}dpy-20\` ▶ كود افتار**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-21\` ▶ كود يوزر
          ${client.emotes.list}\`${prefix}dpy-22\` ▶ كود نرد
          ${client.emotes.list}\`${prefix}dpy-23\` ▶ كود بنج مطور فشخ 😂 دا غير الي فوق 😂
          ${client.emotes.list}\`${prefix}dpy-24\` ▶ معلومات البوت مطور
          ${client.emotes.list}\`${prefix}dpy-25\` ▶ كود انفايت مطور
          ${client.emotes.list}\`${prefix}dpy-26\` ▶ كود ميمز
          ${client.emotes.list}\`${prefix}dpy-27\` ▶ كود حالة مع عدد السيرفرات
          ${client.emotes.list}\`${prefix}dpy-28\` ▶ كود أذا حد منشن البوت يرد عليه
          ${client.emotes.list}\`${prefix}dpy-29\` ▶ لعبة 8 ball
          ${client.emotes.list}\`${prefix}dpy-30\` ▶ كود قفل و فتح الشات**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-31\` ▶ كود ساي
          ${client.emotes.list}\`${prefix}dpy-32\` ▶ كود مسح الشات (بعدد)
          ${client.emotes.list}\`${prefix}dpy-33\` ▶ كود اخفاء و اظهار الشات
          ${client.emotes.list}\`${prefix}dpy-34\` ▶ كود تغير اسم العضو
          ${client.emotes.list}\`${prefix}dpy-35\` ▶ كود باند
          ${client.emotes.list}\`${prefix}dpy-36\` ▶ كود طرد
          ${client.emotes.list}\`${prefix}dpy-37\` ▶ كود تغير البرفكس
          ${client.emotes.list}\`${prefix}dpy-38\` ▶ كود يخلي البوت 24 ساعه في الروم
          ${client.emotes.list}\`${prefix}dpy-39\` ▶ كود فك البان
          ${client.emotes.list}\`${prefix}dpy-40\` ▶ كل ما  تتبعت رساله في اي سيرفر البوت ياخدها وبعتها علي السيرفر بتاعك**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-41\` ▶ كود ميوت
          ${client.emotes.list}\`${prefix}dpy-42\` ▶ كود فك ميوت**`
      ];
      let page = 1;
      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);
      message.lineReply(embed2).then(msg => {
        msg.edit({ embed: embed })
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
            embed.setAuthor(
              "**Discord.py**",
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            embed.setTimestamp();
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;

            page++;
            embed.setAuthor(
              "**Discord.py**",
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            embed.setTimestamp();
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
        });
      });
    } else if (lang2 == "english") {
      let pages = [
        `**
          ${client.emotes.list}\`${prefix}dpy-1\` ▶ auto responde code
          ${client.emotes.list}\`${prefix}dpy-2\` ▶ source code
          ${client.emotes.list}\`${prefix}dpy-3\` ▶ embed say code
          ${client.emotes.list}\`${prefix}dpy-4\` ▶ giveaway code
          ${client.emotes.list}\`${prefix}dpy-5\` ▶ bot info code
          ${client.emotes.list}\`${prefix}dpy-6\` ▶ role count code
          ${client.emotes.list}\`${prefix}dpy-7\` ▶ high premsion code
          ${client.emotes.list}\`${prefix}dpy-8\` ▶ cut tweet game code
          ${client.emotes.list}\`${prefix}dpy-9\` ▶ help code
          ${client.emotes.list}\`${prefix}dpy-10\` ▶ ping code**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-11\` ▶ anti swer code
          ${client.emotes.list}\`${prefix}dpy-12\` ▶ send msg code
          ${client.emotes.list}\`${prefix}dpy-13\` ▶ auto respond code
          ${client.emotes.list}\`${prefix}dpy-14\` ▶ help code 2
          ${client.emotes.list}\`${prefix}dpy-15\` ▶ suggest code
          ${client.emotes.list}\`${prefix}dpy-16\` ▶ super ping code
          ${client.emotes.list}\`${prefix}dpy-17\` ▶ hack game code
          ${client.emotes.list}\`${prefix}dpy-18\` ▶ vote code
          ${client.emotes.list}\`${prefix}dpy-19\` ▶ status code
          ${client.emotes.list}\`${prefix}dpy-20\` ▶ avatar code**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-21\` ▶ user
          ${client.emotes.list}\`${prefix}dpy-22\` ▶ roll code
          ${client.emotes.list}\`${prefix}dpy-23\` ▶ super ultimet ping code 😂
          ${client.emotes.list}\`${prefix}dpy-24\` ▶ bot info code
          ${client.emotes.list}\`${prefix}dpy-25\` ▶ get the invite link code
          ${client.emotes.list}\`${prefix}dpy-26\` ▶ memes code
          ${client.emotes.list}\`${prefix}dpy-27\` ▶ custom status and bot guild
          ${client.emotes.list}\`${prefix}dpy-28\` ▶ If someone tag bot respond to it
          ${client.emotes.list}\`${prefix}dpy-29\` ▶ 8 ball game
          ${client.emotes.list}\`${prefix}dpy-30\` ▶ lock & unlock code**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-31\` ▶ say code
          ${client.emotes.list}\`${prefix}dpy-32\` ▶ clear code
          ${client.emotes.list}\`${prefix}dpy-33\` ▶ hide & show code
          ${client.emotes.list}\`${prefix}dpy-34\` ▶ setnickname code
          ${client.emotes.list}\`${prefix}dpy-35\` ▶ ban code
          ${client.emotes.list}\`${prefix}dpy-36\` ▶ kick code
          ${client.emotes.list}\`${prefix}dpy-37\` ▶ prefix changer
          ${client.emotes.list}\`${prefix}dpy-38\` ▶ code makes bot stay in voice channel 24/7
          ${client.emotes.list}\`${prefix}dpy-39\` ▶ unban code
          ${client.emotes.list}\`${prefix}dpy-40\` ▶ Whenever you send a message on any server, the bot takes it and send it to your server**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-41\` ▶ Mute Code
          ${client.emotes.list}\`${prefix}dpy-42\` ▶ Unmute Code**`
      ];
      let page = 1;
      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} Processing data ...**`);
      message.lineReply(embed2).then(msg => {
        msg.edit({ embed: embed })
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
            embed.setAuthor(
              "**Discord.py**",
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            embed.setTimestamp();
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;
            page++;
            embed.setAuthor(
              "**Discord.py**",
              "https://cdn.discordapp.com/emojis/771232360515633182.png?v=1"
            );
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            embed.setTimestamp();
            msg.edit({ embed: embed });
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
