var HistoryRouter = require("express").Router();

var HistoryController = require('./HistoryController');

HistoryRouter.route('/')

	.get(function(req,res){
	HistoryController.retrieve(req,res);
	})

HistoryRouter.route('/creatparing')
	.post(function(req,res){
	HistoryController.create(req,res);
	})
module.exports = HistoryRouter;
