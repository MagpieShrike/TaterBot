
require('dotenv').config()
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const prefix = "tot.";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log( 'TaterBot is Online' );
})

// Commands
client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if( command === 'horoscope' ){
        client.commands.get('horoscope').execute(msg, args);
    };
    /*
    if( command === 'random' ){
        client.commands.get('random').execute(msg, args);
    };
    */
});

// Searching
client.on('message', msg => {
    // Tater
    if ( msg.content.toLowerCase().includes( 'raw potato' )) {
        msg.channel.send( 'Get tatered!' );
        emotion();
    }
    else if ( msg.content.toLowerCase().includes( 'cease' )) {
        msg.channel.send( 'NEVER!' );
        emotion();
    }
    else if ( msg.content.toLowerCase().includes( 'get tatered' )) {
        msg.channel.send( 'WOOOO!' );
        emotion();
    }
    else if ( msg.content.toLowerCase() === 'tater' ) {
        msg.channel.send( 'tot' );
        console.log(msg.author.id)
        emotion();
    }
    else if ( msg.content.toLowerCase().includes( 'this is stupid' )) {
        msg.channel.send( 'eat a potato about it' );
        emotion();
    }
    else if ( msg.content.toLowerCase().includes('potato') ) {
        msg.react( '🥔' )
            .then(console.log)
            .catch(console.error);
        emotion();
    }
    else if ( msg.content.toLowerCase().includes( "still workin' bud?" )) {
        msg.channel.send( 'yep!' );
        emotion();
    }
    else if ( msg.content === 'AMANDA' ) {
        msg.channel.send( '💛' );
        emotion();
    }

    // Flower
    if ( msg.content.toLowerCase().includes( 'you need to wait' ) && msg.author.id === '731736201400418314' ) {
        msg.channel.send( 'Have some patience!' );
    }

    /*
    // Randerg
    if ( msg.content.toLowerCase().includes( 'r' )) {
        Randerg();
    }
    */





    function emotion() {
        if (msg.author.id === '330691788861997056') {
            msg.react( '💜' )
        }
        else if ( msg.author.id === '230753391582773248' ) {
            msg.react( '💛' )
        }
        else if ( msg.author.id === '237370836527349771' ) {
            msg.react( '🔥' )
        }
    }

    
});




client.login(process.env.DISCORD_TOKEN);

