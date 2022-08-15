const pool = require('../../configDB');
const query = require('./querys');

exports.getStudets = (req, res) => {
  try {
    pool.query(query.getStudets, (err, results) => {
      if (err) throw err;
      res.status(200).json(results.rows);
    });
  } catch (err) {
    res.json({message: 'error'}, err)
  }
};

exports.getStudentById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(query.getStudentById, [id], (err, results) => {
      if (err) throw err
      res.status(200).json(results.rows);
    });
  } catch (err) {
    res.json({message: 'error', err});
  }
};

exports.addStudent = (req, res) => {
  try {
    const {name, age, email, dateofbirth} = req.body;
    // validation cek email is exist
    pool.query(query.cekEmail, [email], (err, results) => {
      if (results.rows.length) {
        res.json({message: 'email is already exist'});
      }

      pool.query(query.addStudent, [name, age, email, dateofbirth], (err, results) => {
        if (err) throw err
        res.status(201).json({message: 'Success add new student in database'});
      });
    });
  } catch (err) {
    res.json({message: 'error', err});
  }
};