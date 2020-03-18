const axios = require('axios');



const getLugarLatLng = async(dir) => {
    const encodeUlr = encodeURI(dir);
    // console.log(encodeUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr }`,
        headers: { 'x-rapidapi-key': 'bbc2b88cccmsh06b14c7053e0944p123100jsn0aa6f3036cfb' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}