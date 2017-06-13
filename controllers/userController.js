var User = require('../models/user');

exports.create_user = (req, res) => {
  var newUser = new User({
      username: req.body.username,
      hash: req.body.password,
      salt: req.body.pdconfirm
  });
  if(req.body.password == req.body.pdconfirm) {
    newUser.save((error) => {
      if(error) { throw error; }
      res.redirect('/login');
    });
  } else {
    res.redirect('/signup');
  }
};
