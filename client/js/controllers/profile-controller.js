app.controller('profileController', function($routeParams, sessionFactory, userFactory, $location){
 	var _this = this;
 	sessionFactory.getUser(function(currentUser){
		if(currentUser) {
			_this.currentUser = currentUser;
			console.log(_this.currentUser);
		} else {
			console.log('You must be signed in to access this page.')
			$location.path('/')
		}
	})

	userFactory.getUser($routeParams.id, function(user){
		_this.user = user;
	})


})