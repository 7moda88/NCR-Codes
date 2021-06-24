// Copyright (c) 2021 DevelopersSupportAR && NIR0
// هتشيل اي حقوق هنيكك

require("./src/website/server");
const { Collection, Client, MessageEmbed, Util } = require("discord.js");
require("discord-reply");
const client = new Client();
require("discord-buttons")(client);
process.setMaxListeners(0);
client.setMaxListeners(0);
const fs = require("fs");
const chalk = require("chalk");
const db = require("quick.db");
const cooldown = new Set();
const mongo = require("./src/db/mongo");
const Discord = require("discord.js");
const musicTokensSchema = require("./src/db/schema/music-tokens-schema");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyACqkuLeSoxyE4QE2FGnObPO0ypUDRFceA");

client.commands = new Collection();
client.config = require("./src/config/bot");
client.emotes = require("./src/config/emojis");

const connectToMongoDB = async () => {
  await mongo().then(async mongosse => {
    try {
      console.log(chalk.green.bold("Connected to mongoDB!"));
    } finally {
      mongosse.connection.close();
    }
  });
};

connectToMongoDB();

client.on("ready", async function() {
  client.users.cache.forEach(async user => {
    try {
      let data;
      data = await musicTokensSchema.findOne({
        userId: user.id
      });
      if (data) {
        setTimeout(() => {
          var token = data.toJSON().token;
          var prefix = data.toJSON().prefix;
          var name = user.id;
          var cl = name;
          cl = new Client();
          cl.login(token);
          cl.on("ready", () => {
            console.log(
              chalk.green.bold("Reconnection The ") +
                chalk.red.bold(cl.user.tag)
            );
          });
          cl.on("message", message => {
            if (message.author.bot) return;
            if (message.channel.type == "dm") return;
            musicCommands(cl, message, prefix);
          });
          setTimeout(() => {
            db.set(`Owners_${cl.id}`, [`${user.id}`, ``]);
          }, 2000);
        }, 5000);
      } else return;
    } catch (err) {
      return;
    }
  });
});

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
fs.readdir(`./src/commands/test/`, (err, files) => {
  if (err) return console.log(chalk.red.bold(err));
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const command = require(`./src/commands/test/${file}`);
    let commandName = file.split(".")[0];
    console.log(
      chalk.green.bold("Loading Test Commands: ") + chalk.red.bold(`"${commandName}"`)
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
    .setColor("#2F3136")
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
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.content.startsWith(prefix + "create")) {
    var args = message.content.split(" ");
    if (args[0] && args[1] && args[2] && args[3]) {
      setTimeout(() => {
        const connectToMongoDB = async () => {
          await mongo().then(async mongosse => {
            try {
              let data;
              data = await musicTokensSchema.findOne({
                userId: message.author.id
              });
              if (data) {
                var token = data.toJSON().token;
                var prefix = data.toJSON().prefix;
                var name = message.author.id;
                var cl = name;
                cl = new Client();
                cl.login(token);
                cl.on("ready", () => {
                  console.log(
                    chalk.green.bold("Reconnection The ") +
                      chalk.red.bold(cl.user.tag)
                  );
                });
                cl.on("message", message => {
                  if (message.author.bot) return;
                  if (message.channel.type == "dm") return;
                  musicCommands(cl, message, prefix);
                });
                setTimeout(() => {
                  db.set(`Owners_${cl.id}`, [`${message.author.id}`, ``]);
                }, 2000);
              } else {
                setTimeout(() => {
                  var token = data.toJSON().token;
                  var prefix = data.toJSON().prefix;
                  var name = message.author.id;
                  var cl = name;
                  cl = new Client();
                  cl.login(token);
                  cl.on("ready", () => {
                    console.log(
                      chalk.green.bold("Reconnection The ") +
                        chalk.red.bold(cl.user.tag)
                    );
                  });
                  cl.on("message", message => {
                    if (message.author.bot) return;
                    if (message.channel.type == "dm") return;
                    musicCommands(cl, message, prefix);
                  });
                  setTimeout(() => {
                    db.set(`Owners_${cl.id}`, [`${message.author.id}`, ``]);
                  }, 2000);
                }, 5000);
              }
            } finally {
              mongosse.connection.close();
            }
          });
        };
        connectToMongoDB();
      }, 3000);
    }
  }
});

async function musicCommands(cl, message, prefix) {
  const success = "✅";
  const notes = "🎶";
  const stop = "⏹";
  const sos = "🆘";
  const skippeded = "⏭️";
  const repeating = "🔁";
  const resumed = "▶";
  const pauseeded = "⏸";
  const PREFIX = prefix;
  const queue = new Map();
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
  const args = message.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(message.guild.id);
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);
  if (command === "play" || command === "p" || command === "شغل") {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "Be in a Voice Channel First!"
        }
      });
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) {
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "Sorry, but I need a **`CONNECT`** permission to proceed!"
        }
      });
    }
    if (!permissions.has("SPEAK")) {
      return message.channel.send({
        embed: {
          color: "RED",
          description: "Sorry, but I need a **`SPEAK`** permission to proceed!"
        }
      });
    }
    if (!url || !searchString)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "Please input link/title to play music"
        }
      });
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return message.channel.send({
        embed: {
          color: "GREEN",
          description: `${success}  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
        }
      });
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var video = await youtube.getVideoByID(videos[0].id);
          if (!video)
            return message.channel.send({
              embed: {
                color: "RED",
                description: `${sos}  **|**  I could not obtain any search results`
              }
            });
        } catch (err) {
          console.error(err);
          return message.channel.send({
            embed: {
              color: "RED",
              description: `${sos}  **|**  I could not obtain any search results`
            }
          });
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
  }
  if (command === "search" || command === "sc") {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "I'm sorry, but you need to be in a voice channel to play a music!"
        }
      });
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) {
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "Sorry, but I need a **`CONNECT`** permission to proceed!"
        }
      });
    }
    if (!permissions.has("SPEAK")) {
      return message.channel.send({
        embed: {
          color: "RED",
          description: "Sorry, but I need a **`SPEAK`** permission to proceed!"
        }
      });
    }
    if (!url || !searchString)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "Please input link/title to search music"
        }
      });
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      return message.channel.send({
        embed: {
          color: "GREEN",
          description: `${success}  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
        }
      });
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          let embedPlay = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor("Search results", message.author.displayAvatarURL())
            .setDescription(
              `${videos
                .map(video2 => `**\`${++index}\`  |**  ${video2.title}`)
                .join("\n")}`
            )
            .setFooter(
              "Please choose one of the following 10 results, this embed will auto-deleted in 15 seconds"
            );
          message.channel.send(embedPlay).then(m =>
            m.delete({
              timeout: 15000
            })
          );
          try {
            var response = await message.channel.awaitMessages(
              message2 => message2.content > 0 && message2.content < 11,
              {
                max: 1,
                time: 15000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return message.channel.send({
              embed: {
                color: "RED",
                description:
                  "The song selection time has expired in 15 seconds, the request has been canceled."
              }
            });
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return message.channel.send({
            embed: {
              color: "RED",
              description: `${sos}  **|**  I could not obtain any search results`
            }
          });
        }
      }
      response.delete();
      return handleVideo(video, message, voiceChannel);
    }
  } else if (command === "skip") {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "I'm sorry, but you need to be in a voice channel to skip a music!"
        }
      });
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "There is nothing playing that I could skip for you"
        }
      });
    serverQueue.connection.dispatcher.end(
      "[runCmd] Skip command has been used"
    );
    return message.channel.send({
      embed: {
        color: "GREEN",
        description: `${skippeded}  **|**  I skipped the song for you`
      }
    });
  } else if (command === "stop") {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "I'm sorry but you need to be in a voice channel to play music!"
        }
      });
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "There is nothing playing that I could stop for you"
        }
      });
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end(
      "[runCmd] Stop command has been used"
    );
    return message.channel.send({
      embed: {
        color: "GREEN",
        description: `${stop}  **|**  Deleting queues and leaving voice channel...`
      }
    });
  } else if (command === "volume" || command === "vol") {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "I'm sorry, but you need to be in a voice channel to set a volume!"
        }
      });
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "There is nothing playing"
        }
      });
    if (!args[1])
      return message.channel.send({
        embed: {
          color: "BLUE",
          description: `The current volume is: **\`${serverQueue.volume}%\`**`
        }
      });
    if (isNaN(args[1]) || args[1] > 100)
      return message.channel.send({
        embed: {
          color: "RED",
          description:
            "Volume only can be set in a range of **`1`** - **`100`**"
        }
      });
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolume(args[1] / 100);
    return message.channel.send({
      embed: {
        color: "GREEN",
        description: `I set the volume to: **\`${args[1]}%\`**`
      }
    });
  } else if (command === "nowplaying" || command === "np") {
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "There is nothing playing"
        }
      });
    return message.channel.send({
      embed: {
        color: "BLUE",
        description: `${notes}  **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`
      }
    });
  } else if (command === "queue" || command === "q") {
    let songsss = serverQueue.songs.slice(1);

    let number = songsss.map((x, i) => `${i + 1} - ${x.title}`);
    number = chunk(number, 5);

    let index = 0;
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "RED",
          description: "There is nothing playing"
        }
      });
    let embedQueue = new MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Song queue", message.author.displayAvatarURL())
      .setDescription(number[index].join("\n"))
      .setFooter(
        `• Now Playing: ${serverQueue.songs[0].title} | Page ${index + 1} of ${
          number.length
        }`
      );
    const m = await message.channel.send(embedQueue);

    if (number.length !== 1) {
      await m.react("⬅");
      await m.react("🛑");
      await m.react("➡");
      async function awaitReaction() {
        const filter = (rect, usr) =>
          ["⬅", "🛑", "➡"].includes(rect.emoji.name) &&
          usr.id === message.author.id;
        const response = await m.awaitReactions(filter, {
          max: 1,
          time: 30000
        });
        if (!response.size) {
          return undefined;
        }
        const emoji = response.first().emoji.name;
        if (emoji === "⬅") index--;
        if (emoji === "🛑") m.delete();
        if (emoji === "➡") index++;

        if (emoji !== "🛑") {
          index = ((index % number.length) + number.length) % number.length;
          embedQueue.setDescription(number[index].join("\n"));
          embedQueue.setFooter(`Page ${index + 1} of ${number.length}`);
          await m.edit(embedQueue);
          return awaitReaction();
        }
      }
      return awaitReaction();
    }
  } else if (command === "pause") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return message.channel.send({
        embed: {
          color: "GREEN",
          description: `${pauseeded}  **|**  Paused the music for you`
        }
      });
    }
    return message.channel.send({
      embed: {
        color: "RED",
        description: "There is nothing playing"
      }
    });
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return message.channel.send({
        embed: {
          color: "GREEN",
          description: `${resumed}  **|**  Resumed the music for you`
        }
      });
    }
    return message.channel.send({
      embed: {
        color: "RED",
        description: "There is nothing playing"
      }
    });
  } else if (command === "loop") {
    if (serverQueue) {
      serverQueue.loop = !serverQueue.loop;
      return message.channel.send({
        embed: {
          color: "GREEN",
          description: `${repeating}  **|**  Loop is **\`${
            serverQueue.loop === true ? "enabled" : "disabled"
          }\`**`
        }
      });
    }
    return message.channel.send({
      embed: {
        color: "RED",
        description: "There is nothing playing"
      }
    });
  }

  async function handleVideo(video, message, voiceChannel, playlist = false) {
    const serverQueue = queue.get(message.guild.id);
    const song = {
      id: video.id,
      title: Util.escapeMarkdown(video.title),
      url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 100,
        playing: true,
        loop: false
      };
      queue.set(message.guild.id, queueConstruct);
      queueConstruct.songs.push(song);

      try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.songs[0]);
      } catch (error) {
        console.error(
          `[ERROR] I could not join the voice channel, because: ${error}`
        );
        queue.delete(message.guild.id);
        return message.channel.send({
          embed: {
            color: "RED",
            description: `I could not join the voice channel, because: **\`${error}\`**`
          }
        });
      }
    } else {
      serverQueue.songs.push(song);
      if (playlist) return;
      else
        return message.channel.send({
          embed: {
            color: "GREEN",
            description: `${success}  **|**  **\`${song.title}\`** has been added to the queue`
          }
        });
    }
    return;
  }

  function chunk(array, chunkSize) {
    const temp = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      temp.push(array.slice(i, i + chunkSize));
    }
    return temp;
  }

  function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      return queue.delete(guild.id);
    }

    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        const shiffed = serverQueue.songs.shift();
        if (serverQueue.loop === true) {
          serverQueue.songs.push(shiffed);
        }
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolume(serverQueue.volume / 100);

    serverQueue.textChannel.send({
      embed: {
        color: "BLUE",
        description: `${notes}  **|**  Start Playing: **\`${song.title}\`**`
      }
    });
  }

  process.on("unhandledRejection", (reason, promise) => {
    try {
      console.error(
        "Unhandled Rejection at: ",
        promise,
        "reason: ",
        reason.stack || reason
      );
    } catch {
      console.error(reason);
    }
  });

  process.on("uncaughtException", err => {
    console.error(`Caught exception: ${err}`);
    process.exit(1);
  });
  cl.on("message", async function(message) {
    if (message.author.bot) return;
    if (!message.channel.type == "dm") return;
    if (
      message.content.startsWith(
        prefix + "help" || prefix + "h" || prefix + "الحقني يبنى"
      )
    ) {
      var embed = new MessageEmbed()
        .setAuthor("Bot Orders", cl.user.avatarURL({ dynaimc: true }))
        .setTitle(`${cl.user.username}, is powerful music bot!!.`)
        .setURL(
          "https://discord.com/oauth2/authorize?client_id=780558820640423966&permissions=1647832432&scope=bot%20applications.commands"
        )
        .setFooter(
          "Powerd By: NCR Codes ✨",
          "https://images-ext-1.discordapp.net/external/KKsJJUAqF8haLbllp4L2ZpKPA7tAgWVnkw4mFFhedgQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/780558820640423966/2afc86bc9106e130264c5ba1ad03602d.png?width=584&height=584"
        )
        .addFields(
          {
            name: `${prefix}**help**`,
            value: `**To get the bot help list**`,
            inline: true
          },
          {
            name: `${prefix}**play**`,
            value: `**Play a music**`,
            inline: true
          },
          {
            name: `${prefix}**search**`,
            value: `**Search for a music**`,
            inline: true
          },
          {
            name: `${prefix}**skip**`,
            value: `**Skip a music**`,
            inline: true
          },
          {
            name: `${prefix}**stop**`,
            value: `**Stop a music**`,
            inline: true
          },
          {
            name: `${prefix}**volume**`,
            value: `**Change music volume**`,
            inline: true
          },
          {
            name: `${prefix}**nowplaying**`,
            value: `**shows what is playing**`,
            inline: true
          },
          {
            name: `${prefix}**queue**`,
            value: `**Shows the queue**`,
            inline: true
          },
          {
            name: `${prefix}**pause**`,
            value: `**Pause the music**`,
            inline: true
          },
          {
            name: `${prefix}**resume**`,
            value: `**Resume the music**`,
            inline: true
          },
          {
            name: `${prefix}**loop**`,
            value: `**To get the bot help list**`,
            inline: true
          }
        );
      var owners = db.fetch(`Owners_${cl.id}`);
      if (owners.includes(message.author.id)) {
        embed.addField(`**Bot Owner Orders**`, `_ _`, false);
        embed.addFields(
          {
            name: `**ncr/setName**`,
            value: `** To change the bot name **`,
            inline: true
          },
          {
            name: `**ncr/setAvatar**`,
            value: `** To change the bot avatar **`,
            inline: true
          },
          {
            name: `**ncr/setActivity**`,
            value: `** To change the bot activity **`,
            inline: true
          },
          {
            name: `**ncr/setStatus**`,
            value: `** To change the bot status **`,
            inline: true
          },
          {
            name: `**ncr/setPrefix**`,
            value: `** To change the bot prefix from all guilds **`,
            inline: true
          },
          {
            name: `**ncr/setOwner**`,
            value: `** To make sameone controle the bot ncr commands **`,
            inline: true
          }
        );
      }
      message.channel.send(embed);
    }
    if (message.content.startsWith("ncr/setPrefix")) {
      var owners = db.fetch(`Owners_${cl.id}`);
      if (!owners.includes(message.author.id))
        return message.channel.send({
          embed: {
            color: "RED",
            description: `you have to be form the bot owners to do this!.`
          }
        });
      var args = message.content
        .split(" ")
        .slice(" ")
        .join(" ");
      if (!args)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `please type the prefix after the command like: **${prefix}prefix music.**`
          }
        });
      if (args.length > 7)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `i can't save this prefix in my data because the prefix is to long!.`
          }
        });
      const connectToMongoDB = async () => {
        await mongo().then(async mongosse => {
          try {
            let data;
            data = await musicTokensSchema.findOne({
              userId: message.author.id
            });
            if (data) {
              console.log(
                chalk.red.bold(data.toJSON().userId) +
                  chalk.green.bold(" Updated Hes Music Data")
              );
              await musicTokensSchema.updateOne(
                {
                  prefix: data.toJSON().prefix
                },
                {
                  prefix: args
                }
              );
            } else return;
          } finally {
            mongosse.connection.close();
          }
        });
      };
      connectToMongoDB();
      message.channel.send({
        embed: {
          color: "GREEN",
          description: `The bot prefix has updated to ${args}`
        }
      });
    }
    if (message.content.startsWith("ncr/setAvatar")) {
      var owners = db.fetch(`Owners_${cl.id}`);
      if (!owners.includes(message.author.id))
        return message.channel.send({
          embed: {
            color: "RED",
            description: `you have to be form the bot owners to do this!.`
          }
        });
      var args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      if (!args)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `please type the bot avatar url after the command like: **ncr/setAvatar https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png**`
          }
        });
      await cl.user
        .setAvatar(args)
        .then(() => {
          message.channel.send({
            embed: {
              color: "GREEN",
              description: `The bot avatar has updated to:`,
              image: args
            }
          });
        })
        .catch(() => {
          message.channel.send({
            embed: {
              color: "RED",
              description: `the bot can't read this avatar!!.`
            }
          });
        });
    }
    if (message.content.startsWith("ncr/setName")) {
      var owners = db.fetch(`Owners_${cl.id}`);
      if (!owners.includes(message.author.id))
        return message.channel.send({
          embed: {
            color: "RED",
            description: `you have to be form the bot owners to do this!.`
          }
        });
      var args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      if (!args)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `please type the bot name after the command like: **ncr/setName Music Bot**`
          }
        });
      await cl.user
        .setUsername(args)
        .then(() => {
          message.channel.send({
            embed: {
              color: "GREEN",
              description: `The bot name has updated to ${args}`
            }
          });
        })
        .catch(err => {
          message.channel.send({
            embed: {
              color: "RED",
              description: err
            }
          });
        });
    }
    if (message.content.startsWith("ncr/setActivity")) {
      var owners = db.fetch(`Owners_${cl.id}`);
      if (!owners.includes(message.author.id))
        return message.channel.send({
          embed: {
            color: "RED",
            description: `you have to be form the bot owners to do this!.`
          }
        });
      var args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      if (!args)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `please type the bot activity after the command like: **ncr/setActivity Music**`
          }
        });
      await cl.user
        .setActivity(args)
        .then(() => {
          message.channel.send({
            embed: {
              color: "GREEN",
              description: `The bot activity has updated to ${args}`
            }
          });
        })
        .catch(() => {
          message.channel.send({
            embed: {
              color: "RED",
              description: `the bot can't read the activity!!.`
            }
          });
        });
    }
    if (message.content.startsWith("ncr/setStatus")) {
      var owners = db.fetch(`Owners_${cl.id}`);
      if (!owners.includes(message.author.id))
        return message.channel.send({
          embed: {
            color: "RED",
            description: `you have to be form the bot owners to do this!.`
          }
        });
      var args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      if (!args)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `please type the bot activity after the command like: **ncr/setStatus idle**`
          }
        });
      await cl.user
        .setStatus(args)
        .then(() => {
          message.channel.send({
            embed: {
              color: "GREEN",
              description: `The bot Status has updated to ${args}`
            }
          });
        })
        .catch(() => {
          message.channel.send({
            embed: {
              color: "RED",
              description: `the status value have to be: \`idle\`, \`dnd\`, \`online\` `
            }
          });
        });
    }
    if (message.content.startsWith("ncr/setOwner")) {
      var owners = db.fetch(`Owners_${cl.id}`);
      if (!owners.includes(message.author.id))
        return message.channel.send({
          embed: {
            color: "RED",
            description: `you have to be form the bot owners to do this!.`
          }
        });
      var args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      var user =
        message.mentions.members.first() || client.users.cache.get(args);
      if (!user)
        return message.channel.send({
          embed: {
            color: "RED",
            description: `please mention sameone or type hes id to add hem to the owners list`
          }
        });
      db.push(`Owners_${cl.id}`, user.id);
      message.channel.send({
        embed: {
          color: "GREEN",
          description: `${user.username} has add to the bot owners!.`
        }
      });
    }
  });
}

client.on("clickButton", async button => {
  if (button.id == "importantMessageEN") {
    button.channel
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
          
          - يعتقد فريق العمل أن الروبوت سيكون في \`npm package\` ، ولكن سيتم نشره في الوقت الحالي على \`github\``
      )
      .then(m => {
        setTimeout(() => {
          m.delete();
        }, 60000);
      });
  } else if (button.id == "importantMessageAR") {
    button.channel
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
        
        - The work team is thinking that the bot will be on its \`npm package\`, but for now it will be published on \`github\``
      )
      .then(m => {
        setTimeout(() => {
          m.delete();
        }, 60000);
      });
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
    button.channel.send(embed).then(m => {
      setTimeout(() => {
        m.delete();
      }, 10000);
    });
  } else if (button.id == "musicBotMaker") {
    var lang2 = await db.fetch(`langguild_${button.guild.id}`);
    if (lang2 == "english") {
      console.log("2");
      button.channel
        .send(
          "<:craftingtable:849534405903253565> | Please Type The Bot Token "
        )
        .then(() => {
          const filter = user => user.id == button.clicker.user.id;
          button.channel
            .awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
            .then(collected => {
              console.log("1");
              const { Database } = require("quickmongo");
              const mdb = new Database(
                "mongodb+srv://eris:ZJVE9mTBB49f37O1@cluster0.uufnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
              );
              mdb.on("ready", () => {
                console.log(chalk.green.bold("Database connected!"));
              });
              mdb.set("test", collected.first().content);
              mdb.get("foo").then(console.log);
              button.channel.send("تمام");
            });
        });
    } else if (lang2 == "arabic") {
      console.log("2");
      button.channel
        .send("**<:craftingtable:849534405903253565> | يرجى كتبات التوكن **")
        .then(() => {
          const filter = user => user.id == button.clicker.user.id;
          button.channel
            .awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
            .then(collected => {
              console.log("1");
              const { Database } = require("quickmongo");
              const mdb = new Database(
                "mongodb+srv://eris:ZJVE9mTBB49f37O1@cluster0.uufnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
              );
              mdb.on("ready", () => {
                console.log(chalk.green.bold("Database connected!"));
              });
              mdb.set("test", collected.first().content);
              mdb.get("foo").then(console.log);
              button.channel.send("تمام");
            });
        });
    }
  }
});

client.on("message", async message => {
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : sourse code\n${client.emotes.list} Code : \`https://pastebin.com/KVb2vuwB\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : avatar code\n${client.emotes.list} Code : \`https://pastebin.com/4FD2HagX\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : ping code\n${client.emotes.list} Code : \`https://pastebin.com/5NDrQhzA\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : mute code\n${client.emotes.list} Code : \`https://pastebin.com/Q9fPXRg5\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : unmute code\n${client.emotes.list} Code : \`https://pastebin.com/QERjbQkZ\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : chat lock code\n${client.emotes.list} Code : \`https://pastebin.com/21viYSgJ\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : unlock code\n${client.emotes.list} Code : \`https://pastebin.com/m0wTKW1D\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : Server Code\n${client.emotes.list} Code : \`https://pastebin.com/dgbPBV33\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : Kick Code\n${client.emotes.list} Code : \`https://pastebin.com/2EWb9dLx\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : Clear Code\n${client.emotes.list} Code : \`https://pastebin.com/Hq4y6VqY\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-handler-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
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
              .setColor("#2F3136")
              .setDescription(
                `**${client.emotes.nodejs} Description : Credits Daily Trans Code\n${client.emotes.list} Code : \`https://pastebin.com/6gLnFgfL\`**`
              )
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : clear code
    ${client.emotes.list} Code : \`https://pastebin.com/qXdHPebp\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : role code
    ${client.emotes.list} Code : \`https://pastebin.com/zFLdndFf\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : antitokens code
    ${client.emotes.list} Code : \`https://pastebin.com/qv9RMY5W\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : ban code
    ${client.emotes.list} Code : \`https://pastebin.com/nTRBZvfd\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : kick code
    ${client.emotes.list} Code : \`https://pastebin.com/GUsrXxgM\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : mute code
    ${client.emotes.list} Code : \`https://pastebin.com/k0DgmDAi\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : lock & unlock code
    ${client.emotes.list} Code : \`https://pastebin.com/x8DZn9sz\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : rename channel code
    ${client.emotes.list} Code : \`https://pastebin.com/MfSUq0dY\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : super unmute code
    ${client.emotes.list} Code : \`https://pastebin.com/dMesYZ3K\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Not Ex
    ${client.emotes.list} Code : \`https://pastebin.com/Not Ex\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : anti links code
    ${client.emotes.list} Code : \`https://pastebin.com/bLiaGQe1\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : unban code
    ${client.emotes.list} Code : \`https://pastebin.com/jNkDeJYu\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : antibots code
    ${client.emotes.list} Code : \`https://pastebin.com/6B9q22pc\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Create Category code
    ${client.emotes.list} Code : \`https://pastebin.com/rg92jubS\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Hide and Show rooms code
    ${client.emotes.list} Code : \`https://pastebin.com/96iTCxgd\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Eval code
    ${client.emotes.list} Code : \`https://pastebin.com/3PAYPePi\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Anti-spam Code
    ${client.emotes.list} Code : \`https://pastebin.com/ZsrwhR3U\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Anti Discord Invites Code
    ${client.emotes.list} Code : \`https://pastebin.com/8H1MceYY\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Anti Swer Code
    ${client.emotes.list} Code : \`https://pastebin.com/sUCb1Axx\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Create a Voice Channel With Command
    ${client.emotes.list} Code : \`https://pastebin.com/pSLnChEZ\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Create a Text Channel With a Command
    ${client.emotes.list} Code : \`https://pastebin.com/Yy4hLp4c\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Delete all cahnnels and roles
    ${client.emotes.list} Code : \`https://pastebin.com/bfW6ZiBM\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Warn code
    ${client.emotes.list} Code : \`https://pastebin.com/rddJZbu2\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Blacklist code
    ${client.emotes.list} Code : \`https://pastebin.com/6sL4gfW0\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Prefix Changer code
    ${client.emotes.list} Code : \`https://pastebin.com/hDwF8VzR\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Language changer code
    ${client.emotes.list} Code : \`https://pastebin.com/agrWDsT0\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : code gives you invite of all servers the bot in
    ${client.emotes.list} Code : \`https://pastebin.com/Vrw1hSsy\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : azkar code
    ${client.emotes.list} Code : \`https://pastebin.com/XPbfHCJq\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : randeom mail and password
    ${client.emotes.list} Code : \`https://pastebin.com/28QR2UwF\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-30") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : help code with reactions
    ${client.emotes.list} Code : \`https://pastebin.com/WkBDmiYD\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-31") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Ultra Color Maker
    ${client.emotes.list} Code : \`https://pastebin.com/EBgVyZNF\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-32") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Code making an automatic response with a command and deleting it with a command
    ${client.emotes.list} Code : \`https://pastebin.com/Zj0wC4ec\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-33") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Random Num Code
    ${client.emotes.list} Code : \`https://pastebin.com/D097nUjz\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-34") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Random Color Maker
    ${client.emotes.list} Code : \`https://pastebin.com/q9Ma3vLT\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-35") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Embed Say Code
    ${client.emotes.list} Code : \`https://pastebin.com/pLMhdYZ4\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-36") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Say Code
    ${client.emotes.list} Code : \`https://pastebin.com/9tE1He39\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-37") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Simple log code
    ${client.emotes.list} Code : \`https://pastebin.com/K3naydYw\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-38") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Ban code with Reasons
    ${client.emotes.list} Code : \`https://pastebin.com/kNsNvPyg\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-39") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Code Stop The Bot With a Command
    ${client.emotes.list} Code : \`https://pastebin.com/i6faUD86\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-40") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Code Restarts The Bot
    ${client.emotes.list} Code : \`https://pastebin.com/0FaXp8MG\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-41") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Code Add Emoji فاجر
    ${client.emotes.list} Code : \`https://pastebin.com/MaKGdVVJ\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-42") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : code slowmoode فاجر
    ${client.emotes.list} Code : \`https://pastebin.com/5TGWhx5r\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-43") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : temp role
    ${client.emotes.list} Code : \`https://pastebin.com/J23M5yJK\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-44") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Colors List
    ${client.emotes.list} Code : \`https://pastebin.com/FvHbfQru\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-45") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Play Command
    ${client.emotes.list} Code : \`https://pastebin.com/em4UYqaV\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-46") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : كود اذا حد منشن شخص يمسحها علشان ما يعرف من الي منشن :joy: 
    ${client.emotes.list} Code : \`https://pastebin.com/iEV9znzD\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-47") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : auto responce with a nice trick 
    ${client.emotes.list} Code : \`https://pastebin.com/ME55zKp2\`**`)
          )
          .then(() => {
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

// fdef

client.on("message", async message => {
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-48") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : avatar code
  ${client.emotes.list} Code : \`https://pastebin.com/5rcNTzbH\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-49") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : user code
  ${client.emotes.list} Code : \`https://pastebin.com/vscg6pbV\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-50") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : ping code
  ${client.emotes.list} Code : \`https://pastebin.com/enY94VW7\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-51") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : auto line code
  ${client.emotes.list} Code : \`https://pastebin.com/cuu2Uv0i\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-52") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : auto rect code
  ${client.emotes.list} Code : \`https://pastebin.com/qNeGG1y2\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-53") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : suggest code
  ${client.emotes.list} Code : \`https://pastebin.com/mTHAcNyc\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-54") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : server info code
  ${client.emotes.list} Code : \`https://pastebin.com/K4Gafn7v\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-55") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : top code
  ${client.emotes.list} Code : \`https://pastebin.com/KLytwp7e\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-56") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : credits code
  ${client.emotes.list} Code : \`https://pastebin.com/hAm6sS36\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-57") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : dm help code
  ${client.emotes.list} Code : \`https://pastebin.com/fVJQpU5n\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-58") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : super sumbite code
  ${client.emotes.list} Code : \`https://pastebin.com/htZ3XUc1\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-59") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : auto changeing stream code
  ${client.emotes.list} Code : \`\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-60") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : add emoji code
  ${client.emotes.list} Code : \`https://pastebin.com/MrQ64e2K\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-61") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : super auto recpose code
  ${client.emotes.list} Code : \`https://pastebin.com/Zj0wC4ec\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-62") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : randmon role color code
  ${client.emotes.list} Code : \`https://pastebin.com/PBVKzkCS\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-63") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : fake offline status hunter
  ${client.emotes.list} Code : \`https://pastebin.com/UjN6wFE1\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-64") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : user id code
  ${client.emotes.list} Code : \`https://pastebin.com/9antVZbA\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-65") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : bot invite code
  ${client.emotes.list} Code : \`https://pastebin.com/8tRkLXN1\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-66") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : music code
  ${client.emotes.list} Code : \`https://pastebin.com/DNL1epya\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-67") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : super bot info code 2
  ${client.emotes.list} Code : \`https://pastebin.com/MzwGAJWx\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-68") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : super ticket bot
  ${client.emotes.list} Code : \`https://glitch.com/~second-amber-plate\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-69") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : embed say code
  ${client.emotes.list} Code : \`https://pastebin.com/hVYLh0Gg\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-70") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : not ex
  ${client.emotes.list} Code : \`https://pastebin.com/not ex\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-71") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : probot profile code
  ${client.emotes.list} Code : \`https://pastebin.com/R3i8VTLj\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-72") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : pages help code
  ${client.emotes.list} Code : \`https://pastebin.com/PKjQNwrS\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-73") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : vote code
  ${client.emotes.list} Code : \`https://pastebin.com/dt2anmSi\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-74") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : kill code
  ${client.emotes.list} Code : \`https://pastebin.com/NsyZvzkJ\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-75") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : tax code
  ${client.emotes.list} Code : \`https://pastebin.com/fAUetZQY\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-76") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : probot server code
  ${client.emotes.list} Code : \`https://pastebin.com/a3WgHFYe\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-77") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : probot user
  ${client.emotes.list} Code : \`https://pastebin.com/ARd76fmN\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-78") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : auto get () from dm bot
  ${client.emotes.list} Code : \`https://pastebin.com/jqHv2wpz\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-79") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : server info code with server link
  ${client.emotes.list} Code : \`https://pastebin.com/Feq7dc6P\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-80") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : delete game code
  ${client.emotes.list} Code : \`https://pastebin.com/G70xF3sC\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-81") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : trash code
  ${client.emotes.list} Code : \`https://pastebin.com/AVf2rHrn\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-82") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : super help code
  ${client.emotes.list} Code : \`https://pastebin.com/tu6P5D1u\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-83") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : simple ar user
  ${client.emotes.list} Code : \`https://pastebin.com/j3EC9JCb\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-84") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : Roles Code Like Probot
  ${client.emotes.list} Code : \`https://pastebin.com/VZ4Zzy9R\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-85") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code that showing you the server voice online number with a voice room
  ${client.emotes.list} Code : \`https://pastebin.com/ba5nGzTf\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-86") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code that showing you the server bots number with a voice room
  ${client.emotes.list} Code : \`https://pastebin.com/kDWaN0eL\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-87") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code that showing you the server members number with a voice room
  ${client.emotes.list} Code : \`https://pastebin.com/1yVEqzV6\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-88") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code showing you the server roles number with voice room
  ${client.emotes.list} Code : \`https://pastebin.com/VsbmfiP8\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-89") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : A code showing you the server rooms number with voice room
  ${client.emotes.list} Code : \`https://pastebin.com/SB4yHHKg\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-90") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : Developer info code
  ${client.emotes.list} Code : \`https://pastebin.com/nAj8rMcm\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-91") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : (if someone dm the bot the message will be sent to you) code
  ${client.emotes.list} Code : \`https://pastebin.com/fc1489wJ\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-92") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : IQ code
  ${client.emotes.list} Code : \`https://pastebin.com/bq3D912F\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-93") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : Code if someone boosts the server the bot thank him
  ${client.emotes.list} Code : \`https://pastebin.com/qGPwPTrH\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-94") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : Points code like probot
  ${client.emotes.list} Code : \`https://pastebin.com/uJHPF661\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-95") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : Random nitro code
  ${client.emotes.list} Code : \`https://pastebin.com/H2u6Bw33\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-96") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**  ${client.emotes.nodejs} Description : Prove Your Self code
  ${client.emotes.list} Code : \`https://pastebin.com/Z0XL5sxv\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-97") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Not Ex
${client.emotes.list} Code : \`https://pastebin.com/ Not Ex\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "djs-v12-98") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.nodejs} Description : Temp Channel Code With No Command
${client.emotes.list} Code : \`https://pastebin.com/61vHx2Hi\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-99") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : Not Ex
${client.emotes.list} Code : \`https://pastebin.com/Not Ex\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-100") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : user badges
${client.emotes.list} Code : \`https://pastebin.com/Z7gmrpvF\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-101") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : make the text bigger
${client.emotes.list} Code : \`https://pastebin.com/J0udNgyv\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-102") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : colors list code
${client.emotes.list} Code : \`https://pastebin.com/YrFtGDLe\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-103") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : message with time
${client.emotes.list} Code : \`https://pastebin.com/sM0pevCL\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-104") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : if sameone joind the server the bot will give him a nickname
${client.emotes.list} Code : \`https://pastebin.com/qRfBTiX0\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-105") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : if the bot is online he will send a message to a channel you detect
${client.emotes.list} Code : \`https://pastebin.com/itx0KkVi\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-106") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : if the bot joind a new server he will create a room a send message inside
${client.emotes.list} Code : \`https://pastebin.com/8A8kMeZS\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-107") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : the bot says what you wont
${client.emotes.list} Code : \`https://pastebin.com/x12E066j\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-108") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : snake game
${client.emotes.list} Code : \`https://pastebin.com/AqF9MUPL\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-109") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : xo game
${client.emotes.list} Code : \`https://pastebin.com/yw4fraNE\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-110") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : calculator code
${client.emotes.list} Code : \`https://pastebin.com/Q6Pbn8Tw\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.content === prefix + "djs-v12-111") {
    var args = message.content.split(" ");
    if (cooldown.has(message.author.id)) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(
            `**You Are In Cooldown Please Wait \`5s\` To Use \`${
              args[0]
            }\` Again**`
          )
      );
    } else {
      message.author
        .send(
          new MessageEmbed().setColor("#2F3136")
            .setDescription(`**${client.emotes.nodejs} Description : shuffle game code
${client.emotes.list} Code : \`https://pastebin.com/JMaJacpR\`**`)
        )
        .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : auto responde code
${client.emotes.list} Code : \`https://pastebin.com/RS11szPK\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : source code
${client.emotes.list} Code : \`https://pastebin.com/9vx1h2Mu\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : embed say code
${client.emotes.list} Code : \`https://pastebin.com/z1Lzf9AJ\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : giveaway code
${client.emotes.list} Code : \`https://pastebin.com/QufwCM5R\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/HT6KLBHA\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : role count code
${client.emotes.list} Code : \`https://pastebin.com/HjTejaFE\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : high premsion code
${client.emotes.list} Code : \`https://pastebin.com/yPvLMZRt\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : cut tweet game code
${client.emotes.list} Code : \`https://pastebin.com/RgJ5zZwY\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : help code
${client.emotes.list} Code : \`https://pastebin.com/QjRp7JbV\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : ping code
${client.emotes.list} Code : \`https://pastebin.com/c8E0ZiGK\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : anti swer code
${client.emotes.list} Code : \`https://pastebin.com/XtsruNYt\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : send () code
${client.emotes.list} Code : \`https://pastebin.com/LnKj4vUH\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : auto respond code
${client.emotes.list} Code : \`https://pastebin.com/4cDXgtq6\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : help code 2
${client.emotes.list} Code : \`https://pastebin.com/3n9LCsQK\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : suggest code
${client.emotes.list} Code : \`https://pastebin.com/N8HcSFXP\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : super ping code
${client.emotes.list} Code : \`https://pastebin.com/TKdSrXUc\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : hack game code
${client.emotes.list} Code : \`https://pastebin.com/SPMFM0Rk\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : vote code
${client.emotes.list} Code : \`https://pastebin.com/0HpSMy3b\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : status code
${client.emotes.list} Code : \`https://pastebin.com/kP4Dsh8W\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : avatar code
${client.emotes.list} Code : \`https://pastebin.com/TWV0vRbB\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : user
${client.emotes.list} Code : \`https://pastebin.com/S285sF5L\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : super ultimet ping code 😂
${client.emotes.list} Code : \`https://pastebin.com/a8DiCNyx\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/ykwuL5uM\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : memes code
${client.emotes.list} Code : \`https://pastebin.com/qDj4M0UF\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : custom status and bot guild
${client.emotes.list} Code : \`https://pastebin.com/HfuNyGjA\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : If someone tag bot respond to it
${client.emotes.list} Code : \`https://pastebin.com/qysxTbtu\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : 8 ball game
${client.emotes.list} Code : \`https://pastebin.com/tNhYjGc4\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-30") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : lock & unlock code
${client.emotes.list} Code : \`https://pastebin.com/Y8UeFp9F\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-31") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : say code
${client.emotes.list} Code : \`https://pastebin.com/jxD6KEH9\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-32") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : clear code
${client.emotes.list} Code : \`https://pastebin.com/mHpSP8nb\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-33") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : hide & show code
${client.emotes.list} Code : \`https://pastebin.com/d48iEqnw\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-34") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : setnickname code
${client.emotes.list} Code : \`https://pastebin.com/FWbCdFwm\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-35") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : ban code
${client.emotes.list} Code : \`https://pastebin.com/7aJ7s4DW\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-36") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : kick code
${client.emotes.list} Code : \`https://pastebin.com/Hv207ew2\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-37") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : prefix changer
${client.emotes.list} Code : \`https://pastebin.com/9HLukmiQ\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-38") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : code makes bot stay in voice channel 24/7
${client.emotes.list} Code : \`https://pastebin.com/RGpJHrVy\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-39") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : unban code
${client.emotes.list} Code : \`https://pastebin.com/WDNAqdRh\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-40") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : Whenever you sell a message on any server, the bot takes it and sells it to your server
${client.emotes.list} Code : \`https://pastebin.com/xXicy26x\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-41") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : Mute Code
${client.emotes.list} Code : \`https://pastebin.com/uBW3pA5p\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "dpy-42") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.python} Description : Unmute Code
${client.emotes.list} Code : \`https://pastebin.com/Z62f1xHG\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-1") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : server code
${client.emotes.list} Code : \`https://pastebin.com/Ny4PFkGv\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-2") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : help code
${client.emotes.list} Code : \`https://pastebin.com/g52z9RNX\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-3") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : avatar code
${client.emotes.list} Code : \`https://pastebin.com/eLVUWyWD\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-4") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : kill code
${client.emotes.list} Code : \`https://pastebin.com/c7CnJ7Ei\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-5") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : another kill code
${client.emotes.list} Code : \`https://pastebin.com/aY6Nu96F\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-6") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : help code with rections
${client.emotes.list} Code : \`https://pastebin.com/VfLP5bGs\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-7") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : link code
${client.emotes.list} Code : \`https://pastebin.com/fArkDgXn\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-8") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : gay code
${client.emotes.list} Code : \`https://pastebin.com/6fy7qhJ1\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-9") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/5ej53BSG\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-10") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : dead code
${client.emotes.list} Code : \`https://pastebin.com/rz8uzv0K\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-11") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : open ticket
${client.emotes.list} Code : \`https://pastebin.com/wQR66ui6\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-12") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : close ticket
${client.emotes.list} Code : \`https://pastebin.com/vqC73w93\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-13") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : say code
${client.emotes.list} Code : \`https://pastebin.com/KH0JQhcY\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-14") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : fortnite item shop code
${client.emotes.list} Code : \`https://pastebin.com/KH0JQhcY\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-15") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : slap code
${client.emotes.list} Code : \`https://pastebin.com/zmfwqdv4\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-16") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : vote code
${client.emotes.list} Code : \`https://pastebin.com/c3b02bmz\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-17") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : embed say code
${client.emotes.list} Code : \`https://pastebin.com/YG2QkAuj\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-18") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-19") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : embed say code
${client.emotes.list} Code : \`https://pastebin.com/YG2QkAuj\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-20") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : user code
${client.emotes.list} Code : \`https://pastebin.com/j8QszLfq\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-21") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : kill code
${client.emotes.list} Code : \`https://pastebin.com/JVGDjw62\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-22") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : afk code
${client.emotes.list} Code : \`https://pastebin.com/s8kNs6d9\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-23") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : embed line code
${client.emotes.list} Code : \`https://pastebin.com/cy4y79dx\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-24") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : server info code
${client.emotes.list} Code : \`https://pastebin.com/MJkvjvLC\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-25") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : report code
${client.emotes.list} Code : \`https://pastebin.com/DFis3ueu\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-26") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136").setDescription(`**
  ${client.emotes.bdfd} Description : cut tweet code
  ${client.emotes.list} Code : \`https://pastebin.com/YPeP6yW9\`
  **`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-27") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : giveaway start code
${client.emotes.list} Code : \`https://pastebin.com/9i8BmCZA\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-28") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-29") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : dm help code
${client.emotes.list} Code : \`https://pastebin.com/aXJtVY80\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-30") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : bot info code
${client.emotes.list} Code : \`https://pastebin.com/XkqUmiPu\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-31") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : youtube search
${client.emotes.list} Code : \`https://pastebin.com/B8b7jj4U\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-32") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : rename ticket code
${client.emotes.list} Code : \`https://pastebin.com/X7SuA5Q9\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-33") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-34") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : ban code
${client.emotes.list} Code : \`https://pastebin.com/nFJZaFXt\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-35") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-36") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : ban code
${client.emotes.list} Code : \`https://pastebin.com/JeNzGTuB\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-37") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : report code dm
${client.emotes.list} Code : \`https://pastebin.com/xUTZKWjt\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-38") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : bot leave server code
${client.emotes.list} Code : \`https://pastebin.com/eEH12ZWE\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-39") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : clear code
${client.emotes.list} Code : \`https://pastebin.com/bmBEjpHD\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-40") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : unlock code
${client.emotes.list} Code : \`https://pastebin.com/nU5qTWGs\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-41") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : lock code
${client.emotes.list} Code : \`https://pastebin.com/30N()wu\`**`)
          )
          .then(() => {
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
  if (message.channel.type == "dm") return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = client.config.prefix;
  if (message.author.bot) return;
  try {
    if (message.content === prefix + "bdfd-42") {
      var args = message.content.split(" ");
      if (cooldown.has(message.author.id)) {
        message.channel.send(
          new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(
              `**You Are In Cooldown Please Wait \`5s\` To Use \`${
                args[0]
              }\` Again**`
            )
        );
      } else {
        message.author
          .send(
            new MessageEmbed().setColor("#2F3136")
              .setDescription(`**${client.emotes.bdfd} Description : delete room
${client.emotes.list} Code : \`https://pastebin.com/P9Y6VWhL\`**`)
          )
          .then(() => {
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


// Main File 📁🧑‍🦲
