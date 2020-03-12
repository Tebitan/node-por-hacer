const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la Tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear  un elemneto por hacer ', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea ', { descripcion, completado })
    .command('eliminar', 'Eliminar de una tarea ', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
};