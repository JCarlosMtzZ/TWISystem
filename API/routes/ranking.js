const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/ranking.js');

router.get('/', UsersControllers.getAllUsers);

module.exports = router;