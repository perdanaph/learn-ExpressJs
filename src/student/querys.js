const getStudets = 'SELECT * FROM students';

const getStudentById = 'SELECT * FROM students WHERE id = $1;'

module.exports = {getStudets, getStudentById};