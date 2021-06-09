const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "projects",
  cooldown: 7,
  aliases: [""],
  run: async (client, message, args) => {
    var devs = client.config.devs;
    var lang2 = await db.fetch(`langguild_${message.guild.id}`);
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = client.config.prefix;
    if (lang2 == "arabic") {
      let pages = [
        `**
    ${client.emotes.list} | [Giveaway Bot V2](https://replit.com/@NIR0/Super-Ultra-Giveaway-Bot-ByNIR0)
    ${client.emotes.list} | [Games Bot](https://replit.com/@NIR0/S-Games-Bot)
    ${client.emotes.list} | [ticket bot with rection](https://replit.com/@NIR0/Ticket-Bot-V2)
    ${client.emotes.list} | [sumbit bot](https://replit.com/@NIR0/Super-Submit-Bot-By-NIR0)
    ${client.emotes.list} | [rection role](https://replit.com/@NIR0/ReactRole-By-NIR0)
    ${client.emotes.list} | [rank bot like mee6](https://replit.com/@NIR0/Super-Mee6-Rank-By-NIRO)
    ${client.emotes.list} | [music bot](https://replit.com/@NIR0/Ultra-Music-Bot-By-NIR0-1)
    ${client.emotes.list} | [Silling Accounts Bot](https://replit.com/@NIR0/Bot-selling-accounts-By-NIR0)
    ${client.emotes.list} | [System bot](https://github.com/DevelopersSupportAR/NSystem.git)
    ${client.emotes.list} | [bot like probot](https://github.com/NIR0-V/Super-PrpBot-nProject.git)
        **`,
        `**
    ${client.emotes.list} | [temp text and voice channels](https://github.com/DevelopersSupportAR/Temp-Cahnnels.git)
    ${client.emotes.list} | [welcome bot](https://replit.com/@NIR0/Welcome-Bot-By-NIR0)
    ${client.emotes.list} | [auto server creator bot](https://replit.com/@NIR0/Super-Server-Creatore-Bot-By-NIR0)
    ${client.emotes.list} | [Captha Bot](https://replit.com/@NIR0/S-Captcha)
    ${client.emotes.list} | [Youtube Notifaction](https://replit.com/@NIR0/khara-Youtube-Notifactions)
    ${client.emotes.list} | [Image Generator](https://github.com/DevelopersSupportAR/ImgGenerator.git)
    ${client.emotes.list} | [Invite Manager](https://github.com/DevelopersSupportAR/Arguments-.git)
    **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(
          "https://cdn.discordapp.com/attachments/805068312366940160/809845253653659728/ezgif.com-resize.jpg"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809842221423525941/ezgif-2-d3396878136d.jpg"
        )
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} جاري معالجة البيانات...**`);

      message.channel.send(embed2).then(m => {
        m.delete();
      });
      message.channel.send(embed).then(msg => {
        msg.react("<:red_arrow:835239081331654737>").then(r => {
          msg.react("<:blue_arrow:810832471175462932>");

          const backwardsFilter = (reaction, user) =>
            reaction.emoji.id === "835239081331654737" &&
            user.id === message.author.id;
          const forwardsFilter = (reaction, user) =>
            reaction.emoji.id === "810832471175462932" &&
            user.id === message.author.id;

          const backwards = msg.createReactionCollector(backwardsFilter, {
            time: 2000000
          });
          const forwards = msg.createReactionCollector(forwardsFilter, {
            time: 2000000
          });

          backwards.on("collect", r => {
            if (page === 1) return;
            let user = message.author.id;
            page--;
            embed.setTitle("**Projects**");
            embed.setDescription(pages[page - 1]);
            embed.setImage(
              "https://cdn.discordapp.com/attachments/805068312366940160/809845253653659728/ezgif.com-resize.jpg"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809842221423525941/ezgif-2-d3396878136d.jpg"
            );
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;

            page++;
            embed.setDescription(pages[page - 1]);
            embed.setImage(
              "https://cdn.discordapp.com/attachments/805068312366940160/809845253653659728/ezgif.com-resize.jpg"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809842221423525941/ezgif-2-d3396878136d.jpg"
            );
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
        });
      });
    } else if (lang2 == "english") {
      let pages = [
        `**
    ${client.emotes.list} | [Giveaway Bot V2](https://replit.com/@NIR0/Super-Ultra-Giveaway-Bot-ByNIR0)
    ${client.emotes.list} | [Games Bot](https://replit.com/@NIR0/S-Games-Bot)
    ${client.emotes.list} | [ticket bot with rection](https://replit.com/@NIR0/Ticket-Bot-V2)
    ${client.emotes.list} | [sumbit bot](https://replit.com/@NIR0/Super-Submit-Bot-By-NIR0)
    ${client.emotes.list} | [rection role](https://replit.com/@NIR0/ReactRole-By-NIR0)
    ${client.emotes.list} | [rank bot like mee6](https://replit.com/@NIR0/Super-Mee6-Rank-By-NIRO)
    ${client.emotes.list} | [music bot](https://replit.com/@NIR0/Ultra-Music-Bot-By-NIR0-1)
    ${client.emotes.list} | [Silling Accounts Bot](https://replit.com/@NIR0/Bot-selling-accounts-By-NIR0)
    ${client.emotes.list} | [System bot](https://github.com/DevelopersSupportAR/NSystem.git)
    ${client.emotes.list} | [bot like probot](https://github.com/NIR0-V/Super-PrpBot-nProject.git)
        **`,
        `**
    ${client.emotes.list} | [temp text and voice channels](https://github.com/DevelopersSupportAR/Temp-Cahnnels.git)
    ${client.emotes.list} | [welcome bot](https://replit.com/@NIR0/Welcome-Bot-By-NIR0)
    ${client.emotes.list} | [auto server creator bot](https://replit.com/@NIR0/Super-Server-Creatore-Bot-By-NIR0)
    ${client.emotes.list} | [Captha Bot](https://replit.com/@NIR0/S-Captcha)
    ${client.emotes.list} | [Youtube Notifaction](https://replit.com/@NIR0/khara-Youtube-Notifactions)
    ${client.emotes.list} | [Image Generator](https://github.com/DevelopersSupportAR/ImgGenerator.git)
    ${client.emotes.list} | [Invite Manager](https://github.com/DevelopersSupportAR/Arguments-.git)
    **`
      ];
      let page = 1;

      let embed = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(
          "https://cdn.discordapp.com/attachments/805068312366940160/809845253653659728/ezgif.com-resize.jpg"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/805068312366940160/809842221423525941/ezgif-2-d3396878136d.jpg"
        )
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1]);
      let embed2 = new MessageEmbed()
        .setColor("#2F3136")
        .setDescription(`**${client.emotes.loding} Processing data ...**`);

      message.channel.send(embed2).then(m => {
        m.delete();
      });
      message.channel.send(embed).then(msg => {
        msg.react("<:red_arrow:835239081331654737>").then(r => {
          msg.react("<:blue_arrow:810832471175462932>");

          const backwardsFilter = (reaction, user) =>
            reaction.emoji.id === "835239081331654737" &&
            user.id === message.author.id;
          const forwardsFilter = (reaction, user) =>
            reaction.emoji.id === "810832471175462932" &&
            user.id === message.author.id;

          const backwards = msg.createReactionCollector(backwardsFilter, {
            time: 2000000
          });
          const forwards = msg.createReactionCollector(forwardsFilter, {
            time: 2000000
          });

          backwards.on("collect", r => {
            if (page === 1) return;
            let user = message.author.id;
            page--;
            embed.setTitle("**Projects**");
            embed.setDescription(pages[page - 1]);
            embed.setImage(
              "https://cdn.discordapp.com/attachments/805068312366940160/809845253653659728/ezgif.com-resize.jpg"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809842221423525941/ezgif-2-d3396878136d.jpg"
            );
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
          forwards.on("collect", r => {
            if (page === pages.length) return;
            let user = message.author.id;

            page++;
            embed.setDescription(pages[page - 1]);
            embed.setImage(
              "https://cdn.discordapp.com/attachments/805068312366940160/809845253653659728/ezgif.com-resize.jpg"
            );
            embed.setThumbnail(
              "https://cdn.discordapp.com/attachments/805068312366940160/809842221423525941/ezgif-2-d3396878136d.jpg"
            );
            embed.setFooter(`Page ${page} / ${pages.length}`);
            msg.edit({ embed: embed });
            r.users.remove(user);
          });
        });
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
