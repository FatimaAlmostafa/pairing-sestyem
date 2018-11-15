var studentsRouter = require('express').Router();
var studentsController = require('./StudentsController');

studentsRouter.route('/create')
  .post(function (req, res) {
    studentsController.create(req, res);
  });

  studentsRouter.route('/find')
    .get(function (req, res) {
      studentsController.find(req, res);
    });


  studentsRouter.route('/edit')
    .put(function (req, res) {
      studentsController.edit(req, res);
    })



  // studentsRouter.route('/delete')
  //   .delete(function (req, res) {
  //     studentsController.create(req, res);
  //   })




module.exports = studentsRouter;
