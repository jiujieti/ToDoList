var express = require('express');
var router = express.Router();

/** to do, move these to a new route file, use RESTful api */
router.get('/*/todolist', (req, res) => {
  res.render('todolist');
});

router.post('/*/todolist', (req, res) => {
  res.render('todolist');
})

module.exports = router;