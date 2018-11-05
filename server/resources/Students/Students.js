var mongoose =require('mongoose');


var StudentsSchema = mongoose.Schema({
  studentname : {
    type: String,
    index: {unique:true},
    required:true,
  },
  level : {
    type: Number,
    required : true
  },
  pairs:[{type: mongoose.Schema.Types.ObjectId, ref: 'Students'}]
})

	


var Students = mongoose.model('Students',StudentsSchema);

module.exports = Students;