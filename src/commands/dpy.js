const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "dpy",
  cooldown: 7,
  aliases: [""],
  run: async (client, message) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    let genral = new MessageEmbed()
      .setColor("00e8ff")
      .setColor("00e8ff")
      .setTitle("**Discord.py Commands**")
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
      )

      .setFooter("NCR Bot")
      .setTimestamp().setDescription(`**
  ${client.emotes.python} \Discord.py\ :
  🌐 \`${prefix}dpy-general\` ▶ اكواد البايثون العامة
  🔐 \`${prefix}dpy-admin\` ▶ اكواد البايثون الخاصة بالمشرفين
          **`);
    let genral2 = new MessageEmbed()
      .setColor("00e8ff")
      .setColor("00e8ff")
      .setTitle("**Discord.py Commands**")
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
      )

      .setFooter("NCR Bot")
      .setTimestamp().setDescription(`**
  ${client.emotes.python} \Discord.py\ :
  
  🌐 \`${prefix}dpy-general\` ▶ Discord.py general Codes
  🔐 \`${prefix}dpy-admin\` ▶ Discord.py Admin Codes
          **`);
    if (lang2 == "arabic") {
      message.channel
        .send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setTitle(`**${client.emotes.loding} جاري معالجة البيانات...**`)
        )
        .then(m => {
          setTimeout(() => {
            m.delete();
            m.channel.send(genral);
          }, 1000);
        });
    } else if (lang2 == "english") {
      message.channel
        .send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setTitle(`**${client.emotes.loding} Processing data...**`)
        )
        .then(m => {
          setTimeout(() => {
            m.delete();
            m.channel.send(genral2);
          }, 1000);
        });
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
