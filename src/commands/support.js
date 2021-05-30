const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "support",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    let genral = new MessageEmbed()
      .setColor("00e8ff")
      .setTitle("**NCR Links**")
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
      )

      .setFooter("NCR Bot")
      .setTimestamp().setDescription(`**
${client.emotes.hashtag} NCR Codes ✨ رابط سيرفر سبورت  [Click Here](https://discord.gg/r6jqjHYHEC)

${client.emotes.hashtag} NCR Codes ✨ رابط اضافة بوت  [Click Here](https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands)

${client.emotes.hashtag} NCR Codes ✨ رابط صفحة تصويت  [Click Here](https://top.gg/bot/780558820640423966)**`);
    let genral2 = new MessageEmbed()
      .setColor("00e8ff")
      .setTitle("**NCR Links**")
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=1647832432&scope=bot`
      )
      .setFooter("NCR Bot")
      .setTimestamp().setDescription(`**
${client.emotes.hashtag} NCR Codes ✨ Support Server [Click Here](https://discord.gg/r6jqjHYHEC)

${client.emotes.hashtag} NCR Codes ✨ Bot Invite  [Click Here](https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands)

${client.emotes.hashtag} NCR Codes ✨ Top.gg [Click Here](https://top.gg/bot/780558820640423966)**`);
    if (lang2 == "arabic") {
      return message.channel.send(genral);
    } else if (lang2 == "english") {
      return message.channel.send(genral2);
    } else {
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `**> \`-\` The bot does not work? it's ok just type \`${prefix}set-lang english\`\n> \`-\` البوت لا يعمل؟ يرجى كتابة \`${prefix}set-lang arabic\`**`
          )
      );
    } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
  } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
