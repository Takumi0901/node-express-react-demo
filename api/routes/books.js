var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var data = [];
  pool.query('select * from books', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  pool.query('select * from books where id = ?', id, function(err, rows, fields) {
    res.json(rows);
  });
});

module.exports = router;