var NextAction = require('../models/NextAction');

module.exports.setup = function(app) {
	app.get('/api/action', function(req, res) {
		if (!req.isAuthenticated()) {
			res.send(403);
		} else {
			NextAction.find({username: req.user.username}, function(err, actions) {
				res.send(actions);
			})
		}
	});

	app.post('/api/action', function(req, res) {
		if (!req.isAuthenticated()) {
			res.send(403);
		} else {
			var action = new NextAction({
				title: req.body.title,
				contexts: req.body.contexts.split(),
				username: req.user.username
			});
			action.save(function(err, action) {
				res.send(action);
			});
		}
	});
};
