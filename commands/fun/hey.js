const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('Replies with hello!'),
	async execute(interaction) {
		await interaction.reply(`hello ${interaction.user.username}`);
	},
}