const os = require('os');
client.on('message', message => {

  let totalDMs = client.channels.filter(function (s) {
      if (s.type && s.type === 'dm') {
          return true;
      }
      return false;
  })

  let totalTextChannels = client.channels.filter(function (s) {
      if (s.type && s.type === 'text') {
          return true;
      }
      return false;
  })

  let cpu = os.cpus();
  let cpuArray = cpu[0].model.replace(/\s+/g, " ").trim().split(" ");
  let cpuCores = cpu.length;
  l  if (message.content.startsWith(prefix + "stats") || message.content.startsWith(prefix + "bot")) {
      message.channel.send({
          embed: new Discord.RichEmbed()
              .setColor('#36393e')
              .setTitle(' ℹ Bot Information')
              .addField('» Ping :', **\${client.ping}` ms.,true)
              .addField('» RAM Usage :',`${(process.memoryUsage().rss / 1048576).toFixed()}` MB.,true)
              .addField('» Guilds :',`${client.guilds.size}`,true)
              .addField('» Channels :',`${client.channels.size}`,true)
              .addField('» User :',`${client.users.size}`,true)
              .addField('» Name :',`${client.user.tag})`,true)
              .addField('» Platform:',`${os.platform()}`,true)
              .addField('» CPU :',`${cpuArray[0]} ${cpuArray[1]}`,true)
              .addField('» CPU Specs :',`${cpuCores} @ ${cpuSpeed}`,true)
              .addField('» Private Conversations :',`${totalDMs.size}`,true)
              .addField('» Host :',`FlixHost`,true)
              .addField('» WebSite :',`Soon`,true)
              .addField('» Developers :',@# " / لُوُرًاُنَسٍ  / " #**`)
      })
  }
})et cpuSpeed = (cpu[0].speed / 1000) + "MHZ";
client.login(process.env.BOT_TOKEN);
