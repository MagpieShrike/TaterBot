/*

const run = false;
const Axios = require('axios');
const Cheerio = require('cheerio');

if ( run === true ) {
const url = "URL";

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

 async function getImage() {
    const html = await Axios.get(url).then(await sleep(10000));
    const $ = await Cheerio.load(html.data);
    let data = [];

    $('.scry-preview').each((i, elem) => {
        if (i <= 1) {
            data.push({
                div: $(elem).find('div').attr('id'),
                image: $(elem).find('div').find('img').attr('src')
            })
        }
    });

    console.log(data)
}

getImage();

}
*/


















module.exports = {
    name: 'random',
    description: 'get a random dragon',
    execute( msg, args ){

        msg.channel.send( 'COMING SOON' );

    }
}