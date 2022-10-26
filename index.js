const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({ intents: 3276799 });

/* Packages */
const fs = require("fs");
const ms = require("ms");
const { DisTube } = require('distube')
/* Configuration */
client.config = require('./SRC/JSON/config.json');
const { token, prefix } = require('./SRC/JSON/config.json');


client.commands = new Discord.Collection();
client.modals = new Discord.Collection();
client.buttons = new Discord.Collection();

const { loadEvents } = require('./SRC/Handlers/Events');
const { loadCommands } = require('./SRC/Handlers/Commands');
const { loadSlashCommands } = require('./SRC/Handlers/SlashCommands');
const { joinVoiceChannel } = require('@discordjs/voice');

process.on('unhandledRejection', e => {
    console.log(e.message);
  });

client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("1034075084089987084") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});

client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("1033873110715338752") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});




client.on('guildMemberRemove', async Member => {
    let ChannelLog = await Member.guild.channels.cache.find(Channel => Channel.id === '1034088795722747964')
    if(!ChannelLog) return;

    let Embed = new EmbedBuilder()
       .setAuthor({ name: Member.user.tag, iconURL: Member.user.displayAvatarURL({ dynamic: true }) })
       .setThumbnail(Member.user.displayAvatarURL({ dynamic: true }))
       .setDescription(`${Member} has been Leaved Server!`)
       .addFields({ name: 'Member ID', value: Member.id, inline: true }, { name: 'Member URL', value: `[Add Member](https://www.discord.com/users/${Member.id}) ● [Message Member](https://discord.com/channels/@me/${Member.id})`, inline: true })
    ChannelLog.send({ embeds: [Embed] })
})


client.on('guildMemberRemove', async Member => {
    let ChannelLog = await Member.guild.channels.cache.find(Channel => Channel.id === '1005802980467036211')
    if(!ChannelLog) return;

    let Embed = new EmbedBuilder()
       .setAuthor({ name: Member.user.tag, iconURL: Member.user.displayAvatarURL({ dynamic: true }) })
       .setThumbnail(Member.user.displayAvatarURL({ dynamic: true }))
       .setDescription(`${Member} has been Leaved Server!`)
       .addFields({ name: 'Member ID', value: Member.id, inline: true }, { name: 'Member URL', value: `[Add Member](https://www.discord.com/users/${Member.id}) ● [Message Member](https://discord.com/channels/@me/${Member.id})`, inline: true })
    ChannelLog.send({ embeds: [Embed] })
})












client.login(token).then(() => {
    loadEvents(client);
    loadCommands(client);
    loadSlashCommands(client);
});
