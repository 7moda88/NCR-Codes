const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "djs-v12-general",
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
            ${client.emotes.list}\`${prefix}djs-v12-general-1\` ▶ كود افاتار
            ${client.emotes.list}\`${prefix}djs-v12-general-2\` ▶ كود يوزر
            ${client.emotes.list}\`${prefix}djs-v12-general-3\` ▶ كود بنج
            ${client.emotes.list}\`${prefix}djs-v12-general-4\` ▶ كود خط تلقاءي
            ${client.emotes.list}\`${prefix}djs-v12-general-5\` ▶ كود يحط رياكشن تلقاءي على الرساءل
            ${client.emotes.list}\`${prefix}djs-v12-general-6\` ▶ كود اقترحات مطور برياكشن
            ${client.emotes.list}\`${prefix}djs-v12-general-7\` ▶ كود معلومات السيرفر
            ${client.emotes.list}\`${prefix}djs-v12-general-8\` ▶ كود توب زي البروبوت
            ${client.emotes.list}\`${prefix}djs-v12-general-9\` ▶ كود كريديت
            ${client.emotes.list}\`${prefix}djs-v12-general-10\` ▶ كود هيلب في الخاص امبد
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-general-11\` ▶ كود تقديم على الادارة
            ${client.emotes.list}\`${prefix}djs-v12-general-12\` ▶ كود حالة متغيره
            ${client.emotes.list}\`${prefix}djs-v12-general-13\` ▶ كود اضافة ايموجي ب امر
            ${client.emotes.list}\`${prefix}djs-v12-general-14\` ▶ كود رد تلقاءي مطور تقدر تحط وتشيل الرد بأمر
            ${client.emotes.list}\`${prefix}djs-v12-general-15\` ▶ كود رينبو
            ${client.emotes.list}\`${prefix}djs-v12-general-16\` ▶ كود كشف الافلاين
            ${client.emotes.list}\`${prefix}djs-v12-general-17\` ▶ كود يوريك id الشخص الي تمنشنه
            ${client.emotes.list}\`${prefix}djs-v12-general-18\` ▶ كود انفيات البوت
            ${client.emotes.list}\`${prefix}djs-v12-general-19\` ▶ كود ميوزك
            ${client.emotes.list}\`${prefix}djs-v12-general-20\` ▶ كود معلومات البوت مطور
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-general-21\` ▶ كود تكت مطور •-•
            ${client.emotes.list}\`${prefix}djs-v12-general-22\` ▶ كود ساي بأمبد
            ${client.emotes.list}\`${prefix}djs-v12-general-23\` ▶ Not Ex
            ${client.emotes.list}\`${prefix}djs-v12-general-24\` ▶ كود بروفايل زي بروبوت
            ${client.emotes.list}\`${prefix}djs-v12-general-25\` ▶ كود هيلب مع تغير الصفحات عن طريق رياكشن
            ${client.emotes.list}\`${prefix}djs-v12-general-26\` ▶ كود تصويت
            ${client.emotes.list}\`${prefix}djs-v12-general-27\` ▶ كود قتل
            ${client.emotes.list}\`${prefix}djs-v12-general-28\` ▶ كود حساب الضريبة
            ${client.emotes.list}\`${prefix}djs-v12-general-29\` ▶ كود سيرفر مثل البروبوت بظبط
            ${client.emotes.list}\`${prefix}djs-v12-general-30\` ▶ كود معلومات المستعمل بتاع بروبوت
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-general-31\` ▶ كود أذا حد رسل رساله في خاص البوت تتحول لشانل
            ${client.emotes.list}\`${prefix}djs-v12-general-32\` ▶ كود يعطيك معلوات عن أي سيرفر بس يحتاج رابط السيرفر هاد
            ${client.emotes.list}\`${prefix}djs-v12-general-33\` ▶ كود لعبة مسح بتاعت زمبي 😂
            ${client.emotes.list}\`${prefix}djs-v12-general-34\` ▶ كود لعبة زبالة
            ${client.emotes.list}\`${prefix}djs-v12-general-35\` ▶ كود هيلب أسطوري
            ${client.emotes.list}\`${prefix}djs-v12-general-36\` ▶ كود يوزر عربي
            ${client.emotes.list}\`${prefix}djs-v12-general-37\` ▶ كود رولز زي البروبوت
            ${client.emotes.list}\`${prefix}djs-v12-general-38\` ▶ كود يوريك الفويس اونلاين بروم صوتي
            ${client.emotes.list}\`${prefix}djs-v12-general-39\` ▶ كود يظهرلك عدد البوتات بروم صوتي
            ${client.emotes.list}\`${prefix}djs-v12-general-40\` ▶ كود يظهر ليك اعضاء السيرفر بروم صوتي
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-general-41\` ▶ كود يظهر ليك رولات السيرفر بروم صوتي
            ${client.emotes.list}\`${prefix}djs-v12-general-42\` ▶ كود يضهر ليك عدد رومات السيرفر بروم صوتي
            ${client.emotes.list}\`${prefix}djs-v12-general-43\` ▶ كود معلومات المبرمج
            ${client.emotes.list}\`${prefix}djs-v12-general-44\` ▶ كود اي شي ينرسل بخاص البوت يجي ليك
            ${client.emotes.list}\`${prefix}djs-v12-general-45\` ▶ كود معدل الدكاء
            ${client.emotes.list}\`${prefix}djs-v12-general-46\` ▶ كود أذا واحد سوى بوست البوت يشكره
            ${client.emotes.list}\`${prefix}djs-v12-general-47\` ▶ كود نقاط زي بروبوت
            ${client.emotes.list}\`${prefix}djs-v12-general-48\` ▶ كود نيترو عشوائي
            ${client.emotes.list}\`${prefix}djs-v12-general-49\` ▶ كود فعل نفسك بسيط
            ${client.emotes.list}\`${prefix}djs-v12-general-50\` ▶ Not Ex
                **`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-general-51\` ▶ كود تيمب شانل أسطوري بس بدون أمر زي البرو بوت
            ${client.emotes.list}\`${prefix}djs-v12-general-52\` ▶ Not Ex
            ${client.emotes.list}\`${prefix}djs-v12-general-53\` ▶ كود يعرضلك شارات العضو
            ${client.emotes.list}\`${prefix}djs-v12-general-54\` ▶ كود يكبرلك الكلام
            ${client.emotes.list}\`${prefix}djs-v12-general-55\` ▶ كود قاءمة الوان
            ${client.emotes.list}\`${prefix}djs-v12-general-56\` ▶ كود رسالة كل فتره
            ${client.emotes.list}\`${prefix}djs-v12-general-57\` ▶ 
            ${client.emotes.list}\`${prefix}djs-v12-general-58\` ▶ 
            ${client.emotes.list}\`${prefix}djs-v12-general-59\` ▶ 
            ${client.emotes.list}\`${prefix}djs-v12-general-60\` ▶ 
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
                ${client.emotes.list}\`${prefix}djs-v12-general-1\` ▶ avatar code
                ${client.emotes.list}\`${prefix}djs-v12-general-2\` ▶ user code
                ${client.emotes.list}\`${prefix}djs-v12-general-3\` ▶ ping code
                ${client.emotes.list}\`${prefix}djs-v12-general-4\` ▶ auto line code
                ${client.emotes.list}\`${prefix}djs-v12-general-5\` ▶ auto reacte code
                ${client.emotes.list}\`${prefix}djs-v12-general-6\` ▶ suggest code
                ${client.emotes.list}\`${prefix}djs-v12-general-7\` ▶ server info code
                ${client.emotes.list}\`${prefix}djs-v12-general-8\` ▶ top code
                ${client.emotes.list}\`${prefix}djs-v12-general-9\` ▶ credits code
                ${client.emotes.list}\`${prefix}djs-v12-general-10\` ▶ dm help code
                    **`,
        `**
                ${client.emotes.list}\`${prefix}djs-v12-general-11\` ▶ super sumbite code
                ${client.emotes.list}\`${prefix}djs-v12-general-12\` ▶ auto change status code
                ${client.emotes.list}\`${prefix}djs-v12-general-13\` ▶ add emoji code
                ${client.emotes.list}\`${prefix}djs-v12-general-14\` ▶ super auto recpose code
                ${client.emotes.list}\`${prefix}djs-v12-general-15\` ▶ randmon role color code
                ${client.emotes.list}\`${prefix}djs-v12-general-16\` ▶ fake offline status hunter
                ${client.emotes.list}\`${prefix}djs-v12-general-17\` ▶ user id code
                ${client.emotes.list}\`${prefix}djs-v12-general-18\` ▶ bot info code
                ${client.emotes.list}\`${prefix}djs-v12-general-19\` ▶ music code
                ${client.emotes.list}\`${prefix}djs-v12-general-20\` ▶ super bot info code 2
                      **`,
        `**
                ${client.emotes.list}\`${prefix}djs-v12-general-21\` ▶ super ticket bot
                ${client.emotes.list}\`${prefix}djs-v12-general-22\` ▶ embed say code
                ${client.emotes.list}\`${prefix}djs-v12-general-23\` ▶ Not Ex
                ${client.emotes.list}\`${prefix}djs-v12-general-24\` ▶ probot profile code
                ${client.emotes.list}\`${prefix}djs-v12-general-25\` ▶ pages help code
                ${client.emotes.list}\`${prefix}djs-v12-general-26\` ▶ vote code
                ${client.emotes.list}\`${prefix}djs-v12-general-27\` ▶ kill code
                ${client.emotes.list}\`${prefix}djs-v12-general-28\` ▶ tax code
                ${client.emotes.list}\`${prefix}djs-v12-general-29\` ▶ probot server code
                ${client.emotes.list}\`${prefix}djs-v12-general-30\` ▶ probot user code
                    **`,
        `**
                ${client.emotes.list}\`${prefix}djs-v12-general-31\` ▶ auto get msg from dm bot to channel
                ${client.emotes.list}\`${prefix}djs-v12-general-32\` ▶ server info code with server link
                ${client.emotes.list}\`${prefix}djs-v12-general-33\` ▶ delete game code
                ${client.emotes.list}\`${prefix}djs-v12-general-34\` ▶ trash code
                ${client.emotes.list}\`${prefix}djs-v12-general-35\` ▶ super help code
                ${client.emotes.list}\`${prefix}djs-v12-general-36\` ▶ simple ar user code
                ${client.emotes.list}\`${prefix}djs-v12-general-37\` ▶ Roles Code Like Probot
                ${client.emotes.list}\`${prefix}djs-v12-general-38\` ▶ A code that showing you the server voice online number with a voice room
                ${client.emotes.list}\`${prefix}djs-v12-general-39\` ▶ A code that showing you the server bots number with a voice room
                ${client.emotes.list}\`${prefix}djs-v12-general-40\` ▶ A code that showing you the server members number with a voice room
                    **`,
        `**
                ${client.emotes.list}\`${prefix}djs-v12-general-41\` ▶ A code showing you the server roles number with voice room
                ${client.emotes.list}\`${prefix}djs-v12-general-42\` ▶ A code showing you the server rooms number with voice room
                ${client.emotes.list}\`${prefix}djs-v12-general-43\` ▶ Devloper info code
                ${client.emotes.list}\`${prefix}djs-v12-general-44\` ▶ (if someone dm the bot the message will be sent to you) code
                ${client.emotes.list}\`${prefix}djs-v12-general-45\` ▶ IQ code
                ${client.emotes.list}\`${prefix}djs-v12-general-46\` ▶ Code if someone boosts the server the bot thank him
                ${client.emotes.list}\`${prefix}djs-v12-general-47\` ▶ XP code like probot
                ${client.emotes.list}\`${prefix}djs-v12-general-48\` ▶ Random nitro code
                ${client.emotes.list}\`${prefix}djs-v12-general-49\` ▶ Prove Your Self code
                ${client.emotes.list}\`${prefix}djs-v12-general-50\` ▶ Not Ex
                    **`,
        `**
                ${client.emotes.list}\`${prefix}djs-v12-general-51\` ▶ Temp channel code with no cmd
                ${client.emotes.list}\`${prefix}djs-v12-general-52\` ▶ prove your self v2
                ${client.emotes.list}\`${prefix}djs-v12-general-53\` ▶ user badges code
                ${client.emotes.list}\`${prefix}djs-v12-general-54\` ▶ make the text bigger
                ${client.emotes.list}\`${prefix}djs-v12-general-55\` ▶ colors list code
                ${client.emotes.list}\`${prefix}djs-v12-general-56\` ▶ message with time
                ${client.emotes.list}\`${prefix}djs-v12-general-57\` ▶ 
                ${client.emotes.list}\`${prefix}djs-v12-general-58\` ▶ 
                ${client.emotes.list}\`${prefix}djs-v12-general-59\` ▶ 
                ${client.emotes.list}\`${prefix}djs-v12-general-60\` ▶ 
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
