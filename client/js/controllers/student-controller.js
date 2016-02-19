app.controller('studentController', function(eventFactory, sessionFactory, $location){
 	var _this = this;
 	eventFactory.getEvents(function(events){
 		_this.events = events;
 		console.log(_this.events);
 	})
 	sessionFactory.getUser(function(currentUser){
		if(currentUser) {
			_this.currentUserData = currentUser;
			console.log(currentUser);
		} else {
			$location.path('/')
		}
	})

	_this.join = function(eventID){
		eventFactory.join(eventID, function(response){
			console.log(response);
		})
	}
})