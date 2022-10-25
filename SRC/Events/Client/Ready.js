module.exports = {
  name: 'ready',
  once: true,
  execute( message, client) {
      console.log(`Logged in as ${client.user.tag}\n`);
      console.log(`[NAME] ${client.user.tag}`)
      console.log(`[ID] ${client.user.id}`)
      console.log( "[STATS] Bot online 24/7");
      console.log(`Servers : [ " ${client.guilds.cache.size} " ]`);
      console.log(`Users : [ " ${client.users.cache.size} " ]`);
      console.log(`Channels : [ " ${client.channels.cache.size} " ]`)
      console.log(`[GUILDS] ${client.guilds.cache.size}`)
      console.log(`[PING] ${client.ws.ping}`)
      client.user.setStatus("idle");
      client.user.setActivity(`/help | Servers :  ${client.guilds.cache.size} `)
      


  }
}