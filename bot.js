const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561611876769726476")
setInterval(function() {
channel.send(`Mixwell Community by : @!                Mohamad_Doleh .#6334 Mixwell Community by : @!                Mohamad_Doleh .#6334`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
