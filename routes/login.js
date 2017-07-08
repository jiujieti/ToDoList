var express = require('express');
var router = express.Router();

var User = require('../controllers/userController');

/** GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

/** user login, redirect to a user's to do list page */
router.post('/validation', User.validate_user);

router.get('/*/todolist', (req, res) => {
  res.render('todolist');
});

router.post('/*/todolist', (req, res) => {
  res.send('WIP');
})

module.exports = router;