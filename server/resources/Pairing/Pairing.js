var mongoose =require('mongoose');


var PairngsSchema = mongoose.Schema({
  student1 : {
    type: String,
    required:true,
  },
  student2: {
    type: String,
    required:true,
  },
  pairs:[{type: mongoose.Schema.Types.ObjectId, ref: 'Students'}]
})




var Students = mongoose.model('Students',StudentsSchema);

module.exports = Students;
