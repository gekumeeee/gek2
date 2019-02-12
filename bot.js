const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['351366504068939777'];
const prefix = ['!'];

client.on('ready', () => {
   client.user.setGame(`Gekyume TOP`,'https://www.twitch.tv/♥ Premium ℕova ♥');
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : GEKYUME `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});
client2.on('ready', () => {                           
client2.user.setGame(`Gekyume TOP`,'https://www.twitch.tv/♥ Premium ℕova ♥');
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**GEKYUME tooooooooooooop**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "g") {
let rank = message.guild.member(message.author).roles.find('name', 'GEKYUME');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**GEKYUME tooooooooooooop**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "g") {
let rank = message.guild.member(message.author).roles.find('name', 'GEKYUME');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
