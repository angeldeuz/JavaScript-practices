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

// el async tranforma la funcion en una funcion que retorna una promesa
const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El salario del empleado: ${empleado} es de: ${salario}`;
    } catch (error) {
        // si mando un return es como decir que igual todo esta bien hay que usar el throw para especificar que regreso un error
        // llamariamos el reject de la promesa
        throw error;
    }
}

const id = 10;
getInfoUsuario( id )
    .then( msg => console.log(msg))
    .catch( err => console.log( err ) );
