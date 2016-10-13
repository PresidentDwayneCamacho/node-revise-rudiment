/*
	Rudimentary server for trading application
*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'node_modules')));
app.use(bodyParser());
app.use(require('./router'));

// determines if logging is skipped
logger('combined',{
	skip: function(req, res){
		return res.statusCode < 400;
	}
});

var port = 8080;
app.listen(port, function(){
	console.log('ready on port ' + port);
});

