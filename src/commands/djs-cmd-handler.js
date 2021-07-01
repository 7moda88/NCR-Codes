const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "djs-cmd-handler",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;

    if (lang2 == "english") {
      let pages = [
        `**
      ${client.emotes.list}\`${prefix}djs-handler-1\` ▶ sourse code
      ${client.emotes.list}\`${prefix}djs-handler-2\` ▶ avatar code
      ${client.emotes.list}\`${prefix}djs-handler-3\` ▶ ping code
      ${client.emotes.list}\`${prefix}djs-handler-4\` ▶ mute code
      ${client.emotes.list}\`${prefix}djs-handler-5\` ▶ unmute code
      ${client.emotes.list}\`${prefix}djs-handler-6\` ▶ lock code
      ${client.emotes.list}\`${prefix}djs-handler-7\` ▶ unlock code
      ${client.emotes.list}\`${prefix}djs-handler-8\` ▶ server info code
      ${client.emotes.list}\`${prefix}djs-handler-9\` ▶ Kick Code
      ${client.emotes.list}\`${prefix}djs-handler-10\` ▶ Clear Code 
            **`,
        `**
      ${client.emotes.list}\`${prefix}djs-handler-11\` ▶ Credits, Daily, Trans Code 
            **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1]);

      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} Processing data ...**`);

      message.lineReply(embed2).then(m => {
        m.delete();
      });
      message.lineReply(embed).then(msg => {
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
            embed.setTitle("**discord.js Command Handler Codes**");
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;

            page++;
            embed.setTitle("**discord.js Command Handler Codes**");
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
        });
      });
    } else if (lang2 == "arabic") {
      let pages = [
        `**
      ${client.emotes.list}\`${prefix}djs-handler-1\` ▶ كود السورس مع الشرح
      ${client.emotes.list}\`${prefix}djs-handler-2\` ▶ كود افاترا
      ${client.emotes.list}\`${prefix}djs-handler-3\` ▶ كود بنج مطور
      ${client.emotes.list}\`${prefix}djs-handler-4\` ▶ كود ميوت مطور
      ${client.emotes.list}\`${prefix}djs-handler-5\` ▶ كو فك الميوت
      ${client.emotes.list}\`${prefix}djs-handler-6\` ▶ كود قفل الشات
      ${client.emotes.list}\`${prefix}djs-handler-7\` ▶ كود فتح الشات
      ${client.emotes.list}\`${prefix}djs-handler-8\` ▶ كود سيرفر
      ${client.emotes.list}\`${prefix}djs-handler-9\` ▶ كود طرد
      ${client.emotes.list}\`${prefix}djs-handler-10\` ▶ كود مسح الشات 
            **`,
        `**
             ${client.emotes.list}\`${prefix}djs-handler-11\` ▶ كود كريظت و تحويل و ديلي ملحوظه كل كود في ملف خاص به 
            **`
      ];
      let page = 1;
      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);
      message.lineReply(embed2).then(m => {
        m.delete();
      });
      message.lineReply(embed).then(msg => {
        msg.react("◀");
        msg.react("▶").then(r => {
          const backwardsFilter = (reaction, user) =>
            reaction.emoji.name === "◀" && user.id === message.author.id;
          const forwardsFilter = (reaction, user) =>
            reaction.emoji.name === "▶" && user.id === message.author.id;

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
            embed.setTitle("**discord.js Command Handler Codes**");
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;
            page++;
            embed.setTitle("**discord.js Command Handler Codes**");
            embed.setDescription(pages[page - 1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
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
