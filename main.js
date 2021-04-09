const Discord = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '?';

var rps;

var dice;

var coin;


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'paper' || command === 'rock' || command === 'scissors')
    {
        rps = Math.floor(Math.random() * 3);

        if (rps == 2)
        {
            message.channel.send('Paper')
        }
        else if (rps == 1)
        {
            message.channel.send('Rock')
        }
        else if (rps == 0)
        {
            message.channel.send('Scissors')
        }
    }
    else if (command === 'dice')
    {
        dice = Math.floor(Math.random() * 6)
        message.channel.send(`You rolled ${dice + 1}!`)
    }
    else if (command === 'coin')
    {

        coin = Math.floor(Math.random() * 2)
        console.log(coin)

        if (coin == 1)
        {
            message.channel.send('Filpped Heads')
        }else
        {
            message.channel.send('Filpped Tails')
        }
    }
});

client.login('ODIyNjY4NzUxMjk5OTM2Mjc3.YFVn-g.SapNRq9_wNS7tDB7yEW2R6Wj-DU')