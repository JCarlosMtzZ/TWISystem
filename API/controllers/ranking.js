const UsersService = require ('../services/ranking.js');

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const supervisors = await UsersService.getAllUsers();
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    }
};
