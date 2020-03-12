const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
const sCrear = "CREAR";
const sListar = "LISTAR";
const sActualizar = "ACTUALIZAR";
const sEliminar = "ELIMINAR";


let comando = argv._[0];


switch (comando.toUpperCase()) {
    case sCrear:
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case sListar:
        let tareas = porHacer.getListado();

        for (const tarea of tareas) {
            console.log('==========POR HACER============='.green);
            console.log(`${tarea.descripcion}`);
            console.log(`Estado : ${tarea.completado}`);
            console.log('================================'.green);
        }
        break;

    case sActualizar:
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case sEliminar:
        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no es reconocido ');
}