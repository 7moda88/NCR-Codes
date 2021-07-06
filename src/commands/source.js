const { MessageButton } = require('discord-buttons');

module.exports = {
    name: "source",
    cooldown: 7,
    aliases: [""],
    run: (client, message, args) => {
        let url = new MessageButton()
            .setLabel('Source!')
            .setStyle('url')
            .setURL('http://www.ncr-codes.ml/src');
        message.channel.send("**>>> `-` The Bot Source Code**", url);
    }
};
