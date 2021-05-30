const { MessageEmbed } = require("discord.js");
const check = require("is-url");
const fetch = require("node-fetch");
const db = require("quick.db");

module.exports = {
  name: "list",
  description: "",
  cooldown: 10,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    let links = db.get("links");
    if (!links) {
      if (lang2 == "english")
        return message.channel.send(
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
        return message.channel.send(
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
    let arr = [];
    links.forEach(link => {
      if (link.author === message.author.id) arr.push(link);
    });
    if (arr.length === 0) {
      if (lang2 == "english")
        return message.channel.send(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("RED")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(
              `**${client.emotes.error} | Error: You Have Not Uptime Any Thing!.**`
            )
        );
      if (lang2 == "arabic")
        return message.channel.send(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("RED")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(
              `**${client.emotes.error} | خطأ: لم يتم رصد عمليت رفع واحده خاصه بك!.**`
            )
        );
    }
    let pog = arr.map(arr => arr.url).join("\n");
    console.log(pog);
    if (lang2 == "english")
      return message.channel
        .send(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("BLUE")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(pog)
        )
        .then(m => {
          setTimeout(() => {
            m.delete();
          }, 10000);
        });
    if (lang2 == "arabic")
      return message.channel
        .send(
          new MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setColor("BLUE")
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setDescription(pog)
        )
        .then(m => {
          setTimeout(() => {
            m.delete();
          }, 10000);
        }); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
