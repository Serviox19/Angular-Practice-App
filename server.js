var express = require('express');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

//mongoose connect
var db = 'mongodb://localhost/twitter';
mongoose.connect(db);

//define models


app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());




app.listen(PORT, function(req, res){
  console.log('App listening on PORT: ' + PORT);
});
