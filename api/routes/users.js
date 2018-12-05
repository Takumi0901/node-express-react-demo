var express = require('express')
var models = require("../models");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.all().then(users => {
    res.send(users);
  });
});

router.post('/create', function(req, res, next) {
  models.User.create({
    name: req.body.name
  }).then((createdUser) => {
    console.log('hogehoge');
  });
});

module.exports = router;
