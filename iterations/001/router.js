/*
	the routers for trading application
*/

var express = require('express');
var router = express.Router();
var fs = require('fs');

var posts = JSON.parse(fs.readFileSync('database.json','utf8'));

router.get('/', function(req, res){
	res.render('index', {
		title:'Application',
		items:posts
	});
});

router.post('/add', function(req, res){
	var entry = req.body.entry;
	var description = req.body.desc;
	// this is an inefficient way to get length
	posts[Object.keys(posts).length+1] = [entry, description];
	fs.writeFile('database.json', JSON.stringify(posts), (err) => {
		if(err) throw err;
	});
	res.redirect('/');
});

module.exports = router;

