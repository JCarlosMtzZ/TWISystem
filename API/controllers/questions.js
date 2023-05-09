const UsersService = require ('../services/questions.js');

module.exports = {

    addQuestion : async (req, res, next) => {
        try {
            const question = await UsersService.addQuestion(req.body);
            res.status(200).json(question)
        } catch (err) {
            res.status(500).json({"message": `Error al subir pregunta. Err: ${err}`});
        }
    }

};