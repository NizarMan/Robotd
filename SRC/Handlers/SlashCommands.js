const { Client } = require('discord.js')

/**
 * @param {Client} client 
 */
function loadSlashCommands(client) {
    const ascii = require('ascii-table')
    const fs = require('fs')
    const table = new ascii().setHeading("SlashCommands", "Type", "Status")

    let commandsArray = [];
    let developerArray = [];

    const commandsFolder = fs.readdirSync("./SRC/SlashCommands");
    for(const folder of commandsFolder) {
        const commandFiles = fs.readdirSync(`./SRC/SlashCommands/${folder}/`)
        .filter((file) => file.endsWith(".js"));

        for (const file of commandFiles) {
            const commandFile = require(`../SlashCommands/${folder}/${file}`)

                client.commands.set(commandFile.data.name, commandFile)

                if (commandFile.developer) developerArray.push(commandFile.data.toJSON())
                else commandsArray.push(commandFile.data.toJSON());
                
                table.addRow(file, folder, "✅");
                continue;
            }
        }
    client.application.commands.set(commandsArray)
    //Go To "config.json" and past your GuildID


    return console.log(table.toString(), "\nLoaded SlashCommands!")
}

module.exports = { loadSlashCommands }