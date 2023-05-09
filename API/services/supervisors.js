const dbService = require('../config/db.js');

const getAllUsers = () => {

    sql = `SELECT *, (p_ji + p_jm + p_jr) as total_pts FROM persona INNER JOIN supervisor on persona.id = supervisor.id_s
    ORDER BY
    apellido`

    return dbService.querypromise(sql);

};

const getUser = (user, password) => {

    sql = `SELECT *, (p_ji + p_jm + p_jr) as total_pts FROM persona INNER JOIN supervisor on persona.id = supervisor.id_s
    WHERE email = '${user}' AND contrasenia = '${password}'`

    return dbService.querypromise(sql);

};

const deleteUser = (id) => {

    sql = `DELETE FROM persona WHERE id = '${id}'`

    return dbService.querypromise(sql);

};

const addUser = (body) => {

    const {id_, nombre, apellido, planta, email, contrasenia} = body;

    sql = `INSERT INTO persona(id, nombre, apellido, planta, email, contrasenia) VALUES('${id_}', '${nombre}', '${apellido}', '${planta}', '${email}', '${contrasenia}')`

    return dbService.querypromise(sql);

};

const updateOperators = (body) => {

    const {id_, operarios_, totalOperarios_} = body;

    sql = `UPDATE supervisor
           SET operarios_c = ${operarios_},
               total_operarios = ${totalOperarios_}
            WHERE id_s = '${id_}'`

    return dbService.querypromise(sql);
};

const updateImprovements = (body) => {

    const {id_, mejoras_} = body;

    sql = `UPDATE supervisor
           SET mejoras_i = ${mejoras_}
            WHERE id_s = '${id_}'`

    return dbService.querypromise(sql);
};

const updateProgress = (body) => {

    const {id_, minsParo_, minsParoDespues_, envases_, envasesDespues_, minsCambio_, minsCambioDespues_} = body;

    sql = `UPDATE supervisor
           SET minutos_de_paro = ${minsParo_},
               envases_desechados = ${envases_},
               minutos_por_cambio = ${minsCambio_},
               minutos_de_paro_despues = ${minsParoDespues_},
               envases_desechados_despues = ${envasesDespues_},
               minutos_por_cambio_despues = ${minsCambioDespues_}
            WHERE id_s = '${id_}'`

    return dbService.querypromise(sql);
};

const updateMedal = (body) => {

    const {id, medalString} = body;

    sql = `UPDATE supervisor
           SET medalla = '${medalString}'
            WHERE id_s = '${id}'`

    return dbService.querypromise(sql);
};

const updatePts = (body) => {

    const {id_s, tipo, pts, balance} = body;

    sql = `UPDATE supervisor
           SET ${tipo} = ${tipo} + ${pts},
           balance = balance + ${balance}
            WHERE id_s = '${id_s}'`

    return dbService.querypromise(sql);
};

module.exports = {
    getAllUsers,
    addUser,
    updateOperators,
    updateImprovements,
    updateProgress,
    updateMedal,
    updatePts,
    getUser,
    deleteUser
}