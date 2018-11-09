var Students = require('./Students');

exports.create = function (req, res) {
  var studentname = req.body.studentname;
 var studentlevel = req.body.studentlevel;


var student = new db.StudentSchema ({
    studentname,
    studentlevel
  })
student.save (function (err, date) {
    if (err){
      console.log ("errr in creat student")
    }
    res.send ("created student sucssfully");
  })

}
  /////////////////////////////////////////
  exports.find = function (req, res) {
    db.StudentSchema.find({}, function (err, data){
      if (err){
        console.log("err in show all student");
      }
      res.send(data);
    })
  };

//////// / ///////////////////////////////////////////////

exports.edit = function (req, res) {
  var id = req.body._id;
  var editStudentlevel = req.body.studentlevel;
  db.StudentSchema.findOneAndUpdate({_id:id}, {$set: {studentLevel}},
    function (req, res){
      if (err){
        console.log("err in update data");
      }
      res.send(data);
    }
  )

}
//////////////////////////////////////////////////////////////////
exports.delete = function (req,res){
  var id = req.body._id;
  db.studentSchema.findOneAndRemove({_id: id}, function (err,data) {
    if (err){
      console.log("err in deleting Student");
    }
    res.send("deleting student sucssfully");
  })
};
/////////////////////////////////////////////////////////////////
