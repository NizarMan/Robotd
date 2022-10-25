const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('For Invite The bot'),

        async execute(interaction, client) {
            const link = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
            const Response = new EmbedBuilder()
            .setTitle("💌 Invite Me")
            .setColor('#B83497')
            .setDescription(`**[Invite Me](${link})**`)

            await interaction.reply({embeds: [Response]})
    

    }

}