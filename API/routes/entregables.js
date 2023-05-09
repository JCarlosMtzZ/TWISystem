const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/entregables.js');
const { uploadMiddleware } = require('../middleware/upload.js');

router.get('/:id/:type', UsersControllers.getDocuments);
router.get('/:id/:type/:number', UsersControllers.getDocument);
router.put('/grade', UsersControllers.gradeDocument);
router.post('/add', uploadMiddleware.single("file"), UsersControllers.addEntregables);
router.post('/addAgain', uploadMiddleware.single("file"), UsersControllers.addAgain);

module.exports = router;