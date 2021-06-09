const { MessageButton } = require('discord-buttons');

module.exports = {
    name: "source",
    cooldown: 7,
    aliases: [""],
    run: (client, message, args) => {
        let url = new MessageButton()
            .setLabel('Source!')
            .setStyle('url')
            .setURL('https://ncr-codes.glitch.me/src');
        message.channel.send("**>>> `-` The Bot Source Code**", url);
    }
};
