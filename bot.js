require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Bot is up and running. Go catch it!');
})

client.on('message', msg => {
    if (msg.content == "I love Mandolorian!") {
        msg.react("❤️")
    }
});

client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply('Hello how are you?');
    }
});

client.login(process.env.BOT_TOKEN);