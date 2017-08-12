var express = require('express');
var router = express.Router();

/** to do, move these to a new route file, use RESTful api */
router.get('/:username', (req, res) => {
  res.render('todolist');
});

router.post('/:username', (req, res) => {
  res.render('todolist');
})

module.exports = router;