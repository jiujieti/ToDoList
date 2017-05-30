var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'To Do List - 未竟的事业' });
});

/* POST user, redirect to a user's to do list page */
router.post('/todolist', (req, res) => {
  res.render('todolist', { title: 'Your To Do List - 您未竟的事业' });
});

module.exports = router;
