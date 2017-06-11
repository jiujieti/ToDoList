var express = require('express');
var router = express.Router();

var User = require('../controllers/userController');

router.get('/', (req, res) => {
  res.render('signup');
});

/* validate registry */
router.post('/verification', User.create_user); 

module.exports = router;
