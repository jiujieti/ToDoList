var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  username: {type: String, required: true, max: 30},
  password: {type: String, required: true, max: 30, min: 8}
});

module.exports = mongoose.model('User', UserSchema);
