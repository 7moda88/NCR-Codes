// Copyright (c) 2021 DevelopersSupportAR && NIR0
// هتشيل اي حقوق هنيكك

require("./src/website/server");
const Discord = require("discord.js");
const { Collection, Client, MessageEmbed } = require("discord.js");
const client = new Client();
const fs = require("fs");
const chalk = require("chalk");
const db = require("quick.db");
const cooldown = new Set();

client.commands = new Collection();
client.config = require("./src/config/bot");
client.emotes = require("./src/config/emojis")

fs.readdir("./src/events/", (err, files) => {
  if (err) return console.log(chalk.red.bold(err));
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./src/events/${file}`);
    let eventName = file.split(".")[0];
    console.log(
      chalk.green.bold("Loading Event: ") + chalk.red.bold(`"${eventName}"`)
    );
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir(`./src/commands/`, (err, files) => {
  if (err) return console.log(chalk.red.bold(err));
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const command = require(`./src/commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(
      chalk.green.bold("Loading Command: ") + chalk.red.bold(`"${commandName}"`)
    );
    client.commands.set(command.name, command);
  });
});
client
  .login(client.config.token)
  .then(() =>
    console.log(
      chalk.red.bold(
        "All Copyrights Go's To: </> NAAR Studio: https://discord.gg/YJ6mUdgTsc"
      )
    )
  )
  .catch(err => {
    console.log(chalk.red.bold("THE TOKEN IS INVIELD"));
    console.table({
      How_To_FIX_1: "Please Check Is The Token Is Right!",
      How_To_FIX_2: "Accounts tokens do not work!",
      How_To_FIX_3: "Check the parentheses!",
      How_To_FIX_4: "You Can Call The Support For More Information!!"
    });
  });

client.on("error", err => console.error(`[ERROR] - ${err}`));
client.on("warn", warn => console.warn(`[WARN] - ${warn}`));
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});

client.on("guildCreate", async guild => {
  await db.set(`langguild_${guild.id}`, "arabic");
  await db.set(`prefix_${guild.id}`, "/");
  var channel = client.channels.cache.find(c => c.id === "812817973802827806");
  var join = new MessageEmbed()
    .setColor("00e8ff")
    .setColor("RANDOM")
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
});

client.on("guildDelete", async server => {
  await db.delete(`prefix_${server.id}`);
  await db.delete(`langguild_${server.id}`);
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : sourse code\n${client.emotes.list} Code : \`https://pastebin.com/KVb2vuwB\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : avatar code\n${client.emotes.list} Code : \`https://pastebin.com/4FD2HagX\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : ping code\n${client.emotes.list} Code : \`https://pastebin.com/5NDrQhzA\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : mute code\n${client.emotes.list} Code : \`https://pastebin.com/Q9fPXRg5\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : unmute code\n${client.emotes.list} Code : \`https://pastebin.com/QERjbQkZ\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : chat lock code\n${client.emotes.list} Code : \`https://pastebin.com/21viYSgJ\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : unlock code\n${client.emotes.list} Code : \`https://pastebin.com/m0wTKW1D\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : Server Code\n${client.emotes.list} Code : \`https://pastebin.com/dgbPBV33\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : Kick Code\n${client.emotes.list} Code : \`https://pastebin.com/2EWb9dLx\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : Clear Code\n${client.emotes.list} Code : \`https://pastebin.com/Hq4y6VqY\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed()
              .setColor("00e8ff")
              .setDescription(
                `**${client.emotes.nodejs} Description : Credits Daily Trans Code\n${client.emotes.list} Code : \`https://pastebin.com/6gLnFgfL\`**`
              )
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : avatar code
    ${client.emotes.list} Code : \`https://pastebin.com/5rcNTzbH\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : user code
    ${client.emotes.list} Code : \`https://pastebin.com/vscg6pbV\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
//niro was here
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : ping code
    ${client.emotes.list} Code : \`https://pastebin.com/enY94VW7\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : auto line code
    ${client.emotes.list} Code : \`https://pastebin.com/cuu2Uv0i\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : auto rect code
    ${client.emotes.list} Code : \`https://pastebin.com/qNeGG1y2\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : suggest code
    ${client.emotes.list} Code : \`https://pastebin.com/mTHAcNyc\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : server info code
    ${client.emotes.list} Code : \`https://pastebin.com/K4Gafn7v\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : top code
    ${client.emotes.list} Code : \`https://pastebin.com/KLytwp7e\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : credits code
    ${client.emotes.list} Code : \`https://pastebin.com/hAm6sS36\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : dm help code
    ${client.emotes.list} Code : \`https://pastebin.com/fVJQpU5n\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : super sumbite code
    ${client.emotes.list} Code : \`https://pastebin.com/htZ3XUc1\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : auto changeing stream code
    ${client.emotes.list} Code : \`\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : add emoji code
    ${client.emotes.list} Code : \`https://pastebin.com/MrQ64e2K\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : super auto recpose code
    ${client.emotes.list} Code : \`https://pastebin.com/Zj0wC4ec\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : randmon role color code
    ${client.emotes.list} Code : \`https://pastebin.com/PBVKzkCS\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : fake offline status hunter
    ${client.emotes.list} Code : \`https://pastebin.com/UjN6wFE1\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : user id code
    ${client.emotes.list} Code : \`https://pastebin.com/9antVZbA\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : bot invite code
    ${client.emotes.list} Code : \`https://pastebin.com/8tRkLXN1\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : music code
    ${client.emotes.list} Code : \`https://pastebin.com/DNL1epya\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : super bot info code 2
    ${client.emotes.list} Code : \`https://pastebin.com/MzwGAJWx\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : super ticket bot
    ${client.emotes.list} Code : \`https://glitch.com/~second-amber-plate\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : embed say code
    ${client.emotes.list} Code : \`https://pastebin.com/hVYLh0Gg\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : not ex
    ${client.emotes.list} Code : \`https://pastebin.com/not ex\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : probot profile code
    ${client.emotes.list} Code : \`https://pastebin.com/R3i8VTLj\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : pages help code
    ${client.emotes.list} Code : \`https://pastebin.com/PKjQNwrS\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : vote code
    ${client.emotes.list} Code : \`https://pastebin.com/dt2anmSi\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : kill code
    ${client.emotes.list} Code : \`https://pastebin.com/NsyZvzkJ\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : tax code
    ${client.emotes.list} Code : \`https://pastebin.com/fAUetZQY\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : probot server code
    ${client.emotes.list} Code : \`https://pastebin.com/a3WgHFYe\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-30") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : probot user
    ${client.emotes.list} Code : \`https://pastebin.com/ARd76fmN\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-31") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : auto get msg from dm bot
    ${client.emotes.list} Code : \`https://pastebin.com/jqHv2wpz\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-32") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : server info code with server link
    ${client.emotes.list} Code : \`https://pastebin.com/Feq7dc6P\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-33") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : delete game code
    ${client.emotes.list} Code : \`https://pastebin.com/G70xF3sC\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-34") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : trash code
    ${client.emotes.list} Code : \`https://pastebin.com/AVf2rHrn\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-35") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : super help code
    ${client.emotes.list} Code : \`https://pastebin.com/tu6P5D1u\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-36") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : simple ar user
    ${client.emotes.list} Code : \`https://pastebin.com/j3EC9JCb\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-37") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : Roles Code Like Probot
    ${client.emotes.list} Code : \`https://pastebin.com/VZ4Zzy9R\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-38") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code that showing you the server voice online number with a voice room
    ${client.emotes.list} Code : \`https://pastebin.com/ba5nGzTf\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-39") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code that showing you the server bots number with a voice room
    ${client.emotes.list} Code : \`https://pastebin.com/kDWaN0eL\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-40") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code that showing you the server members number with a voice room
    ${client.emotes.list} Code : \`https://pastebin.com/1yVEqzV6\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-41") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code showing you the server roles number with voice room
    ${client.emotes.list} Code : \`https://pastebin.com/VsbmfiP8\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-42") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code showing you the server rooms number with voice room
    ${client.emotes.list} Code : \`https://pastebin.com/SB4yHHKg\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-43") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : Developer info code
    ${client.emotes.list} Code : \`https://pastebin.com/nAj8rMcm\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-44") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : (if someone dm the bot the message will be sent to you) code
    ${client.emotes.list} Code : \`https://pastebin.com/fc1489wJ\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-45") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : IQ code
    ${client.emotes.list} Code : \`https://pastebin.com/bq3D912F\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-46") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : Code if someone boosts the server the bot thank him
    ${client.emotes.list} Code : \`https://pastebin.com/qGPwPTrH\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-47") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : Points code like probot
    ${client.emotes.list} Code : \`https://pastebin.com/uJHPF661\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-48") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : Random nitro code
    ${client.emotes.list} Code : \`https://pastebin.com/H2u6Bw33\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-49") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**  ${client.emotes.nodejs} Description : Prove Your Self code
    ${client.emotes.list} Code : \`https://pastebin.com/Z0XL5sxv\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-50") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Not Ex
  ${client.emotes.list} Code : \`https://pastebin.com/ Not Ex\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-general-51") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Temp Channel Code With No Command
  ${client.emotes.list} Code : \`https://pastebin.com/61vHx2Hi\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-general-52") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("00e8ff")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("00e8ff")
            .setDescription(`**${client.emotes.nodejs}Description : Not Ex
${client.emotes.list}Code : \`https://pastebin.com/Not Ex\`**`)
        )
        .then(msg => {
          message.react(`${client.emotes.success}`);
        })
        .catch(() => {
          message.react(`${client.emotes.error}`);
        });
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-general-53") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("00e8ff")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("00e8ff")
            .setDescription(`**${client.emotes.nodejs}Description : user badges
${client.emotes.list}Code : \`https://pastebin.com/Z7gmrpvF\`**`)
        )
        .then(msg => {
          message.react(`${client.emotes.success}`);
        })
        .catch(() => {
          message.react(`${client.emotes.error}`);
        });
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-general-54") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("00e8ff")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("00e8ff")
            .setDescription(`**${client.emotes.nodejs}Description : make the text bigger
${client.emotes.list}Code : \`https://pastebin.com/J0udNgyv\`**`)
        )
        .then(msg => {
          message.react(`${client.emotes.success}`);
        })
        .catch(() => {
          message.react(`${client.emotes.error}`);
        });
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-general-55") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("00e8ff")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("00e8ff")
            .setDescription(`**${client.emotes.nodejs}Description : colors list code
${client.emotes.list}Code : \`https://pastebin.com/YrFtGDLe\`**`)
        )
        .then(msg => {
          message.react(`${client.emotes.success}`);
        })
        .catch(() => {
          message.react(`${client.emotes.error}`);
        });
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-general-56") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("00e8ff")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("00e8ff")
            .setDescription(`**${client.emotes.nodejs}Description : message with time
${client.emotes.list}Code : \`https://pastebin.com/sM0pevCL\`**`)
        )
        .then(msg => {
          message.react(`${client.emotes.success}`);
        })
        .catch(() => {
          message.react(`${client.emotes.error}`);
        });
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : clear code
    ${client.emotes.list} Code : \`https://pastebin.com/qXdHPebp\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : role code
    ${client.emotes.list} Code : \`https://pastebin.com/zFLdndFf\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : antitokens code
    ${client.emotes.list} Code : \`https://pastebin.com/qv9RMY5W\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : ban code
    ${client.emotes.list} Code : \`https://pastebin.com/nTRBZvfd\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : kick code
    ${client.emotes.list} Code : \`https://pastebin.com/GUsrXxgM\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : mute code
    ${client.emotes.list} Code : \`https://pastebin.com/k0DgmDAi\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : lock & unlock code
    ${client.emotes.list} Code : \`https://pastebin.com/x8DZn9sz\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : rename channel code
    ${client.emotes.list} Code : \`https://pastebin.com/MfSUq0dY\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : super unmute code
    ${client.emotes.list} Code : \`https://pastebin.com/dMesYZ3K\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Not Ex
    ${client.emotes.list} Code : \`https://pastebin.com/Not Ex\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : anti links code
    ${client.emotes.list} Code : \`https://pastebin.com/bLiaGQe1\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : unban code
    ${client.emotes.list} Code : \`https://pastebin.com/jNkDeJYu\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : antibots code
    ${client.emotes.list} Code : \`https://pastebin.com/6B9q22pc\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Create Category code
    ${client.emotes.list} Code : \`https://pastebin.com/rg92jubS\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Hide and Show rooms code
    ${client.emotes.list} Code : \`https://pastebin.com/96iTCxgd\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Eval code
    ${client.emotes.list} Code : \`https://pastebin.com/3PAYPePi\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Anti-spam Code
    ${client.emotes.list} Code : \`https://pastebin.com/ZsrwhR3U\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Anti Discord Invites Code
    ${client.emotes.list} Code : \`https://pastebin.com/8H1MceYY\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Anti Swer Code
    ${client.emotes.list} Code : \`https://pastebin.com/sUCb1Axx\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Create a Voice Channel With Command
    ${client.emotes.list} Code : \`https://pastebin.com/pSLnChEZ\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Create a Text Channel With a Command
    ${client.emotes.list} Code : \`https://pastebin.com/Yy4hLp4c\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Delete all cahnnels and roles
    ${client.emotes.list} Code : \`https://pastebin.com/bfW6ZiBM\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Warn code
    ${client.emotes.list} Code : \`https://pastebin.com/rddJZbu2\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Blacklist code
    ${client.emotes.list} Code : \`https://pastebin.com/6sL4gfW0\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Prefix Changer code
    ${client.emotes.list} Code : \`https://pastebin.com/hDwF8VzR\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Language changer code
    ${client.emotes.list} Code : \`https://pastebin.com/agrWDsT0\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : code gives you invite of all servers the bot in
    ${client.emotes.list} Code : \`https://pastebin.com/Vrw1hSsy\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : azkar code
    ${client.emotes.list} Code : \`https://pastebin.com/XPbfHCJq\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : randeom mail and password
    ${client.emotes.list} Code : \`https://pastebin.com/28QR2UwF\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-30") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : help code with reactions
    ${client.emotes.list} Code : \`https://pastebin.com/WkBDmiYD\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-31") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Ultra Color Maker
    ${client.emotes.list} Code : \`https://pastebin.com/EBgVyZNF\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-32") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Code making an automatic response with a command and deleting it with a command
    ${client.emotes.list} Code : \`https://pastebin.com/Zj0wC4ec\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-33") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Random Num Code
    ${client.emotes.list} Code : \`https://pastebin.com/D097nUjz\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-34") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Random Color Maker
    ${client.emotes.list} Code : \`https://pastebin.com/q9Ma3vLT\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-35") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Embed Say Code
    ${client.emotes.list} Code : \`https://pastebin.com/pLMhdYZ4\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-36") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Say Code
    ${client.emotes.list} Code : \`https://pastebin.com/9tE1He39\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-37") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Simple log code
    ${client.emotes.list} Code : \`https://pastebin.com/K3naydYw\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-38") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Ban code with Reasons
    ${client.emotes.list} Code : \`https://pastebin.com/kNsNvPyg\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-39") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Code Stop The Bot With a Command
    ${client.emotes.list} Code : \`https://pastebin.com/i6faUD86\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-40") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Code Restarts The Bot
    ${client.emotes.list} Code : \`https://pastebin.com/0FaXp8MG\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-41") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Code Add Emoji فاجر
    ${client.emotes.list} Code : \`https://pastebin.com/MaKGdVVJ\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-42") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : code slowmoode فاجر
    ${client.emotes.list} Code : \`https://pastebin.com/5TGWhx5r\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-43") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : temp role
    ${client.emotes.list} Code : \`https://pastebin.com/J23M5yJK\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-44") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Colors List
    ${client.emotes.list} Code : \`https://pastebin.com/FvHbfQru\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-45") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : Play Command
    ${client.emotes.list} Code : \`https://pastebin.com/em4UYqaV\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-46") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : كود اذا حد منشن شخص يمسحها علشان ما يعرف من الي منشن :joy: 
    ${client.emotes.list} Code : \`https://pastebin.com/iEV9znzD\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-admin-47") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.nodejs} Description : auto responce with a nice trick 
    ${client.emotes.list} Code : \`https://pastebin.com/ME55zKp2\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : auto responde code
${client.emotes.list} Code : \`https://pastebin.com/RS11szPK\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : source code
${client.emotes.list} Code : \`https://pastebin.com/9vx1h2Mu\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : embed say code
${client.emotes.list} Code : \`https://pastebin.com/z1Lzf9AJ\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : giveaway code
${client.emotes.list} Code : \`https://pastebin.com/QufwCM5R\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/HT6KLBHA\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : role count code
${client.emotes.list} Code : \`https://pastebin.com/HjTejaFE\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : high premsion code
${client.emotes.list} Code : \`https://pastebin.com/yPvLMZRt\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : cut tweet game code
${client.emotes.list} Code : \`https://pastebin.com/RgJ5zZwY\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : help code
${client.emotes.list} Code : \`https://pastebin.com/QjRp7JbV\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : ping code
${client.emotes.list} Code : \`https://pastebin.com/c8E0ZiGK\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : anti swer code
${client.emotes.list} Code : \`https://pastebin.com/XtsruNYt\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : send msg code
${client.emotes.list} Code : \`https://pastebin.com/LnKj4vUH\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : auto respond code
${client.emotes.list} Code : \`https://pastebin.com/4cDXgtq6\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : help code 2
${client.emotes.list} Code : \`https://pastebin.com/3n9LCsQK\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : suggest code
${client.emotes.list} Code : \`https://pastebin.com/N8HcSFXP\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : super ping code
${client.emotes.list} Code : \`https://pastebin.com/TKdSrXUc\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : hack game code
${client.emotes.list} Code : \`https://pastebin.com/SPMFM0Rk\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : vote code
${client.emotes.list} Code : \`https://pastebin.com/0HpSMy3b\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : status code
${client.emotes.list} Code : \`https://pastebin.com/kP4Dsh8W\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : avatar code
${client.emotes.list} Code : \`https://pastebin.com/TWV0vRbB\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : user
${client.emotes.list} Code : \`https://pastebin.com/S285sF5L\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : roll code
${client.emotes.list} Code : \`https://pastebin.com/Mh9dWDqc\`**`)
          )
          .then(m => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : super ultimet ping code 😂
${client.emotes.list} Code : \`https://pastebin.com/a8DiCNyx\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/ykwuL5uM\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : get the invite link code
${client.emotes.list} Code : \`https://pastebin.com/UHk0efsC\`**`)
          )
          .then(m => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : memes code
${client.emotes.list} Code : \`https://pastebin.com/qDj4M0UF\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : custom status and bot guild
${client.emotes.list} Code : \`https://pastebin.com/HfuNyGjA\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : If someone tag bot respond to it
${client.emotes.list} Code : \`https://pastebin.com/qysxTbtu\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-general-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : 8 ball game
${client.emotes.list} Code : \`https://pastebin.com/tNhYjGc4\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : lock & unlock code
${client.emotes.list} Code : \`https://pastebin.com/Y8UeFp9F\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : say code
${client.emotes.list} Code : \`https://pastebin.com/jxD6KEH9\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : clear code
${client.emotes.list} Code : \`https://pastebin.com/mHpSP8nb\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : hide & show code
${client.emotes.list} Code : \`https://pastebin.com/d48iEqnw\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : setnickname code
${client.emotes.list} Code : \`https://pastebin.com/FWbCdFwm\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : ban code
${client.emotes.list} Code : \`https://pastebin.com/7aJ7s4DW\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : kick code
${client.emotes.list} Code : \`https://pastebin.com/Hv207ew2\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : prefix changer
${client.emotes.list} Code : \`https://pastebin.com/9HLukmiQ\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : code makes bot stay in voice channel 24/7
${client.emotes.list} Code : \`https://pastebin.com/RGpJHrVy\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : unban code
${client.emotes.list} Code : \`https://pastebin.com/WDNAqdRh\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : Whenever you sell a message on any server, the bot takes it and sells it to your server
${client.emotes.list} Code : \`https://pastebin.com/xXicy26x\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : Mute Code
${client.emotes.list} Code : \`https://pastebin.com/uBW3pA5p\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-admin-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.python} Description : Unmute Code
${client.emotes.list} Code : \`https://pastebin.com/Z62f1xHG\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : server code
${client.emotes.list} Code : \`https://pastebin.com/Ny4PFkGv\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : help code
${client.emotes.list} Code : \`https://pastebin.com/g52z9RNX\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : avatar code
${client.emotes.list} Code : \`https://pastebin.com/eLVUWyWD\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : kill code
${client.emotes.list} Code : \`https://pastebin.com/c7CnJ7Ei\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : another kill code
${client.emotes.list} Code : \`https://pastebin.com/aY6Nu96F\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : help code with rections
${client.emotes.list} Code : \`https://pastebin.com/VfLP5bGs\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : link code
${client.emotes.list} Code : \`https://pastebin.com/fArkDgXn\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : gay code
${client.emotes.list} Code : \`https://pastebin.com/6fy7qhJ1\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/5ej53BSG\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : dead code
${client.emotes.list} Code : \`https://pastebin.com/rz8uzv0K\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : open ticket
${client.emotes.list} Code : \`https://pastebin.com/wQR66ui6\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : close ticket
${client.emotes.list} Code : \`https://pastebin.com/vqC73w93\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : say code
${client.emotes.list} Code : \`https://pastebin.com/KH0JQhcY\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : fortnite item shop code
${client.emotes.list} Code : \`https://pastebin.com/KH0JQhcY\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : slap code
${client.emotes.list} Code : \`https://pastebin.com/zmfwqdv4\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : vote code
${client.emotes.list} Code : \`https://pastebin.com/c3b02bmz\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : embed say code
${client.emotes.list} Code : \`https://pastebin.com/YG2QkAuj\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : vote code
${client.emotes.list} Code : \`https://pastebin.com/c3b02bmz\`**`)
          )
          .then(m => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : embed say code
${client.emotes.list} Code : \`https://pastebin.com/YG2QkAuj\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : user code
${client.emotes.list} Code : \`https://pastebin.com/j8QszLfq\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : kill code
${client.emotes.list} Code : \`https://pastebin.com/JVGDjw62\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : afk code
${client.emotes.list} Code : \`https://pastebin.com/s8kNs6d9\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : embed line code
${client.emotes.list} Code : \`https://pastebin.com/cy4y79dx\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : server info code
${client.emotes.list} Code : \`https://pastebin.com/MJkvjvLC\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : report code
${client.emotes.list} Code : \`https://pastebin.com/DFis3ueu\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff").setDescription(`**
  ${client.emotes.bdfd} Description : cut tweet code
  ${client.emotes.list} Code : \`https://pastebin.com/YPeP6yW9\`
  **`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : giveaway start code
${client.emotes.list} Code : \`https://pastebin.com/9i8BmCZA\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : giveaway end code
${client.emotes.list} Code : \`https://pastebin.com/UGHn0UrS\`**`)
          )
          .then(m => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : dm help code
${client.emotes.list} Code : \`https://pastebin.com/aXJtVY80\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-30") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/XkqUmiPu\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-31") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : youtube search
${client.emotes.list} Code : \`https://pastebin.com/B8b7jj4U\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-general-32") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : rename ticket code
${client.emotes.list} Code : \`https://pastebin.com/X7SuA5Q9\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});
client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : super clear code
${client.emotes.list} Code : \`https://pastebin.com/y1808Wr6\`**`)
          )
          .then(m => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 7000);
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : ban code
${client.emotes.list} Code : \`https://pastebin.com/nFJZaFXt\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : mute code
${client.emotes.list} Code : \`https://pastebin.com/rD3kyqB8\`**`)
          )
          .then(m => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : ban code
${client.emotes.list} Code : \`https://pastebin.com/JeNzGTuB\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : report code dm
${client.emotes.list} Code : \`https://pastebin.com/xUTZKWjt\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : bot leave server code
${client.emotes.list} Code : \`https://pastebin.com/eEH12ZWE\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : clear code
${client.emotes.list} Code : \`https://pastebin.com/bmBEjpHD\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : unlock code
${client.emotes.list} Code : \`https://pastebin.com/nU5qTWGs\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : lock code
${client.emotes.list} Code : \`https://pastebin.com/30NmsGwu\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-admin-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("00e8ff")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("00e8ff")
              .setDescription(`**${client.emotes.bdfd} Description : delete room
${client.emotes.list} Code : \`https://pastebin.com/P9Y6VWhL\`**`)
          )
          .then(msg => {
            message.react(`${client.emotes.success}`);
          })
          .catch(() => {
            message.react(`${client.emotes.error}`);
          });
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = client;
