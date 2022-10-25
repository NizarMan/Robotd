const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Server Rules'),

    async execute(interaction, client) {

        let Embed = new EmbedBuilder()
            .setTitle('Rules')
            .setURL('https://discord.js.org/')
            .setColor('#B83497')
            .setAuthor({ name: 'The Rules', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription(`\n **[ العربية ] - قوانين السيرفر**  \n\n **لا تمنشن الإدارة ، فهذا يعتبر مزعج لهم -** \n **لا تقم بنشر روابط سيرفرات أخرى ، فهذا قد يكون سبب في تبنيدك -** \n **لاتتحدث بالامور السياسية و الدينية ، كل شخص وله تفكير -** \n **لا تقم بنشر الصور الاباحية، الحساسة ، فهذا ممنوع منعاً باتاً -** \n\n\n **[ English ] - Server Rules** \n **- Do not bother the administration, it is considered bothering them** \n **- Do not post links to other servers, as this may be a reason for your classification** \n **- Do not talk about political and religious matters. Everyone has a thinking** \n **- Please solve personal problems in private, we do not like that**`)
        await interaction.reply({ embeds: [Embed] });
        

    }

}