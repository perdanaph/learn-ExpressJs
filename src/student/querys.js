const getStudets = 'SELECT * FROM students';

const getStudentById = 'SELECT * FROM students WHERE id = $1;';

const cekEmail = 'SELECT s FROM students s WHERE  s.email = $1';

const addStudent = 'INSERT INTO students (name, age, email, dateofbirth) VALUES ($1, $2, $3, $4)';

const deleteStudent = 'DELETE FROM students WHERE id=$1';

const updateStudent = 'UPDATE students SET name = $1, age = $2, email = $3, dateofbirth = $4 WHERE id = $5'; 

module.exports = {getStudets, getStudentById, cekEmail, addStudent, deleteStudent, updateStudent};