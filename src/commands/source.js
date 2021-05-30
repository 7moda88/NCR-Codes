const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "source",
  cooldown: 7,
  aliases: [""],
  run: (client, message, args) => {
    const embed = new MessageEmbed()
      .setColor("00e8ff")
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setTitle(` ${client.user.username} `)
      .setURL("https://ncr-codes.glitch.me/src")
    message.channel.send(embed);
  }
};
