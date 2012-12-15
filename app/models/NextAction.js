var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var nextActionSchema = new Schema({
	username: String,
	title: String,
	context: String
});

module.exports = mongoose.model('NextAction', nextActionSchema);
