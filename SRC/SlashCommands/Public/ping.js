const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('See The Bot Ping'),

    async execute(interaction, client) {

        let Embed = new EmbedBuilder()
            .setTitle('Bot Ping')
            .setColor('#B83497')
            .setDescription(`My Ping Is ${client.ws.ping} ms :signal_strength:`)
            .setImage('https://cdn.discordapp.com/attachments/549225667267395596/572811777738276866/rainbow.gif')
            

        await interaction.reply({ embeds: [Embed] });

    }

}