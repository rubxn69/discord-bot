const { SlashCommandBuilder, InteractionResponse } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-channel')
		.setDescription('creates a text channel'),
	async execute(interaction) {
		const guild = interaction.guild;
        const channelName = 'new-channel';
    const channelType = 'voice';

      const newChannel = await guild.channels.create(channelName, {
        type: channelType === 'voice' ? 'GUILD_VOICE' : 'GUILD_TEXT',
      });

      interaction.reply({
        content: `Created a new ${channelType} channel: ${newChannel}`,
        
      });
      
	},
}