const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "help",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    let genral = new MessageEmbed()
      .setColor("00e8ff")
      .setDescription(
      `**[Website](https://ncr-codes.glitch.me)**`
      )
      .setTitle("**Commands List!.**")
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
      )
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .addField(`**Codes** ${client.emotes.vscodes}`, "_ _", false)
      .addField(
        `${client.emotes.nodejs} | ${prefix}djs`,
        "اكواد الجافا سكربت",
        true
      )
      .addField(
        `${client.emotes.python} | ${prefix}dpy`,
        "اكواد ال بايثون",
        true
      )
      .addField(
        `${client.emotes.bdfd} | ${prefix}bdfd`,
        "اكواد ال بوت دزاين فور دسكورد",
        true
      )
      .addField(
        `${client.emotes.tag} | ${prefix}projects`,
        "مشاريع جاهزه",
        true
      )
      .addField(
        `${client.emotes.search} | ${prefix}search-djs`,
        "للبحث في القاموس الخاص ب discord.js",
        true
      )
      .addField(
        `${client.emotes.CMD} | ${prefix}update`,
        "لتحديث الاكواد من 11 ل 12",
        true
      )
      .addField(`<:script:842093972418592778> | ${prefix}tutorials`, "لتعلم الغات js", true)
      .addField(`**Uptime** ${client.emotes.uptime}`, "_ _", false)
      .addField(
        `${client.emotes.uptima}| ${prefix}uptime`,
        "لرفع عنواين Express URL 24/7",
        true
      )
      .addField(
        `${client.emotes.check_list}| ${prefix}list`,
        "قامة بعناوين URL المرفوعه",
        true
      )
      .addField(
        `${client.emotes.trach_can}| ${prefix}delete`,
        "مسح عناوين URL من قائمتك",
        true
      )
      .addField(`**Other** ${client.emotes.List}`, "_ _", false)
      .addField(
        `${client.emotes.support} | ${prefix}support`,
        "لأضافة البوت و الحصول على الدعم الفني للبوت",
        true
      )
      .addField(`:ping_pong: | ${prefix}ping`, "لمعرفت بنج البوت", true)
      .addField(`🗃 | ${prefix}upload`, "لأضافة كود في البوت", true)
      .addField(`**Admins** ${client.emotes.hammeree}`, "_ _", false)
      .addField(
        `:star_struck: | ${prefix}emoji-add`,
        "لأضفة ايموجي للسيرفر",
        true
      )
      .addField(`:bricks: | ${prefix}set-prefix`, "لتغير برفكس البوت", true)
      .addField(`:scroll: | ${prefix}set-lang`, "لتغير لغة البوت", true);

    let genral2 = new MessageEmbed()
      .setColor("00e8ff")
      .setTitle("**Commands List!.**")
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands`
      )
      .setThumbnail(
        message.author.avatarURL({
          format: "gif",
          format: "png",
          dynamic: true,
          size: 1024
        })
      )
      .addField(`**Codes** ${client.emotes.vscodes}`, "_ _", false)
      .addField(
        `${client.emotes.nodejs} | ${prefix}djs`,
        "DiscordJs Codes",
        true
      )
      .addField(`${client.emotes.python} | ${prefix}dpy`, "Python Codes", true)
      .addField(`${client.emotes.bdfd} | ${prefix}bdfd`, "BDFD Codes", true)
      .addField(
        `${client.emotes.tag} | ${prefix}projects`,
        "Discord Bots Projects",
        true
      )
      .addField(
        `${client.emotes.search} | ${prefix}search-djs`,
        "Seacrh In Discord.js.org Guild",
        true
      )
      .addField(
        `${client.emotes.CMD} | ${prefix}update`,
        "Update Codes From v11 to v12",
        true
      )
      .addField(
        `<:script:842093972418592778> | ${prefix}tutorials`,
        "To Learn The Javascript/Discord.js",
        true
      )
      .addField(`**Uptime** ${client.emotes.uptime}`, "_ _", false)
      .addField(
        `${client.emotes.uptima}| ${prefix}uptime`,
        "Uptime Express Urls",
        true
      )
      .addField(
        `${client.emotes.check_list}| ${prefix}list`,
        "List Of Your Uptimeed Urls",
        true
      )
      .addField(
        `${client.emotes.trach_can}| ${prefix}delete`,
        "Delete Urls From Your List",
        true
      )
      .addField(`**Other** ${client.emotes.List}`, "_ _", false)
      .addField(
        `${client.emotes.support} | ${prefix}support`,
        "Get Bot Support And Invite The Bot",
        true
      )
      .addField(`:ping_pong: | ${prefix}ping`, "Get Bot Ping", true)
      .addField(`🗃 | ${prefix}upload`, "To Add Codes To Bot", true)
      .addField(`**Admins** ${client.emotes.hammeree}`, "_ _", false)
      .addField(`:star_struck: | ${prefix}emoji-add`, "Add Emojis", true)
      .addField(`:bricks: | ${prefix}set-prefix`, "Change Prefix", true)
      .addField(`:scroll: | ${prefix}set-lang`, "Change Lang", true);
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
