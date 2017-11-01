var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var saltRounds = 10;

var UserSchema = Schema({
  username: { type: String, required: true, max: 30, unique: true },
  password: { type: String, required: true }
});

var User;

/**
The validate function is a sync function, and the count function is a async one, which will return 
immediately. So the validate function will not return a correct boolean value. The reason why we 
could still see that the console outputs test, because the callback function is executed later.
UserSchema.path('username').validate(function(value, next) {
  var user = this;

  User.count({ username: user.username }, function(error, results) {
    if(error) {
      next(error);
    } else if(results) {
      console.log("test");
      next(new Error('User already registered!'));
    } else {
      next();
    }
  });
});*/

/** check username uniqueness */
// UserSchema.pre('save', function(next) {
//   var user = this;
//   User.count({ username: user.username }, function(error, results) {
//     if(error) {
//       next(error);
//     } else if(results) {
//       next(new Error('User already registered! Try another one.'));
//     } else {
//       next();
//     }
//   });
// });
UserSchema.pre('save', function(next) {
  var user = this;
  User.count({ username: user.username }).exec()
    .then(function(results) {
    if(results) {
      next(new Error('User already registered! Try another one.'));
    } else {
      next();
    }
  }).catch(function(error) {
    next(error);
  });
});

/** generate salt */
// UserSchema.pre('save', function(next) {
//   var user = this;
//   bcrypt.genSalt(saltRounds, function(error, salt) {
//     if(error) next(error);
  
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if(err) next(err);
    
//       user.password = hash;
//       next();
//     });
//   });
// });

UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.genSalt(saltRounds).then(function(salt) {
    return bcrypt.hash(user.password, salt);
  }).catch(function(error) {
    next(error);
  }).then(function(hash) {
    user.password = hash;
    next();
  }).catch(function(error) {
    next(error);
  });
});

/** add instance (document) methods to compare passwords */
// UserSchema.methods.comparePassword = function(candidate, cback) {
//   bcrypt.compare(candidate, this.password, function(err, isMatch) {
//     if(err) return cback(err);

//     cback(null, isMatch);

//   });
// };
UserSchema.methods.comparePassword = function(candidate, cback) {
  bcrypt.compare(candidate, this.password).then(function(isMatch) {
    cback(null, isMatch);
  }).catch(function(error) {
    return cback(error);
  });
}

/** the reason why this can not be moved to line 12 is because the model needs to be created after the schema
is ready. But pre-save hook needs the model to execute the query. Actually when the pre-hook is triggered, 
the model has already been encapsulated below */
User = mongoose.model('User', UserSchema);
module.exports = User;