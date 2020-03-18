const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demmand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
// .then(console.log)

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const lug = await lugar.getLugarLatLng(direccion);
        const clim = await clima.getClima(lug.lat, lug.lon);
        return console.log(`El clima de ${direccion} es ${clim} grados`);
    } catch (error) {
        return console.log(`No se pudo encontrar el clima de ${direccion}`);
    }


}

getInfo(argv.direccion);