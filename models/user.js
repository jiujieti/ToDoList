var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  user_name: {type: String, required: true, max: 30},
  password: {type: String, required: true, max: 30, min: 8}
});

// export model
module.exports = mongoose.model('User', UserSchema);
