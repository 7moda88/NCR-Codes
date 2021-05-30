const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "set-lang",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    var devs = client.config.devs;
    var args = message.content.split(" ");
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.react(`${client.emotes.error}.`);
    await db.fetch(`langguild_${message.guild.id}`);
    if (!args[1]) {
      message.channel.send(
        new MessageEmbed()
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("RED")
          .setThumbnail(client.user.avatarURL({ dynamic: true }))
          .setDescription(
            `**${client.emotes.error} | Error: Plase Type The Language [en/ar]**`
          )
      );
    } else if (args[1] === "arabic" || args[1] === "ar") {
      message.channel.send(
        new MessageEmbed()
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("BLUE")
          .setThumbnail(client.user.avatarURL({ dynamic: true }))
          .setDescription(
            `**${client.emotes.success} | تم: لغت البوت تغيرت الى العربيه**`
          )
      );
      db.set(`langguild_${message.guild.id}`, "arabic");
    } else if (args[1] === "english" || args[1] === "en") {
      message.channel.send(
        new MessageEmbed()
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("BLUE")
          .setThumbnail(client.user.avatarURL({ dynamic: true }))
          .setDescription(
            `**${client.emotes.success} | Done: The Bot Language Has Been Changed To English**`
          )
      );
      db.set(`langguild_${message.guild.id}`, "english");
    } else {
      return message.react(`${client.emotes.error}.`);
    } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
