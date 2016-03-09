app.controller('eventAllController', function(sessionFactory, eventFactory, forumFactory, $location){
	var _this = this;
	eventFactory.getEvents(function(events){
		_this.events = events;
		console.log(_this.events);
	})
})