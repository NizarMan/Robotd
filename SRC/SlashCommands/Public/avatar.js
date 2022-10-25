const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle, Formatters, User } = require('discord.js');
const { Client, Message } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
      .setName('avatar')
      .setDescription('See Avatar'),

  async execute(interaction, client) {

      let Embed = new EmbedBuilder()
          .setTitle('Avatar')
          .setColor('#B83497')
          .setImage(interaction.user.displayAvatarURL({size: 4096, dynamic: true}))
          .setFooter({ text: `by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({dynamic: true})})          
          await interaction.reply({ embeds: [Embed] });

  }

}