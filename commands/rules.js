require("dotenv").config();

module.exports = {
	name: 'rules',
	description: 'Rules!',
	execute(message) {
		message.channel.send(process.env.RULES);
	},
};
