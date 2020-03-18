const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b0f7b0a0cebb0c55e23bc24e0453ae62&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}