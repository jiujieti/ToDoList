var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('signup');
});

/* validate registry */
router.post('/verification', (req, res) => {
  res.redirect('/login');
});

module.exports = router;