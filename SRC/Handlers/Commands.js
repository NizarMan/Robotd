const { Client } = require("discord.js");

/**
 * @param {Client} client 
 */

function loadCommands(client) {
    const fs = require('fs');
    const ascii = require('ascii-table');
    let table = new ascii().setHeading("Commands","Type","Status");

    fs.readdirSync('./SRC/Commands').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./SRC/Commands/${folder}`).filter(file => file.endsWith('.js'));
        for (file of commandFiles) {
            let command = require(`../Commands/${folder}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
                table.addRow(file,folder, '✅');
            } else {
                table.addRow(file,folder, '❌');
                continue;
            }
        }
    });
    console.log(table.toString(), "\nLoaded Commands!");
}

module.exports = { loadCommands };