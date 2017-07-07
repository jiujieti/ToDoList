var User = require('../models/user');

exports.create_user = (req, res) => {
  
  if(req.body.password === req.body.pdconfirm) {
    
    if(req.body.password.length < 8) {
      res.render('signup', {'error': 'Password cannot be less than 8 characters.'});
    }
    
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    newUser.save((error) => {
      if(error) {
        res.render('signup', { 'error': error.message });
      } else {
        res.redirect('/login');
      }
    });
  
  } else {
    res.render('signup', { 'error': 'Passwords are different! Please enter them again.' });
  }
};

exports.validate_user = (req, res) => {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  User.findOne({ username: newUser.username }, 'username password', (error, user) => {
    if(error) {
      res.render('index', { 'error': error.message });
    } else if(!user) {
      res.render('index', { 'error': 'User not found. Try again.' });
    } else {
      user.comparePassword(newUser.password, (err, isMatch) => {
        if(err) {
          res.render('index', { 'error': err.message }); 
        } else if(!isMatch) {
          res.render('index', { 'error': 'Passwords do not match. Try again.' });
        } else {
          res.redirect('/login/' + newUser.username + '/todolist');
        }
      });
      
    }
  });
};