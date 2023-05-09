const UsersService = require ('../services/entregables.js');

module.exports = {
    getDocuments : async (req, res, next) => {
        try {
            const entregables = await UsersService.getDocuments(req.params.id, req.params.type);
            res.status(200).json(entregables)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los documentos. Err: ${err}`});
        }
    },

    getDocument : async (req, res, next) => {
        try {
            const entregable = await UsersService.getDocument(req.params.id, req.params.type, req.params.number);
            res.status(200).json(entregable)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los documentos. Err: ${err}`});
        }
    },

    gradeDocument : async (req, res, next) => {
        try {
            const grade = await UsersService.gradeDocument(req.body);
            res.status(200).json(grade)
        } catch (err) {
            res.status(500).json({"message": `Error al obtener los documentos. Err: ${err}`});
        }
    },

    addEntregables: async (req, res, next) => {
        try {
            const path = "/Documentos/" + req.file.filename;
            const item = req.body;
            const entrega = await UsersService.addEntregables(path, item);
            res.status(200).json({ entrega });
        } catch (err) {
            res.status(500).json({message: `Error al agregar entrega. Err: ${err}`});
        }
    },

    addAgain: async (req, res, next) => {
        try {
            const path = "/Documentos/" + req.file.filename;
            const item = req.body;
            const entrega = await UsersService.addAgain(path, item);
            res.status(200).json({ entrega });
        } catch (err) {
            res.status(500).json({message: `Error al agregar entrega. Err: ${err}`});
        }
    }
};