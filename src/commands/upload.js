const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "upload",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    var args = message.content.split(" ");
    if (!args[1]) {
      if (lang2 == "english") {
        message.channel.send(
          new MessageEmbed()
            .setTitle(`ERROR ${client.emotes.error}`)
            .setColor("RED")
            .setDescription(" **Please Type The Code Before The Command!** ")
            .setFooter(`Request By: ${message.author.tag}`)
            .setTimestamp()
        );
      } else if (lang2 == "arabic") {
        message.channel.send(
          new MessageEmbed()
            .setTitle(`خطأ ${client.emotes.error}`)
            .setColor("RED")
            .setDescription(" **يرجى كتابت الكود بعد الأمر** ")
            .setFooter(`Request By: ${message.author.tag}`)
            .setTimestamp()
        );
      } else {
        return message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(
              `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
            )
        );
      }
      return;
    }
    if (!args[1].includes("pastebin.com")) {
      if (lang2 == "english") {
        message.channel.send(
          new MessageEmbed()
            .setTitle(`ERROR ${client.emotes.error}`)
            .setColor("RED")
            .setDescription(
              " **Please Make Sure The Code Uploaded In [Pastebin](https://pastebin.com/)! ** "
            )
            .setFooter(`Request By: ${message.author.tag}`)
            .setTimestamp()
        );
      } else if (lang2 == "arabic") {
        message.channel.send(
          new MessageEmbed()
            .setTitle(`خطأ ${client.emotes.error}`)
            .setColor("RED")
            .setDescription(
              " **يرجى التأكد ان الكود مرفوع على [pastebin](https://pastebin.com/)** "
            )
            .setFooter(`Request By: ${message.author.tag}`)
            .setTimestamp()
        );
      } else {
        return message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(
              `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
            )
        );
      }
      return;
    } else {
      const channel = client.channels.cache.find(
        c => c.id === "814818682089242644"
      );
      channel.send(args + "\n By: \n" + message.author.id);
      if (lang2 == "english") {
        message.channel
          .send(
            new MessageEmbed()
              .setTitle(`Done ${client.emotes.success}`)
              .setColor("GREEN")
              .setDescription(
                " **You Code Has Been Uploaded, Plase Wait To Scan Your Code!.** "
              )
              .setFooter(`Request By: ${message.author.tag}`)
              .setTimestamp()
          )
          .then(m => m.react(client.emotes.success));
      } else if (lang2 == "arabic") {
        message.channel
          .send(
            new MessageEmbed()
              .setTitle(`تم ${client.emotes.success}`)
              .setColor("GREEN")
              .setDescription("**فع الكود الخاص بك يرجى انتظار مراجعة الكود**")
              .setFooter(`Request By: ${message.author.tag}`)
              .setTimestamp()
          )
          .then(m => m.react(client.emotes.success));
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
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
