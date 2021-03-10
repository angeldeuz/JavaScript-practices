const empleados = [
    {
        id: 1,
        nombre: 'Angel'
    },
    {
        id: 2,
        nombre: 'Nubia'
    },
    {
        id: 3,
        nombre: 'Israel'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
    
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;

        ( empleado ) 
            ?resolve( empleado )
            :reject( `No existe empleado con id ${id}`);
    });
}

const getSalario = ( id ) => {
    
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( e => e.id === id)?.salario;

        ( salario )
            ?resolve( salario )
            :reject( `El Empleado ${id} no cuenta con salario asignado`);
    });
}
const id = 3;

// getEmpleado(id)
//     .then( empleado => console.log( empleado ) )
//     .catch( err => console.log(err) );

// getSalario(id)
//     .then( salario => console.log( salario ))
//     .catch( err => console.log( err ) );

// Promesas en cadena el uso correcto
let nombre;

getEmpleado( id )
    .then( empleado => {
        nombre = empleado;
        // el return es importante para encadenar el segundo then de la promesa
        return getSalario( id )
    })
    .then( salario => console.log('El Empleado:', nombre, 'tiene un salario de:', salario))
    .catch( err => console.log( err ) );


// esto vuelve a ser otro callback hell
// getEmpleado(id)
//     .then( empleado => {

//         getSalario( id )
//             .then( salario => {

//                 console.log('El Empleado:', empleado, 'tiene un salario de:', salario);

//             })
//             .catch( err => console.log(err));
//     })
//     .catch( err => console.log(err));
