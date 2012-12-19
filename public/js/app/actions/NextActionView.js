define(['backbone', 'handlebars', 'text!./nextActionView.html'], 
	function(Backbone, Handlebars, template) {
	return Backbone.View.extend({
		render: function() {
			console.log(this.model);
			var html = Handlebars.compile(template)(this.model.attributes);
			this.$el.html(html);
		}
	});	
});
