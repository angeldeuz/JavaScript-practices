// en la documentacion de node vienen como importar los require y ejemplos de como utilizarlo
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 = 'base=5'] = process.argv;
const [ , base] = arg3.split('=');

console.log(base);

// const base = 3;

crearArchivo( base )
        .then( nombreArchivo => console.log(nombreArchivo, 'creado!') )
        .catch( err => console.log(err) );
 