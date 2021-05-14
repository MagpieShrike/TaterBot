import Discord, { Message, MessageAttachment } from 'discord.js';
import 'dotenv/config';

const client = new Discord.Client();


client.once('ready', () => {
    console.log( 'TaterBot is Online' );
})

client.on('message', msg => {
    if ( msg.content.toLowerCase().includes( 'raw potato' )) {
        msg.channel.send( 'Get tatered!' );
    }
    else if ( msg.content.toLowerCase() === 'tater' ) {
        msg.channel.send( 'tot' );
        console.log(msg.author.id)
    }
    else if ( msg.content.toLowerCase().includes( 'this is stupid' )) {
        msg.channel.send( 'eat a potato about it' );
    }
    else if ( msg.content.toLowerCase().includes('potato') ) {
        msg.react( '🥔' )
            .then(console.log)
            .catch(console.error);
    }

    if (msg.author.id === '330691788861997056') {
        msg.react( '💜' )
            .then(console.log)
            .catch(console.error);
    }
    else if ( msg.author.id === '' ) {
        msg.react( '🔥' )
            .then(console.log)
            .then(console.error);
    }
});




client.login(process.env.DISCORD_TOKEN);

