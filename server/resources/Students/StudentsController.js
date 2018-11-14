var Students = require('./Students');

exports.create = function (req, res) {
console.log('student create controller')
console.log('req.body ',req.body);
var student = new Students ({
  studentname:req.body.studentname,
  level:req.body.level
  })
student.save (function (err, data) {
    if (err){
      console.log ("errr in creat student",err)
    }
    res.send (data);
  })

}
  /////////////////////////////////////////
  exports.find = function (req, res) {
    Students.find({}, function (err, data){
      if (err){
        console.log("err in show all student");
      }
      res.send(data);
    })
  };

//////// / ///////////////////////////////////////////////

exports.edit = function (req, res) {
  console.log('edit controller ',req.body);
  var id = req.body.id;
  var newLevel= req.body.level;
  Students.findById(id, function (err, std) {
    if (err) console.log(err)
    std.level = newLevel;
    std.save(function (err, std) {
      if (err) console.log(err)
      console.log(std)
      // res.send(student);
    });
  });
  // var id = req.body.id;

  // db.StudentSchema.findOneAndUpdate({_id:id}, {$set: {studentLevel}},
  //   function (err, data){
  //     if (err){
  //       console.log("err in update data");
  //     }
  //     res.send(data);
  //   }
  // )

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
////////////////////////////////////////////////////////////////
