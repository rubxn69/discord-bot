const { SlashCommandBuilder, InteractionResponse } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('all-clear')
		.setDescription('clear all messages'),
	async execute(interaction) {
		const channel = interaction.channel;
      const fetchedMessages = await channel.messages.fetch({ limit: {}});
      await channel.bulkDelete(fetchedMessages);
      interaction.reply(' all messages are cleared');
      
	},
}