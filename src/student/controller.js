const pool = require('../../configDB');
const query = require('./querys');

exports.getStudets = (req, res) => {
  try {
    pool.query(query.getStudets, (err, results) => {
      if (!err) {
        res.status(200).json(results.rows);
      };
    });
  } catch (err) {
    res.json({message: 'error'}, err)
  };
};

exports.getStudentById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(query.getStudentById, [id], (err, results) => {
      if (!err){
        res.status(200).json(results.rows);
      };
    });
  } catch (error) {
    console.error(error);
  }
};