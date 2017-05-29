var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  user_name: {type: String, required: true, max: 100},
  date_of_registry: {type: Date}
});

// virtual or user's url
UserSchema
.virtual('url')
.get(() => {
  return '/user/' + this._id;
});

// export model
module.exports = mongoose.model('User', UserSchema);
