const express = require('express');
const router = express.Router();

router.use('/users', require('./users.js'));
router.use('/admins', require('./admins.js'));
router.use('/supervisors', require('./supervisors.js'));
router.use('/ranking', require('./ranking.js'));
router.use('/questions', require('./questions.js'));
router.use('/entregables', require('./entregables.js'));

module.exports = router;