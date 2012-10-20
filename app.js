/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.post('/', function(req, res){
	// @todo prevent these from being duplicated
	var mongoose = require('mongoose');
	var db = mongoose.createConnection('localhost', 'notes');
	var schema = mongoose.Schema({ user: "string", comment: 'string' });
	var Note = db.model('Note', schema);
	// console.log("Saving " + req.body.note);
	Note.update({user:"napalm1"}, {$set: { comment: req.body.note }}, {upsert: true}, function (err, numberAffected, raw) {
	  // console.log(err);
	  // console.log('The number of updated documents was %d', numberAffected);
	  // console.log('The raw response from Mongo was ', raw);
	  res.end('success');
	  // mongoose.disconnect();
	});
	// mongoose.disconnect();
	// res.end('success');
});


app.listen(80);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
