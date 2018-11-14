var mongoose =require('mongoose');


var HistorySchema = mongoose.Schema({
  table   : [{student1: String , student2: String}]
});




var History = mongoose.model('History',hisSchema);

module.exports = History;
