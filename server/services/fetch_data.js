const axios = require('axios').default;
const imageCDN = "https://cdn.akamai.steamstatic.com"
const process = require('process');

let heroCount = 0;
const api_key = process.env.OPENDOTA_KEY;

axios.get('https://api.opendota.com/api/constants/heroes', { params: { api_key }}).then((response) => {
    heroCount = Object.keys(response.data).length;
}).catch((e) => {
        console.log(e);
});


const fetchHeroData = async (request, response) => {             
    let heroID = Math.ceil(Math.random() * heroCount).toString();

    console.log(`Fetching ID ${heroID}`);

    const { data } = await axios.get(`https://api.opendota.com/api/constants/heroes`, { params: { api_key }});
    let hero = data[heroID];

    while(!hero) {
        heroID = Math.ceil(Math.random() * heroCount).toString();
        hero = data[heroID];
    }

    return response.status(200).json(data[heroID]);
}; 

module.exports = { fetchHeroData };
