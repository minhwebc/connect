app.controller('profileController', function(sessionFactory, $location){
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
})