const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "set-prefix",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    const devs = client.config.devs;
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    var args = message.content.split(" ");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.react(`${client.emotes.error}`);
    if (!args[1]) {
      return message.channel.send(
        new MessageEmbed()
          .setAuthor(`Error ${client.emotes.error}`, message.author.avatarURL())
          .setColor("RED")
          .setDescription(
            `**${client.emotes.error} | Please Type The Prefix!.**`
          )
          .setFooter(
            `Requested By: ${message.author.tag}`,
            message.author.avatarURL()
          )
          .setTimestamp()
      );
    }
    await db.set(`prefix_${message.guild.id}`, args[1]);
    return message.react(`${client.emotes.success}`); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
