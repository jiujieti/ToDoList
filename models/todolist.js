var mongoose = require('mongoose');

var Schema = moogoose.Schema;

var ToDoListSchema = Schema({
  username: {type: Schema.ObjectId, ref: 'User', required: true},
  item: [{type: String}]
});

module.exports = mongoose.model('ToDoList', ToDoListSchema);
