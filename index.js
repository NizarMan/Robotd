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



















client.login(process.env.token).then(() => {
    loadEvents(client);
    loadCommands(client);
    loadSlashCommands(client);
});
