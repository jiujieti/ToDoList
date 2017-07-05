// set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://username:password@ds155811.mlab.com:55811/user_todolists';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var UserSchema = Schema({
  username: { type: String, required: true, max: 30, unique: true },
  password: { type: String, required: true }
});

var User = mongoose.model('User', UserSchema);

UserSchema.pre('save', function(next) {
  var user = this;
  user.password = user.password + "hello";
  console.log("why????");
  next();
});

var newUser = new User({
    username: "jiujieti",
    password: "12345678"
});
  
newUser.save((error) => {
  if(error) {
    console.log("Hi");
    return;
  }
  console.log("yes!");
});
