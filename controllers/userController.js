var User = require('../models/user');

exports.create_user = (req, res) => {
  
  if(req.body.password === req.body.pdconfirm) {
    
    if(req.body.password.length < 8) {
      res.render('Signup', {'error': 'Password cannot be less than 8 characters.'});
    }
    
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    debugger;
  
    newUser.save((error) => {
      if(error) {
        res.render('Signup', {'error': error});
        return;
      }
        res.redirect('/login');
    });
  
  } else {
    res.render('Signup', {'error': 'Passwords are different! Please enter them again.'});
  }
};