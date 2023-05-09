const dbService = require('../config/db.js');

const getAllUsers = () => {

    sql = `SELECT * FROM persona
    WHERE id like "A%"
    ORDER BY
    id`

    return dbService.querypromise(sql);

};

const getUser = (user, password) => {

    sql = `SELECT * FROM persona
    WHERE email = '${user}' AND contrasenia = '${password}'`

    return dbService.querypromise(sql);
};

module.exports = {
    getAllUsers,
    getUser
}