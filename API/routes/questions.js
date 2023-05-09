const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/questions.js');

router.post('/add', UsersControllers.addQuestion);

module.exports = router;