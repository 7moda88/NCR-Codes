const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { parse } = require("twemoji-parser");

module.exports = {
  name: "emoji-add",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    var niro = message;
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    const args = niro.content.split(" ").slice(1);
    if (!niro.member.hasPermission("MANAGE_EMOJIS")) {
      return niro.channel.send(
        "**`You dont have permission to add emojis 😐`**"
      );
    }

    if (!niro.guild.me.hasPermission("MANAGE_EMOJIS")) {
      return niro.channel.send("**`I need permission to add emojis 😐`**");
    }

    const emoji = args.join("");
    if (!emoji)
      return niro.channel.send("**`Please type the emoji to add 😃`**");
    let the_typed_emoji = Util.parseEmoji(emoji);
    if (the_typed_emoji.id) {
      const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
        the_typed_emoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");

      niro.guild.emojis.create(
        `${link}`,
        `${name || `${the_typed_emoji.name}`}`
      );
      const done = new MessageEmbed()
        .setTitle("emoji has been added")
        .setColor("RED")
        .setDescription(`add emojie ${name || `${the_typed_emoji.name}`}`);
      return niro.channel.send(done);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0]) return niro.channel.send("invalied emojiev");
      niro.channel.send("unknown 🤷");
    } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
