const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "admin.bot",
  cooldown: 7,
  aliases: [""],
  run: (client, message, args) => {
    const embed = new MessageEmbed()
      .setColor("00e8ff")
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())
      .setColor("BLUE")
      .setTitle(` ${client.user.username} `)
      .addField("``servers``", ` ${client.guilds.cache.size} `, true)
      .addField("``channels``", ` ${client.channels.cache.size} `, true)
      .addField("``Users``", ` ${client.users.cache.size} `, true)
      .addField("``My Name``", ` ${client.user.tag}`, true)
      .addField("``My ID``", ` ${client.user.id} `, true)
      .addField("``My Prefix``", ` ${client.config.prefix} `, true);
    message.channel.send(embed); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
