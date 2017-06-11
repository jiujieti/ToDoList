var User = require('../models/user');

exports.create_user = (req, res) => {
  if(req.body.password == req.body.pdconfirm) {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    newUser.save((error) => {
      if(error) { throw error; }
      res.redirect('/login');
    });
  } else {
    res.redirect('/signup');
  }
};
