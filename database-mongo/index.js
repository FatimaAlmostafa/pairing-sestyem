var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var  ObjectId = Schema.Types.ObjectId

var studentSchema = mongoose.Schema({
  name: String,
  level: Number,
  pairs: ObjectId

});

var HistorySchema = mongoose.Schema({
  student1: Array,
  student2: Array
});

var students = mongoose.model('students', studentSchema);
var history = mongoose.model('history', HistorySchema);

module.exports.student = student;
module.exports.history = history;
