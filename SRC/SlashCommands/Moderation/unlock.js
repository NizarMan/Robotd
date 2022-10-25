const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('unlock')
        .setDescription('unLocks a text channel.')
        .addChannelOption(option =>
            option.setName('channel').setDescription('Text channel mention to unlock.').setRequired(true),
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
                { type: 'role', id: interaction.guild.roles.everyone, allow: ['ViewChannel'] },
            ],
        });

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`**${channel.name}** has been unlocked.`)
                    .setColor('#B83497')
            ], ephemeral: true
        });

    }

}