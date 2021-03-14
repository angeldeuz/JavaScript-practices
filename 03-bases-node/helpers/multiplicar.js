const fs =  require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listado = false, hasta = 10) => {

    try {
        let salida = '';
        let  consola = '';
        for (let i = 1; i <= hasta; i++ ) {
                salida  += `${ base } x ${ i } = ${ base * i }\n`;
                consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if ( listado ) {
            console.log('====================='.green);
            console.log('     Tabla del:'.green, colors.red(base));
            console.log('====================='.green);

            console.log(consola);
        }
        
        // escritura de un archivo
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    // crearArchivo: crearArchivo si tiene el mismo nombre se redondea 
    crearArchivo
}

