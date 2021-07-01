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
          ${client.emotes.list}\`${prefix}dpy-1\` <:blue_arrow:810832471175462932> كود رد تلقاءي بالمنشن
          ${client.emotes.list}\`${prefix}dpy-2\` <:blue_arrow:810832471175462932> كود سورس
          ${client.emotes.list}\`${prefix}dpy-3\` <:blue_arrow:810832471175462932> كود ساي امبد
          ${client.emotes.list}\`${prefix}dpy-4\` <:blue_arrow:810832471175462932> كود جيف اواي
          ${client.emotes.list}\`${prefix}dpy-5\` <:blue_arrow:810832471175462932> كود معلومات البوت
          ${client.emotes.list}\`${prefix}dpy-6\` <:blue_arrow:810832471175462932> كود عدد الرتب في السيرفر
          ${client.emotes.list}\`${prefix}dpy-7\` <:blue_arrow:810832471175462932> كود يويرك اعلى رتبه عندها برمشن
          ${client.emotes.list}\`${prefix}dpy-8\` <:blue_arrow:810832471175462932> كود لعبة كت تويت
          ${client.emotes.list}\`${prefix}dpy-9\` <:blue_arrow:810832471175462932> كود هيلب
          ${client.emotes.list}\`${prefix}dpy-10\` <:blue_arrow:810832471175462932> كود بنج**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-11\` <:blue_arrow:810832471175462932> كود منع السب
          ${client.emotes.list}\`${prefix}dpy-12\` <:blue_arrow:810832471175462932> كود ارسال رساله الى عضو
          ${client.emotes.list}\`${prefix}dpy-13\` <:blue_arrow:810832471175462932> كود رد تلقاءي
          ${client.emotes.list}\`${prefix}dpy-14\` <:blue_arrow:810832471175462932> كود هيلب غير الي فوق
          ${client.emotes.list}\`${prefix}dpy-15\` <:blue_arrow:810832471175462932> كود اقترحات
          ${client.emotes.list}\`${prefix}dpy-16\` <:blue_arrow:810832471175462932> كود بنج مطور
          ${client.emotes.list}\`${prefix}dpy-17\` <:blue_arrow:810832471175462932> كود لعبة هاك زي حج سام بوت
          ${client.emotes.list}\`${prefix}dpy-18\` <:blue_arrow:810832471175462932> كود تصويت مطور
          ${client.emotes.list}\`${prefix}dpy-19\` <:blue_arrow:810832471175462932> كود حالة
          ${client.emotes.list}\`${prefix}dpy-20\` <:blue_arrow:810832471175462932> كود افتار**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-21\` <:blue_arrow:810832471175462932> كود يوزر
          ${client.emotes.list}\`${prefix}dpy-22\` <:blue_arrow:810832471175462932> كود نرد
          ${client.emotes.list}\`${prefix}dpy-23\` <:blue_arrow:810832471175462932> كود بنج مطور فشخ 😂 دا غير الي فوق 😂
          ${client.emotes.list}\`${prefix}dpy-24\` <:blue_arrow:810832471175462932> معلومات البوت مطور
          ${client.emotes.list}\`${prefix}dpy-25\` <:blue_arrow:810832471175462932> كود انفايت مطور
          ${client.emotes.list}\`${prefix}dpy-26\` <:blue_arrow:810832471175462932> كود ميمز
          ${client.emotes.list}\`${prefix}dpy-27\` <:blue_arrow:810832471175462932> كود حالة مع عدد السيرفرات
          ${client.emotes.list}\`${prefix}dpy-28\` <:blue_arrow:810832471175462932> كود أذا حد منشن البوت يرد عليه
          ${client.emotes.list}\`${prefix}dpy-29\` <:blue_arrow:810832471175462932> لعبة 8 ball
          ${client.emotes.list}\`${prefix}dpy-30\` <:blue_arrow:810832471175462932> كود قفل و فتح الشات**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-31\` <:blue_arrow:810832471175462932> كود ساي
          ${client.emotes.list}\`${prefix}dpy-32\` <:blue_arrow:810832471175462932> كود مسح الشات (بعدد)
          ${client.emotes.list}\`${prefix}dpy-33\` <:blue_arrow:810832471175462932> كود اخفاء و اظهار الشات
          ${client.emotes.list}\`${prefix}dpy-34\` <:blue_arrow:810832471175462932> كود تغير اسم العضو
          ${client.emotes.list}\`${prefix}dpy-35\` <:blue_arrow:810832471175462932> كود باند
          ${client.emotes.list}\`${prefix}dpy-36\` <:blue_arrow:810832471175462932> كود طرد
          ${client.emotes.list}\`${prefix}dpy-37\` <:blue_arrow:810832471175462932> كود تغير البرفكس
          ${client.emotes.list}\`${prefix}dpy-38\` <:blue_arrow:810832471175462932> كود يخلي البوت 24 ساعه في الروم
          ${client.emotes.list}\`${prefix}dpy-39\` <:blue_arrow:810832471175462932> كود فك البان
          ${client.emotes.list}\`${prefix}dpy-40\` <:blue_arrow:810832471175462932> كل ما  تتبعت رساله في اي سيرفر البوت ياخدها وبعتها علي السيرفر بتاعك**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-41\` <:blue_arrow:810832471175462932> كود ميوت
          ${client.emotes.list}\`${prefix}dpy-42\` <:blue_arrow:810832471175462932> كود فك ميوت**`
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
          ${client.emotes.list}\`${prefix}dpy-1\` <:blue_arrow:810832471175462932> auto responde code
          ${client.emotes.list}\`${prefix}dpy-2\` <:blue_arrow:810832471175462932> source code
          ${client.emotes.list}\`${prefix}dpy-3\` <:blue_arrow:810832471175462932> embed say code
          ${client.emotes.list}\`${prefix}dpy-4\` <:blue_arrow:810832471175462932> giveaway code
          ${client.emotes.list}\`${prefix}dpy-5\` <:blue_arrow:810832471175462932> bot info code
          ${client.emotes.list}\`${prefix}dpy-6\` <:blue_arrow:810832471175462932> role count code
          ${client.emotes.list}\`${prefix}dpy-7\` <:blue_arrow:810832471175462932> high premsion code
          ${client.emotes.list}\`${prefix}dpy-8\` <:blue_arrow:810832471175462932> cut tweet game code
          ${client.emotes.list}\`${prefix}dpy-9\` <:blue_arrow:810832471175462932> help code
          ${client.emotes.list}\`${prefix}dpy-10\` <:blue_arrow:810832471175462932> ping code**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-11\` <:blue_arrow:810832471175462932> anti swer code
          ${client.emotes.list}\`${prefix}dpy-12\` <:blue_arrow:810832471175462932> send msg code
          ${client.emotes.list}\`${prefix}dpy-13\` <:blue_arrow:810832471175462932> auto respond code
          ${client.emotes.list}\`${prefix}dpy-14\` <:blue_arrow:810832471175462932> help code 2
          ${client.emotes.list}\`${prefix}dpy-15\` <:blue_arrow:810832471175462932> suggest code
          ${client.emotes.list}\`${prefix}dpy-16\` <:blue_arrow:810832471175462932> super ping code
          ${client.emotes.list}\`${prefix}dpy-17\` <:blue_arrow:810832471175462932> hack game code
          ${client.emotes.list}\`${prefix}dpy-18\` <:blue_arrow:810832471175462932> vote code
          ${client.emotes.list}\`${prefix}dpy-19\` <:blue_arrow:810832471175462932> status code
          ${client.emotes.list}\`${prefix}dpy-20\` <:blue_arrow:810832471175462932> avatar code**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-21\` <:blue_arrow:810832471175462932> user
          ${client.emotes.list}\`${prefix}dpy-22\` <:blue_arrow:810832471175462932> roll code
          ${client.emotes.list}\`${prefix}dpy-23\` <:blue_arrow:810832471175462932> super ultimet ping code 😂
          ${client.emotes.list}\`${prefix}dpy-24\` <:blue_arrow:810832471175462932> bot info code
          ${client.emotes.list}\`${prefix}dpy-25\` <:blue_arrow:810832471175462932> get the invite link code
          ${client.emotes.list}\`${prefix}dpy-26\` <:blue_arrow:810832471175462932> memes code
          ${client.emotes.list}\`${prefix}dpy-27\` <:blue_arrow:810832471175462932> custom status and bot guild
          ${client.emotes.list}\`${prefix}dpy-28\` <:blue_arrow:810832471175462932> If someone tag bot respond to it
          ${client.emotes.list}\`${prefix}dpy-29\` <:blue_arrow:810832471175462932> 8 ball game
          ${client.emotes.list}\`${prefix}dpy-30\` <:blue_arrow:810832471175462932> lock & unlock code**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-31\` <:blue_arrow:810832471175462932> say code
          ${client.emotes.list}\`${prefix}dpy-32\` <:blue_arrow:810832471175462932> clear code
          ${client.emotes.list}\`${prefix}dpy-33\` <:blue_arrow:810832471175462932> hide & show code
          ${client.emotes.list}\`${prefix}dpy-34\` <:blue_arrow:810832471175462932> setnickname code
          ${client.emotes.list}\`${prefix}dpy-35\` <:blue_arrow:810832471175462932> ban code
          ${client.emotes.list}\`${prefix}dpy-36\` <:blue_arrow:810832471175462932> kick code
          ${client.emotes.list}\`${prefix}dpy-37\` <:blue_arrow:810832471175462932> prefix changer
          ${client.emotes.list}\`${prefix}dpy-38\` <:blue_arrow:810832471175462932> code makes bot stay in voice channel 24/7
          ${client.emotes.list}\`${prefix}dpy-39\` <:blue_arrow:810832471175462932> unban code
          ${client.emotes.list}\`${prefix}dpy-40\` <:blue_arrow:810832471175462932> Whenever you send a message on any server, the bot takes it and send it to your server**`,
        `**
          ${client.emotes.list}\`${prefix}dpy-41\` <:blue_arrow:810832471175462932> Mute Code
          ${client.emotes.list}\`${prefix}dpy-42\` <:blue_arrow:810832471175462932> Unmute Code**`
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
