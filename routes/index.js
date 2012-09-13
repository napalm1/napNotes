
/*
 * GET home page.
 */

exports.index = function(req, res){
	var mongoose = require('mongoose');
	var db = mongoose.createConnection('localhost', 'notes');
	var schema = mongoose.Schema({ user: "string", comment: 'string' });
	var Note = db.model('Note', schema);
	Note.findOne({ user: 'napalm1' }, 'comment', function (err, doc) {
	  // if (err) return handleError(err);
	  // console.log(err);
	  // console.log(doc);
	  res.render('index', { title: 'napNotes', comment: doc.comment })
	});
	mongoose.disconnect();
};