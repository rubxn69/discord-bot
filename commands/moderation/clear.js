const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clear messages'),
	async execute(interaction) {
		const channel = interaction.channel;
      const fetchedMessages = await channel.messages.fetch({ limit: 5});
      await channel.bulkDelete(fetchedMessages);
      interaction.reply(' 5 messages cleared');
	},
}