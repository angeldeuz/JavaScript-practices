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



const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id);

    if (empleado) {
        // el primer argumento deposita el error del callback, si esta correcto hay que dejarlo en null para no retornarlo
        callback( null, empleado);
    }else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = ( id, callback ) => {
    // ? = null checkOperator
    // Si existe informacion del codigo antes del signo ejecuta lo que este despues
    const salario = salarios.find( e => e.id === id)?.salario;

    if (salario) {
        callback( null, salario );
    }else {
        callback(`Salario del empleado con id ${ id } no Existe`);
    }
}

const id = 3;

getEmpleado( id, ( err, empleado ) => {

    if ( err ) {
        console.log('Error!');
        return console.log(err);
    }

    // cuando el id no cuenta con salario entra en el error y ya no muestra informacion,
    // la solucion seria meter otro callback dentro para solo mostrar el empleado si el salario
    // pero esto generaria un callback-heal hacinedo mas ilegible el codigo
    getSalario( id, ( err, salario) => {
        if ( err ) {
            return console.log(err);
        }

        // para revalidar si no esta y solo mostrar el empleado
        // getSalario( id, ( err, salario) => {
        //     if ( err ) {
        //         return console.log(err);
        //     }

        //      console.log( 'El empleado:', empleado.nombre, 'tiene un salario de:', salario );
        //  });

         console.log( 'El empleado:', empleado.nombre, 'tiene un salario de:', salario );
     });
});





