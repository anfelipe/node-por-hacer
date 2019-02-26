const fs = require('fs');

let lstPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(lstPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se ha podido grabar', err);
        }
    });
}

const cargarDB = () => {
    try {
        lstPorHacer = require('../db/data.json');
    } catch (error) {
        lstPorHacer = [];
    }
}

const create = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    lstPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return lstPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = lstPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        lstPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let lstNew = lstPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (lstNew === lstPorHacer) {
        return false;
    } else {
        lstPorHacer = lstNew;
        guardarDB();
        return true;
    }
}

module.exports = {
    create,
    getListado,
    actualizar,
    borrar
}