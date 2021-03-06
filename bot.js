require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Bot is up and running. Go catch it!');
})

client.on('message', msg => {
    if (msg.content == "I love The Big Lebowski") {
        msg.react("❤️")
    }
});
client.on('message', msg => {
    if (msg.content == "I love I Heart Huckabees") {
        msg.react("❤️")
    }
});

client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply('Hello how are you?');
    }
});

client.on('message', msg => {
    if (msg.content === 'roll damn') {
        msg.reply('tide');
    }
});

client.on('message', msg => {
    if (msg.content === 'ah he') {
        msg.reply('ah smee');
    }
});

// rythm bot functionality
client.on('message', msg => {
    if (msg.content === '!play') {
        msg.reply('!clean');
    }
});

client.login(process.env.BOT_TOKEN);