var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var nextActionSchema = new Schema({
	username: String,
	title: String,
	contexts: [],
	status: String		// not_started, in_progress, waiting, done
});

module.exports = mongoose.model('NextAction', nextActionSchema);
