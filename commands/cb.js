module.exports = {
	name: 'cb',
	description: 'Clan Battles!',
	execute(message) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Berk');
        message.channel.send('@globbites we have clan battles tonight at 19.00 CET / 18.00 GMT. React on berk if you are joining \:Berk:');
	},
};