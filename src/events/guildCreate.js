const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = async function(client, guild) {
  await db.set(`langguild_${guild.id}`, "arabic");
  await db.set(`prefix_${guild.id}`, "/");
  var channel = client.channels.cache.find(c => c.id === "812817973802827806");
  var join = new MessageEmbed()
    .setColor("#2F3136")
    .setTitle("The Bot Join New Server")
    .setDescription(
      `**Server Name : ${guild.name}
   Server ID: ${guild.id}
   Server Members : ${guild.memberCount}
   Time Created: ${guild.createdAt.toLocaleString()}
   Server Region ${guild.region}
   Server Boosts : ${guild.premiumSubscriptionCount}
  **`
    )
    .setTimestamp()
    .setThumbnail(guild.iconURL());
  channel.send(join);
};
