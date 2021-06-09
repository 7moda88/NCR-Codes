const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "djs-v12",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    if (lang2 == "arabic") {
      let pages = [
        `**
        ${client.emotes.list}\`${prefix}djs-v12-1\` <:blue_arrow:810832471175462932> كود مسح الشات
        ${client.emotes.list}\`${prefix}djs-v12-2\` <:blue_arrow:810832471175462932> كود رول
        ${client.emotes.list}\`${prefix}djs-v12-3\` <:blue_arrow:810832471175462932>  مانع دخول توكنات
        ${client.emotes.list}\`${prefix}djs-v12-4\` <:blue_arrow:810832471175462932> كود باند
        ${client.emotes.list}\`${prefix}djs-v12-5\` <:blue_arrow:810832471175462932> كود طرد
        ${client.emotes.list}\`${prefix}djs-v12-6\` <:blue_arrow:810832471175462932> كود ميوت
        ${client.emotes.list}\`${prefix}djs-v12-7\` <:blue_arrow:810832471175462932> كود فتح و قفل
        ${client.emotes.list}\`${prefix}djs-v12-8\` <:blue_arrow:810832471175462932> كود تغير اسم الروم
        ${client.emotes.list}\`${prefix}djs-v12-9\` <:blue_arrow:810832471175462932> كود ان ميوت
        ${client.emotes.list}\`${prefix}djs-v12-10\` <:blue_arrow:810832471175462932> Not Ex**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-11\` <:blue_arrow:810832471175462932> كود منع الروابط
        ${client.emotes.list}\`${prefix}djs-v12-12\` <:blue_arrow:810832471175462932> كود فك البان
        ${client.emotes.list}\`${prefix}djs-v12-13\` <:blue_arrow:810832471175462932> كود مانع دخول البوتات
        ${client.emotes.list}\`${prefix}djs-v12-14\` <:blue_arrow:810832471175462932> كود صنع كيتوجري 
        ${client.emotes.list}\`${prefix}djs-v12-15\` <:blue_arrow:810832471175462932> كود اخفاء الشات واظهاره
        ${client.emotes.list}\`${prefix}djs-v12-16\` <:blue_arrow:810832471175462932> طود ايفال
        ${client.emotes.list}\`${prefix}djs-v12-17\` <:blue_arrow:810832471175462932> كود منع السبام
        ${client.emotes.list}\`${prefix}djs-v12-18\` <:blue_arrow:810832471175462932> كود منع أنفايتات الدسكورد بميوت ميوت
        ${client.emotes.list}\`${prefix}djs-v12-19\` <:blue_arrow:810832471175462932> كود منع السب
        ${client.emotes.list}\`${prefix}djs-v12-20\` <:blue_arrow:810832471175462932> كود صنع روم صوتي**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-21\` <:blue_arrow:810832471175462932> كود صنع روم كتابي
        ${client.emotes.list}\`${prefix}djs-v12-22\` <:blue_arrow:810832471175462932> كود مسح جميع الرتب و الرومات
        ${client.emotes.list}\`${prefix}djs-v12-23\` <:blue_arrow:810832471175462932> كود انذار
        ${client.emotes.list}\`${prefix}djs-v12-24\` <:blue_arrow:810832471175462932> كود بلاك لست
        ${client.emotes.list}\`${prefix}djs-v12-25\` <:blue_arrow:810832471175462932> كود تغير بادئة 
        ${client.emotes.list}\`${prefix}djs-v12-26\` <:blue_arrow:810832471175462932> كود تغير لغة البوت
        ${client.emotes.list}\`${prefix}djs-v12-27\` <:blue_arrow:810832471175462932> كود يوريك السيرفرات الي دخلها البوت و يوريك الأنفايت كود حجهم
        ${client.emotes.list}\`${prefix}djs-v12-28\` <:blue_arrow:810832471175462932> كود يعطيك أذكار أسلاميه
        ${client.emotes.list}\`${prefix}djs-v12-29\` <:blue_arrow:810832471175462932> كود يصنع أيمال عشواءي
        ${client.emotes.list}\`${prefix}djs-v12-30\` <:blue_arrow:810832471175462932> كود هيلب نسخة endo**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-31\` <:blue_arrow:810832471175462932> كود صنع ألوان مطور فشخ
        ${client.emotes.list}\`${prefix}djs-v12-32\` <:blue_arrow:810832471175462932> كود رقم عشواءي
        ${client.emotes.list}\`${prefix}djs-v12-33\` <:blue_arrow:810832471175462932> كود صنع رد تلقاءي بأمر و حذفه ب أمر
        ${client.emotes.list}\`${prefix}djs-v12-34\` <:blue_arrow:810832471175462932> كود صنع الوان
        ${client.emotes.list}\`${prefix}djs-v12-35\` <:blue_arrow:810832471175462932> كود say ب embed
        ${client.emotes.list}\`${prefix}djs-v12-36\` <:blue_arrow:810832471175462932> كود ساي
        ${client.emotes.list}\`${prefix}djs-v12-37\` <:blue_arrow:810832471175462932> كود لوق بسيط
        ${client.emotes.list}\`${prefix}djs-v12-38\` <:blue_arrow:810832471175462932> كود بان مع الاسباب
        ${client.emotes.list}\`${prefix}djs-v12-39\` <:blue_arrow:810832471175462932> كود يوقف البوت ب أمر
        ${client.emotes.list}\`${prefix}djs-v12-40\` <:blue_arrow:810832471175462932> كود رسترت البوت**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-41\` <:blue_arrow:810832471175462932> كود أضافة أيموجي ب أمر مطور فشخ
        ${client.emotes.list}\`${prefix}djs-v12-42\` <:blue_arrow:810832471175462932> كود يتحم في ال slowmode أسطوري
        ${client.emotes.list}\`${prefix}djs-v12-43\` <:blue_arrow:810832471175462932> كود رتبة مؤقته
        ${client.emotes.list}\`${prefix}djs-v12-44\` <:blue_arrow:810832471175462932> كود لستت الوان
        ${client.emotes.list}\`${prefix}djs-v12-45\` <:blue_arrow:810832471175462932> كود ميوزك تشغيل فقط
        ${client.emotes.list}\`${prefix}djs-v12-46\` <:blue_arrow:810832471175462932> كود اذا حد منشن شخص يمسحها علشان ما يعرف من الي منشن 😂
        ${client.emotes.list}\`${prefix}djs-v12-47\` <:blue_arrow:810832471175462932> كود رد تلقاءي فيه حركه رهيبه
        ${client.emotes.list}\`${prefix}djs-v12-48\` <:blue_arrow:810832471175462932> كود افاتار
        ${client.emotes.list}\`${prefix}djs-v12-49\` <:blue_arrow:810832471175462932> كود يوزر
        ${client.emotes.list}\`${prefix}djs-v12-50\` <:blue_arrow:810832471175462932> كود بنج**`,
        `**  
        ${client.emotes.list}\`${prefix}djs-v12-51\` <:blue_arrow:810832471175462932> كود خط تلقاءي
        ${client.emotes.list}\`${prefix}djs-v12-52\` <:blue_arrow:810832471175462932> كود يحط رياكشن تلقاءي على الرساءل
        ${client.emotes.list}\`${prefix}djs-v12-53\` <:blue_arrow:810832471175462932> كود اقترحات مطور برياكشن
        ${client.emotes.list}\`${prefix}djs-v12-54\` <:blue_arrow:810832471175462932> كود معلومات السيرفر
        ${client.emotes.list}\`${prefix}djs-v12-55\` <:blue_arrow:810832471175462932> كود توب زي البروبوت
        ${client.emotes.list}\`${prefix}djs-v12-56\` <:blue_arrow:810832471175462932> كود كريديت
        ${client.emotes.list}\`${prefix}djs-v12-57\` <:blue_arrow:810832471175462932> كود هيلب في الخاص امبد
        ${client.emotes.list}\`${prefix}djs-v12-58\` <:blue_arrow:810832471175462932> كود تقديم على الادارة
        ${client.emotes.list}\`${prefix}djs-v12-59\` <:blue_arrow:810832471175462932> كود حالة متغيره
        ${client.emotes.list}\`${prefix}djs-v12-60\` <:blue_arrow:810832471175462932> كود اضافة ايموجي ب امر**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-61\` <:blue_arrow:810832471175462932> كود رد تلقاءي مطور تقدر تحط وتشيل الرد بأمر
        ${client.emotes.list}\`${prefix}djs-v12-62\` <:blue_arrow:810832471175462932> كود رينبو
        ${client.emotes.list}\`${prefix}djs-v12-63\` <:blue_arrow:810832471175462932> كود كشف الافلاين
        ${client.emotes.list}\`${prefix}djs-v12-64\` <:blue_arrow:810832471175462932> كود يوريك id الشخص الي تمنشنه
        ${client.emotes.list}\`${prefix}djs-v12-65\` <:blue_arrow:810832471175462932> كود انفيات البوت
        ${client.emotes.list}\`${prefix}djs-v12-66\` <:blue_arrow:810832471175462932> كود ميوزك
        ${client.emotes.list}\`${prefix}djs-v12-67\` <:blue_arrow:810832471175462932> كود معلومات البوت مطور
        ${client.emotes.list}\`${prefix}djs-v12-68\` <:blue_arrow:810832471175462932> كود تكت مطور •-•
        ${client.emotes.list}\`${prefix}djs-v12-69\` <:blue_arrow:810832471175462932> كود ساي بأمبد
        ${client.emotes.list}\`${prefix}djs-v12-70\` <:blue_arrow:810832471175462932> Not Ex**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-71\` <:blue_arrow:810832471175462932> كود بروفايل زي بروبوت
        ${client.emotes.list}\`${prefix}djs-v12-72\` <:blue_arrow:810832471175462932> كود هيلب مع تغير الصفحات عن طريق رياكشن
        ${client.emotes.list}\`${prefix}djs-v12-73\` <:blue_arrow:810832471175462932> كود تصويت
        ${client.emotes.list}\`${prefix}djs-v12-74\` <:blue_arrow:810832471175462932> كود قتل
        ${client.emotes.list}\`${prefix}djs-v12-75\` <:blue_arrow:810832471175462932> كود حساب الضريبة
        ${client.emotes.list}\`${prefix}djs-v12-76\` <:blue_arrow:810832471175462932> كود سيرفر مثل البروبوت بظبط
        ${client.emotes.list}\`${prefix}djs-v12-77\` <:blue_arrow:810832471175462932> كود معلومات المستعمل بتاع بروبوت
        ${client.emotes.list}\`${prefix}djs-v12-78\` <:blue_arrow:810832471175462932> كود أذا حد رسل رساله في خاص البوت تتحول لشانل
        ${client.emotes.list}\`${prefix}djs-v12-79\` <:blue_arrow:810832471175462932> كود يعطيك معلوات عن أي سيرفر بس يحتاج رابط السيرفر هاد
        ${client.emotes.list}\`${prefix}djs-v12-80\` <:blue_arrow:810832471175462932> كود لعبة مسح بتاعت زمبي 😂**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-81\` <:blue_arrow:810832471175462932> كود لعبة زبالة
        ${client.emotes.list}\`${prefix}djs-v12-82\` <:blue_arrow:810832471175462932> كود هيلب أسطوري
        ${client.emotes.list}\`${prefix}djs-v12-83\` <:blue_arrow:810832471175462932> كود يوزر عربي
        ${client.emotes.list}\`${prefix}djs-v12-84\` <:blue_arrow:810832471175462932> كود رولز زي البروبوت
        ${client.emotes.list}\`${prefix}djs-v12-85\` <:blue_arrow:810832471175462932> كود يوريك الفويس اونلاين بروم صوتي
        ${client.emotes.list}\`${prefix}djs-v12-86\` <:blue_arrow:810832471175462932> كود يظهرلك عدد البوتات بروم صوتي
        ${client.emotes.list}\`${prefix}djs-v12-87\` <:blue_arrow:810832471175462932> كود يظهر ليك اعضاء السيرفر بروم صوتي
        ${client.emotes.list}\`${prefix}djs-v12-88\` <:blue_arrow:810832471175462932> كود يظهر ليك رولات السيرفر بروم صوتي
        ${client.emotes.list}\`${prefix}djs-v12-89\` <:blue_arrow:810832471175462932> كود يضهر ليك عدد رومات السيرفر بروم صوتي
        ${client.emotes.list}\`${prefix}djs-v12-90\` <:blue_arrow:810832471175462932> كود معلومات المبرمج**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-91\` <:blue_arrow:810832471175462932> كود اي شي ينرسل بخاص البوت يجي ليك
        ${client.emotes.list}\`${prefix}djs-v12-92\` <:blue_arrow:810832471175462932> كود معدل الدكاء
        ${client.emotes.list}\`${prefix}djs-v12-93\` <:blue_arrow:810832471175462932> كود أذا واحد سوى بوست البوت يشكره
        ${client.emotes.list}\`${prefix}djs-v12-94\` <:blue_arrow:810832471175462932> كود نقاط زي بروبوت
        ${client.emotes.list}\`${prefix}djs-v12-95\` <:blue_arrow:810832471175462932> كود نيترو عشوائي
        ${client.emotes.list}\`${prefix}djs-v12-96\` <:blue_arrow:810832471175462932> كود فعل نفسك بسيط
        ${client.emotes.list}\`${prefix}djs-v12-97\` <:blue_arrow:810832471175462932> Not Ex
        ${client.emotes.list}\`${prefix}djs-v12-98\` <:blue_arrow:810832471175462932> كود تيمب شانل أسطوري بس بدون أمر زي البرو بوت
        ${client.emotes.list}\`${prefix}djs-v12-99\` <:blue_arrow:810832471175462932> Not Ex
        ${client.emotes.list}\`${prefix}djs-v12-100\` <:blue_arrow:810832471175462932> كود يعرضلك شارات العضو**`,
        `**
        ${client.emotes.list}\`${prefix}djs-v12-101\` <:blue_arrow:810832471175462932> كود يكبرلك الكلام
        ${client.emotes.list}\`${prefix}djs-v12-102\` <:blue_arrow:810832471175462932> كود قاءمة الوان
        ${client.emotes.list}\`${prefix}djs-v12-103\` <:blue_arrow:810832471175462932> كود رسالة كل فتره
        ${client.emotes.list}\`${prefix}djs-v12-104\` <:blue_arrow:810832471175462932> كود لو حد خش السرفر ياخد نيك نيم
        ${client.emotes.list}\`${prefix}djs-v12-105\` <:blue_arrow:810832471175462932> كود اذا اشتغل البوت يرسل رسالة بشات معين
        ${client.emotes.list}\`${prefix}djs-v12-106\` <:blue_arrow:810832471175462932> كود ازا البوت دخل سيرفر بعمل روم و يبعت فيها رساله
        ${client.emotes.list}\`${prefix}djs-v12-107\` <:blue_arrow:810832471175462932> **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setAuthor(
          "Discord.js V12",
          "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
        )
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1])
        .setTimestamp();
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);
      message.lineReply(embed2).then(m => {
        m.edit({ embed: embed }).then(msg => {
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
                "Discord.js V12",
                "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
                "Discord.js V12",
                "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
              );
              embed.setDescription(pages[page - 1]);
              embed.setFooter(`Page ${page} / ${pages.length}`);
              embed.setTimestamp();
              msg.edit({ embed: embed });
              r.users.remove(user);
            });
          });
        });
      });
    } else if (lang2 == "english") {
      let pages = [
        `**
            ${client.emotes.list}\`${prefix}djs-v12-1\` <:blue_arrow:810832471175462932> clear code
            ${client.emotes.list}\`${prefix}djs-v12-2\` <:blue_arrow:810832471175462932> role code
            ${client.emotes.list}\`${prefix}djs-v12-3\` <:blue_arrow:810832471175462932> antitokens code
            ${client.emotes.list}\`${prefix}djs-v12-4\` <:blue_arrow:810832471175462932> ban code
            ${client.emotes.list}\`${prefix}djs-v12-5\` <:blue_arrow:810832471175462932> kick code
            ${client.emotes.list}\`${prefix}djs-v12-6\` <:blue_arrow:810832471175462932> mute code
            ${client.emotes.list}\`${prefix}djs-v12-7\` <:blue_arrow:810832471175462932> lock & unlock code
            ${client.emotes.list}\`${prefix}djs-v12-8\` <:blue_arrow:810832471175462932> rename channel code
            ${client.emotes.list}\`${prefix}djs-v12-9\` <:blue_arrow:810832471175462932> super unmute code
            ${client.emotes.list}\`${prefix}djs-v12-10\` <:blue_arrow:810832471175462932> Not Ex**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-11\` <:blue_arrow:810832471175462932> anti links code
            ${client.emotes.list}\`${prefix}djs-v12-12\` <:blue_arrow:810832471175462932> unban code
            ${client.emotes.list}\`${prefix}djs-v12-13\` <:blue_arrow:810832471175462932> antibots code
            ${client.emotes.list}\`${prefix}djs-v12-14\` <:blue_arrow:810832471175462932> Create Category code
            ${client.emotes.list}\`${prefix}djs-v12-15\` <:blue_arrow:810832471175462932> Hide and Show rooms code
            ${client.emotes.list}\`${prefix}djs-v12-16\` <:blue_arrow:810832471175462932> Eval code
            ${client.emotes.list}\`${prefix}djs-v12-17\` <:blue_arrow:810832471175462932> Anti-spam Code
            ${client.emotes.list}\`${prefix}djs-v12-18\` <:blue_arrow:810832471175462932> Anti Discord Invites
            ${client.emotes.list}\`${prefix}djs-v12-19\` <:blue_arrow:810832471175462932> Anti Swer Code
            ${client.emotes.list}\`${prefix}djs-v12-20\` <:blue_arrow:810832471175462932> Create a Voice Channel With Command**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-21\` <:blue_arrow:810832471175462932> Create a Text Channel With a Command
            ${client.emotes.list}\`${prefix}djs-v12-22\` <:blue_arrow:810832471175462932> delete all channels and roles
            ${client.emotes.list}\`${prefix}djs-v12-23\` <:blue_arrow:810832471175462932> Warn code
            ${client.emotes.list}\`${prefix}djs-v12-24\` <:blue_arrow:810832471175462932> Blacklist code
            ${client.emotes.list}\`${prefix}djs-v12-25\` <:blue_arrow:810832471175462932> Prefix changer code
            ${client.emotes.list}\`${prefix}djs-v12-26\` <:blue_arrow:810832471175462932> Language changer code
            ${client.emotes.list}\`${prefix}djs-v12-27\` <:blue_arrow:810832471175462932> A code that gives you the servers info to the bot to enter into
            ${client.emotes.list}\`${prefix}djs-v12-28\` <:blue_arrow:810832471175462932> Code gives you Islamic supplications
            ${client.emotes.list}\`${prefix}djs-v12-29\` <:blue_arrow:810832471175462932> Random Email Code
            ${client.emotes.list}\`${prefix}djs-v12-30\` <:blue_arrow:810832471175462932> endo help code**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-31\` <:blue_arrow:810832471175462932> ultra color code maker
            ${client.emotes.list}\`${prefix}djs-v12-32\` <:blue_arrow:810832471175462932> random num code
            ${client.emotes.list}\`${prefix}djs-v12-33\` <:blue_arrow:810832471175462932> Code making an automatic response with a command and deleting it with a command
            ${client.emotes.list}\`${prefix}djs-v12-34\` <:blue_arrow:810832471175462932> Color Code Maker
            ${client.emotes.list}\`${prefix}djs-v12-35\` <:blue_arrow:810832471175462932> embed say code
            ${client.emotes.list}\`${prefix}djs-v12-36\` <:blue_arrow:810832471175462932> say code
            ${client.emotes.list}\`${prefix}djs-v12-37\` <:blue_arrow:810832471175462932> Simple log code
            ${client.emotes.list}\`${prefix}djs-v12-38\` <:blue_arrow:810832471175462932> Ban code with Reasons
            ${client.emotes.list}\`${prefix}djs-v12-39\` <:blue_arrow:810832471175462932> code Stop The Bot With a cmd
            ${client.emotes.list}\`${prefix}djs-v12-40\` <:blue_arrow:810832471175462932> Code Restarts The Bot**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-41\` <:blue_arrow:810832471175462932> ultra add emoji code
            ${client.emotes.list}\`${prefix}djs-v12-42\` <:blue_arrow:810832471175462932> slowmood changer code
            ${client.emotes.list}\`${prefix}djs-v12-43\` <:blue_arrow:810832471175462932> temp role code
            ${client.emotes.list}\`${prefix}djs-v12-44\` <:blue_arrow:810832471175462932> color list code
            ${client.emotes.list}\`${prefix}djs-v12-45\` <:blue_arrow:810832471175462932> play command
            ${client.emotes.list}\`${prefix}djs-v12-46\` <:blue_arrow:810832471175462932> if sameone mention sameone the bot will delete it for now one know who mention
            ${client.emotes.list}\`${prefix}djs-v12-47\` <:blue_arrow:810832471175462932> auto responce with a nice trik
            ${client.emotes.list}\`${prefix}djs-v12-48\` <:blue_arrow:810832471175462932> avatar code
            ${client.emotes.list}\`${prefix}djs-v12-49\` <:blue_arrow:810832471175462932> user code
            ${client.emotes.list}\`${prefix}djs-v12-50\` <:blue_arrow:810832471175462932> ping code**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-51\` <:blue_arrow:810832471175462932> auto line code
            ${client.emotes.list}\`${prefix}djs-v12-52\` <:blue_arrow:810832471175462932> auto reacte code
            ${client.emotes.list}\`${prefix}djs-v12-53\` <:blue_arrow:810832471175462932> suggest code
            ${client.emotes.list}\`${prefix}djs-v12-54\` <:blue_arrow:810832471175462932> server info code
            ${client.emotes.list}\`${prefix}djs-v12-55\` <:blue_arrow:810832471175462932> top code
            ${client.emotes.list}\`${prefix}djs-v12-56\` <:blue_arrow:810832471175462932> credits code
            ${client.emotes.list}\`${prefix}djs-v12-57\` <:blue_arrow:810832471175462932> dm help code
            ${client.emotes.list}\`${prefix}djs-v12-58\` <:blue_arrow:810832471175462932> super sumbite code
            ${client.emotes.list}\`${prefix}djs-v12-59\` <:blue_arrow:810832471175462932> auto change status code
            ${client.emotes.list}\`${prefix}djs-v12-60\` <:blue_arrow:810832471175462932> add emoji code**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-61\` <:blue_arrow:810832471175462932> super auto recpose code
            ${client.emotes.list}\`${prefix}djs-v12-62\` <:blue_arrow:810832471175462932> randmon role color code
            ${client.emotes.list}\`${prefix}djs-v12-63\` <:blue_arrow:810832471175462932> fake offline status hunter
            ${client.emotes.list}\`${prefix}djs-v12-64\` <:blue_arrow:810832471175462932> user id code
            ${client.emotes.list}\`${prefix}djs-v12-65\` <:blue_arrow:810832471175462932> bot info code
            ${client.emotes.list}\`${prefix}djs-v12-66\` <:blue_arrow:810832471175462932> music code
            ${client.emotes.list}\`${prefix}djs-v12-67\` <:blue_arrow:810832471175462932> super bot info code 2
            ${client.emotes.list}\`${prefix}djs-v12-68\` <:blue_arrow:810832471175462932> super ticket bot
            ${client.emotes.list}\`${prefix}djs-v12-69\` <:blue_arrow:810832471175462932> embed say code
            ${client.emotes.list}\`${prefix}djs-v12-70\` <:blue_arrow:810832471175462932> Not Ex**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-71\` <:blue_arrow:810832471175462932> probot profile code
            ${client.emotes.list}\`${prefix}djs-v12-72\` <:blue_arrow:810832471175462932> pages help code
            ${client.emotes.list}\`${prefix}djs-v12-73\` <:blue_arrow:810832471175462932> vote code
            ${client.emotes.list}\`${prefix}djs-v12-74\` <:blue_arrow:810832471175462932> kill code
            ${client.emotes.list}\`${prefix}djs-v12-75\` <:blue_arrow:810832471175462932> tax code
            ${client.emotes.list}\`${prefix}djs-v12-76\` <:blue_arrow:810832471175462932> probot server code
            ${client.emotes.list}\`${prefix}djs-v12-77\` <:blue_arrow:810832471175462932> probot user code
            ${client.emotes.list}\`${prefix}djs-v12-78\` <:blue_arrow:810832471175462932> auto get msg from dm bot to channel
            ${client.emotes.list}\`${prefix}djs-v12-79\` <:blue_arrow:810832471175462932> server info code with server link
            ${client.emotes.list}\`${prefix}djs-v12-80\` <:blue_arrow:810832471175462932> delete game code**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-81\` <:blue_arrow:810832471175462932> trash code
            ${client.emotes.list}\`${prefix}djs-v12-82\` <:blue_arrow:810832471175462932> super help code
            ${client.emotes.list}\`${prefix}djs-v12-83\` <:blue_arrow:810832471175462932> simple ar user code
            ${client.emotes.list}\`${prefix}djs-v12-84\` <:blue_arrow:810832471175462932> Roles Code Like Probot
            ${client.emotes.list}\`${prefix}djs-v12-85\` <:blue_arrow:810832471175462932> A code that showing you the server voice online number with a voice room
            ${client.emotes.list}\`${prefix}djs-v12-86\` <:blue_arrow:810832471175462932> A code that showing you the server bots number with a voice room
            ${client.emotes.list}\`${prefix}djs-v12-87\` <:blue_arrow:810832471175462932> A code that showing you the server members number with a voice room
            ${client.emotes.list}\`${prefix}djs-v12-88\` <:blue_arrow:810832471175462932> A code showing you the server roles number with voice room
            ${client.emotes.list}\`${prefix}djs-v12-89\` <:blue_arrow:810832471175462932> A code showing you the server rooms number with voice room
            ${client.emotes.list}\`${prefix}djs-v12-90\` <:blue_arrow:810832471175462932> Devloper info code**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-91\` <:blue_arrow:810832471175462932> if someone dm the bot the message will be sent to you code
            ${client.emotes.list}\`${prefix}djs-v12-92\` <:blue_arrow:810832471175462932> IQ code
            ${client.emotes.list}\`${prefix}djs-v12-93\` <:blue_arrow:810832471175462932> Code if someone boosts the server the bot thank him
            ${client.emotes.list}\`${prefix}djs-v12-94\` <:blue_arrow:810832471175462932> XP code like probot
            ${client.emotes.list}\`${prefix}djs-v12-95\` <:blue_arrow:810832471175462932> Random nitro code
            ${client.emotes.list}\`${prefix}djs-v12-96\` <:blue_arrow:810832471175462932> Prove Your Self code
            ${client.emotes.list}\`${prefix}djs-v12-97\` <:blue_arrow:810832471175462932> Not Ex
            ${client.emotes.list}\`${prefix}djs-v12-98\` <:blue_arrow:810832471175462932> Temp channel code with no cmd
            ${client.emotes.list}\`${prefix}djs-v12-99\` <:blue_arrow:810832471175462932> prove your self v2
            ${client.emotes.list}\`${prefix}djs-v12-100\` <:blue_arrow:810832471175462932> user badges code**`,
        `**
            ${client.emotes.list}\`${prefix}djs-v12-101\` <:blue_arrow:810832471175462932> make the text bigger
            ${client.emotes.list}\`${prefix}djs-v12-102\` <:blue_arrow:810832471175462932> colors list code
            ${client.emotes.list}\`${prefix}djs-v12-103\` <:blue_arrow:810832471175462932> message with time
            ${client.emotes.list}\`${prefix}djs-v12-104\` <:blue_arrow:810832471175462932> if sameone joind the server he will takes a nickname
            ${client.emotes.list}\`${prefix}djs-v12-105\` <:blue_arrow:810832471175462932> if the bot is online he will send a message to a channel you detect
            ${client.emotes.list}\`${prefix}djs-v12-106\` <:blue_arrow:810832471175462932> if the bot joind a new server he will create a room a send message inside
            ${client.emotes.list}\`${prefix}djs-v12-107\` <:blue_arrow:810832471175462932> **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setAuthor(
          "Discord.js V12",
          "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
        )
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1])
        .setTimestamp();
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} Processing data ...**`);

      message.lineReply(embed2).then(m => {
        m.edit({ embed: embed}).then(msg => {
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
                "Discord.js V12",
                "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
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
                "Discord.js V12",
                "https://cdn.discordapp.com/attachments/805068312366940160/809833245092085831/index.png"
              );
              embed.setDescription(pages[page - 1]);
              embed.setFooter(`Page ${page} / ${pages.length}`);
              embed.setTimestamp();
              msg.edit({ embed: embed });
              r.users.remove(user);
            });
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
