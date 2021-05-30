const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const fetch = require("node-fetch");

module.exports = {
  name: "search-djs",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    const args = message.conetnt.split(" ");
    const search = args[1];
    if (!search)
      return message.channel.send({
        embed: {
          color: 0x4d5e94,
          description: ":x: **What are you searching?**"
        }
      });
    let version = args[2];
    if (!version) version = `stable`;

    fetch(
      `https://djsdocs.sorta.moe/v2/embed?src=${encodeURIComponent(
        version
      )}&q=${encodeURIComponent(search)}`
    )
      .then(res => res.json())
      .then(body => {
        if (body === null)
          return message.channel.send({
            embed: {
              color: "00e8ff",
              author: {
                name: "Discord.js Docs (master)",
                url: "https://discord.js.org/#/docs/main/master",
                icon_url: "https://discord.js.org/favicon.ico"
              },
              title: "Search results:",
              description: ":x: **No results.**"
            }
          });
        body.color = "00e8ff";
        message.channel.send({ embed: body });
      })
      .catch(e => {
        message.channel.send({
          embed: {
            color: "00e8ff",
            author: {
              name: "Discord.js Docs (master)",
              url: "https://discord.js.org/#/docs/main/master",
              icon_url: "https://discord.js.org/favicon.ico"
            },
            title: "Search results:",
            description: "No results."
          }
        });
      }); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
