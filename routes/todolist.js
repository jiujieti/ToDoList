var express = require('express');
var router = express.Router();

/** to do, move these to a new route file, use RESTful api */
router.get('/:username', (req, res) => {
  if(req.params.username === req.session.key) {
    res.render('todolist');
  } else {
    res.redirect('../login');
  }
});

router.post('/:username', (req, res) => {
  // res.render('todolist');
})

module.exports = router;