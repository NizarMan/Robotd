const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('move')
        .setDescription("Moves user to your voice channel.")
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to move.')
                .setRequired(true)
        ),

    async execute(interaction, client) {

        if (!interaction.member.permissions.has(PermissionFlagsBits.MoveMembers)) return interaction.reply({
            embeds: [
                new EmbedBuilder().setDescription("You don't have permissions.")
            ], ephemeral: true
        });

        const voiceChannel = interaction.member.voice.channel;
        const user = interaction.options.getMember('user');

        if (!voiceChannel) return interaction.reply({
            embeds: [
                new EmbedBuilder().setDescription("You must be in a voice channel.")
            ], ephemeral: true
        });

        if (user.id === interaction.user.id) return interaction.reply({
            embeds: [
                new EmbedBuilder().setDescription("You can't move yourself.")
            ], ephemeral: true
        });

        const userVoiceChannel = user.voice.channel;
        if (!userVoiceChannel) return interaction.reply({
            embeds: [
                new EmbedBuilder().setDescription("The user must be in a voice channel.")
            ], ephemeral: true
        });

        if (userVoiceChannel.id === voiceChannel.id) return interaction.reply({
            embeds: [
                new EmbedBuilder().setDescription(`${user} is already in your voice channel.`)
            ], ephemeral: true
        });

        const moved = await user.voice.setChannel(voiceChannel).catch(error => {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(`**${user}** don't have permission to join **${voiceChannel}**`)

                ], ephemeral: true
            });
        });

        if (moved) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(`**${user}** has been moved from **${userVoiceChannel}** to **${voiceChannel}**`)

                ], ephemeral: true
            });
        }

    }
}