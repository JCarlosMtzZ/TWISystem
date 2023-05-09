const UsersService = require ('../services/users.js');

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const users = await UsersService.getAllUsers();
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    },

    getUser : async (req, res, next) => {
        try {
            const user = await UsersService.getUser(req.params.user, req.params.password);
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }
    }
};