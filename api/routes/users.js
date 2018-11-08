var express = require('express');
var router = express.Router();

var userList = [
  {
    id: "1",
    name: "icchy",
    age: "24",
    hobby: "hogehoge"
  },{
    id: "2",
    name: "icchy-san",
    age: "24",
    hobby: "hip hop"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userList);
});

module.exports = router;
