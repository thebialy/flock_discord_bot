require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Our bot is ready to go');
})

client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply('Hello how are you?');
    }
});

client.login(process.env.BOT_TOKEN);