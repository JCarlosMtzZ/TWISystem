const UsersService = require ('../services/supervisors.js');

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const supervisors = await UsersService.getAllUsers();
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    getUser : async (req, res, next) => {
        try {
            const supervisor = await UsersService.getUser(req.params.user, req.params.password);
            res.status(200).json(supervisor)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    addUser : async (req, res, next) => {
        try {
            const supervisors = await UsersService.addUser(req.body);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    updateOperators : async (req, res, next) => {
        try {
            const supervisors = await UsersService.updateOperators(req.body);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    updateImprovements : async (req, res, next) => {
        try {
            const supervisors = await UsersService.updateImprovements(req.body);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    updateProgress : async (req, res, next) => {
        try {
            const supervisors = await UsersService.updateProgress(req.body);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    updateMedal : async (req, res, next) => {
        try {
            const supervisors = await UsersService.updateMedal(req.body);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    updatePts : async (req, res, next) => {
        try {
            const supervisors = await UsersService.updatePts(req.body);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    },

    deleteUser : async (req, res, next) => {
        try {
            const supervisors = await UsersService.deleteUser(req.params.id);
            res.status(200).json(supervisors)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los supervisores. Err: ${err}`});
        }
    }
};