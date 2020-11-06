module.exports = {
	name: 'cb',
	description: 'Clan Battles!',
	execute(message) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Berk');
        message.reply('🔊 The current volume is');
        message.react(reactionEmoji);
	},
};