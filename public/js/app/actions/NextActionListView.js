define(['backbone', './NextActionView'], 
	function(Backbone, NextActionView) {
	return Backbone.View.extend({
		render: function() {
			var that = this;
			this.model.each(function(nextAction) {
				var nextActionView = new NextActionView({model: nextAction});
				nextActionView.render();
				that.$el.append(nextActionView.el);
			})
		}
	});	
});
