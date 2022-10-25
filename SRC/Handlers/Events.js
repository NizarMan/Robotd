const { Client } = require("discord.js");

/**
 * @param {Client} client 
 */

function loadEvents(client) {
    const fs = require('fs');
    const ascii = require('ascii-table');
    let table = new ascii(`Events`);
    table.setHeading("Events ","Type","Status");
    fs.readdirSync('./SRC/Events').forEach((folder) => {
        const files = fs.readdirSync(`./SRC/Events/${folder}`).filter(file => file.endsWith('.js'));
        for (file of files) {
            let event = require(`../Events/${folder}/${file}`);
            if (event.name) {
                if (event.rest) {
                    if (event.once) {
                        client.rest.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.rest.on(event.name, (...args) => event.execute(...args, client));
                    }
                } else {
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.on(event.name, (...args) => event.execute(...args, client));
                    }
                }
                table.addRow(file,folder, '✅');
            } else {
                table.addRow(file,folder, '❌');
                continue;
            }
        }
    });
    console.log(table.toString(), "\nLoaded Events.");
}

module.exports = { loadEvents };