const db = require("quick.db");

module.exports = async function (client, button) {
if (button.id == "importantMessageAR") {
    button.reply
      .send(
        `Arabic:

          > \`-\` NCR Codes :sparkles: ، أول بوت عربي تم موثق منه سيكون مفتوح المصدر:star_struck:
          
          \`-\` كيف يمكننا الحصول على المصدر ؟؟
          
          - المصدر غير مسموح به الآن فعلياَ !.
          
          \`-\` متى سيكون المصدر متاحًا؟
          
          - يعتقد فريق NCR Codes أن الوقت المناسب سيكون عندما يصل الروبوت إلى \`ألف خادم\`. نحن الآن \`627\` وأكثر من \`عشرة آلاف\` مستخدم. عليك فقط إدخال الروبوت في الخادم الخاص بك والتمتع به !.
          
          \`-\` هل سيكون المصدر بالضبط مثل الروبوت حقيقي؟
          
          - حسنًا ، هنا لدينا بعض المشاكل ، الإصدار الذي سيتم فتحه للجمهور لن يكون مثل البوت الأصلي ، حيث سيكون الدعم في الإصدار العام من حيث بعض الأكواد أو التحديثات الإضافية مثل أوامر uptime وأوامر other لن يكون متاحًا فقط للحفاظ على هيبة الروبوت ، لاكن عندما تصبح الميزة قديمة جدًا ، ستتم إضافتها إلى المصدر
          
          \`-\` هل من الممكن نشر المصدر أو إنشاء روبوت مشابه؟
          
          - بالتأكيد يمكنك نشر المصدر ، ولكن عليك أن تستأذن من فريق العمل وأيضًا يمكنك إنشاء روبوت خاص بخادمك وليس روبوتًا عامًا ، وإذا لاحظ فريق العمل أن شخصًا ما قد نشر روبوتًا شبيه لروبوتنا ، سيتم اتخاذ إجراء سريع !!.
          
          \`-\` أين سيُنشر المصدر؟
          
          - يعتقد فريق العمل أن الروبوت سيكون في \`npm package\` ، ولكن سيتم نشره في الوقت الحالي على \`github\``, true
      )
  } else if (button.id == "importantMessageEN") {
    button.reply
      .send(
        `English:

        > \`-\` NCR Codes :sparkles:, The First Arabic Verified Codes Bot Is Going To Be Open Source :star_struck:
        
        \`-\` How we can get the source ??
        
        - The source is not allowed right now actually!.
        
        \`-\` so when will the source be available?
        
        - NCR Codes team believes that the appropriate time will be when the bot reaches a \`thousand servers\`. We are now \`627\` and more than ten thousand users. You just have to enter the bot into your server and enjoy!.
        
        \`-\` Will the source be exactly like a real bot?
        
        - Well, here we have some problems, the version that will be opened to the public will not be like the original bot, as the support will be in the general version in terms of some codes or additional updates such as uptime commands and other commands will not be available only to maintain the bot's prestige, but this is not It is forbidden that when the feature becomes too old it will be added to the source
        
        \`-\` Is it possible to publish the source or create a similar bot?
        
        - Certainly you can publish the source, but you have to take the Permission from the work team and also you can create a bot that is specific to your server and not a public bot, and if the work team notices that someone has published a bot similar to ours, a quick action will be taken!!.
        
        \`-\` Where will the source be published?
        
        - The work team is thinking that the bot will be on its \`npm package\`, but for now it will be published on \`github\``, true
      )
  } else if (button.id == "info") {
    const { version: djsversion } = require("discord.js");
    const { version } = require("./package.json");
    const { utc } = require("moment");
    const os = require("os");
    const ms = require("ms");
    const core = os.cpus()[0];
    var usedMemory = os.totalmem() - os.freemem(),
      totalMemory = os.totalmem();
    var getpercentage = ((usedMemory / totalMemory) * 100).toFixed(2) + "%";
    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(0x2f3136)
      .addField("General", [
        `**❯ Client:** ${client.user.tag} (${client.user.id})`,
        `**❯ Commands:** ${client.commands.size}`,
        `**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
        `**❯ Users:** ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`,
        `**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
        `**❯ Creation Date:** ${utc(client.user.createdTimestamp).format(
          "Do MMMM YYYY HH:mm:ss"
        )}`,
        `**❯ Node.js:** ${process.version}`,
        `**❯ Version:** v${version}`,
        `**❯ Discord.js:** v${djsversion}`,
        "\u200b"
      ])
      .addField("System", [
        `**❯ Platform:** ${process.platform}`,
        `**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
        `**❯ CPU:**`,
        `\u3000 Cores: ${os.cpus().length}`,
        `\u3000 Model: ${core.model}`,
        `\u3000 Speed: ${core.speed}MHz`,
        `**❯ Memory:**`,
        `\u3000 Total: ${(
          process.memoryUsage().heapTotal /
          1024 /
          1024
        ).toFixed(2)} MB`,
        `\u3000 Used: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )} MB`
      ])
      .setTimestamp();
    button.reply.send(embed, true)
  }
};
