var studentsRouter = require('express').Router();
var studentsController = require('./StudentsController');

studentsRouter.route('/create')
  .post(function (req, res) {
    studentsController.create(req, res);
  });

  studentsRouter.route('/find')
    .get(function (req, res) {
      studentsController.create(req, res);
    });


    studentsRouter.route('/edit')
      .post(function (req, res) {
        studentsController.create(req, res);
      })



      studentsRouter.route('/delete')
        .post(function (req, res) {
          studentsController.create(req, res);
        })




module.exports = studentsRouter;
