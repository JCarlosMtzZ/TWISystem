const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/admins.js');

router.get('/', UsersControllers.getAllUsers);
router.get('/:user/:password', UsersControllers.getUser);

module.exports = router;