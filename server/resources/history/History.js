var mongoose =require('mongoose');


var HistorySchema = mongoose.Schema({
  pairs :{type:[String]}
});




var History = mongoose.model('History',HistorySchema);

module.exports = History;
