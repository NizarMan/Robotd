module.exports = {
    name: "test2",
    description: "testing command 2",
    execute(client, message, args, prefix, Discord) {
        message.channel.send("Sccessfully Sent Command Testing **2** To Your Server 😎");
    }
}