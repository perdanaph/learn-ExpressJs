const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudets);

router.post('/', controller.addStudent);

router.get('/:id', controller.getStudentById);
// route untuk get data berdasarkan id

router.put('/:id', controller.updateStudentById);

router.delete('/:id', controller.deleteStudentById);


module.exports = router;