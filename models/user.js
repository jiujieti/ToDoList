var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  username: { type: String, required: true, max: 30, unique: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);