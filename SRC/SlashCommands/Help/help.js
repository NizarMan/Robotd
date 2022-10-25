const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Show help Commands'),

    async execute(interaction, client) {
        const link = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
        const Support = `https://discord.gg/f8KjadKtaS`


        let Embed = new EmbedBuilder()
            .setTitle('__Robot . Commands__')
            .setURL(`${link}`)
            .setColor('#B83497')
            .setDescription(`
            **Use { / } In All Commands**
            /help

            **___Commands:___**

            **Public🚹**
            avatar
            invite
            lisban
            ping
            rules
            uptime
            user
            botinfo

            **Admin⛔**
            ban
            clear
            kick
            lock
            move
            mute
            unban
            unlock
            unmute

            **Activity🔰**
            together
            meme

            **[Invite Me](${link})**|**[Support Server](${Support})**

            
                        
            `)
            .setThumbnail('https://images-ext-1.discordapp.net/external/FhFFor2kVJbHZn5qCSVcUbHkWK-bdrPIiZ5EPxAZbXc/%3Fsize%3D512/https/cdn.discordapp.com/icons/1029039070187376640/93aa1417c3e74f37fc90b8900bf8a68f.webp')
            .setFooter({ text: `by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({dynamic: true})})


        await interaction.reply({ embeds: [Embed] });
        const message = await interaction.fetchReply();
        message.react('💞');
    }

}