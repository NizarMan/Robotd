
const { Client, SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Show bot Uptime"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
      let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
      let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

            const embed = new EmbedBuilder()
               .setTitle(':clock9: Uptime Stats:')
               .setDescription(`\`\`\`+ Status : Online\n+ ${uptime}\`\`\``)
               .setColor('#B83497')
    await interaction.reply({embeds: [embed]});

    }
}