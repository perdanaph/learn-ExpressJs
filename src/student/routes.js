const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudets);

router.get('/:id', controller.getStudentById);
// route untuk get data berdasarkan id

module.exports = router;