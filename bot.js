const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Mixwell");


client.on("ready", () => {
let channel =     client.channels.get("561611876769726476")
setInterval(function() {
channel.send(`Mixwell Community ```Mohamad_Doleh``` Mixwell Community ```Mohamad_Doleh``` Mixwell Community ```Mohamad_Doleh``` Mixwell Community ```Mohamad_Doleh``` `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
