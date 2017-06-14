var User = require('../models/user');
var bcrypt = require('bcrypt');

exports.create_user = (req, res) => {
  if(req.body.password === req.body.pdconfirm) {
    var genSalt = bcrypt.genSalt(10);
    var genHash = bcrypt.hash(req.body.password, genSalt);
    var newUser = new User({
      username: req.body.username,
      hash: genHash,
      salt: genSalt
    });
    newUser.save((error) => {
      if(error) {
        res.render('Signup', {'error': error.message});
      }
    });
  } else {
    res.render('Signup', {'error': 'Passwords are different! Please reenter them again.'});
  }
};