var User = require('../models/user');

var async = require('async');

exports.create_user = (req, res) => {
  async.parallel({
    check_username: (callback) => {
      User.find({ username: req.body.username });
    },
    validate_password: (callback) => {
      // password validation
      // password consistency check
    }
  }, (err, result) => {
    if(err) { throw err; }
    // create user in db
    res.render('/login');
  });
};
