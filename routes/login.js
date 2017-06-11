var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

/* user login, redirect to a user's to do list page */
router.post('/todolist', (req, res) => {
  // add user auth (to be deleted)
//  if(req.body.username === user.name && req.body.password === user.password) {
    res.render('todolist', { title: 'Your To Do List - 您未竟的事业' });
 // }
});

module.exports = router;