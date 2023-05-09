const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/supervisors.js');

router.get('/', UsersControllers.getAllUsers);
router.get('/:user/:password', UsersControllers.getUser);
router.post('/add', UsersControllers.addUser);
router.put('/update_operators/:user', UsersControllers.updateOperators);
router.put('/update_improvements/:user', UsersControllers.updateImprovements);
router.put('/update_progress/:user', UsersControllers.updateProgress);
router.put('/update_medal/:user', UsersControllers.updateMedal);
router.put('/updatePts/:id_s', UsersControllers.updatePts);
router.delete('/delete/:id', UsersControllers.deleteUser);

module.exports = router;