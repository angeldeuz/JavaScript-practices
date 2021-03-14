// en la documentacion de node vienen como importar los require y ejemplos de como utilizarlo
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

// console.log(process.argv);
 console.log( argv );

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado!') )
    .catch( err => console.log(err) );



//destructuracion de arrays de propiedades del programa -no es practico
// argv = argumentos 
// toma los argumentos del los procesos de consola
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=');


        
 