const { MessageEmbed, Util } = require("discord.js");
const db = require("quick.db");
const { parse } = require("twemoji-parser");

module.exports = {
        name: "emoji-add",
        cooldown: 7,
        aliases: [""],
        run: async(client, message) => {
                var niro = message;
                var devs = client.config.devs;
                var lang2 = await db.fetch(`langguild_${message.guild.id}`);
                var prefix = await db.fetch(`prefix_${message.guild.id}`);
                if (prefix == null) prefix = client.config.prefix;
                const args = niro.content.split(" ").slice(1);
                const emoji = args.join("");
                if (!emoji)
                    return niro.react(client.emotes.error)
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
      niro.react(`${client.emojis.success}`)
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0]) return;
    } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc