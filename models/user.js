var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var saltRounds = 10;

var UserSchema = Schema({
  username: { type: String, required: true, max: 30, unique: true },
  password: { type: String, required: true }
});

var User = mongoose.model('User', UserSchema);

// check username uniqueness
UserSchema.path('username').validate(function(value, next) {
  var user = this;
  User.count({ username: user.username }, function(error, results) {
    if(error) {
      next(error);
    } else if(results) {
      next(new Error('User already registered!'));
    } else {
      next();
    }
  });
});

// generate salt
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.genSalt(saltRounds, function(error, salt) {
    if(error) {
      next(error);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) {
        next(err);
      }
      user.password = hash;
      next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);