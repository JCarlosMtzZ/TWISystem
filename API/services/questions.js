const dbService = require('../config/db.js');

const addQuestion = (body) => {

    const {quiz, tipo, pregunta, correcta, incorrecta1, incorrecta2, incorrecta3} = body;

    sql = `INSERT INTO question (texto, o_1, o_2, o_3, respuesta, quiz, tipo) VALUES('${pregunta}', '${incorrecta1}', '${incorrecta2}', '${incorrecta3}', '${correcta}', ${quiz}, '${tipo}')`

    return dbService.querypromise(sql);

};

module.exports = {
    addQuestion
}