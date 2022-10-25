const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("listban")
        .setDescription("List Ban")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        await interaction.deferReply();
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) return interaction.reply({
            content: "❌ You don't have `Administrator` permission.",
            ephemeral: true
        });
        interaction.guild.bans.fetch()
            .then(banned => {
                let list = banned.map(ban => `User: ${ban.user.username} | ID: ${ban.user.id}`).join('');
                if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
                if (banned.size == 0) return interaction.editReply({ embeds: [new EmbedBuilder().setDescription(`⚠️ | No member is banned`).setTimestamp().setColor(0x8302fa)]});
                interaction.editReply({
                    embeds: [new EmbedBuilder()
                        .setDescription(`👥  **List of banned members**\n${list}`)
                        .setTimestamp()
                        .setColor('#B83497').setFooter({ text: `by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()
                    })]
                });
            });
    },
};