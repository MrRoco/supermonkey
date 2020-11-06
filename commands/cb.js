module.exports = {
	name: 'cb',
	description: 'Clan Battles!',
	execute(message) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Berk');
        const modRole = message.channel.server.roles.mention('name', 'Globbites');
    
        message.channel.send(modRole.mention() + ' we have clan battles tonight at 19.00 CET / 18.00 GMT. React on berk if you are joining')
        .then(function (message) {
            message.react(reactionEmoji)
        }).catch(function() {
            //Something
        });
	},
};