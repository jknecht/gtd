//index.js
require([
	'jquery',
	'app/actions/NextActionCollection',
	'app/actions/NextActionListView'
], function($, NextActionCollection, NextActionListView) {
	var nextActions = new NextActionCollection();
	var dfr = nextActions.fetch();
	dfr.done(function() {
		var listView = new NextActionListView({
			model: nextActions
		});
		listView.render();
		$('#next-action-list').html(listView.el);
	});
	dfr.fail(function(err) {
		alert('fail');
	})
});
