import Discord, { Message, MessageAttachment } from 'discord.js';
import 'dotenv/config';

const client = new Discord.Client();


client.once('ready', () => {
    console.log( 'TaterBot is Online' );
})

client.on('message', msg => {
    if ( msg.content.toLowerCase().includes( 'raw potato' )) {
        msg.channel.send( 'Get tatered!' );
        emotion();
    }
    if ( msg.content.toLowerCase().includes( 'get tatered' )) {
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

    function emotion() {
        if (msg.author.id === '330691788861997056') {
            msg.react( '💜' )
                .then(console.log)
                .catch(console.error);
        }
        else if ( msg.author.id === '230753391582773248' ) {
            msg.react( '💛' )
                .then(console.log)
                .then(console.error);
        }
        else if ( msg.author.id === '237370836527349771' ) {
            msg.react( '🔥' )
                .then(console.log)
                .then(console.error);
        }
    }
    
});




client.login(process.env.DISCORD_TOKEN);

