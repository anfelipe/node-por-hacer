const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = porHacer.create(argv.descripcion);
        break;
    case 'list':
        let lista = porHacer.getListado();

        console.log('===== Por Hacer ====='.green);
        for (const tarea of lista) {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("");
        }
        console.log('====================='.green);

        break;

    case 'update':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'delete':
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
}