const pool = require('../../configDB');

exports.getStudets = (req, res) => {
  try {
    pool.query('SELECT * FROM students', (err, results) => {
      if (!err) {
        res.status(200).json(results.rows);
      };
    });
  } catch (err) {
    res.json({message: 'error'}, err)
  }
};