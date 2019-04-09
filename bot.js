cconst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-bot') {
    msg.reply('سرعت البوت (ms24)!');
  }
});

client.login(process.env.BOT_TOKEN);
