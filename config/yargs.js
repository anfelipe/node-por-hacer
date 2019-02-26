const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('create', 'Crear un elemento', {
        descripcion
    })
    .command('update', 'Actualizar un elemento', {
        descripcion,
        completado
    })
    .command('delete', 'Elimina un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}