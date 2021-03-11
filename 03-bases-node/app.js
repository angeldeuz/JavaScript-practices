// en la documentacion de node vienen como importar los require y ejemplos de como utilizarlo
const fs =  require('fs');

const base = 8;
console.clear();
console.log('=====================')
console.log(`     Tabla del ${base}     `)
console.log('=====================')


let salida = '';
for (let i = 1; i <= 10; i++ ) {
        salida += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(salida);


// escritura de un archivo
fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla-${base}.txt creado`);
} )


