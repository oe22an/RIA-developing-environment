(function($){
	var appname = 'Storyteller',
	Singleton = {
		init: function(){
			$("h1").text("App initialized!");
		},
		data: {
			somedata: 'foobar'
		}
	};
	
	window[appname] = Singleton;  // expose the singleton
	Singleton.init();             // initiate application
})(jQuery);

var Story = Class.extend({
	
	init: function(){
		var storyName;
		var storyPartArray;
	},
	
	showStory: function() {},
	showLastPart: function() {},
	addStoryPart: function() {}
});

var StoryPart = Class.extend({
	
	init: function(){
		var storyPartId;
		var userId;
		var storyLine;
	}
});

var User = Class.extend({
	
	init: function(){
		var userId;
		var firstName;
		var lastName;
		var email;
	}
});