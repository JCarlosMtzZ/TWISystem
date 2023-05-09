const dbService = require('../config/db.js');

const getAllUsers = () => {

    sql = `SELECT (@row_number := @row_number + 1) AS position, id, nombre, apellido, planta, (p_ji + p_jm + p_jr) as total_pts FROM persona INNER JOIN supervisor on persona.id = supervisor.id_s, (SELECT @row_number := 0) AS temp
    ORDER BY total_pts DESC`

    return dbService.querypromise(sql);

};

module.exports = {
    getAllUsers
}