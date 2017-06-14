var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  username: { type: String, required: true, max: 30, unique: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true }
});

// check username uniqueness
UserSchema.pre('save', (next) => {
  var user = this;
  user.findOne({ username:  user.username }, 'username', (error, results) => {});
    if(error) {
      next(error);
    } else if(results) {
      next(new Error("User already registered!"));
    } else {
      next();
    }
});

module.exports = mongoose.model('User', UserSchema);