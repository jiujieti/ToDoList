var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List - 未竟的事业' });
});

module.exports = router;
