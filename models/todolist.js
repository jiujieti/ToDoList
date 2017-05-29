var mongoose = require('mongoose');

var Schema = moogoose.Schema;

var ToDoListSchema = Schema(
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  item: [{type: String}]
);

// export model
module.exports = mongoose.model('ToDoList', ToDoListSchema);
