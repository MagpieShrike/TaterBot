
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
    /*   
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase();


    if( command === 'tarot' ){
        client.commands.get('tarot').execute(msg, args);
    };
    
    if( command === 'random' ){
        client.commands.get('random').execute(msg, args);
    };
    */
});

// Searching
client.on('message', msg => {
    // Tater
    if ( msg.content.toLowerCase().includes( 'raw potato' )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'Get tatered!' );
        emotion();
        }
    }
    if ( msg.content.toLowerCase().includes( 'crown' )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'Tater is king! Bow down peasants!' );
        emotion();
        }
    }
    else if ( msg.content.toLowerCase().includes( 'cease' )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'NEVER!' );
        emotion();
        }
    }
    else if ( msg.content.toLowerCase().includes( 'get tatered' )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'WOOOO!' );
        emotion();
        }
    }
    else if ( msg.content.toLowerCase() === 'tater' ) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'tot' );
        console.log(msg.author.id);
        emotion();
        }
    }
    else if ( msg.content.toLowerCase().includes( 'this is stupid' )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'eat a potato about it' );
        emotion();
        }
    }
    else if ( msg.content.toLowerCase().includes('potato') ) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.react( '????' )
            .then(console.log)
            .catch(console.error);
        emotion();
        }
    }
    else if ( msg.content.toLowerCase().includes( "still workin' bud?" )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'yep!' );
        emotion();
        }
    }
    else if ( msg.content === 'AMANDA' ) {
        //msg.channel.send( '????' );
        emotion();
    }
    else if ( msg.content.toLowerCase().includes( "good morning" )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'Wakey wakey, eggs and bakey! ????' );
        emotion();
        }
    } 
    else if ( msg.content.toLowerCase().includes( "good night" )) {
        if ( msg.author.id != '230753391582773248' ) {
        msg.channel.send( 'Sleep tight! ????????' );
        emotion();
        }
    } 
    else if ( msg.content.toLowerCase().includes( "love" ) && msg.content.toLowerCase().includes( "tater" )) {
        if ( msg.author.id === '230753391582773248' ) {
            //msg.channel.send( '????????????' );
            msg.channel.send( 'Hmmph!' );
            emotion();
        }
        else if ( msg.author.id === '237370836527349771' ) {
            msg.channel.send( 'Why don\'t I believe you? ????' );
            emotion();
        }
        else {
            msg.channel.send( '??????????????????' );
            emotion();
        }  
    } 
    else if ( msg.content.toLowerCase().includes( "fuck" ) && msg.content.toLowerCase().includes( "tater" ) || msg.content.toLowerCase().includes( "hate" ) && msg.content.toLowerCase().includes( "tater" )) {
        msg.channel.send( '????????????' );
        emotion();
    } 

    // Flower
    if ( msg.content.toLowerCase().includes( 'you need to wait' ) && msg.author.id === '731736201400418314' ) {
        msg.channel.send( 'Have some patience!' );
    } 

    // Fish
    if ( msg.content.toLowerCase().includes( 'you bought' && 'worms' ) && msg.author.id === '574652751745777665' ) {
        msg.channel.send( 'oh worm?' );
    }

    if ( msg.author.id === '574652751745777665' ) {
        for(var i = 0; i < msg.embeds.length; i++) {
            if(msg.embeds[i].description.includes( 'You bought' && 'worms' )) {
                msg.channel.send( 'oh worm?' );
            };
        };
        
    };
    





    function emotion() {
        if (msg.author.id === '330691788861997056') {
            msg.react( '????' )
        }
        else if ( msg.author.id === '230753391582773248' ) {
            //msg.react( '????' )
        }
        else if ( msg.author.id === '237370836527349771' ) {
            msg.react( '????' )
        }
    }

    
}); 




client.login(process.env.DISCORD_TOKEN);

