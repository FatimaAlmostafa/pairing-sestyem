var HistoryRouter = require("express").Router();

var HistoryController = require('./HistoryController');

HistoryRouter.route('/retrive')
	.get(function(req,res){
	HistoryController.retrieve(req,res);
	})

HistoryRouter.route('/create')
	.post(function(req,res){
	HistoryController.create(req,res);
	})
module.exports = HistoryRouter;
