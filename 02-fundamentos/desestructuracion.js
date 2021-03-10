

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe( { nombre, apellido, poder, edad = 0 } ) {
    nombre = 'fernando';
     console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

// destructuracion
// const { nombre, apellido, poder, edad = 0 } = deadpool;
// console.log(nombre, apellido, poder, edad);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// destructuracion de arreglos
const [ , h2 , ] = heroes;


console.log(h2);

