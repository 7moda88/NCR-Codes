const { MessageEmbed } = require("discord.js");
const check = require("is-url");
const db = require("quick.db");

module.exports = {
  name: "delete",
  description: "",
  cooldown: 10,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    let link = args[0];
    let pog = db.get("links");
    if (pog) {
      let pog2 = pog.find(x => x.url.toLowerCase() === link.toLowerCase());
      if (pog2.author !== message.author.id) {
        if (lang2 == "english")
          return message.lineReply(
            new MessageEmbed()
              .setAuthor(
                message.author.tag,
                message.author.avatarURL({ dynamic: true })
              )
              .setColor("RED")
              .setThumbnail(client.user.avatarURL({ dynamic: true }))
              .setDescription(
                `**${client.emotes.error} | Error: This URL Is Not Uptimed By You!.**`
              )
          );
        if (lang2 == "arabic")
          return message.lineReply(
            new MessageEmbed()
              .setAuthor(
                message.author.tag,
                message.author.avatarURL({ dynamic: true })
              )
              .setColor("RED")
              .setThumbnail(client.user.avatarURL({ dynamic: true }))
              .setDescription(
                `**${client.emotes.error} | خطأ: هذا الرابط لم يتم رفعه بواسطتك!.**`
              )
          );
      }

      if (!pog2) {
        if (lang2 == "english")
          return message.lineReply(
            new MessageEmbed()
              .setAuthor(
                message.author.tag,
                message.author.avatarURL({ dynamic: true })
              )
              .setColor("RED")
              .setThumbnail(client.user.avatarURL({ dynamic: true }))
              .setDescription(
                `**${client.emotes.error} | Error: Thare Is Not URLs In The Database!.**`
              )
          );
        if (lang2 == "arabic")
          return message.lineReply(
            new MessageEmbed()
              .setAuthor(
                message.author.tag,
                message.author.avatarURL({ dynamic: true })
              )
              .setColor("RED")
              .setThumbnail(client.user.avatarURL({ dynamic: true }))
              .setDescription(
                `**${client.emotes.error} | خطأ: لا يوجد روابط في قواعد البيانات!.**`
              )
          );
      }

      let index = pog.indexOf(pog2);
      delete pog[index];

      var filter = pog.filter(x => {
        return x != null && x != "";
      });
      message.delete().catch(err => undefined);
      db.set("links", filter);
      if (lang2 == "arabic")
        return message.lineReply(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("BLUE")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(
              `**${client.emotes.success} | تم: حُزف الرابط من قواعد البانات!.**`
            )
        );
      if (lang2 == "english")
        return message.lineReply(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("BLUE")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(
              `**${client.emotes.success} | Done: The Url Has Been Removed From Database!.**`
            )
        );
    } else {
      if (lang2 == "english")
        return message.lineReply(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("RED")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(
              `**${client.emotes.error} | Error: The Bot Can Not Find This URL!.**`
            )
        );
      if (lang2 == "arabic")
        return message.lineReply(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("RED")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(
              `**${client.emotes.error} | خطأ: لا يمكن للبوت العثور على الرابط!.**`
            )
        );
    } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
