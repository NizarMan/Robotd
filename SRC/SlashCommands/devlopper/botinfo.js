const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('See The Bot Infos'),

    async execute(interaction, client) {

        let Embed = new EmbedBuilder()
            .setTitle('Bot Info')
            .setColor('#B83497')
            .setDescription(`**
            Bot Name : ${client.user.tag}
            Id       : ${client.user.id}
            Servers  : ${client.guilds.cache.size}
            Users    : ${client.users.cache.size} 
            Channels : ${client.channels.cache.size}
            Ping     : ${client.ws.ping}            
            **`)
            .setThumbnail('https://cdn.discordapp.com/icons/1029039070187376640/93aa1417c3e74f37fc90b8900bf8a68f.webp?size=512')
            

        await interaction.reply({ embeds: [Embed] });
        const message = await interaction.fetchReply();
        message.react('💞');

    }

}