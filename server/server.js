var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/../react-client/dist'));


var studentsRouter = require('./resources/Students/StudentsRouter');

app.use('/students',studentsRouter);
app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, '../react-client/dist', 'index.html'));
})
module.exports = app;
