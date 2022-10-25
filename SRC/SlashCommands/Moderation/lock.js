const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('lock')
        .setDescription('Locks a text channel.')
        .addChannelOption(option =>
            option.setName('channel').setDescription('Text channel mention to lock.').setRequired(true),
        ),

    async execute(interaction, client) {

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription("You don't have `ManageChannels` permission.")
            ], ephemeral: true
        });

        const channel = interaction.options.getChannel('channel');
        channel.edit({
            permissionOverwrites: [
                { type: 'role', id: interaction.guild.roles.everyone, deny: ['ViewChannel'] },
            ],
        });

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`**${channel.name}** has been locked.`)
                    .setColor('#B83497')
            ], ephemeral: true
        });

    }

}