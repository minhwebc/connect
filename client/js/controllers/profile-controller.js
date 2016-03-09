app.controller('profileController', function($routeParams, sessionFactory, forumFactory, eventFactory, userFactory, $location){
 	var _this = this;
 	sessionFactory.getUser(function(currentUser){
		if(currentUser) {
			_this.currentUser = currentUser;
			forumFactory.getPostsByUser(_this.currentUser.id, function(posts){
				_this.posts = posts;
				console.log(_this.posts);
			})
			console.log(_this.currentUser);
		} else {
			console.log('You must be signed in to access this page.')
			$location.path('/')
		}
	})

	eventFactory.getEvents(function(events){
 		_this.events = events;
 		console.log(_this.events);
 	})


})