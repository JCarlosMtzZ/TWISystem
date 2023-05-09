const dbService = require('../config/db.js');

const getDocuments = (id, type) => {

    sql = `SELECT * FROM deliverable
    WHERE id_s = '${id}' AND tipo = '${type}'`

    return dbService.querypromise(sql);

};

const getDocument = (id, type, number) => {

    sql = `SELECT * FROM deliverable
    WHERE id_s = '${id}' AND tipo = '${type}' AND no_entregable = ${number}`

    return dbService.querypromise(sql);

};

const gradeDocument = (body) => {

    const {id_entregable, grade, id_a} = body;

    sql = `UPDATE deliverable
           SET calificacion = ${grade},
           id_a='${id_a}',
           fecha_revision=now()
            WHERE id_entregable = ${id_entregable}`

    return dbService.querypromise(sql);
};

const addEntregables = (path, body) => {

    const {id, tipo, numero} = body;

    sql = `INSERT INTO deliverable(fecha_subida, enlace, tipo, no_entregable, id_s) VALUES(now(), '${path}', '${tipo}', ${numero}, '${id}')`

    return dbService.querypromise(sql);
};

const addAgain = (path, body) => {

    const {id, tipo, numero} = body;

    sql = `UPDATE deliverable
        SET fecha_subida = now(),
        enlace = '${path}'
        WHERE tipo = '${tipo}' AND no_entregable = ${numero} AND id_s = '${id}'`

    return dbService.querypromise(sql);
};

module.exports = {
    getDocuments,
    getDocument,
    gradeDocument,
    addEntregables,
    addAgain
}