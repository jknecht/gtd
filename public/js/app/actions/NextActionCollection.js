define(['backbone', './NextActionModel'], function(Backbone, NextActionModel) {
	return Backbone.Collection.extend({
		model: NextActionModel,
		url: '/api/action'
	});	
});
